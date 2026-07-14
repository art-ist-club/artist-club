import type { Metadata } from "next";
import TermsPageView from "@/components/legal/TermsPageView";

export const metadata: Metadata = {
  title: "Terms of Use | ART-IST.CLUB",
  description:
    "Terms of Use for ART-IST.CLUB — the global artist discovery platform for professional profiles, job requests, and direct communication.",
};

export default function TermsPage() {
  return <TermsPageView />;
}
