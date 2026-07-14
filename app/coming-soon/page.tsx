import type { Metadata } from "next";
import ComingSoonView from "@/components/coming-soon/ComingSoonView";

export const metadata: Metadata = {
  title: "Coming Soon | ART-IST.CLUB",
  description:
    "ART-IST.CLUB — the global artist discovery platform is almost ready. Follow us and explore Founding Artist.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComingSoonPage() {
  return <ComingSoonView />;
}
