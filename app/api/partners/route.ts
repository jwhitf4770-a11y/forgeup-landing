export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, gymName, clientCount, experience, interestAreas } = body;

    if (!name || !email || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }

    // TODO: Send to email or CRM (Airtable, Cal.com, Stripe, etc.)
    console.log("Partner inquiry:", {
      name,
      email,
      phone,
      gymName,
      clientCount,
      experience,
      interestAreas,
      timestamp: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Partner API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
