import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type SubmitBody = {
  ownerUid?: string;
  tenantId?: string;
  source?: string;
  nume?: string;
  telefon?: string;
  email?: string;
  oras?: string;
  judet?: string;
  strada?: string;
  numar?: string;
  bloc?: string;
  scara?: string;
  ap?: string;
  apartament?: string;
  observatii?: string;
  dataPreferata?: string;
  interval?: string;
  website?: string;
  ttsMs?: number;
  customerName?: string;
  phone?: string;
  address?: string;
  city?: string;
  county?: string;
  pickupDate?: string;
  pickupInterval?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as SubmitBody;

    const token = process.env.CARPETAN_PUBLIC_ORDER_TOKEN || "";
    const apiBase = (process.env.CARPETAN_API_URL || "https://carpetan.com").replace(/\/$/, "");
    if (!token) {
      return NextResponse.json(
        { ok: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const clientName = (body.customerName || body.nume || "").trim();
    const phone = (body.phone || body.telefon || "").trim();
    const address = (body.address || [body.strada, body.numar].filter(Boolean).join(" ").trim());
    const city = (body.city || body.oras || "").trim();
    const county = (body.county || body.judet || "").trim();
    const observatii = (body.observatii || "").trim();
    const pickupDate = (body.pickupDate || body.dataPreferata || "").trim();
    const pickupInterval = (body.pickupInterval || body.interval || "").trim();

    const payload = {
      clientName,
      phone,
      address,
      city,
      county,
      bloc: body.bloc || "",
      scara: body.scara || "",
      apartament: body.ap || body.apartament || "",
      observatii,
      pickupDate,
      pickupInterval,
      email: body.email || "",
      website: body.website || "",
      ttsMs: body.ttsMs || 0,
      ownerUid: (body.ownerUid || process.env.CARPETAN_OWNER_UID || "").trim(),
      tenantId: (body.tenantId || process.env.CARPETAN_TENANT_ID || "").trim(),
      source: (body.source || "aniva-web").toString().trim() || "aniva-web",
    };

    const response = await fetch(`${apiBase}/api/public/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let result: any;
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { ok: false, error: "API a raspuns non-JSON." },
        { status: 502 }
      );
    }

    if (!response.ok || !result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error || "Eroare la trimiterea comenzii" },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json({ ok: true, id: result.id });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: "Eroare interna. Te rugam sa incerci din nou." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
