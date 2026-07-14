import type { Metadata } from "next";
import CookiesPageView from "@/components/legal/CookiesPageView";

export const metadata: Metadata = {
  title: "Cookie Policy | ART-IST.CLUB",
  description:
    "How ART-IST.CLUB uses cookies and similar technologies for essential operation, preferences, and related platform functions.",
};

export default function CookiesPage() {
  return <CookiesPageView />;
}
