import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MiloConversation, Message } from "@/components/MiloChat";

export type StoryData = {
  slug: string;
  archetype: string;
  name: string;
  age: number;
  location: string;
  discipline: string;
  frequency: string;
  imageUrl: string;
  pullQuote: string;
  problem: string;
  conversation: Message[];
  outcome: string;
};

export function StoryTemplate({ story }: { story: StoryData }) {
  return (
    <main>
      <Nav />
      <article className="px-6 py-12">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-surface)]">
              <Image
                src={story.imageUrl}
                alt={story.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start gap-6">
              <div>
                <div className="eyebrow mb-2">User Story</div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-2">
                  {story.name}
                </h1>
                <p className="text-[var(--color-primary)] text-lg font-medium">
                  {story.archetype}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] font-semibold mb-1">
                    Age
                  </div>
                  <div className="text-2xl font-bold">{story.age}</div>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] font-semibold mb-1">
                    Location
                  </div>
                  <div className="text-lg font-bold truncate">{story.location}</div>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] font-semibold mb-1">
                    Discipline
                  </div>
                  <div className="text-lg font-bold">{story.discipline}</div>
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] font-semibold mb-1">
                    Frequency
                  </div>
                  <div className="text-lg font-bold">{story.frequency}</div>
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 italic text-lg text-[var(--color-muted)]">
                "{story.pullQuote}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Problem */}
          <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-[var(--color-muted)] leading-relaxed text-lg">
              {story.problem}
            </p>
          </section>

          {/* Conversation */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-8">How Milo Coached It</h2>
            <MiloConversation messages={story.conversation} />
          </section>

          {/* Outcome */}
          <section className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-surface)] border border-[var(--color-primary)]/30 rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold mb-4">The Shift</h2>
            <p className="text-[var(--color-text)] leading-relaxed text-lg">
              {story.outcome}
            </p>
          </section>

          {/* CTA */}
          <section className="card-hot p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              This could be you.
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              Join the beta and let Milo build your adaptive program.
            </p>
            <Link href="/waitlist" className="btn-primary">
              Start Your Story
            </Link>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
