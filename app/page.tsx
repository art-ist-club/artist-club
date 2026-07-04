import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ArtistSection from "@/components/ArtistSection";
import VipSection from "@/components/VipSection";
import BottomPanels from "@/components/BottomPanels";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03050b] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(245,185,66,.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(143,77,255,.16),transparent_34%),linear-gradient(180deg,#03050b_0%,#05070e_45%,#03050b_100%)]" />

      <Header />

      <div className="mx-auto max-w-[1540px] p-4 pt-32">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#05070e]/92 shadow-[0_0_110px_rgba(0,0,0,.78)] backdrop-blur">
          <Hero />
          <Categories />
          <ArtistSection />
          <VipSection />
          <BottomPanels />
          <Stats />
          <Footer />
        </div>
      </div>
    </main>
  );
}
