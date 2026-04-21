export function CreedBand() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* SVG filter for the heat-shimmer effect on "iron." */}
      <svg
        width="0"
        height="0"
        aria-hidden
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <defs>
          <filter
            id="forge-heat"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.022"
              numOctaves="2"
              seed="4"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.018 0.022;0.022 0.018;0.018 0.022"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 1200px 500px at 50% 50%, rgba(255,107,53,0.22), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,107,53,0.6), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,107,53,0.6), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="eyebrow mb-6">Proverbs 27:17</p>
        <h2
          className="font-display font-extrabold tracking-tight leading-[0.92] mb-8"
          style={{ fontSize: "clamp(56px, 11vw, 148px)" }}
        >
          <span className="block">Iron</span>
          <span className="block text-[var(--color-muted)]">sharpens</span>
          <span
            className="block text-[var(--color-primary)]"
            style={{ filter: "url(#forge-heat)" }}
          >
            iron.
          </span>
        </h2>
        <p className="text-base md:text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
          A coach who flatters you is useless. A coach who hammers you without
          listening is worse. Milo does neither — he reads every set, argues
          back when he should, and rewrites your plan the moment the data says
          to.
        </p>
      </div>
    </section>
  );
}
