import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      gymName,
      clientCount,
      experience,
      interestAreas,
    } = body;

    if (!name || !email || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("trainer_signups")
      .insert([
        {
          name,
          email,
          phone,
          gym_name: gymName,
          client_count: clientCount,
          experience_years: experience ? parseInt(experience) : null,
          interest_areas: interestAreas || [],
        },
      ])
      .single();

    if (error) {
      if (error.code === "23505") {
        return new Response("Email already registered", { status: 400 });
      }
      throw error;
    }

    console.log(`[trainer] new signup: ${email} (${name}) at ${new Date().toISOString()}`);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Partner API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
