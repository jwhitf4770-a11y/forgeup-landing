import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForgeUp — Iron sharpens iron.",
  description:
    "ForgeUp's coach Milo builds your strength program, then reshapes it every time you talk to him. Not a PDF. Not a yes-man.",
  metadataBase: new URL("https://forgeup.app"),
  icons: {
    icon: "/forgeup-logo.png",
    apple: "/forgeup-logo.png",
  },
  openGraph: {
    title: "ForgeUp — Iron sharpens iron.",
    description:
      "Milo builds your strength program, then reshapes it every time you talk to him.",
    url: "https://forgeup.app",
    siteName: "ForgeUp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@forgeupapp",
    creator: "@forgeupapp",
    title: "ForgeUp — Iron sharpens iron.",
    description:
      "Milo builds your strength program, then reshapes it every time you talk to him.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://forgeup.app",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ForgeUp",
  url: "https://forgeup.app",
  logo: "https://forgeup.app/forgeup-logo.png",
  description: "ForgeUp's coach Milo builds your strength program, then reshapes it every time you talk to him.",
  sameAs: ["https://twitter.com/forgeupapp"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "support@forgeup.app",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://forgeup.app",
  name: "ForgeUp",
  searchAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://forgeup.app/search?q={search_term_string}",
    },
    query_input: "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
