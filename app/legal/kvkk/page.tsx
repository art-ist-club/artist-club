import type { Metadata } from "next";
import LegalNoticePageView from "@/components/legal/LegalNoticePageView";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | ART-IST.CLUB",
  description:
    "ART-IST.CLUB KVKK aydınlatma metni — kişisel verilerin işlenmesi, amaçları, haklarınız ve başvuru yöntemi.",
};

export default function KvkkPage() {
  return <LegalNoticePageView pageKey="kvkk" />;
}
