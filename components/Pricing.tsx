import Link from "next/link";

const monthlyBullets = [
  "Unlimited Milo chat",
  "iOS + Android + Watch apps",
  "Fluid program engine",
  "Cancel anytime",
];

const annualBullets = [
  "Everything in monthly",
  "Priority feature access",
  "$7.50/mo effective price",
  "Best for committed lifters",
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Twelve ninety-nine</p>
          <h2 className="section-heading mb-4">
            No tiers. No upsell.<br />
            <span className="text-[var(--color-muted)]">Just the forge.</span>
          </h2>
          <p className="text-[var(--color-muted)] text-lg">
            14-day free trial · No credit card required
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="card p-8">
            <div className="text-sm text-[var(--color-muted)] mb-2 uppercase tracking-widest font-semibold">
              Monthly
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-5xl font-bold">$12.99</span>
              <span className="text-[var(--color-muted)]">/mo</span>
            </div>
            <ul className="space-y-2 mb-8 text-[var(--color-text)]">
              {monthlyBullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/waitlist" className="btn-secondary w-full">
              Start free trial
            </Link>
          </div>

          <div className="card-hot pricing-hot p-8 relative">
            <div className="absolute -top-3 left-8 bg-[var(--color-primary)] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Save 42% · Committed
            </div>
            <div className="text-sm text-[var(--color-primary)] mb-2 uppercase tracking-widest font-semibold">
              Annual
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-5xl font-bold">$89.99</span>
              <span className="text-[var(--color-muted)]">/yr</span>
            </div>
            <div className="text-sm text-[var(--color-muted)] mb-1">
              $7.50/mo · billed annually
            </div>
            <div className="text-xs text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-6">
              One price. One year. Show up.
            </div>
            <ul className="space-y-2 mb-8 text-[var(--color-text)]">
              {annualBullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/waitlist" className="btn-primary w-full">
              Start free trial — best value
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            <span className="text-[var(--color-text)] font-semibold">
              Future charges $200/month for a human coach
            </span>{" "}
            who can&rsquo;t read your logs in real time. Milo can — and costs
            less than your protein powder.
          </p>
        </div>
      </div>
    </section>
  );
}
