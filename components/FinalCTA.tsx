import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="px-6 py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,107,53,0.48) 0%, rgba(255,107,53,0.14) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[220px] blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,107,53,0.28), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <p className="eyebrow mb-4">Step into the forge</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight mb-6">
          Iron sharpens iron.<br />
          <span className="text-[var(--color-primary)]">Milo sharpens you.</span>
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 leading-relaxed max-w-xl mx-auto">
          Fourteen days on the house. Bring your barbell, your injuries, and
          your excuses. He&rsquo;ll handle the last part first.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/waitlist" className="btn-primary">
            Start 14-day free trial
          </Link>
          <a href="#demo" className="btn-secondary">
            See Milo coach a real session
          </a>
        </div>
        <p className="mt-5 text-sm text-[var(--color-muted)]">
          No credit card · cancel anytime · your history stays yours
        </p>
      </div>
    </section>
  );
}
