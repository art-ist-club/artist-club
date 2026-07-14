"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import InformationPageLayout from "@/components/legal/InformationPageLayout";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { getLegalPage } from "@/content";
import type { CookiesPageContent } from "@/content/types";

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

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-4 space-y-3">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-sm leading-7 text-white/58 md:text-[15px] md:leading-8"
        >
          {paragraph}
        </p>
      ))}
    </div>
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

export default function CookiesPageView() {
  const { locale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const content = getLegalPage(locale, "cookies") as CookiesPageContent;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const title = translate("corporate.cookies.title", "Çerez Politikası");
  const description = translate(
    "corporate.cookies.description",
    "ART-IST.CLUB’ta çerezlerin ve benzeri teknolojilerin nasıl kullanıldığına dair bilgilendirme."
  );
  const ctaDiscover = translate(
    "corporate.cookies.ctaDiscover",
    "Platformu Keşfet"
  );
  const ctaDiscoverAria = translate(
    "corporate.cookies.ctaDiscoverAria",
    "Keşfet sayfasına git"
  );
  const ctaJoin = translate("corporate.cookies.ctaJoin", "Üye Ol");
  const ctaJoinAria = translate(
    "corporate.cookies.ctaJoinAria",
    "Kayıt sayfasına git"
  );
  const ctaContact = translate(
    "corporate.cookies.ctaContact",
    "İletişime Geç"
  );
  const ctaContactAria = translate(
    "corporate.cookies.ctaContactAria",
    "İletişim sayfasına git"
  );

  return (
    <InformationPageLayout
      title={title}
      description={description}
      document={{ updatedAt: content.updatedAt, sections: [] }}
      wide
    >
      <SectionShell id="purpose" heading={content.purpose.heading}>
        <Paragraphs paragraphs={content.purpose.paragraphs} />
      </SectionShell>

      <SectionShell id="what-are-cookies" heading={content.whatAreCookies.heading}>
        <Paragraphs paragraphs={content.whatAreCookies.paragraphs} />
      </SectionShell>

      <SectionShell id="categories" heading={content.categories.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.categories.intro}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.categories.items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-base font-black tracking-tight text-[#f5c451]">
                  {item.title}
                </h3>
                <span className="rounded-lg border border-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="browser-controls"
        heading={content.browserControls.heading}
      >
        <Paragraphs paragraphs={content.browserControls.paragraphs} />
      </SectionShell>

      <SectionShell id="third-parties" heading={content.thirdParties.heading}>
        <Paragraphs paragraphs={content.thirdParties.paragraphs} />
      </SectionShell>

      <SectionShell id="updates" heading={content.updates.heading}>
        <Paragraphs paragraphs={content.updates.paragraphs} />
      </SectionShell>

      <SectionShell id="related-pages" heading={content.relatedPages.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.relatedPages.intro}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.relatedPages.items.map((item) => (
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
          <CtaLink
            href="/contact"
            label={ctaContact}
            ariaLabel={ctaContactAria}
          />
        </div>
      </section>
    </InformationPageLayout>
  );
}
