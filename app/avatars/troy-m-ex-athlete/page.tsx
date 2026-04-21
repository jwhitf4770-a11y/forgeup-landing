import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Troy M. — The Ex-Athlete | ForgeUp",
  description:
    "Former D2 football player, 34, bounces programs every 8 weeks chasing his 20-year-old self. Milo grounds him in current capacity.",
  openGraph: {
    title: "Troy M. — The Ex-Athlete",
    description: "Used to run a 4.7 forty. Now? Milo asks: what's your current 400m time?",
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
              Troy M. — The Ex-Athlete
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Sales director, 34, Atlanta GA · D2 football through age 22 · Bounces programs every 8 weeks
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Problem</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Troy was an athlete. Real athlete. D2 football. Could run a 4.7 forty-yard dash. He was conditioned. He was strong. Life as an athlete shaped him.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Twelve years later, he&rsquo;s 34, and he&rsquo;s chasing that feeling. His recovery bank is empty, but his expectations are full. He bounces between programs every eight weeks because he keeps trying to replicate his 20-year-old work capacity on a 34-year-old body. Nothing works. Nothing feels right. He&rsquo;s always just about to crack the code before jumping to something new.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                The problem isn&rsquo;t the programs. The problem is that Troy is training against himself — fighting a version of his body that doesn&rsquo;t exist anymore.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Milo Conversation</h2>
              <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-4 italic text-[var(--color-muted)]">
                &ldquo;I told Milo I used to run a 4.7 forty. He said, &lsquo;That was twelve years ago. What&rsquo;s your current 400m time?&rsquo; I didn&rsquo;t know. He said, &lsquo;That&rsquo;s where we start.&rsquo;&rdquo;
              </blockquote>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Why That Matters</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Milo didn&rsquo;t romanticize the past. Didn&rsquo;t say &ldquo;wow, 4.7, that&rsquo;s impressive.&rdquo; Milo redirected to the only metric that matters: right now.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Troy didn&rsquo;t know his current 400m time because he wasn&rsquo;t testing. He was theorizing. He was imagining what he could do based on what he used to be able to do. That&rsquo;s the trap: the past becomes a ceiling instead of a reference point.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Milo forced baseline testing. Current capacity. From there, Milo built upward. Not trying to recapture 4.7. Building to whatever he can legitimately achieve now with appropriate recovery. The difference is psychological and physiological: you can't chase ghosts. You can only build from where you are.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The Bigger Picture</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                This is common among ex-athletes. The identity is still there. The capacity isn&rsquo;t. Every program that doesn&rsquo;t acknowledge this gap sets them up to fail. They train like they&rsquo;re still 22. They burn out. They think they&rsquo;re broken. Milo says: you&rsquo;re not broken. Your recovery budget is different. Your baseline is different. Let&rsquo;s build from there.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Ex-athlete tired of chasing your younger self? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and build from where you actually are.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
