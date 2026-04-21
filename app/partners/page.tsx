"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gymName: "",
    clientCount: "",
    experience: "",
    interestAreas: [] as string[],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const interestOptions = [
    "Reviewing programs",
    "Coaching athletes",
    "Content creation",
    "Referral commissions",
    "White-label integration",
  ];

  const handleCheckbox = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      interestAreas: prev.interestAreas.includes(area)
        ? prev.interestAreas.filter((a) => a !== area)
        : [...prev.interestAreas, area],
    }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gymName: "",
        clientCount: "",
        experience: "",
        interestAreas: [],
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main>
      <Nav />
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Partner with Milo.
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Trainers, coaches, and gym owners can integrate Milo into their practice. Review programs. Earn commissions. Help athletes get better faster.
          </p>
          <div className="mt-6 p-4 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
            <p className="text-sm text-[var(--color-text)]">
              <span className="font-semibold">Milo amplifies your coaching, not replaces it.</span> For athletes without access to a great trainer, Milo is their voice. For your clients, Milo is a second set of eyes — reviewing programs you write, catching missed sessions, pushing back on lazy changes. You stay in control. You earn the commission.
            </p>
          </div>
        </div>

        {status === "success" ? (
          <div className="card p-8 border-[var(--color-primary)] bg-[var(--color-primary)]/5">
            <p className="font-semibold mb-2 text-lg">Thank you.</p>
            <p className="text-[var(--color-muted)]">
              We're reviewing your application. You'll hear from us within 48 hours at {formData.email}.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6 card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Gym or business name</label>
                <input
                  type="text"
                  value={formData.gymName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, gymName: e.target.value }))
                  }
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Coaching experience (years)</label>
                <input
                  type="number"
                  min="0"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, experience: e.target.value }))
                  }
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Number of clients</label>
                <select
                  value={formData.clientCount}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, clientCount: e.target.value }))
                  }
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="">Select...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-25">11-25</option>
                  <option value="26-50">26-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">What interests you? (select all)</label>
              <div className="space-y-2">
                {interestOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interestAreas.includes(option)}
                      onChange={() => handleCheckbox(option)}
                      className="w-4 h-4 rounded accent-[var(--color-primary)]"
                    />
                    <span className="text-[var(--color-text)]">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn-primary disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Apply to partner"}
            </button>

            {error && (
              <p className="text-red-400 text-sm">Error: {error}</p>
            )}
          </form>
        )}

        <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
          <h2 className="font-display text-2xl font-bold mb-6">What partners get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Program reviews",
                desc: "Milo sends athlete programs for your review. Quality-check programs in seconds.",
              },
              {
                title: "Revenue share",
                desc: "Earn commissions for each athlete you bring or refer. Details in partner agreement.",
              },
              {
                title: "White-label option",
                desc: "Integrate Milo into your coaching platform. Build under your brand.",
              },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
