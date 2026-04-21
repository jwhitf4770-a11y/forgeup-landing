"use client";

import { useState } from "react";

export function BetaSignupInline({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!platform) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, platform, goal: "general" }),
      });
      if (!res.ok) {
        const text = await res.text();
        if (text.includes("already")) {
          setErrorMsg("You're already on the list.");
          setStatus("idle");
        } else {
          throw new Error(text);
        }
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 ${className}`}>
        <span className="text-xl">🔥</span>
        <div>
          <p className="font-semibold text-[var(--color-text)]">You&rsquo;re in. Milo will be ready.</p>
          <p className="text-sm text-[var(--color-muted)]">We&rsquo;ll send your invite when beta opens.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-3 ${className}`}>
      <div className="flex gap-2">
        {(["ios", "android"] as const).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPlatform(p)}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
              platform === p
                ? "bg-[var(--color-primary)] text-black"
                : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/60"
            }`}
          >
            {p === "ios" ? "🍎 iOS" : "🤖 Android"}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text)] text-sm outline-none focus:border-[var(--color-primary)] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading" || !platform || !email}
          className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "…" : "Join Beta"}
        </button>
      </div>
      {errorMsg && (
        <p className="text-sm text-[var(--color-muted)]">{errorMsg}</p>
      )}
      {!platform && (
        <p className="text-xs text-[var(--color-muted)]">Pick your platform first</p>
      )}
    </form>
  );
}
