import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const equipment = formData.get("equipment") as string;
    const files = formData.getAll("files") as File[];

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new NextResponse("Invalid email", { status: 400 });
    }

    if (files.length === 0) {
      return new NextResponse("At least one image required", { status: 400 });
    }

    // Store setup info in Supabase
    const { data, error } = await supabaseAdmin
      .from("user_setups")
      .insert([
        {
          email,
          equipment,
          file_count: files.length,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new NextResponse("Error storing setup", { status: 500 });
    }

    console.log(
      `[setup] new submission: ${email} (${files.length} files) at ${new Date().toISOString()}`
    );

    return NextResponse.json({
      ok: true,
      setupId: data?.id,
    });
  } catch (err) {
    console.error("Setup API error:", err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
