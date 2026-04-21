import type { ReactNode } from "react";

const avatars: Avatar[] = [
  {
    archetype: "The Returning Lifter",
    name: "Marcus K.",
    city: "Columbus, OH",
    age: 38,
    role: "Operations manager · kids ended a 6-yr gym gap",
    initials: "MK",
    glyph: <BarbellGlyph />,
    style: { bg: "var(--color-primary)", text: "#0a0a0b", ring: true },
    pain: "Knows enough to be dangerous. About to write himself a program from 2016.",
    win: "Milo caught the overreach before it happened and reset expectations.",
    quote:
      "First session back I wanted to squat 225. Milo said, “That&rsquo;s ambitious for a guy who&rsquo;s been sedentary for six years. We&rsquo;re starting at 135.” I hated it. He was right.",
  },
  {
    archetype: "The Powerlifter",
    name: "Dana R.",
    city: "Minneapolis, MN",
    age: 31,
    role: "Software engineer · 5 yrs competitive · three spreadsheets per block",
    initials: "DR",
    glyph: <CrossedBarsGlyph />,
    style: { bg: "#1a1a20", text: "#ff6b35", ring: true, border: true },
    pain: "Too deep in her own periodization to see the pattern that&rsquo;s stalling her.",
    win: "Milo surfaced what she couldn&rsquo;t see and argued back when she argued for comfort.",
    quote:
      "I said I wanted another 12-week squat focus. Milo basically told me my squat wasn&rsquo;t the problem, my deadlift was eating all my recovery. I didn&rsquo;t have a comeback.",
  },
  {
    archetype: "The Hybrid Athlete",
    name: "James T.",
    city: "Denver, CO",
    age: 27,
    role: "Physical therapist · runs 2–3× · lifts 3× · refuses to pick",
    initials: "JT",
    glyph: <DualGlyph />,
    style: { bg: "linear-gradient(135deg, #ff6b35 0%, #ff6b35 50%, #4a3f8f 50%, #4a3f8f 100%)", text: "#0a0a0b", ring: true },
    pain: "Every generic program assumes you&rsquo;re either a runner or a lifter.",
    win: "Milo adjusts lift volume around his running load instead of ignoring it.",
    quote:
      "I had a 16-mile long run Saturday. Milo pulled my Sunday leg session and pushed it to Wednesday without me asking. That was the moment I stopped thinking of it as an app.",
  },
  {
    archetype: "The Strength-Seeker",
    name: "Carol B.",
    city: "Scottsdale, AZ",
    age: 54,
    role: "Former middle-school track coach · 4× / week · wants to deadlift 200",
    initials: "CB",
    glyph: <FlameGlyph />,
    style: { bg: "#f5f5f7", text: "#0a0a0b", ring: true },
    pain: "Every app assumes she wants to lose weight or is in rehab. She wants to be strong.",
    win: "Milo programs for performance without condescension.",
    quote:
      "I told Milo I&rsquo;m 54 and want to deadlift 200 pounds. He said “Okay. Here&rsquo;s the 14-week path.” No disclaimers. No “consult your doctor.” Just the program.",
  },
  {
    archetype: "The Ex-Athlete",
    name: "Troy M.",
    city: "Atlanta, GA",
    age: 34,
    role: "Sales director · D2 football thru 22 · bounces programs every 8 weeks",
    initials: "TM",
    glyph: <ShieldGlyph />,
    style: { bg: "var(--color-primary)", text: "#0a0a0b", square: true, ring: true },
    pain: "Chasing the feeling of 20-year-old fitness with a 34-year-old recovery bank.",
    win: "Milo won&rsquo;t let him romanticize the past or skip the base-building.",
    quote:
      "I told Milo I used to run a 4.7 forty. He said, “That was twelve years ago. What&rsquo;s your current 400m time?” I didn&rsquo;t know. He said, “That&rsquo;s where we start.”",
  },
  {
    archetype: "The Race Convert",
    name: "Priya S.",
    city: "Austin, TX",
    age: 29,
    role: "Product designer . started as general fitness . signed up for a Spartan Sprint",
    initials: "PS",
    glyph: <FlagGlyph />,
    style: { bg: "#1a1a20", text: "#ff6b35", ring: true, border: true },
    pain: "Started with no specific goal. Now has a race in 6 weeks and doesn't know if her program still applies.",
    win: "Told Milo about the race. He restructured without losing the strength base she'd built.",
    quote: "I told Milo I signed up for a Spartan race kind of on a dare. He said, \"Okay, six weeks. Here's what changes and here's what stays.\" I expected him to start over. He didn't.",
  },
  {
    archetype: "The Polymath Athlete",
    name: "Marcus &ldquo;Czar&rdquo; W.",
    city: "Boulder, CO",
    age: 38,
    role: "Fitness entrepreneur . lifter . CrossFit . runner . climber . boxer . refuses to choose",
    initials: "CZ",
    glyph: <StarGlyph />,
    style: { bg: "linear-gradient(135deg, #1a1a20 0%, #1a1a20 50%, #0a4a8f 50%, #0a4a8f 100%)", text: "#ffd700", ring: true },
    pain: "Every coach forces a choice: pick your primary sport. He wants to master five simultaneously.",
    win: "Milo threads the recovery budget across all five disciplines without sacrificing any.",
    quote: "Every program I've tried says pick one. Milo said, tell me all five and I'll make them coexist. That's the difference between software and a coach.",
  },
];

type Avatar = {
  archetype: string;
  name: string;
  city: string;
  age: number;
  role: string;
  initials: string;
  glyph: ReactNode;
  style: {
    bg: string;
    text: string;
    ring?: boolean;
    border?: boolean;
    square?: boolean;
  };
  pain: string;
  win: string;
  quote: string;
};

export function SocialProof() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="eyebrow mb-3">The people in the forge</p>
          <h2 className="section-heading mb-4">
            Real people. Real Milo conversations.<br />
            <span className="text-[var(--color-muted)]">Make your own call.</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            No two lifters walk into the gym with the same history. A coach
            who treats them the same is a bad coach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {avatars.map((a) => (
            <AvatarCard key={a.name} a={a} />
          ))}
          <FinalSlot />
        </div>

        <p className="text-center text-xs text-[var(--color-muted)] mt-10">
          Personas represent composite archetypes from closed-beta lifters.
          Real names and photos go live at public launch.
        </p>
      </div>
    </section>
  );
}

function AvatarCard({ a }: { a: Avatar }) {
  return (
    <article className="card p-7 flex flex-col">
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`relative flex items-center justify-center font-display font-black text-xl ${
            a.style.square ? "rounded-xl" : "rounded-full"
          }`}
          style={{
            width: 64,
            height: 64,
            background: a.style.bg,
            color: a.style.text,
            border: a.style.border ? `2px solid var(--color-primary)` : undefined,
          }}
        >
          {a.initials}
          <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
            {a.glyph}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="eyebrow mb-1 !text-[10px]">{a.archetype}</div>
          <div className="font-display font-bold text-lg leading-tight">
            {a.name}
          </div>
          <div className="text-xs text-[var(--color-muted)] truncate">
            {a.age} · {a.city}
          </div>
        </div>
      </div>

      <p className="text-xs text-[var(--color-muted)] leading-snug mb-4">{a.role}</p>

      <blockquote
        className="relative pl-4 border-l-2 border-[var(--color-primary)]/50 text-[var(--color-text)] leading-relaxed mb-5"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${a.quote}&rdquo;` }}
      />

      <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-[var(--color-border)]">
        <div>
          <div className="eyebrow !text-[10px] !tracking-widest mb-1 !text-[var(--color-muted)]">
            Pain
          </div>
          <p
            className="text-xs text-[var(--color-muted)] leading-snug"
            dangerouslySetInnerHTML={{ __html: a.pain }}
          />
        </div>
        <div>
          <div className="eyebrow !text-[10px] !tracking-widest mb-1">Win</div>
          <p
            className="text-xs text-[var(--color-text)] leading-snug"
            dangerouslySetInnerHTML={{ __html: a.win }}
          />
        </div>
      </div>
    </article>
  );
}

function FinalSlot() {
  return (
    <article className="card-hot p-7 flex flex-col justify-center items-center text-center relative min-h-[280px]">
      <div className="eyebrow mb-3">The next one</div>
      <div className="font-display text-2xl font-bold leading-tight mb-3">
        This could be your log.
      </div>
      <p className="text-sm text-[var(--color-muted)] mb-5 max-w-[240px] leading-relaxed">
        Beta is open. 14 days free — your logs stay yours forever.
      </p>
      <a href="/waitlist" className="btn-primary text-sm !py-2.5 !px-5">
        Claim your free trial
      </a>
    </article>
  );
}

function BarbellGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)]">
      <rect x="3" y="7" width="2" height="6" />
      <rect x="15" y="7" width="2" height="6" />
      <rect x="5" y="9" width="10" height="2" />
    </svg>
  );
}

function CrossedBarsGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--color-primary)]">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}

function DualGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--color-primary)]">
      <path d="M4 13 L7 8 L10 13 L13 9 L16 13" />
    </svg>
  );
}

function FlameGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor" className="text-[var(--color-primary)]">
      <path d="M10 2 C9 6 6 7 6 11 a4 4 0 0 0 8 0 c0-3-2-4-2-6 c0-1 0-2-2-3 z" />
    </svg>
  );
}

function ShieldGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-[var(--color-primary)]">
      <path d="M10 3 L16 5 V10 C16 13 13 16 10 17 C7 16 4 13 4 10 V5 Z" />
    </svg>
  );
}

function FlagGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
      <path d="M4 3 v14 M4 3 h9 l-2 4 h3 l-2 4 H4" />
    </svg>
  );
}

function StarGlyph() {
  return (
    <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor" className="text-[#ffd700]">
      <path d="M10 1 L13 8 L20 8 L15 12 L17 19 L10 15 L3 19 L5 12 L0 8 L7 8 Z" />
    </svg>
  );
}
