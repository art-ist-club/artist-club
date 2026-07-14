import type { Metadata } from "next";
import AboutPageView from "@/components/legal/AboutPageView";

export const metadata: Metadata = {
  title: "About ART-IST.CLUB",
  description:
    "ART-IST.CLUB is a global digital platform for artist discovery and professional profiles — connecting artists with clients across languages, locations, and creative categories.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
