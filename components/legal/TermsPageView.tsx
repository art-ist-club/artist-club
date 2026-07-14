"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import InformationPageLayout from "@/components/legal/InformationPageLayout";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { getLegalPage } from "@/content";
import type { TermsPageContent } from "@/content/types";

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

export default function TermsPageView() {
  const { locale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const content = getLegalPage(locale, "terms") as TermsPageContent;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const title = translate(
    "corporate.terms.title",
    "Kullanım Koşulları"
  );
  const description = translate(
    "corporate.terms.description",
    "ART-IST.CLUB’ı kullanarak geçerli olan temel şartlar."
  );
  const ctaDiscover = translate(
    "corporate.terms.ctaDiscover",
    "Platformu Keşfet"
  );
  const ctaDiscoverAria = translate(
    "corporate.terms.ctaDiscoverAria",
    "Keşfet sayfasına git"
  );
  const ctaJoin = translate("corporate.terms.ctaJoin", "Üye Ol");
  const ctaJoinAria = translate(
    "corporate.terms.ctaJoinAria",
    "Kayıt sayfasına git"
  );
  const ctaContact = translate(
    "corporate.terms.ctaContact",
    "İletişime Geç"
  );
  const ctaContactAria = translate(
    "corporate.terms.ctaContactAria",
    "İletişim sayfasına git"
  );

  return (
    <InformationPageLayout
      title={title}
      description={description}
      document={{ updatedAt: content.updatedAt, sections: [] }}
      wide
    >
      <SectionShell id="acceptance" heading={content.acceptance.heading}>
        <Paragraphs paragraphs={content.acceptance.paragraphs} />
      </SectionShell>

      <SectionShell id="purpose" heading={content.purpose.heading}>
        <Paragraphs paragraphs={content.purpose.paragraphs} />
      </SectionShell>

      <SectionShell id="accounts" heading={content.accounts.heading}>
        <Paragraphs paragraphs={content.accounts.paragraphs} />
      </SectionShell>

      <SectionShell id="artist-content" heading={content.artistContent.heading}>
        <Paragraphs paragraphs={content.artistContent.paragraphs} />
      </SectionShell>

      <SectionShell id="job-requests" heading={content.jobRequests.heading}>
        <Paragraphs paragraphs={content.jobRequests.paragraphs} />
      </SectionShell>

      <SectionShell id="prohibited" heading={content.prohibited.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.prohibited.intro}
        </p>
        <ul className="mt-5 space-y-3">
          {content.prohibited.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-7 text-white/55 md:text-[15px]"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5c451]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id="intellectual-property"
        heading={content.intellectualProperty.heading}
      >
        <Paragraphs paragraphs={content.intellectualProperty.paragraphs} />
      </SectionShell>

      <SectionShell
        id="service-changes"
        heading={content.serviceChanges.heading}
      >
        <Paragraphs paragraphs={content.serviceChanges.paragraphs} />
      </SectionShell>

      <SectionShell id="liability" heading={content.liability.heading}>
        <Paragraphs paragraphs={content.liability.paragraphs} />
      </SectionShell>

      <SectionShell id="termination" heading={content.termination.heading}>
        <Paragraphs paragraphs={content.termination.paragraphs} />
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
