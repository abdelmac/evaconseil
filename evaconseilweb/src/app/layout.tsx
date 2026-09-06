import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const documentLanguageScript = `(() => {
  const segments = window.location.pathname.split("/");
  const language = segments.find((segment) => segment === "fr" || segment === "ro");
  document.documentElement.lang = language || "en";
})();`;

export const metadata: Metadata = {
  applicationName: "EVA Conseil",
  title: "EVA Conseil | Independent Holding Company in Romania",
  description:
    "EVA Conseil is an independent Romanian holding company focused on patient ownership, active partnership and enduring value.",
  keywords: [
    "EVA Conseil",
    "Romanian holding company",
    "long-term investment",
    "patient capital",
    "Romania",
  ],
  authors: [{ name: "EVA Conseil" }],
  creator: "EVA Conseil",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "EVA Conseil",
    title: "EVA Conseil | Built for the long view",
    description:
      "An independent Romanian holding company focused on patient ownership, active partnership and enduring value.",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ro_RO"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: documentLanguageScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
