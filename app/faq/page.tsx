import type { Metadata } from "next";
import FaqPageView from "@/components/legal/FaqPageView";

export const metadata: Metadata = {
  title: "FAQ | ART-IST.CLUB",
  description:
    "Answers about ART-IST.CLUB artist discovery, accounts, job requests, messaging, membership information pages, and legal topics.",
};

export default function FaqPage() {
  return <FaqPageView />;
}
