import type { Metadata } from "next";
import LegalNoticePageView from "@/components/legal/LegalNoticePageView";

export const metadata: Metadata = {
  title: "Mesafeli Hizmet Ön Bilgilendirme | ART-IST.CLUB",
  description:
    "ART-IST.CLUB mesafeli hizmet sözleşmesi ön bilgilendirme formu — abonelik ve ücretli hizmetler çerçevesi.",
};

export default function DistanceSalesPreliminaryPage() {
  return <LegalNoticePageView pageKey="distanceSalesPreliminary" />;
}
