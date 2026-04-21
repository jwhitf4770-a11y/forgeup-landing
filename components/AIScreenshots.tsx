import type { ReactNode } from "react";

export function AIScreenshots() {
  return (
    <section id="how-it-works" className="px-6 py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(closest-side, #ff6b35, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-3">How Milo works</p>
          <h2 className="section-heading mb-5">
            You talk to Milo.<br />
            Your program changes.{" "}
            <span className="text-[var(--color-primary)]">That&rsquo;s it.</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            No forms. No accept buttons. No tapping through wizards. You talk,
            Milo reads your history, and your program moves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          <Screenshot
            label="01 · Onboarding"
            caption="Milo asks what he needs — no 40-field intake form."
          >
            <ChatFrame>
              <Bubble from="milo">
                Before I build anything — what gear do you have, and anything
                currently hurt?
              </Bubble>
              <Bubble from="user">
                Commercial gym. Left shoulder clicks on bench.
              </Bubble>
              <Bubble from="milo">
                Good. Biasing floor press and landmine the first four weeks.
                Goal? Strength, size, or both?
              </Bubble>
              <Bubble from="user">Size, mostly. 4 days.</Bubble>
              <Bubble from="milo">
                Building it now. Upper / Lower / Upper / Lower. First session
                up before you leave the house.
              </Bubble>
            </ChatFrame>
          </Screenshot>

          <Screenshot
            label="02 · Your week"
            caption="Generated, and rewritten every time you chat."
          >
            <ProgramFrame />
          </Screenshot>

          <Screenshot
            label="03 · Mid-workout"
            caption="Life happens. Tell Milo. The session reshapes on the fly."
          >
            <ChatFrame>
              <Bubble from="user">Gym&apos;s packed. Can&apos;t get a rack.</Bubble>
              <Bubble from="milo">
                Rough. Running DB-only: goblet squats 3×12, walking lunges,
                single-leg RDLs. Same stimulus, no rack.
              </Bubble>
              <Bubble from="user">Done with squats. Knee feels fine.</Bubble>
              <Bubble from="milo">
                Nice. Pushing lunges to 35s. Bias the left side on unilateral
                work — it&apos;s behind.
              </Bubble>
            </ChatFrame>
          </Screenshot>

          <Screenshot
            label="04 · On the wrist"
            caption="Log sets from your watch. Milo sees it instantly."
          >
            <WatchFrame />
          </Screenshot>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-6">
          <CapabilityCard
            title="Reads every set you log"
            body="Milo knows your last 12 weeks of training, not just this session. Stalls get caught early."
            badge="01"
          />
          <CapabilityCard
            title="Rewrites on demand"
            body="Tell him you&rsquo;re tired, traveling, pregnant, deloading, peaking — the plan reshapes in seconds."
            badge="02"
          />
          <CapabilityCard
            title="Pushes back when he should"
            body="Ask for another arms day after asking yesterday? He&rsquo;ll tell you why that&rsquo;s a bad idea."
            badge="03"
          />
        </div>
      </div>
    </section>
  );
}

function Screenshot({
  label,
  caption,
  children,
}: {
  label: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="eyebrow mb-3">{label}</div>
      <div className="mb-5">{children}</div>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{caption}</p>
    </div>
  );
}

function PhoneChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative group">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
        style={{
          background: "radial-gradient(closest-side, rgba(255,107,53,0.45), transparent 70%)",
        }}
      />
      <div className="relative aspect-[9/19] rounded-[2.25rem] bg-gradient-to-b from-[#1c1c22] via-[#0f0f13] to-black border border-[#2a2a30] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,107,53,0.15)] p-2.5">
        <div className="relative h-full w-full rounded-[1.85rem] bg-[var(--color-bg)] overflow-hidden flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10" />
          {children}
        </div>
      </div>
    </div>
  );
}

function ChatFrame({ children }: { children: ReactNode }) {
  return (
    <PhoneChrome>
      <div className="pt-7 px-3 pb-2 border-b border-[var(--color-border)] flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-soft)] flex items-center justify-center text-black font-black text-[10px]">
          M
        </div>
        <div>
          <div className="text-xs font-semibold leading-none">Milo</div>
          <div className="text-[9px] text-[var(--color-muted)] flex items-center gap-1 mt-0.5">
            <span className="w-1 h-1 rounded-full bg-green-400" /> live
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-3 space-y-2 text-[11px]">
        {children}
      </div>
      <div className="border-t border-[var(--color-border)] p-2">
        <div className="rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1.5 text-[10px] text-[var(--color-muted)] flex items-center justify-between">
          <span>Message Milo…</span>
          <span className="w-4 h-4 rounded-full bg-[var(--color-primary)]" />
        </div>
      </div>
    </PhoneChrome>
  );
}

function Bubble({ from, children }: { from: "user" | "milo"; children: ReactNode }) {
  if (from === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-[var(--color-primary)] text-black rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[85%] font-medium leading-snug">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[90%] leading-snug">
        {children}
      </div>
    </div>
  );
}

function ProgramFrame() {
  const days = [
    { name: "Mon", focus: "Upper · Push", sub: "5 exercises · 45 min", done: true },
    { name: "Tue", focus: "Lower · Squat", sub: "4 exercises · 50 min", done: true },
    { name: "Wed", focus: "Rest", sub: "mobility optional", rest: true },
    { name: "Thu", focus: "Upper · Pull", sub: "5 exercises · 45 min", active: true },
    { name: "Fri", focus: "Lower · Hinge", sub: "4 exercises · 50 min" },
    { name: "Sat", focus: "Accessory", sub: "arms + core · 30 min" },
    { name: "Sun", focus: "Rest", sub: "", rest: true },
  ];
  return (
    <PhoneChrome>
      <div className="pt-7 px-3 pb-2 border-b border-[var(--color-border)]">
        <div className="flex items-center justify-between">
          <div className="text-[10px] text-[var(--color-muted)] uppercase tracking-wider">
            Week 4 / 8
          </div>
          <div className="text-[9px] text-[var(--color-primary)] font-semibold">
            ● On track
          </div>
        </div>
        <div className="text-sm font-semibold font-display mt-0.5">
          Hypertrophy Block
        </div>
        <div className="mt-2 h-1 rounded-full bg-[var(--color-surface)] overflow-hidden">
          <div className="h-full bg-[var(--color-primary)]" style={{ width: "50%" }} />
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-2.5 space-y-1.5 text-[11px]">
        {days.map((d) => (
          <div
            key={d.name}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 border ${
              d.active
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/15"
                : d.rest
                ? "border-dashed border-[var(--color-border)] bg-transparent"
                : "border-[var(--color-border)] bg-[var(--color-surface)]"
            }`}
          >
            <div className="w-7 text-[9px] font-semibold text-[var(--color-muted)]">
              {d.name}
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate leading-tight">{d.focus}</div>
              {d.sub && (
                <div className="text-[8px] text-[var(--color-muted)] truncate leading-tight mt-0.5">
                  {d.sub}
                </div>
              )}
            </div>
            {d.done && <span className="text-[var(--color-primary)] text-[10px]">✓</span>}
            {d.active && <span className="text-[var(--color-primary)] text-[10px]">●</span>}
          </div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <div className="rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-2 text-[9px] text-[var(--color-muted)] text-center leading-tight">
          Tap any day · chat with Milo to rewrite
        </div>
      </div>
    </PhoneChrome>
  );
}

function WatchFrame() {
  return (
    <div className="aspect-[9/19] flex items-center justify-center">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full blur-2xl opacity-40"
          style={{
            background: "radial-gradient(closest-side, rgba(255,107,53,0.5), transparent 70%)",
          }}
        />
        <div className="relative w-[210px] h-[250px] rounded-[2.75rem] bg-gradient-to-b from-[#2a2a30] to-black border border-[#3a3a40] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,107,53,0.2)]">
          <div className="relative h-full w-full rounded-[2.2rem] bg-[var(--color-bg)] overflow-hidden flex flex-col p-3">
            <div className="flex items-center justify-between text-[8px] text-[var(--color-muted)] uppercase tracking-widest">
              <span>Set 2 / 4</span>
              <span className="text-[var(--color-primary)]">●</span>
            </div>
            <div className="font-display text-xl font-bold leading-tight mt-1">
              Incline DB Press
            </div>
            <div className="text-[9px] text-[var(--color-muted)] mt-0.5">
              Target · 70lb × 10
            </div>
            <div className="flex items-baseline gap-1 mt-3">
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">
                70
              </div>
              <div className="text-[9px] text-[var(--color-muted)]">lb</div>
              <div className="mx-1 text-[var(--color-muted)] text-sm">×</div>
              <div className="font-display text-3xl font-bold text-[var(--color-primary)]">
                10
              </div>
            </div>
            <div className="mt-3 h-1 rounded-full bg-[var(--color-surface)] overflow-hidden">
              <div className="h-full bg-[var(--color-primary)]" style={{ width: "50%" }} />
            </div>
            <div className="mt-auto space-y-1.5">
              <div className="h-7 rounded-lg bg-[var(--color-primary)] text-black text-[10px] font-bold flex items-center justify-center">
                Log set
              </div>
              <div className="h-7 rounded-lg border border-[var(--color-border)] text-[10px] flex items-center justify-center text-[var(--color-muted)]">
                Rest 90s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityCard({
  title,
  body,
  badge,
}: {
  title: string;
  body: string;
  badge: string;
}) {
  return (
    <div className="card p-7 relative">
      <div className="absolute top-6 right-6 font-display font-bold text-3xl text-[var(--color-primary)]/20 select-none">
        {badge}
      </div>
      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center mb-5">
        <span className="text-[var(--color-primary)] font-bold">✓</span>
      </div>
      <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
      <p
        className="text-[var(--color-muted)] leading-relaxed text-sm"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
