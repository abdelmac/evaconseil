import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HoldingSite } from "@/components/holding-site";
import { isLocale, locales, siteCopy } from "@/content/site";

type LocalePageProps = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "en") {
    return {};
  }

  const copy = siteCopy[lang].meta;
  const openGraphLocale = lang === "fr" ? "fr_FR" : "ro_RO";

  return {
    title: copy.title,
    description: copy.description,
    openGraph: {
      type: "website",
      siteName: "EVA Conseil",
      title: copy.title,
      description: copy.description,
      locale: openGraphLocale,
      alternateLocale: lang === "fr" ? ["en_US", "ro_RO"] : ["en_US", "fr_FR"],
    },
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description,
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return <HoldingSite locale={lang} />;
}
