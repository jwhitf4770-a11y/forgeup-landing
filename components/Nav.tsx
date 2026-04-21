import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-bg)]/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/forgeup-logo.png"
            alt="ForgeUp"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-lg tracking-tight">ForgeUp</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.18em] text-[var(--color-primary)]/80 font-semibold">
              Iron sharpens iron.
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <a href="#how-it-works" className="text-sm text-[var(--color-muted)] hover:text-white hidden md:inline transition-colors">
            How it works
          </a>
          <a href="#pricing" className="text-sm text-[var(--color-muted)] hover:text-white hidden md:inline transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-[var(--color-muted)] hover:text-white hidden md:inline transition-colors">
            FAQ
          </a>
          <Link href="/partners" className="text-sm text-[var(--color-muted)] hover:text-white hidden md:inline transition-colors">
            Partner (V2)
          </Link>
          <Link href="/waitlist" className="btn-primary text-sm !py-2 !px-4">
            Try Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
