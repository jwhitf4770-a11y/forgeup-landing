import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Priya S. — The Race Convert | ForgeUp",
  description:
    "Product designer with a general fitness goal who suddenly signed up for a Spartan Sprint. How Milo restructured without losing her strength base.",
  openGraph: {
    title: "Priya S. — The Race Convert",
    description: "Started with no goal. Now has a race in 6 weeks. Milo restructured without restarting.",
    type: "article",
  },
};

export default function Page() {
  return (
    <main>
      <Nav />
      <article className="px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="eyebrow mb-2">Avatar Story</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              Priya S. — The Race Convert
            </h1>
            <p className="text-[var(--color-muted)]">
              Product designer, 29, Austin TX · Started general fitness · Just signed up for a Spartan Sprint
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Priya started training with no specific goal. Just wanted to get stronger, feel better, look good. Six weeks into her program, a friend dared her to sign up for a Spartan Sprint. On a whim, she did.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Now she has a race in six weeks and a general fitness program. The problem is obvious: her current program isn&rsquo;t built for obstacle racing. But she also doesn&rsquo;t want to lose the strength base she&rsquo;s built over the last month. She doesn&rsquo;t want to start over.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Most programs would tell her: pick one. Either focus on race prep and deprioritize strength, or keep the general program and hope it&rsquo;s good enough. There&rsquo;s rarely a middle path.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;I told Milo I signed up for a Spartan race kind of on a dare. He said, &lsquo;Okay, six weeks. Here&rsquo;s what changes and here&rsquo;s what stays.&rsquo; I expected him to start over. He didn&rsquo;t.&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Milo restructured, not restarted. Priya had spent four weeks building a foundation. That foundation is valuable for an obstacle race. Strength endurance, grip strength, and lower body power all matter at a Spartan Sprint.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Instead of abandoning what she&rsquo;d built, Milo adjusted the emphasis. The strength work stayed — but conditioning changed. Conditioning became race-specific. Density work replaced pure hypertrophy. Metabolic finishers replaced accessory volume. The base was preserved. The shape was adapted.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                This is what dynamic programming means: life changes, and the program changes with it. But not every change requires starting from zero.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Priya represents a real scenario: athletes whose goals shift mid-training. Maybe you sign up for a race on a dare. Maybe work gets busy and you downshift. Maybe you get injured and can't do what you planned. The program has to be flexible enough to absorb that shift without losing what you&rsquo;ve already built.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Goals that change mid-training? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and let Milo restructure without restarting.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
