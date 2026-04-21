const items = [
  {
    eyebrow: "Heat",
    title: "Your program argues back",
    body: "Fitbod builds your program. Milo builds your program, then argues with you about it. Every set you log reshapes what comes next.",
    icon: <FireIcon />,
  },
  {
    eyebrow: "Pressure",
    title: "Native on your wrist",
    body: "First-class Apple Watch and WearOS apps. Log every set without touching your phone.",
    icon: <WatchIcon />,
  },
  {
    eyebrow: "Impact",
    title: "No buttons. Just tell him.",
    body: "No accept prompts. No multi-step forms. You talk, Milo adjusts. That&rsquo;s the whole app.",
    icon: <BoltIcon />,
  },
];

export function Differentiators() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Heat · Pressure · Impact</p>
          <h2 className="section-heading">
            The forge doesn&rsquo;t ask<br />
            <span className="text-[var(--color-primary)]">if you&rsquo;re ready.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card p-8 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,107,53,0.55), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center mb-5 text-[var(--color-primary)]">
                  {it.icon}
                </div>
                <p className="eyebrow mb-2">{it.eyebrow}</p>
                <h3 className="font-display text-xl font-bold mb-3">{it.title}</h3>
                <p
                  className="text-[var(--color-muted)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: it.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FireIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 2 C10 6 7 8 7 13 a5 5 0 0 0 10 0 c0-3-2-5-2-7 c0-1.5 -.5 -3 -3 -4 z" />
    </svg>
  );
}
function WatchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M9 2 h6 M9 22 h6 M12 10 v3 l2 2" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M13 2 L5 14 h6 l-1 8 l8-12 h-6 z" />
    </svg>
  );
}
