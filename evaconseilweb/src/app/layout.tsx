import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteCopy } from "@/content/site";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const documentLanguageScript = `(() => {
  const segments = window.location.pathname.split("/");
  const language = segments.find((segment) => segment === "fr" || segment === "ro");
  document.documentElement.lang = language || "en";
})();`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "EVA Conseil Europe",
  title: siteCopy.en.meta.title,
  description: siteCopy.en.meta.description,
  authors: [{ name: "EVA Conseil Europe" }],
  creator: "EVA Conseil Europe",
  robots: {
    index: true,
    follow: true,
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
