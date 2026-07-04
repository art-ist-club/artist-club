export default function Footer() {
  return (
    <footer id="iletisim" className="px-8 py-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-4xl font-black tracking-[-.14em] text-[#f5b942]">AC</div>
            <div>
              <p className="text-2xl font-black">Art-Ist.Club</p>
              <p className="text-white/45">Sanatın yeni dünyası.</p>
            </div>
          </div>
          <p className="mt-5 max-w-[360px] leading-7 text-white/50">Yeteneklerini keşfedin, bağlantılar kurun, kariyerinizi birlikte büyütelim.</p>
        </div>
        <FooterCol title="KEŞFET" items={["Sanatçılar", "Kategoriler", "Etkinlikler", "Blog"]} />
        <FooterCol title="PLATFORM" items={["Sanatçı Ol", "Nasıl Çalışır?", "Özellikler", "Güvenlik"]} />
        <FooterCol title="VIP (B2B)" items={["VIP Üyelik", "Kurumsal Çözümler", "Başarı Hikayeleri", "SSS"]} />
        <FooterCol title="YARDIM" items={["Destek Merkezi", "İletişim", "Gizlilik Politikası", "Kullanım Şartları"]} />
      </div>
      <div className="mt-10 border-t border-white/10 pt-7 text-sm text-white/40">© 2026 Art-Ist.Club. Tüm hakları saklıdır.</div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-black tracking-[.2em] text-white/70">{title}</p>
      <ul className="mt-5 space-y-3 text-white/45">
        {items.map((item) => (<li key={item}>• {item}</li>))}
      </ul>
    </div>
  );
}
