const steps = [
  {
    num: "01",
    title: "Tell Milo what you want",
    body: "Strength, size, hybrid, longevity — say it in your own words. He asks the follow-ups.",
  },
  {
    num: "02",
    title: "He builds your first week",
    body: "No templates. No 40-field intake. A program sized to your gear, your history, and what hurts today.",
  },
  {
    num: "03",
    title: "You lift. You log. He rewrites.",
    body: "Every set feeds back. Skipped a session? Hit a PR? Tweaked something? The plan moves with you.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Day one to week fifty-two</p>
          <h2 className="section-heading">Three steps. Then you&rsquo;re in the forge.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,107,53,0.4) 20%, rgba(255,107,53,0.4) 80%, transparent)",
            }}
          />

          {steps.map((s) => (
            <div key={s.num} className="relative text-center md:text-left">
              <div
                className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-primary)]/40 text-[var(--color-primary)] font-display font-black text-2xl mb-5 shadow-[0_0_30px_-8px_rgba(255,107,53,0.6)]"
              >
                {s.num}
              </div>
              <h3 className="font-display text-xl font-bold mb-2 leading-tight">
                {s.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
