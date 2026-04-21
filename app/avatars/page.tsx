import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ForgeUp Avatars — The People in the Forge",
  description:
    "Meet the seven archetypes. Each one represents a real athlete with a unique challenge. See how Milo coaches each of them differently.",
  openGraph: {
    title: "ForgeUp Avatars",
    description: "Real people. Real Milo conversations.",
    url: "https://forgeup.app/avatars",
    type: "website",
  },
};

interface Avatar {
  slug: string;
  name: string;
  archetype: string;
  location: string;
  age: number;
  role: string;
  quote: string;
  problem: string;
}

const avatars: Avatar[] = [
  {
    slug: "marcus-k-returning-lifter",
    name: "Marcus K.",
    archetype: "The Returning Lifter",
    location: "Columbus, OH",
    age: 38,
    role: "Operations manager · 6-year gym gap",
    quote: "Milo caught the overreach before it happened.",
    problem: "Knows enough to be dangerous. About to write himself a program from 2016.",
  },
  {
    slug: "dana-r-powerlifter",
    name: "Dana R.",
    archetype: "The Powerlifter",
    location: "Minneapolis, MN",
    age: 31,
    role: "Software engineer · 5 yrs competitive",
    quote: "My squat wasn't the problem. My deadlift was eating recovery.",
    problem: "Too deep in her own periodization to see the stalling pattern.",
  },
  {
    slug: "james-t-hybrid-athlete",
    name: "James T.",
    archetype: "The Hybrid Athlete",
    location: "Denver, CO",
    age: 27,
    role: "Physical therapist · runs & lifts equally",
    quote: "Milo pulled my Sunday leg session and pushed it to Wednesday.",
    problem: "Every program assumes you're either a runner or a lifter.",
  },
  {
    slug: "carol-b-strength-seeker",
    name: "Carol B.",
    archetype: "The Strength-Seeker",
    location: "Scottsdale, AZ",
    age: 54,
    role: "Former track coach · wants to deadlift 200",
    quote: "No disclaimers. No 'consult your doctor.' Just the program.",
    problem: "Apps assume she wants to lose weight. She wants to be strong.",
  },
  {
    slug: "troy-m-ex-athlete",
    name: "Troy M.",
    archetype: "The Ex-Athlete",
    location: "Atlanta, GA",
    age: 34,
    role: "Sales director · D2 football thru 22",
    quote: "What's your current 400m time? That's where we start.",
    problem: "Chasing the feeling of 20-year-old fitness with a 34-year-old recovery bank.",
  },
  {
    slug: "priya-s-race-convert",
    name: "Priya S.",
    archetype: "The Race Convert",
    location: "Austin, TX",
    age: 29,
    role: "Product designer · signed up for a Spartan Sprint",
    quote: "Milo restructured without losing the strength base I'd built.",
    problem: "Started with no goal. Now has a race in 6 weeks.",
  },
  {
    slug: "marcus-czar-w-polymath-athlete",
    name: 'Marcus "Czar" W.',
    archetype: "The Polymath Athlete",
    location: "Boulder, CO",
    age: 38,
    role: "Fitness entrepreneur · lifter, CrossFitter, runner, climber, boxer",
    quote: "Every program says pick one. Milo said tell me all five.",
    problem: "Does five disciplines equally. Every coach forces a choice.",
  },
];

export default function AvatarsPage() {
  return (
    <main>
      <Nav />
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The People in the Forge
            </h1>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Real people. Real Milo conversations. Each one is different. Each one is coached differently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {avatars.map((avatar) => (
              <Link
                key={avatar.slug}
                href={`/avatars/${avatar.slug}`}
                className="card p-6 hover:border-[var(--color-primary)] transition-colors group"
              >
                <div className="mb-4">
                  <div className="eyebrow text-xs mb-1">{avatar.archetype}</div>
                  <h2 className="font-display text-xl font-bold group-hover:text-[var(--color-primary)] transition-colors">
                    {avatar.name}
                  </h2>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    {avatar.age} · {avatar.location}
                  </p>
                </div>

                <p className="text-sm text-[var(--color-muted)] mb-4 leading-snug">{avatar.role}</p>

                <blockquote className="border-l-2 border-[var(--color-primary)]/50 pl-3 text-xs italic text-[var(--color-muted)] mb-4">
                  &ldquo;{avatar.quote}&rdquo;
                </blockquote>

                <p className="text-xs text-[var(--color-text)] leading-snug font-medium">
                  {avatar.problem}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
            <p className="text-[var(--color-muted)] mb-4">
              Which archetype is closest to where you are?
            </p>
            <Link href="/waitlist" className="btn-primary">
              Tell Milo your situation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
