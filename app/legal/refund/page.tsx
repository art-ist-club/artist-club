import type { Metadata } from "next";
import RefundPageView from "@/components/legal/RefundPageView";

export const metadata: Metadata = {
  title: "Refund Policy | ART-IST.CLUB",
  description:
    "ART-IST.CLUB refund approach for future paid membership and subscription services — general guidance without fixed day counts or automatic refund guarantees.",
};

export default function RefundPage() {
  return <RefundPageView />;
}
