import type { Metadata } from "next";
import LegalNoticePageView from "@/components/legal/LegalNoticePageView";

export const metadata: Metadata = {
  title: "Mesafeli Hizmet / Abonelik Sözleşmesi | ART-IST.CLUB",
  description:
    "ART-IST.CLUB mesafeli hizmet ve abonelik sözleşmesi çerçevesi — ücretli üyelik hizmetlerine ilişkin temel hükümler.",
};

export default function DistanceSalesAgreementPage() {
  return <LegalNoticePageView pageKey="distanceSalesAgreement" />;
}
