import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — ForgeUp",
  description: "Training philosophy, coaching insights, and Milo updates from the ForgeUp team.",
  openGraph: {
    title: "ForgeUp Blog",
    description: "Training philosophy, coaching insights, and Milo updates.",
    url: "https://forgeup.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeUp Blog",
    description: "Training philosophy, coaching insights, and Milo updates.",
  },
  alternates: {
    canonical: "https://forgeup.app/blog",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: "milo-adaptive-programs",
    title: "How Milo Adapts Your Program in Real Time",
    excerpt:
      "Your program shouldn't be static. When life changes, your training should too. Here's how Milo rewrites your plan before you leave the couch.",
    date: "2026-04-18",
    category: "Coaching",
  },
  {
    slug: "ai-coach-vs-trainer",
    title: "AI Coach ≠ Trainer Replacement",
    excerpt:
      "Milo isn't here to replace great trainers. For athletes without access to coaching, Milo is the voice in your ear pushing you forward. For those with a coach, Milo is a second opinion.",
    date: "2026-04-16",
    category: "Philosophy",
  },
  {
    slug: "consistency-beats-perfection",
    title: "Consistency Beats Perfect Programs",
    excerpt:
      "The best program is the one you actually follow. We looked at 10,000 training logs to find out what separates lifters who make progress from those who plateau.",
    date: "2026-04-12",
    category: "Training",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Nav />
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ForgeUp Blog
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            Training philosophy, coaching insights, and Milo updates.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="pb-8 border-b border-[var(--color-border)] last:border-b-0">
              <div className="mb-3">
                <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 hover:text-[var(--color-primary)] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-xs text-[var(--color-muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-medium transition-colors"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
