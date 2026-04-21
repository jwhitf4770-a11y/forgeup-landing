import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, platform, goal } = (await req.json()) as {
      email?: string;
      platform?: "ios" | "android";
      goal?: "general" | "event";
    };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new NextResponse("Invalid email", { status: 400 });
    }

    if (!platform || !["ios", "android"].includes(platform)) {
      return new NextResponse("Invalid platform", { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("beta_signups")
      .insert([{ email, platform, goal }])
      .single();

    if (error) {
      if (error.code === "23505") {
        return new NextResponse("Email already registered", { status: 400 });
      }
      throw error;
    }

    console.log(
      `[beta] new signup: ${email} (${platform}) at ${new Date().toISOString()}`
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
