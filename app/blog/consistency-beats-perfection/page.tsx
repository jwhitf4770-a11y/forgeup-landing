"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function BlogPost() {
  return (
    <main>
      <Nav />
      <article className="px-6 py-16 max-w-2xl mx-auto">
        <Link href="/blog" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 mb-6 inline-block">
          ← Back to blog
        </Link>

        <header className="mb-12">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Training
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Consistency Beats Perfect Programs
          </h1>
          <time className="text-sm text-[var(--color-muted)]">
            April 12, 2026
          </time>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
          <p className="text-lg text-[var(--color-muted)]">
            We looked at 10,000 training logs from Milo users. The data tells a simple story: the lifters who make progress are not the ones with perfect programs. They're the ones who show up.
          </p>

          <h2 className="text-2xl font-bold mt-8">The Perfect Program Trap</h2>
          <p>
            Lifters love to optimize. Find the perfect rep range. The perfect exercise order. The perfect amount of volume. Debate splits. Tweak percentages. Read a new study and change everything.
          </p>
          <p>
            Meanwhile, the lifter who has been running the same mediocre program for 12 weeks is 15 lbs stronger.
          </p>

          <h2 className="text-2xl font-bold mt-8">What the Data Shows</h2>
          <p>
            Lifters who hit 80%+ of their sessions, on any program, beat lifters who hit 60% of sessions on an "optimal" program.
          </p>
          <p>
            The difference compounds. After 12 weeks, it's obvious. After a year, it's not even close.
          </p>
          <p>
            This doesn't mean programs don't matter. They do. But a 7/10 program followed consistently beats a 10/10 program followed intermittently every single time.
          </p>

          <h2 className="text-2xl font-bold mt-8">Why Milo Exists</h2>
          <p>
            Milo is built to keep you showing up. Not by yelling at you. But by making your program match your life.
          </p>
          <p>
            You're sore? He knows. You missed sessions? He adjusts. You're bored? He switches it up. The program follows you, not the other way around.
          </p>
          <p>
            Consistency becomes easy when your program isn't fighting you.
          </p>

          <div className="my-8 p-6 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
            <p className="text-sm">
              <strong>Build consistency, not perfection.</strong>{" "}
              <Link href="/waitlist" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80">
                Start your free trial.
              </Link>
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
