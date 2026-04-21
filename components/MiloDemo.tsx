const exchanges = [
  {
    user: "Skip leg day today?",
    milo: "Third time this month. Bold strategy. Sure you want the quads to atrophy?",
  },
  {
    user: "Tweaked my shoulder yesterday.",
    milo: "Got it. Swapping overhead press for incline DB. Rest of the session stands.",
  },
  {
    user: "Let's start this program.",
    milo: "Hold up — haven't built one yet. Tell me your gear and injuries first.",
  },
  {
    user: "Add more arms. Way more.",
    milo: "Noted. Adding an arms-focused finisher Tue/Fri. Your back day stays — no negotiation.",
  },
];

export function MiloDemo() {
  return (
    <section id="demo" className="px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">In Milo&rsquo;s own words</p>
          <h2 className="section-heading">
            Milo doesn&rsquo;t flatter you.<br />
            <span className="text-[var(--color-muted)]">He coaches.</span>
          </h2>
        </div>

        <div className="card p-6 md:p-8 space-y-6 relative">
          <div className="flex items-center gap-3 pb-5 border-b border-[var(--color-border)]">
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
              Milo intensity
            </span>
            <div className="flex-1 milo-heat-track">
              <div
                className="milo-heat-bar"
                style={{ ["--heat-pct" as string]: "78%" }}
              />
            </div>
            <span className="text-xs font-mono text-[var(--color-primary)]">78%</span>
          </div>

          {exchanges.map((e, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-end">
                <div className="bg-[var(--color-primary)] text-black rounded-2xl rounded-br-sm px-4 py-2 max-w-[75%] font-medium">
                  {e.user}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] border-l-2 border-l-[var(--color-primary)]/50 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[85%]">
                  <div className="text-xs text-[var(--color-primary)] font-semibold mb-0.5">
                    Milo
                  </div>
                  <div className="text-[var(--color-text)]">{e.milo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
