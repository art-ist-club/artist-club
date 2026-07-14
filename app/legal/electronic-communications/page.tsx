import type { Metadata } from "next";
import LegalNoticePageView from "@/components/legal/LegalNoticePageView";

export const metadata: Metadata = {
  title: "Ticari Elektronik İleti Onayı | ART-IST.CLUB",
  description:
    "ART-IST.CLUB ticari elektronik ileti bilgilendirmesi — isteğe bağlı e-posta kampanya ve duyuru izni.",
};

export default function ElectronicCommunicationsPage() {
  return <LegalNoticePageView pageKey="electronicCommunications" />;
}
