import type { Metadata } from "next";
import CompanyPageView from "@/components/legal/CompanyPageView";

export const metadata: Metadata = {
  title: "Company Information | ART-IST.CLUB",
  description:
    "How ART-IST.CLUB approaches corporate transparency and the publication of verified company information once official formation details are finalized.",
};

export default function CompanyLegalPage() {
  return <CompanyPageView />;
}
