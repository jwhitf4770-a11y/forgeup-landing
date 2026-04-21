import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Marcus K. — The Returning Lifter | ForgeUp",
  description:
    "Operations manager coming back after a 6-year gym gap. How Milo reset his expectations and saved him from overreach.",
  openGraph: {
    title: "Marcus K. — The Returning Lifter",
    description: "Coming back after 6 years. Milo caught the overreach before it happened.",
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
              Marcus K. — The Returning Lifter
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Operations manager, 38, Columbus OH · Six-year gym gap · Knows enough to be dangerous
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Marcus spent his twenties in the gym. He was strong. Then life happened. Kids came. His job got demanding. He didn&rsquo;t touch a barbell for six years.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Six months ago, he decided to get back. He knows what a squat is. He remembers being able to do 225. So naturally, when he walked into the gym for his first session back, that&rsquo;s what he loaded on the bar.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                He&rsquo;s dangerous because he has enough knowledge to avoid immediate injury, but not enough to understand recovery debt. Six years of sedentary living doesn&rsquo;t just disappear because you remember the movement. Your joints need rebuilding. Your connective tissue needs time. Your nervous system needs retraining.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;First session back I wanted to squat 225. Milo said, &lsquo;That&rsquo;s ambitious for a guy who&rsquo;s been sedentary for six years. We&rsquo;re starting at 135.&rsquo; I hated it. He was right.&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                A traditional program would have let Marcus load 225. Or it would have defaulted to some generic &ldquo;beginner&rdquo; program that treats all newcomers the same, regardless of whether they&rsquo;re starting from scratch or starting from a gap.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Milo did something different. Milo asked: &ldquo;When was the last time you trained?&rdquo; Then Milo accounted for the debt — the six-year gap doesn&rsquo;t just disappear. Your body has forgotten how to be strong. The program has to rebuild that memory, not skip ahead to where Marcus used to be.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Starting at 135, Marcus got the volume he needed to relearn the pattern. By week 4, he was hitting 185 comfortably. By week 8, he was back to 225 — but this time with the connective tissue and neural capacity to support it long-term.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                This is what separates a coach from a spreadsheet. A coach sees the gap. A spreadsheet doesn&rsquo;t. Marcus would have injured himself or burned out chasing numbers he used to own. Milo pushed back because he understood the constraint: six years of lost adaptation.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Returning to training after a gap? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and let Milo reset your baseline.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
