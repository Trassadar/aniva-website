import { NextRequest, NextResponse } from 'next/server';
import { getDb, serverTimestamp } from '@/lib/firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validare campuri obligatorii
    if (!body.customerName || body.customerName.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: 'Numele trebuie sa aiba minim 2 caractere' },
        { status: 400 }
      );
    }

    if (!body.phone) {
      return NextResponse.json(
        { ok: false, error: 'Telefonul este obligatoriu' },
        { status: 400 }
      );
    }

    // Validare telefon RO
    const phoneRegex = /^(07\d{8}|\+407\d{8})$/;
    const cleanPhone = body.phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { ok: false, error: 'Telefonul trebuie sa fie valid (format: 07xxxxxxxx sau +407xxxxxxxx)' },
        { status: 400 }
      );
    }

    if (!body.address || !body.address.street || !body.address.city) {
      return NextResponse.json(
        { ok: false, error: 'Adresa completa este obligatorie' },
        { status: 400 }
      );
    }

    // Construire adresa completa
    const addressParts = [
      body.address.street,
      body.address.number && `Nr.${body.address.number}`,
      body.address.bloc && `Bl.${body.address.bloc}`,
      body.address.scara && `Sc.${body.address.scara}`,
      body.address.ap && `Ap.${body.address.ap}`,
      body.address.city,
      body.address.county && body.address.county,
    ].filter(Boolean);

    const fullAddress = addressParts.join(', ');

    // Creare document in Firestore
    const db = getDb();
    const orderRef = db.collection('orders').doc();
    
    const orderData = {
      sourceSite: 'aniva',
      createdAt: serverTimestamp(),
      customerName: body.customerName.trim(),
      phone: cleanPhone,
      email: body.email || '',
      address: {
        street: body.address.street,
        number: body.address.number || '',
        bloc: body.address.bloc || '',
        scara: body.address.scara || '',
        ap: body.address.ap || '',
        city: body.address.city,
        county: body.address.county || '',
        full: fullAddress,
      },
      serviceType: body.serviceType || 'spalare_covoare',
      preferredDate: body.preferredDate || '',
      notes: body.notes || '',
      status: 'inregistrata',
      tenantId: body.tenantId || null,
    };

    await orderRef.set(orderData);

    return NextResponse.json({
      ok: true,
      orderId: orderRef.id,
    });
  } catch (error: any) {
    console.error('Eroare la crearea comenzii:', error);
    return NextResponse.json(
      { ok: false, error: 'Eroare la procesarea comenzii. Te rugam sa incerci din nou.' },
      { status: 500 }
    );
  }
}
