import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Carol B. — The Strength-Seeker | ForgeUp",
  description:
    "Former track coach, 54, wants to deadlift 200 pounds. Most apps assume she wants to lose weight. Milo programs for performance.",
  openGraph: {
    title: "Carol B. — The Strength-Seeker",
    description: "54, wants to deadlift 200. No disclaimers, no consults, just the program.",
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
              Carol B. — The Strength-Seeker
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Former middle-school track coach, 54, Scottsdale AZ · Trains 4×/week · Goal: deadlift 200
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Carol spent decades coaching track and field. She knows what fitness is. She also knows what strength means. At 54, she isn&rsquo;t interested in weight loss or &ldquo;toning.&rdquo; She wants to deadlift 200 pounds. That&rsquo;s the goal. That&rsquo;s the metric.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                But most fitness apps don&rsquo;t build for someone like Carol. The default assumption is: woman over 50 = weight loss goal. The interface asks about losing inches, metabolism, joint concerns. Every description assumes she&rsquo;s in rehab or trying to reclaim her youth.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Carol doesn&rsquo;t want to reclaim her youth. She wants to push it. She wants to be stronger at 54 than she was at 44. That requires a coach who sees her as a strength athlete, not as someone recovering.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;I told Milo I&rsquo;m 54 and want to deadlift 200 pounds. He said &lsquo;Okay. Here&rsquo;s the 14-week path.&rsquo; No disclaimers. No &lsquo;consult your doctor.&rsquo; Just the program.&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Milo didn&rsquo;t condescend. Didn&rsquo;t qualify the goal as ambitious for her age. Didn&rsquo;t suggest a &ldquo;realistic&rdquo; alternative. Milo heard: 200-pound deadlift, 14 weeks. Then Milo built the path.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                This is subtle but critical. Many coaches say they&rsquo;re inclusive, then underestimate the older athlete. Or they overprotect, assuming anything heavy is risky. Carol doesn&rsquo;t need protection. She needs programming.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Milo saw a performance goal and built toward it. Age is data, not a limit. The 14-week path accounts for recovery needs that might be different at 54, but it doesn&rsquo;t apologize for the goal or soften the work.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                This speaks to a real gap in fitness. The industry talks a lot about inclusivity, then assumes what people want based on age, gender, or appearance. Carol isn&rsquo;t trying to look a certain way. She&rsquo;s trying to perform a certain way. That&rsquo;s equally valid, and it deserves a coach who sees it clearly.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Have a strength goal and tired of apps that underestimate you? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and let Milo build the path.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
