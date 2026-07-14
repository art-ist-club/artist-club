"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import InformationPageLayout from "@/components/legal/InformationPageLayout";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { getCorporatePage } from "@/content";
import type { AboutPageContent } from "@/content/types";

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

export default function AboutPageView() {
  const { locale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const content = getCorporatePage(locale, "about") as AboutPageContent;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const ctaDiscover = translate(
    "corporate.about.ctaDiscover",
    "Sanatçıları Keşfet"
  );
  const ctaJoin = translate(
    "corporate.about.ctaJoin",
    "Sanatçı Olarak Katıl"
  );
  const ctaDiscoverAria = translate(
    "corporate.about.ctaDiscoverAria",
    "Sanatçıları keşfet sayfasına git"
  );
  const ctaJoinAria = translate(
    "corporate.about.ctaJoinAria",
    "Sanatçı olarak kayıt ol"
  );
  const title = translate(
    "corporate.about.title",
    "Sanatçıları dünyayla buluşturuyoruz."
  );
  const description = translate(
    "corporate.about.description",
    "ART-IST.CLUB, sanatçıları keşfedilebilir, ulaşılabilir ve profesyonel fırsatlara açık hale getiren global bir dijital platformdur."
  );

  const heroActions = (
    <>
      <CtaLink
        href={hrefFor("/discover")}
        label={ctaDiscover}
        ariaLabel={ctaDiscoverAria}
        primary
      />
      <CtaLink href={hrefFor("/register")} label={ctaJoin} ariaLabel={ctaJoinAria} />
    </>
  );

  return (
    <InformationPageLayout
      title={title}
      description={description}
      document={{ updatedAt: content.updatedAt, sections: [] }}
      heroActions={heroActions}
      wide
    >
      <SectionShell id="who-we-are" heading={content.whoWeAre.heading}>
        <Paragraphs paragraphs={content.whoWeAre.paragraphs} />
      </SectionShell>

      <SectionShell id="mission" heading={content.mission.heading}>
        <Paragraphs paragraphs={content.mission.paragraphs} />
      </SectionShell>

      <SectionShell id="vision" heading={content.vision.heading}>
        <Paragraphs paragraphs={content.vision.paragraphs} />
      </SectionShell>

      <SectionShell id="why-us" heading={content.whyUs.heading}>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.whyUs.cards.map((card) => (
            <article
              key={card.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-base font-black tracking-tight text-[#f5c451]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="how-it-works" heading={content.howItWorks.heading}>
        <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.howItWorks.steps.map((step, index) => (
            <li
              key={step.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f5c451]/80">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-black tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell id="who-for" heading={content.whoFor.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.whoFor.intro}
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {content.whoFor.audiences.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/70"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-7 text-white/45 md:text-[15px]">
          {content.whoFor.futureNote}
        </p>
      </SectionShell>

      <SectionShell id="values" heading={content.values.heading}>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.values.items.map((value) => (
            <article
              key={value.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-base font-black tracking-tight text-white">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="future" heading={content.future.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.future.intro}
        </p>
        <ul className="mt-5 space-y-3">
          {content.future.items.map((item) => (
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
        </div>
      </section>
    </InformationPageLayout>
  );
}
