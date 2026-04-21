import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "James T. — The Hybrid Athlete | ForgeUp",
  description:
    "Physical therapist who runs and lifts equally. Most programs force a choice. Milo doesn't.",
  openGraph: {
    title: "James T. — The Hybrid Athlete",
    description: "Runs 2–3×, lifts 3×, refuses to pick one. Milo adjusts volume around both.",
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
              James T. — The Hybrid Athlete
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Physical therapist, 27, Denver CO · Runs 2–3×/week · Lifts 3×/week · Refuses to pick
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                James loves two things: getting stronger and running. He&rsquo;s equally committed to both. This shouldn&rsquo;t be radical, but try finding a program for it.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Every program assumes you&rsquo;re either a lifter or a runner. If you run, the lifting is supplementary. If you lift, the running is conditioning. There&rsquo;s no room for actual athletes who want both at full intensity.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                James would find a &ldquo;balanced&rdquo; program that was actually biased toward one or the other. Or he&rsquo;d Frankenstein two different programs together and end up overtrained on one side while undertraining the other.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;I had a 16-mile long run Saturday. Milo pulled my Sunday leg session and pushed it to Wednesday without me asking. That was the moment I stopped thinking of it as an app.&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                James didn&rsquo;t ask Milo to move his leg day. But Milo saw the full picture: 16-mile run on Saturday means lower body recovery is shot on Sunday. Running a heavy leg session 24 hours after a 16-miler is overtraining.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Most programs don&rsquo;t see this. They&rsquo;re linear. Monday is chest, Tuesday is legs, Wednesday is back. Running is separate — it&rsquo;s just conditioning overlaid on top.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Milo threads the recovery budget across both disciplines. It doesn&rsquo;t devalue either one. Lift heavy, run far, but time them so recovery works for both. That&rsquo;s what adjusting lift volume around running load means.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                James represents a growing cohort: athletes who refuse to pick. They want full strength and full aerobic capacity. Programs either ignore them or underserve them. Milo sees them as the real challenge: managing recovery across multiple intensities, not simplifying by picking one.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Do multiple sports or modalities? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and let Milo thread your recovery budget.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
