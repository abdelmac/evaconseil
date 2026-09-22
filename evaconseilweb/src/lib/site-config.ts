import type { Metadata } from "next";
import { type Locale, locales, siteCopy } from "@/content/site";

// Include the project path when publishing to a GitHub Pages project URL.
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://eva-europe-conseil.com";

export const siteUrl = new URL(`${configuredSiteUrl.replace(/\/+$/, "")}/`);

export function absoluteSiteUrl(path = "") {
  return new URL(path.replace(/^\/+/, ""), siteUrl).toString();
}

export function localeUrl(locale: Locale) {
  return absoluteSiteUrl(locale === "en" ? "" : `${locale}/`);
}

export const languageAlternates = {
  en: localeUrl("en"),
  fr: localeUrl("fr"),
  ro: localeUrl("ro"),
  "x-default": localeUrl("en"),
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  ro: "ro_RO",
};

export function pageMetadata(locale: Locale): Metadata {
  const { title, description } = siteCopy[locale].meta;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale),
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: "EVA Conseil Europe",
      title,
      description,
      url: localeUrl(locale),
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
