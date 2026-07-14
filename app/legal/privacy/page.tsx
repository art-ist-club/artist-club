import type { Metadata } from "next";
import PrivacyPageView from "@/components/legal/PrivacyPageView";

export const metadata: Metadata = {
  title: "Privacy Policy | ART-IST.CLUB",
  description:
    "How ART-IST.CLUB processes personal data related to accounts, profiles, discovery, job requests, and messaging — with references to cookies and legal pages.",
};

export default function PrivacyPage() {
  return <PrivacyPageView />;
}
