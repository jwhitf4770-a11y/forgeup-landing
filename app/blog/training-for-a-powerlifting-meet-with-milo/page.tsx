import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Training for a Powerlifting Meet When Life Refuses to Cooperate",
  description:
    "You have a meet in October. Your job changed, your training partner quit, and you missed three weeks. Here's what Milo does with that — and what you need to tell him.",
  openGraph: {
    title: "Training for a Powerlifting Meet When Life Refuses to Cooperate",
    description:
      "You have a meet in October. Your job changed, your training partner quit, and you missed three weeks. Here's what Milo does with that — and what you need to tell him.",
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
            <div className="eyebrow mb-2">Competition Prep</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              Training for a Powerlifting Meet When Life Refuses to Cooperate
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              You have a meet in October. Your job changed, your training partner quit, and you missed three weeks. Here&rsquo;s what Milo does with that — and what you need to tell him.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Give Milo the date first, not the goal</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most training programs ask you to set a goal — "I want a 405 squat" — and then they build backward from that number. The problem is they build backward from today, which doesn&rsquo;t account for the fact that you might have 16 weeks, or 8 weeks, or 25 weeks. The timeline is often the constraint, not the number.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                With Milo, you lead with the date. "October 18th. 83kg class. Nationals." The timeline is the first thing Milo sees, and it shapes everything that comes next. From there, Milo will ask: What&rsquo;s your current total? How many weeks until the meet? What&rsquo;s realistic given where you are right now?
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                This changes the conversation entirely. Instead of chasing a number that might be unrealistic, you&rsquo;re working backward from a hard deadline. 25 weeks out, you might build to a total you haven&rsquo;t hit in years. 8 weeks out, you optimize for peaking and technique. The meet date dictates the philosophy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">What happens when the plan breaks</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Here&rsquo;s the reality: you will miss training. Your work will get chaotic. You&rsquo;ll get sick. Your gym will be closed. Your training partner will ghost. Life will interfere.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                When you miss three weeks before a meet, a traditional program treats it as catastrophe. The spreadsheet assumes continuity. You&rsquo;re supposed to follow the plan. If you don&rsquo;t, the plan is broken and you have to restart or find a new one.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Milo does something different. You tell him: "I was out for three weeks. I&rsquo;m back now." Milo reassesses your current capacity — not your theoretical capacity from three weeks ago. He asks: What can you move right now? How do you feel recovery-wise? How much runway do we have left until the meet?
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Then he rebuilds. Not from the original program. From the new starting point. The three-week gap isn&rsquo;t treated as failure — it&rsquo;s treated as data. Milo adjusts the volume, the intensity, and the block structure to account for where you actually are, not where you were supposed to be.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">The taper conversation</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Four weeks out from the meet, the anxiety kicks in. Your volume drops. Your intensity drops. Your training partner says, "Aren&rsquo;t we supposed to be training harder right now?" Your coach (if you have one) is telling you to deload and trust the process. You&rsquo;re terrified you&rsquo;re losing strength.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Every intermediate lifter has this conversation with themselves. The science says deloading before a competition improves performance — your CNS recovers, your joints heal, you show up fresher. But your gut says: if I&rsquo;m not training hard, I&rsquo;m getting weaker.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                With Milo, you can articulate that fear. "I&rsquo;m nervous the taper is making me weak." Milo doesn&rsquo;t just say "trust the process." He explains what&rsquo;s happening: your nervous system needs recovery. Your joints need healing. The strength is still there — it&rsquo;s just not being expressed right now. When you step on the platform, you&rsquo;ll have it.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                And if the anxiety is real enough that maintaining some volume helps your confidence, Milo can adjust. The taper doesn&rsquo;t have to be passive. You can do low-intensity singles. You can maintain technique work. The goal is recovery, but the shape of recovery is flexible.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">What if you don&rsquo;t have a meet</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Everything Milo does for meet prep — the back-planning, the check-ins, the mid-block adjustments — works the same way if your goal is a number on the scale by July, or just wanting to be strong for life. The timeline is still the constraint. The reassessment still happens when life interferes. The structure still adapts.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                The only difference is the date. If you have a meet, the date is fixed. If you don&rsquo;t, the date is soft — you pick it based on when you want to hit a number or feel a certain way. Either way, Milo builds the program around it.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-sm">
                Ready to start your meet prep? <Link href="/waitlist" className="text-[var(--color-primary)] hover:underline">Join the beta</Link> and tell Milo your meet date.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
