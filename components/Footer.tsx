import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/forgeup-logo.png"
              alt="ForgeUp"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-display font-bold text-lg">ForgeUp</span>
          </div>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Iron sharpens iron. Milo sharpens you — whatever you&rsquo;re training for.
          </p>
        </div>

        <FooterCol
          heading="Product"
          links={[
            { label: "How Milo works", href: "#how-it-works" },
            { label: "For Athletes", href: "/blog/training-for-a-powerlifting-meet-with-milo" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
            { label: "Join Beta", href: "/waitlist" },
          ]}
        />
        <FooterCol
          heading="Company"
          links={[
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "mailto:hello@forgeup.app" },
          ]}
        />
        <FooterCol
          heading="Legal"
          links={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Data &amp; deletion", href: "/data" },
          ]}
        />
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--color-muted)]">
        <div>© {new Date().getFullYear()} ForgeUp. All rights reserved.</div>
        <div>Built for anyone serious about progress.</div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3 font-semibold">
        {heading}
      </div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[var(--color-text)]/80 hover:text-[var(--color-primary)] transition-colors"
              dangerouslySetInnerHTML={{ __html: l.label }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
