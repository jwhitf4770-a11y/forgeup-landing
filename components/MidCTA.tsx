import Link from "next/link";

export function MidCTA() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="card-hot p-8 md:p-10 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 w-80 h-80 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,107,53,0.5), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-2">
                Whatever you&rsquo;re training for, Milo can build it.
              </h3>
              <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                General fitness or October meet — tell him. He handles the program and everything that changes along the way.
              </p>
            </div>
            <Link href="/waitlist" className="btn-primary whitespace-nowrap">
              Start training with Milo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
