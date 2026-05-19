import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzkxmgNKJi5RQxyrGbR3s9HQ-Ei3UDQ7FjdpDff5LQiAlY4NosoDdgvAVzBfcdz3uAU/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:     body.name     ?? "",
        phone:    body.phone    ?? "",
        email:    body.email    ?? "",
        roomType: body.roomType ?? "",
        message:  body.message  ?? "",
      }),
      redirect: "follow",
    });

    const text = await res.text();
    console.log("[enquire] Apps Script response:", res.status, text);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquire] Error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
