import { NextRequest, NextResponse } from 'next/server';
import { getDb, serverTimestamp } from '@/lib/firebaseAdmin';

export const runtime = 'nodejs';

// Rate limiting store (in production, use Firestore instead)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production'
    ? 'https://spalatoriaaniva.ro, https://www.spalatoriaaniva.ro'
    : 'http://localhost:3000, http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-public-order-key',
  'Access-Control-Max-Age': '86400',
};

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  if (process.env.NODE_ENV !== 'production') {
    return true;
  }

  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const record = rateLimitStore.get(ip)!;
  if (now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= 3) {
    return false;
  }

  rateLimitStore.set(ip, { count: record.count + 1, resetTime: record.resetTime });
  return true;
}

function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('4') && cleaned.length === 11) {
    return `+${cleaned}`;
  }
  if (cleaned.startsWith('07') && cleaned.length === 10) {
    return cleaned;
  }
  return cleaned;
}

function validateOrderData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (data.website) {
    return { isValid: false, errors: ['Spam detected'] };
  }

  if (data.ttsMs && data.ttsMs < 2000) {
    return { isValid: false, errors: ['Submit too fast'] };
  }

  if (!data.nume || typeof data.nume !== 'string' || data.nume.trim().length < 2) {
    errors.push('Numele este obligatoriu si trebuie sa aiba minim 2 caractere');
  }

  if (!data.telefon || typeof data.telefon !== 'string') {
    errors.push('Telefonul este obligatoriu');
  }

  if (!data.oras || typeof data.oras !== 'string' || data.oras.trim().length < 2) {
    errors.push('Orasul este obligatoriu');
  }

  if (!data.strada || typeof data.strada !== 'string' || data.strada.trim().length < 2) {
    errors.push('Strada este obligatorie');
  }

  if (!data.numar || typeof data.numar !== 'string' || data.numar.trim().length < 1) {
    errors.push('Numarul este obligatoriu');
  }

  if (!data.gdpr || data.gdpr !== true) {
    errors.push('Trebuie sa fiti de acord cu prelucrarea datelor');
  }

  return { isValid: errors.length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: corsHeaders });
    }

    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { ok: false, error: 'Prea multe incercari. Va rugam incercati mai tarziu.' },
        { status: 429, headers: corsHeaders }
      );
    }

    let body: any;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { ok: false, error: 'Invalid JSON format' },
        { status: 400, headers: corsHeaders }
      );
    }

    const validation = validateOrderData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { ok: false, error: validation.errors.join('; ') },
        { status: 400, headers: corsHeaders }
      );
    }

    const db = getDb();
    const orderId = db.collection('_').doc().id;
    const tenantId = process.env.ANIVA_TENANT_ID || '';
    const legacyUserId = process.env.ANIVA_USER_ID || '';

    const adresaLinie1 = `${body.strada} ${body.numar}${body.bloc ? ` Bl. ${body.bloc}` : ''}${body.scara ? ` Sc. ${body.scara}` : ''}${body.ap ? ` Ap. ${body.ap}` : ''}`;
    const adresa = `${body.oras}, ${adresaLinie1}`;

    // Use ownerUid from body if provided, otherwise try to read userId from tenant document or env
    let userId: string;
    if (body.ownerUid && typeof body.ownerUid === 'string') {
      userId = body.ownerUid;
    } else {
      userId = legacyUserId || tenantId;
      if (!userId) {
        return NextResponse.json(
          { ok: false, error: 'Server configuration error: ownerUid, ANIVA_TENANT_ID sau ANIVA_USER_ID lipsesc' },
          { status: 500, headers: corsHeaders }
        );
      }
      if (tenantId) {
        try {
          const tenantDoc = await db.collection('tenants').doc(tenantId).get();
          if (tenantDoc.exists) {
            const tenantData = tenantDoc.data();
            if (tenantData?.createdByUid) {
              userId = tenantData.createdByUid;
            } else if (tenantData?.uid) {
              userId = tenantData.uid;
            }
          }
        } catch {
          // ignore, fallback to legacyUserId or tenantId
        }
      }
    }

    const orderData = {
      userId: userId,
      ownerUid: body.ownerUid || userId,
      nume: body.nume,
      telefon: normalizePhone(body.telefon),
      email: body.email || '',
      dataComanda: serverTimestamp(),
      status: 'inregistrata',
      pretM2: 11,
      min1m2: false,
      minOrderApplied: false,
      minOrderBadge: '',
      totalBeforeMin: 0,
      totalFinal: 0,
      totalGeoM2: 0,
      totalM2: 0,
      totalTarifM2: 0,
      nrCovoare: body.nrCovoare || '1',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      assignedDriverUid: '',
      driverId: '',
      drivers: {},
      nrArticole: 0,
      itemsCount: 0,
      orderInRoute: 0,
      nrComanda: null,
      orderNumber: null,
      number: null,
      adresaLinie1,
      adresa,
      adresaSearchLower: adresaLinie1.toLowerCase(),
      bloc: body.bloc?.trim() || '',
      scara: body.scara?.trim() || '',
      apartament: body.ap?.trim() || '',
      etaj: body.etaj?.trim() || '',
      dataRidicare: body.dataPreferata?.trim() || '',
      dataLivrare: '',
      observatii: body.observatii?.trim() || '',
      source: body.source || 'aniva-web',
      channel: 'website',
      tenantId: tenantId || null,
    };

    await db.collection('orders').doc(orderId).set(orderData);

    return NextResponse.json(
      { ok: true, orderId, message: 'Comanda inregistrata cu succes' },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Eroare interna. Va rugam incercati din nou.' },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed' },
    { status: 405, headers: corsHeaders }
  );
}
