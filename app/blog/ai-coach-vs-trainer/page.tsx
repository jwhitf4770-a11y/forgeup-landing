import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Coach ≠ Trainer Replacement — ForgeUp",
  description: "Milo isn't here to replace great trainers. For athletes without access to coaching, Milo is the voice in your ear pushing you forward.",
  openGraph: {
    title: "AI Coach ≠ Trainer Replacement",
    description: "Milo isn't here to replace great trainers. For athletes without access to coaching, Milo is the voice in your ear.",
    url: "https://forgeup.app/blog/ai-coach-vs-trainer",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coach ≠ Trainer Replacement",
    description: "Milo isn't here to replace great trainers.",
  },
  alternates: {
    canonical: "https://forgeup.app/blog/ai-coach-vs-trainer",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "AI Coach ≠ Trainer Replacement",
  description: "Milo isn't here to replace great trainers. For athletes without access to coaching, Milo is the voice in your ear pushing you forward.",
  image: "https://forgeup.app/forgeup-logo.png",
  datePublished: "2026-04-16",
  author: {
    "@type": "Organization",
    name: "ForgeUp",
  },
  publisher: {
    "@type": "Organization",
    name: "ForgeUp",
    logo: {
      "@type": "ImageObject",
      url: "https://forgeup.app/forgeup-logo.png",
    },
  },
};

export default function BlogPost() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Nav />
      <article className="px-6 py-16 max-w-2xl mx-auto">
        <Link href="/blog" className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 mb-6 inline-block">
          ← Back to blog
        </Link>

        <header className="mb-12">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
              Philosophy
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            AI Coach ≠ Trainer Replacement
          </h1>
          <time className="text-sm text-[var(--color-muted)]">
            April 16, 2026
          </time>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-text)]">
          <p className="text-lg text-[var(--color-muted)]">
            If you have access to a great human trainer, you don't need Milo. You need that trainer. A good one will always outpace an AI. But for the millions of lifters without coaching access, Milo is their voice.
          </p>

          <h2 className="text-2xl font-bold mt-8">Two Different Problems</h2>
          <p>
            <strong>Problem 1:</strong> You're an athlete with a trainer. You get feedback. You have accountability. Your program changes based on real-time assessment. This is gold.
          </p>
          <p>
            <strong>Problem 2:</strong> You're a lifter without a trainer. You have a program. You follow it alone. When it stops working, you're lost. You keep grinding. Nothing changes.
          </p>
          <p>
            Milo solves Problem 2. Not Problem 1.
          </p>

          <h2 className="text-2xl font-bold mt-8">How Trainers Use Milo</h2>
          <p>
            Some trainers are already asking about integrating Milo into their practice. Not because they're threatened, but because Milo handles the bulk of the work — the program building, the rewriting, the routine check-ins — and they handle what only a human can: in-person assessment, form feedback, and accountability.
          </p>
          <p>
            Your trainer stays in control. Milo is the second set of eyes.
          </p>

          <h2 className="text-2xl font-bold mt-8">The Reality</h2>
          <p>
            Milo can't watch your form. Can't see if your knees are caving in on the squat or your back is rounding on the deadlift. Can't feel if you're actually working hard or just going through the motions.
          </p>
          <p>
            A great trainer sees all of that. And they adjust.
          </p>
          <p>
            What Milo does: remember everything. Build programs from that memory. Push back when you're lazy. Be available at 2am when you need to talk through your training.
          </p>

          <div className="my-8 p-6 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
            <p className="text-sm">
              <strong>For trainers and coaches:</strong> Interested in partnering?{" "}
              <Link href="/partners" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80">
                Learn about our V2 program.
              </Link>
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
