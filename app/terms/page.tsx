import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Terms — ForgeUp" };

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-[var(--color-muted)]">
          [Placeholder] This page is a stub. Final Terms will cover subscription
          billing, acceptable use, disclaimers around health/fitness advice (Milo
          is a coach, not a doctor), arbitration, and governing law.
        </p>
        <p className="text-[var(--color-muted)] mt-4">
          Contact: <a href="mailto:legal@forgeup.app">legal@forgeup.app</a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
