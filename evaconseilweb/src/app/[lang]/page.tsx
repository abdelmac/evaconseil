import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HoldingSite } from "@/components/holding-site";
import { isLocale, locales } from "@/content/site";
import { pageMetadata } from "@/lib/site-config";

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

  return pageMetadata(lang);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "en") {
    notFound();
  }

  return <HoldingSite locale={lang} />;
}
