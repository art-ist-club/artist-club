"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import SocialLinks from "@/components/SocialLinks";
import FooterSocialIcons from "@/components/social/FooterSocialIcons";

type FooterVariant = "default" | "comingSoon";

export default function Footer({
  variant = "default",
}: {
  variant?: FooterVariant;
}) {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const href = useLaunchAwareHref();
  const isComingSoon = variant === "comingSoon";

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const exploreItems = [
    {
      label: translate("navigation.siteFooter.artists", "Sanatçılar"),
      href: href("/discover"),
    },
    {
      label: translate("navigation.siteFooter.discoverLink", "Keşfet"),
      href: href("/discover"),
    },
    {
      label: translate(
        "navigation.siteFooter.foundingArtist",
        "Founding Artist"
      ),
      href: "/founding",
    },
  ];

  const platformItems = [
    {
      label: translate("navigation.siteFooter.register", "Üye Ol"),
      href: href("/register"),
    },
    {
      label: translate("navigation.siteFooter.login", "Giriş Yap"),
      href: href("/login"),
    },
    {
      label: translate("navigation.siteFooter.categories", "Kategoriler"),
      href: href("/discover"),
    },
  ];

  const companyItems = [
    {
      label: translate("navigation.siteFooter.about", "Hakkımızda"),
      href: "/about",
    },
    {
      label: translate("navigation.siteFooter.contact", "İletişim"),
      href: "/contact",
    },
    {
      label: translate("navigation.siteFooter.faq", "SSS"),
      href: "/faq",
    },
  ];

  const legalItems = [
    {
      label: translate("navigation.siteFooter.terms", "Kullanım Koşulları"),
      href: "/legal/terms",
    },
    {
      label: translate("navigation.siteFooter.privacy", "Gizlilik"),
      href: "/legal/privacy",
    },
    {
      label: translate("navigation.siteFooter.cookies", "Çerezler"),
      href: "/legal/cookies",
    },
    {
      label: translate("navigation.siteFooter.refund", "İade"),
      href: "/legal/refund",
    },
    {
      label: translate("navigation.siteFooter.subscription", "Abonelik"),
      href: "/legal/subscription",
    },
    {
      label: translate("navigation.siteFooter.companyInfo", "Şirket Bilgileri"),
      href: "/legal/company",
    },
  ];

  const turkeyLegalItems = [
    {
      label: translate("navigation.siteFooter.kvkk", "KVKK Aydınlatma"),
      href: "/legal/kvkk",
    },
    {
      label: translate("navigation.siteFooter.explicitConsent", "Açık Rıza"),
      href: "/legal/explicit-consent",
    },
    {
      label: translate(
        "navigation.siteFooter.electronicCommunications",
        "Ticari İleti"
      ),
      href: "/legal/electronic-communications",
    },
    {
      label: translate(
        "navigation.siteFooter.distanceSalesPreliminary",
        "Ön Bilgilendirme"
      ),
      href: "/legal/distance-sales-preliminary",
    },
    {
      label: translate(
        "navigation.siteFooter.distanceSalesAgreement",
        "Mesafeli Sözleşme"
      ),
      href: "/legal/distance-sales-agreement",
    },
    {
      label: translate(
        "navigation.siteFooter.cancellation",
        "İptal ve Cayma"
      ),
      href: "/legal/cancellation",
    },
  ];

  return (
    <footer id="site-footer" className="w-full">
      <div className="rounded-[2rem] border border-white/10 bg-[#070912]/92 px-6 py-9 shadow-[0_30px_90px_rgba(0,0,0,.35)] md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_repeat(5,minmax(0,1fr))]">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
            {isComingSoon ? (
              <Link
                href="/"
                className="inline-flex max-w-full items-center gap-3.5"
              >
                <span className="shrink-0 text-[1.75rem] font-black leading-none tracking-[-0.1em] text-[#f5b942] md:text-[2rem]">
                  AC
                </span>
                <span className="min-w-0 whitespace-nowrap text-lg font-black leading-none tracking-[-0.04em] text-[#f5b942] md:text-xl">
                  ART-IST.CLUB
                </span>
              </Link>
            ) : (
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="text-3xl font-black tracking-[-0.12em] text-[#f5b942]">
                  AC
                </div>
                <div>
                  <p className="text-2xl font-black tracking-[-0.05em] text-[#f5b942]">
                    ART-IST.CLUB
                  </p>
                </div>
              </Link>
            )}

            <p
              className={
                isComingSoon
                  ? "mt-5 max-w-[20rem] text-sm leading-7 text-white/55 md:leading-8"
                  : "mt-5 max-w-[360px] text-sm leading-7 text-white/52"
              }
            >
              {translate(
                "navigation.siteFooter.description",
                "Yeteneklerin keşfedildiği, fırsatların başladığı global sanat platformu."
              )}
            </p>

            {isComingSoon ? (
              <FooterSocialIcons />
            ) : (
              <SocialLinks className="mt-5" />
            )}
          </div>

          <FooterCol
            title={translate("navigation.siteFooter.explore", "KEŞFET")}
            items={exploreItems}
          />
          <FooterCol
            title={translate("navigation.siteFooter.platform", "PLATFORM")}
            items={platformItems}
          />
          <FooterCol
            title={translate("navigation.siteFooter.company", "ŞİRKET")}
            items={companyItems}
          />
          <FooterCol
            title={translate("navigation.siteFooter.legal", "YASAL")}
            items={legalItems}
          />
          <FooterCol
            title={translate(
              "navigation.siteFooter.turkeyLegal",
              "TÜRKİYE YASAL"
            )}
            items={turkeyLegalItems}
          />
        </div>

        <div className="mt-9 border-t border-white/10 pt-6">
          <p className="text-xs text-white/38">
            © {year} ART-IST.CLUB.{" "}
            {translate(
              "navigation.siteFooter.rights",
              "Tüm hakları saklıdır."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
        {title}
      </p>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="text-sm text-white/45 transition hover:text-[#f5b942]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
