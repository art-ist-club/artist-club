import type { Metadata } from "next";
import ContactPageView from "@/components/legal/ContactPageView";

export const metadata: Metadata = {
  title: "Contact ART-IST.CLUB",
  description:
    "Contact ART-IST.CLUB for platform guidance, account help, partnerships, media, and legal inquiries through verified on-platform channels.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
