import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Privacy — ForgeUp" };

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <section className="px-6 py-20 max-w-3xl mx-auto prose prose-invert">
        <h1 className="font-display text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-[var(--color-muted)]">
          [Placeholder] This page is a stub. The final Privacy Policy will cover
          what we collect (account info, workout logs, device identifiers), how
          we use it (to personalize Milo&apos;s coaching), who processes it
          (Supabase, OpenAI/Anthropic for inference, Apple/Google for auth), and
          your rights (access, export, deletion).
        </p>
        <p className="text-[var(--color-muted)] mt-4">
          Contact: <a href="mailto:privacy@forgeup.app">privacy@forgeup.app</a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
