import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: 'Marcus "Czar" W. — The Polymath Athlete | ForgeUp',
  description:
    "Fitness entrepreneur who lifts, runs, climbs, boxes, and does CrossFit. Refuses to pick one. How Milo threads five disciplines.",
  openGraph: {
    title: 'Marcus "Czar" W. — The Polymath Athlete',
    description: "I do five things and I'm not picking a primary. Milo threads them all.",
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
              Marcus "Czar" W. — The Polymath Athlete
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Fitness entrepreneur, 38, Boulder CO · Lifter · CrossFitter · Runner · Climber · Boxer
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Czar does five things. Not as hobbies. As equally important pursuits. Barbell lifting. CrossFit. Trail running. Rock climbing. Boxing. He&rsquo;s genuinely good at all of them. And he refuses to pick a primary.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Every coach he&rsquo;s ever worked with has said the same thing: pick one. You can&rsquo;t master five things. You can&rsquo;t have high intensity in multiple modalities. You&rsquo;ll burn out. You need focus.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Czar doesn&rsquo;t want to master one thing. He wants to be excellent at five. That requires a recovery philosophy that doesn&rsquo;t exist in most programming — where the budget isn&rsquo;t allocated to one primary with everything else supporting it, but rather split intelligently across five equally demanding pursuits.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;Every program I&rsquo;ve tried says pick one. Milo said, tell me all five and I&rsquo;ll make them coexist. That&rsquo;s the difference between software and a coach.&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Milo didn&rsquo;t negotiate. Didn&rsquo;t ask him to downshift one discipline. Told him to map all five: intensity, frequency, duration, recovery demands. Then Milo threaded them.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                This is advanced programming. Heavy squat work conflicts with climbing grade progression. High-volume running taxes the system the same way CrossFit metcons do. Boxing heavy bag work interferes with boxing sparring. Lifting recovery and running recovery use overlapping substrates.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                A traditional program would force hierarchy. Milo created balance: some days are strength-dominant and climbing is light. Some days are conditioning-dominant and lifting is moderate. Boxing is timed to avoid competition with hard run days. The recovery budget is finite, but it&rsquo;s allocated across five pursuits instead of one.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                It&rsquo;s not that you can&rsquo;t do five things. It&rsquo;s that you can&rsquo;t do all five at full intensity on the same day. You can do all five at full intensity across the week if the programming is smart.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Czar is the ultimate test of adaptive programming. Not because his goals are high — they are — but because they&rsquo;re multiple and equal. Most coaches see this as a failure mode: too ambitious, no focus. Milo sees it as a puzzle: how do you manage recovery across five modalities without sacrificing any?
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Do multiple sports at high intensity? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and let Milo thread your recovery budget across all of them.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
