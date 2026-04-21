import { NextRequest, NextResponse } from "next/server";

// TODO: wire to ConvertKit / Resend / Loops. For now, log to server console.
export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email?: string };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new NextResponse("Invalid email", { status: 400 });
    }
    console.log(`[waitlist] new signup: ${email} at ${new Date().toISOString()}`);
    return NextResponse.json({ ok: true });
  } catch {
    return new NextResponse("Bad request", { status: 400 });
  }
}
