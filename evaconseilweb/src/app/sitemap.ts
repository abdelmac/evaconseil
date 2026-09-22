import type { MetadataRoute } from "next";
import { locales } from "@/content/site";
import { languageAlternates, localeUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: localeUrl(locale),
    alternates: {
      languages: languageAlternates,
    },
  }));
}
