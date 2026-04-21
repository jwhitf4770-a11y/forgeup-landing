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
              Coaching
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How Milo Adapts Your Program in Real Time
          </h1>
          <time className="text-sm text-[var(--color-muted)]">
            April 18, 2026
          </time>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
          <p className="text-lg text-[var(--color-muted)]">
            Static programs die the moment life changes. You miss a session. You're sore. Work got hectic. Your program doesn't care — it wants you to hit the same lifts on the same days. Milo cares.
          </p>

          <h2 className="text-2xl font-bold mt-8">The Problem with Static Programs</h2>
          <p>
            Every lifter has a program that worked beautifully until it didn't. You printed it out, laminated it, hit every session. Then something happened — a few missed days, a niggle, life. Now your program is obsolete.
          </p>
          <p>
            A good trainer notices this. They ask questions, listen, and rewrite the plan. You're not doing the program anymore — you're doing a conversation.
          </p>

          <h2 className="text-2xl font-bold mt-8">How Milo Works</h2>
          <p>
            When you tell Milo your week changed, he doesn't offer encouragement and send you back to the original plan. He rewrites it. And he does it before you leave the couch.
          </p>
          <p>
            Milo knows your full training history. Every set. Every missed session. Every complaint. That context never resets. He's seen your patterns — the exercises you respond to, the weights you move, the sessions you actually show up for. He builds on that.
          </p>

          <h2 className="text-2xl font-bold mt-8">The Conversation Never Stops</h2>
          <p>
            Your program is the starting point, not the bible. As you keep talking to Milo, the program gets sharper. He learns what works for you. He catches when you're plateauing and adjusts before boredom sets in. He pushes you harder when you're ready.
          </p>
          <p>
            This is what separates a program from a coach.
          </p>

          <div className="my-8 p-6 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
            <p className="text-sm">
              <span className="font-semibold">Ready to build a program that adapts to you?</span>{" "}
              <Link href="/waitlist" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80">
                Join the beta.
              </Link>
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
