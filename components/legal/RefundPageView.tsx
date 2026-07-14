"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import InformationPageLayout from "@/components/legal/InformationPageLayout";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { getLegalPage } from "@/content";
import type { RefundPageContent } from "@/content/types";

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

export default function RefundPageView() {
  const { locale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const content = getLegalPage(locale, "refund") as RefundPageContent;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const title = translate("corporate.refund.title", "İade Politikası");
  const description = translate(
    "corporate.refund.description",
    "ART-IST.CLUB’ta gelecekteki ücretli üyelik ve abonelik hizmetlerine ilişkin iade yaklaşımı."
  );
  const ctaDiscover = translate(
    "corporate.refund.ctaDiscover",
    "Platformu Keşfet"
  );
  const ctaDiscoverAria = translate(
    "corporate.refund.ctaDiscoverAria",
    "Keşfet sayfasına git"
  );
  const ctaJoin = translate("corporate.refund.ctaJoin", "Üye Ol");
  const ctaJoinAria = translate(
    "corporate.refund.ctaJoinAria",
    "Kayıt sayfasına git"
  );
  const ctaContact = translate(
    "corporate.refund.ctaContact",
    "İletişime Geç"
  );
  const ctaContactAria = translate(
    "corporate.refund.ctaContactAria",
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
      <SectionShell id="scope" heading={content.scope.heading}>
        <Paragraphs paragraphs={content.scope.paragraphs} />
      </SectionShell>
      <SectionShell
        id="purchase-process"
        heading={content.purchaseProcess.heading}
      >
        <Paragraphs paragraphs={content.purchaseProcess.paragraphs} />
      </SectionShell>
      <SectionShell id="evaluation" heading={content.evaluation.heading}>
        <Paragraphs paragraphs={content.evaluation.paragraphs} />
      </SectionShell>
      <SectionShell id="cancellation" heading={content.cancellation.heading}>
        <Paragraphs paragraphs={content.cancellation.paragraphs} />
      </SectionShell>
      <SectionShell id="exceptions" heading={content.exceptions.heading}>
        <Paragraphs paragraphs={content.exceptions.paragraphs} />
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
