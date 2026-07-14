"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import InformationPageLayout from "@/components/legal/InformationPageLayout";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { getCorporatePage } from "@/content";
import type { FaqPageContent } from "@/content/types";

function SectionShell({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-[1.5rem] border border-white/10 bg-[#070912]/80 p-6 md:p-7 lg:p-8"
    >
      <h2 className="text-xl font-black tracking-tight text-white md:text-2xl">
        {heading}
      </h2>
      {children}
    </section>
  );
}

function CtaLink({
  href,
  label,
  ariaLabel,
  primary = false,
}: {
  href: string;
  label: string;
  ariaLabel: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={
        primary
          ? "inline-flex items-center justify-center rounded-xl bg-[#f5c451] px-5 py-3 text-sm font-black text-[#1a1200] transition hover:bg-[#ffe08a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
          : "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition hover:border-[#f5c451]/40 hover:text-[#f5c451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
      }
    >
      {label}
    </Link>
  );
}

export default function FaqPageView() {
  const { locale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const content = getCorporatePage(locale, "faq") as FaqPageContent;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const title = translate(
    "corporate.faq.title",
    "Sık sorulan sorulara net cevaplar."
  );
  const description = translate(
    "corporate.faq.description",
    "ART-IST.CLUB platformu, hesaplar, keşif, iş talepleri ve yasal konular hakkında hızlı, güvenilir bilgilendirme."
  );
  const ctaContact = translate(
    "corporate.faq.ctaContact",
    "İletişim sayfasına git"
  );
  const ctaContactAria = translate(
    "corporate.faq.ctaContactAria",
    "İletişim sayfasına git"
  );
  const ctaDiscover = translate(
    "corporate.faq.ctaDiscover",
    "Sanatçıları Keşfet"
  );
  const ctaDiscoverAria = translate(
    "corporate.faq.ctaDiscoverAria",
    "Sanatçıları keşfet sayfasına git"
  );
  const ctaJoin = translate("corporate.faq.ctaJoin", "Üye Ol");
  const ctaJoinAria = translate(
    "corporate.faq.ctaJoinAria",
    "Kayıt sayfasına git"
  );
  const ctaAbout = translate("corporate.faq.ctaAbout", "Hakkımızda");
  const ctaAboutAria = translate(
    "corporate.faq.ctaAboutAria",
    "Hakkımızda sayfasına git"
  );

  return (
    <InformationPageLayout
      title={title}
      description={description}
      document={{ updatedAt: content.updatedAt, sections: [] }}
      wide
    >
      {content.categories.map((category) => (
        <SectionShell
          key={category.id}
          id={`faq-${category.id}`}
          heading={category.heading}
        >
          <div className="mt-5 space-y-3">
            {category.items.map((item) => (
              <details
                key={item.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] open:border-[#f5c451]/25 open:bg-white/[0.035]"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-black tracking-tight text-white marker:content-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451] md:text-[15px]">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 text-[#f5c451] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-white/10 px-5 pb-5 pt-4">
                  <p className="text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </SectionShell>
      ))}

      <SectionShell id="quick-links" heading={content.quickLinks.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.quickLinks.intro}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.quickLinks.items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex min-h-[3.25rem] items-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-bold text-white/70 transition hover:border-[#f5c451]/35 hover:text-[#f5c451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      <section
        id="still-need-help"
        className="rounded-[1.5rem] border border-white/10 bg-[#070912]/80 p-6 md:p-8"
      >
        <h2 className="text-xl font-black tracking-tight text-white md:text-2xl">
          {content.stillNeedHelp.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.stillNeedHelp.description}
        </p>
        <div className="mt-6">
          <CtaLink
            href="/contact"
            label={ctaContact}
            ariaLabel={ctaContactAria}
            primary
          />
        </div>
      </section>

      <section
        id="final-cta"
        className="rounded-[1.5rem] border border-[#f5c451]/25 bg-gradient-to-br from-[#f5c451]/10 via-[#070912]/90 to-[#070912] p-6 md:p-8 lg:p-10"
      >
        <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
          {content.finalCta.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          {content.finalCta.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CtaLink
            href={hrefFor("/discover")}
            label={ctaDiscover}
            ariaLabel={ctaDiscoverAria}
            primary
          />
          <CtaLink href={hrefFor("/register")} label={ctaJoin} ariaLabel={ctaJoinAria} />
          <CtaLink href="/about" label={ctaAbout} ariaLabel={ctaAboutAria} />
        </div>
      </section>
    </InformationPageLayout>
  );
}
