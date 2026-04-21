import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Beta — ForgeUp",
  description: "Get early access to Milo. Sign up for the ForgeUp beta and be among the first to experience a conversational strength coach.",
  openGraph: {
    title: "Join the ForgeUp Beta",
    description: "Get early access to Milo. Sign up for the ForgeUp beta.",
    url: "https://forgeup.app/waitlist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the ForgeUp Beta",
    description: "Get early access to Milo.",
  },
  alternates: {
    canonical: "https://forgeup.app/waitlist",
  },
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
