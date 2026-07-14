import type { Metadata } from "next";
import SubscriptionPageView from "@/components/legal/SubscriptionPageView";

export const metadata: Metadata = {
  title: "Subscription Terms | ART-IST.CLUB",
  description:
    "General principles for ART-IST.CLUB membership and subscription services that may be offered in the future — without specific prices, billing intervals, or payment provider details.",
};

export default function SubscriptionPage() {
  return <SubscriptionPageView />;
}
