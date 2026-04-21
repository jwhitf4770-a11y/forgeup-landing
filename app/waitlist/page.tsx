"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null);
  const [goal, setGoal] = useState<"general" | "event" | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, platform, goal }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main>
      <Nav />
      <section className="px-6 py-24 max-w-xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Tell Milo what you&rsquo;re after.
        </h1>
        <p className="text-[var(--color-muted)] mb-8">
          He&rsquo;ll build around it from day one. Drop your email and we&rsquo;ll send your invite.
        </p>

        {status === "success" ? (
          <div className="card p-6 border-[var(--color-primary)]">
            <p className="font-semibold mb-1">You&apos;re in.</p>
            <p className="text-[var(--color-muted)] text-sm">
              We&apos;ll be in touch when Milo is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-3">What&rsquo;s your main training goal?</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "general" as const, label: "Get stronger / look better / feel healthier" },
                  { value: "event" as const, label: "I have a meet, race, or event" },
                ].map((g) => (
                  <button
                    key={g.value}
                    type="button"
                    onClick={() => setGoal(g.value)}
                    className={`py-3 px-4 rounded-xl font-medium text-sm transition-all text-left ${
                      goal === g.value
                        ? "bg-[var(--color-primary)] text-black"
                        : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3">Which platform?</label>
              <div className="flex gap-3">
                {["ios", "android"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPlatform(p as "ios" | "android")}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                      platform === p
                        ? "bg-[var(--color-primary)] text-black"
                        : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {p === "ios" ? "iOS" : "Android"}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@somewhere.com"
              className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
            />
            <button
              type="submit"
              disabled={status === "loading" || !platform}
              className="w-full btn-primary disabled:opacity-60"
            >
              {status === "loading" ? "Adding..." : "Send me the invite"}
            </button>
          </form>
        )}

        {error && (
          <p className="text-red-400 text-sm mt-3">Error: {error}</p>
        )}
      </section>
      <Footer />
    </main>
  );
}
