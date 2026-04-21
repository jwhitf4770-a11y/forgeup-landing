const faqs = [
  {
    q: "How is this different from Fitbod or Hevy?",
    a: "Fitbod and Hevy give you rigid templates or blank logs. ForgeUp gives you a coach who builds a plan with you, then adjusts it mid-week when life happens. The program is the conversation.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "No. ForgeUp works as a pure phone app. The Watch and WearOS apps just make set logging hands-free.",
  },
  {
    q: "What if I get injured?",
    a: "Tell Milo. He&rsquo;ll swap exercises in real time, rework your week, and keep the rest of your program coherent.",
  },
  {
    q: "Can Milo build for specific goals?",
    a: "Yes — strength, hypertrophy, cut, recomp, or a blend. Just describe what you&rsquo;re after. He&rsquo;ll ask follow-ups.",
  },
  {
    q: "How does the trial work?",
    a: "14 days, full app. No credit card upfront. If you forget to cancel, we don&rsquo;t silently charge — we&rsquo;ll ask.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Anytime, one tap, in-app. Your workout history stays yours.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
          Questions.
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card p-6 group">
              <summary className="font-display font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-[var(--color-muted)] group-open:rotate-45 transition-transform text-xl">
                  +
                </span>
              </summary>
              <p
                className="mt-4 text-[var(--color-muted)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
