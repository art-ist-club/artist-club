import type { Metadata } from "next";
import LegalNoticePageView from "@/components/legal/LegalNoticePageView";

export const metadata: Metadata = {
  title: "Açık Rıza Metni | ART-IST.CLUB",
  description:
    "ART-IST.CLUB açık rıza metni — yalnızca açık rıza gerektiren işlemler için ayrı ve isteğe bağlı bilgilendirme.",
};

export default function ExplicitConsentPage() {
  return <LegalNoticePageView pageKey="explicitConsent" />;
}
