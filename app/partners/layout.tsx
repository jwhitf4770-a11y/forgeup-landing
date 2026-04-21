import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership — ForgeUp",
  description: "Partner with ForgeUp. Integrate Milo into your platform and give your users a conversational strength coach.",
  openGraph: {
    title: "Partnership with ForgeUp",
    description: "Integrate Milo into your platform.",
    url: "https://forgeup.app/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership with ForgeUp",
    description: "Integrate Milo into your platform.",
  },
  alternates: {
    canonical: "https://forgeup.app/partners",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
