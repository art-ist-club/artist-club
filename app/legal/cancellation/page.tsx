import type { Metadata } from "next";
import LegalNoticePageView from "@/components/legal/LegalNoticePageView";

export const metadata: Metadata = {
  title: "İptal ve Cayma Süreci | ART-IST.CLUB",
  description:
    "ART-IST.CLUB iptal ve cayma süreci — abonelik iptali, cayma hakkı ve iade ayrımı hakkında bilgilendirme.",
};

export default function CancellationPage() {
  return <LegalNoticePageView pageKey="cancellation" />;
}
