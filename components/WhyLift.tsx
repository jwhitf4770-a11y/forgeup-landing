const stats = [
  {
    headline: "15%",
    body: "lower all-cause mortality in adults who strength-train 2+ times per week.",
    source: "Momma et al., Br J Sports Med, 2022 (~1.5M participants)",
  },
  {
    headline: "3–8%",
    body: "muscle mass gained per month of consistent resistance training in beginners.",
    source: "Schoenfeld et al., J Strength Cond Res",
  },
  {
    headline: "2×",
    body: "greater progress over 12 weeks for lifters who track sets and loads vs. those who don&rsquo;t.",
    source: "Locke &amp; Latham, goal-setting theory — 400+ studies",
  },
  {
    headline: "40%+",
    body: "of lifters plateau within 6 months. The common thread: no written log, no progression plan.",
    source: "Observational, NSCA trainer surveys",
  },
];

export function WhyLift() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-3">The receipts</p>
          <h2 className="section-heading mb-6">
            One barbell, one hour, twice a week.
            <br />
            <span className="text-[var(--color-muted)]">
              It&rsquo;s the most-studied intervention in modern medicine.
            </span>
          </h2>
          <figure className="mt-8 border-l-2 border-[var(--color-primary)] pl-5">
            <blockquote className="text-xl md:text-2xl font-display leading-snug text-[var(--color-text)]">
              &ldquo;If exercise were a pill, it would be the most
              widely-prescribed drug in the world.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-[var(--color-muted)]">
              — Dr. Robert Butler, founding director, U.S. National Institute on Aging
            </figcaption>
          </figure>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.headline} className="card stat-card p-7" data-stat={s.headline}>
              <div className="relative">
                <div className="font-display text-6xl font-bold text-[var(--color-primary)] mb-3 leading-none">
                  {s.headline}
                </div>
                <p
                  className="text-[var(--color-text)] mb-4 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
                <p
                  className="text-[10px] text-[var(--color-muted)] leading-snug uppercase tracking-wider"
                  dangerouslySetInnerHTML={{ __html: `Source · ${s.source}` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
