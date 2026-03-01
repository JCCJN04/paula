import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/rsvp
 * 
 * Receives RSVP confirmations.
 * Currently logs to console — connect your own DB / Google Sheets / Airtable here.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, guests, phone, message } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { ok: false, error: "El campo 'nombre' es requerido." },
        { status: 400 }
      );
    }

    // TODO: persist to your database of choice
    console.log("📩 Nueva confirmación de asistencia:", {
      name,
      guests,
      phone,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: "Confirmación registrada." });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
