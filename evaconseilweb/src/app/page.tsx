import type { Metadata } from "next";
import { HoldingSite } from "@/components/holding-site";
import { pageMetadata } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata("en");

export default function Home() {
  return <HoldingSite locale="en" />;
}
