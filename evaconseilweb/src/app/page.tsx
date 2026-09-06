import type { Metadata } from "next";
import { HoldingSite } from "@/components/holding-site";
import { siteCopy } from "@/content/site";

export const metadata: Metadata = {
  title: siteCopy.en.meta.title,
  description: siteCopy.en.meta.description,
};

export default function Home() {
  return <HoldingSite locale="en" />;
}
