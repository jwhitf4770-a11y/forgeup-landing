import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { stories } from "@/lib/stories";

export const metadata = {
  title: "User Stories — Real Athletes, Real Coaching | ForgeUp",
  description:
    "See how Milo coaches different athletes. From returning lifters to polymath athletes, find your archetype.",
  openGraph: {
    title: "User Stories — Real Athletes, Real Coaching",
    description:
      "See how Milo coaches different athletes across different disciplines.",
    type: "website",
  },
};

export default function StoriesIndex() {
  const storyList = Object.values(stories);

  return (
    <main>
      <Nav />
      <article className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Find Your Archetype
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
              See how Milo coaches different athletes. Real conversations. Real
              transformations. Real results.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {storyList.map((story) => (
              <div
                key={story.slug}
                className="card overflow-hidden flex flex-col"
              >
                <div className="relative h-40 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-surface)] flex items-center justify-center overflow-hidden">
                  {story.imageUrl ? (
                    <>
                      <Image
                        src={story.imageUrl}
                        alt={story.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/60 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white opacity-20">
                        {story.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">
                      {story.archetype}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {story.name}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">
                      {story.age} • {story.location} • {story.discipline}
                    </p>
                  </div>

                  <blockquote className="text-[var(--color-text)] italic border-l-2 border-[var(--color-primary)]/50 pl-3 mb-6 flex-grow">
                    "{story.pullQuote}"
                  </blockquote>

                  <Link
                    href={`/stories/${story.slug}`}
                    className="btn-primary w-full text-center"
                  >
                    Read Their Story
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-[var(--color-muted)] mb-6">
              Ready to write your own story?
            </p>
            <Link href="/waitlist" className="btn-primary">
              Join the Beta
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
