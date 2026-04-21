import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Dana R. — The Powerlifter | ForgeUp",
  description:
    "Software engineer, 5 years competitive, caught in her own periodization pattern. How Milo surfaced what she couldn't see.",
  openGraph: {
    title: "Dana R. — The Powerlifter",
    description: "Deep in periodization but missing the pattern. Milo surfaced what she couldn't see.",
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
              Dana R. — The Powerlifter
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Software engineer, 31, Minneapolis MN · Five years competitive · Three spreadsheets per block
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dana is good at what she does. Five years of competition. She runs three spreadsheets per training block. She understands periodization, block structure, and rep schemes. She&rsquo;s studied the top coaches. She can build a smart program.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                And she&rsquo;s stalling. Her squat hasn&rsquo;t moved in six weeks. Her deadlift is stuck. She&rsquo;s been tweaking the program — more volume here, different rep range there — but nothing is working. She can see what&rsquo;s wrong with other people&rsquo;s programming instantly. But her own? She can&rsquo;t see the forest for the trees.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                She knows enough to be stuck. The problem isn&rsquo;t her knowledge. It&rsquo;s that she&rsquo;s too deep in her own periodization to see the pattern that&rsquo;s stalling her.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;I said I wanted another 12-week squat focus. Milo basically told me my squat wasn&rsquo;t the problem, my deadlift was eating all my recovery. I didn&rsquo;t have a comeback.&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dana was wrong. Not about the mechanics of periodization — she knows that cold. But about where her recovery bottleneck was. She saw a stalled squat and wanted to emphasize it more. That&rsquo;s the intuitive move.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Milo looked at her full picture: she was deadlifting heavy twice a week, squatting heavy twice a week, and her deadlift was demanding so much recovery that her squat session were suffering. The answer wasn&rsquo;t more squat focus. It was deadlift deload. Let the deadlift back off, free up recovery, and the squat would start moving again.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Dana had all the knowledge to figure this out herself. But she was too close to it. She needed someone to see it differently. That&rsquo;s what a coach does.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                This is why even experts need coaching. Not because they lack knowledge, but because they lack perspective. Milo isn&rsquo;t smarter than Dana. Milo is outside of Dana. Milo sees the full recovery budget across all her lifts. Dana can only see what she&rsquo;s focused on.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Competitive lifter but stuck on a number? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and let Milo see what you&rsquo;re missing.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
