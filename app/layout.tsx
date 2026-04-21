import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForgeUp — Iron sharpens iron.",
  description:
    "ForgeUp's coach Milo builds your strength program, then reshapes it every time you talk to him. Not a PDF. Not a yes-man.",
  metadataBase: new URL("https://forgeup.app"),
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
    title: "ForgeUp — Iron sharpens iron.",
    description:
      "Milo builds your strength program, then reshapes it every time you talk to him.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
