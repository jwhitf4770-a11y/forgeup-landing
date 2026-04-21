import Link from "next/link";
import { BetaSignupInline } from "@/components/BetaSignupInline";

export function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="forge-glow" aria-hidden />
      <EmberField />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="eyebrow !text-[11px]">
              As iron sharpens iron · Proverbs 27:17
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div>
            <h1 className="display-xl mb-6">
              Iron sharpens<br />
              <span className="text-[var(--color-primary)]">iron.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[var(--color-text)] leading-snug max-w-xl mb-4 font-semibold">
              Whatever you&rsquo;re training for, Milo builds the program. Then he rewrites it every time life changes.
            </p>
            <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl mb-3">
              General fitness. Powerlifting meet. Spartan race. Wanting to deadlift 200 by your birthday. Milo doesn&rsquo;t care which one — he just builds around it and adjusts as you go.
            </p>
            <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-xl mb-9">
              No templates. No intake forms. Full context, every session, forever.
            </p>
            <BetaSignupInline className="max-w-md" />
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              No credit card · <a href="#how-it-works" className="text-[var(--color-primary)]/80 hover:text-[var(--color-primary)] underline underline-offset-2">See Milo in action</a>
            </p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <span className="text-sm text-[var(--color-muted)] font-medium">Coming to:</span>
              <div className="flex gap-2">
                <div className="px-3 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]/50 text-xs font-semibold text-[var(--color-text)]/70 flex items-center gap-2">
                  <span>🍎</span>
                  <span>App Store</span>
                </div>
                <div className="px-3 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]/50 text-xs font-semibold text-[var(--color-text)]/70 flex items-center gap-2">
                  <span>🤖</span>
                  <span>Google Play</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
              Apple Watch & WearOS support included. No credit card. No commitment.
            </p>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function EmberField() {
  const embers = [
    { left: "8%", delay: "0s", dur: "6s", drift: "25px", size: 3 },
    { left: "18%", delay: "1.4s", dur: "7s", drift: "-18px", size: 4 },
    { left: "32%", delay: "2.8s", dur: "5.5s", drift: "12px", size: 3 },
    { left: "48%", delay: "0.8s", dur: "6.5s", drift: "-22px", size: 4 },
    { left: "58%", delay: "3.2s", dur: "7.5s", drift: "14px", size: 3 },
    { left: "74%", delay: "1.9s", dur: "6s", drift: "-10px", size: 4 },
    { left: "86%", delay: "2.4s", dur: "5.8s", drift: "20px", size: 3 },
    { left: "92%", delay: "4s", dur: "7s", drift: "-16px", size: 4 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: e.left,
            bottom: "-10px",
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDuration: e.dur,
            animationDelay: e.delay,
            ["--ember-drift" as string]: e.drift,
          }}
        />
      ))}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,107,53,0.35), transparent 70%)",
        }}
      />
      <div className="relative aspect-[9/19.5] rounded-[2.75rem] bg-gradient-to-b from-[#1a1a1f] to-black border border-[var(--color-border)] shadow-[0_40px_120px_-20px_rgba(255,107,53,0.35),0_25px_60px_-15px_rgba(0,0,0,0.8)] p-3">
        <div className="relative h-full w-full rounded-[2.25rem] bg-[var(--color-bg)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
          <div className="h-full w-full flex flex-col pt-10 pb-4 px-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-soft)] flex items-center justify-center text-black font-black text-sm shadow-lg shadow-[var(--color-primary)]/30">
                M
              </div>
              <div>
                <div className="text-sm font-semibold">Milo</div>
                <div className="text-[10px] text-[var(--color-muted)] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> coaching · live
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-3 text-sm overflow-hidden">
              <div className="flex justify-end">
                <div className="bg-[var(--color-primary)] text-black rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%] font-medium">
                  I have a powerlifting meet Oct 18th
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] border-l-2 border-l-[var(--color-primary)]/50 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[90%]">
                  <div className="text-[10px] text-[var(--color-primary)] font-semibold mb-0.5">Milo</div>
                  <span className="type-line" style={{ ["--type-width" as string]: "100%" }}>
                    25 weeks out. We&rsquo;re starting the accumulation block Monday.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs text-[var(--color-muted)] flex items-center justify-between">
              <span>Type or hold to talk…</span>
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black text-xs">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
