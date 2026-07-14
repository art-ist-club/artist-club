"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import InformationPageLayout from "@/components/legal/InformationPageLayout";
import SocialLinks from "@/components/SocialLinks";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { getCorporatePage } from "@/content";
import type { ContactPageContent } from "@/content/types";

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

export default function ContactPageView() {
  const { locale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const content = getCorporatePage(locale, "contact") as ContactPageContent;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const title = translate(
    "corporate.contact.title",
    "Sizinle doğru noktada buluşuyoruz."
  );
  const description = translate(
    "corporate.contact.description",
    "ART-IST.CLUB; sanatçılar, müşteriler ve kurumsal iş ortakları için net, güvenilir ve profesyonel bir iletişim deneyimi sunmayı hedefler."
  );
  const ctaFaq = translate("corporate.contact.ctaFaq", "SSS’ye git");
  const ctaFaqAria = translate(
    "corporate.contact.ctaFaqAria",
    "Sıkça sorulan sorular sayfasına git"
  );
  const ctaDiscover = translate(
    "corporate.contact.ctaDiscover",
    "Sanatçıları Keşfet"
  );
  const ctaDiscoverAria = translate(
    "corporate.contact.ctaDiscoverAria",
    "Sanatçıları keşfet sayfasına git"
  );
  const ctaJoin = translate(
    "corporate.contact.ctaJoin",
    "Sanatçı Olarak Katıl"
  );
  const ctaJoinAria = translate(
    "corporate.contact.ctaJoinAria",
    "Sanatçı olarak kayıt ol"
  );
  const ctaAbout = translate("corporate.contact.ctaAbout", "Hakkımızda");
  const ctaAboutAria = translate(
    "corporate.contact.ctaAboutAria",
    "Hakkımızda sayfasına git"
  );

  return (
    <InformationPageLayout
      title={title}
      description={description}
      document={{ updatedAt: content.updatedAt, sections: [] }}
      wide
    >
      <SectionShell id="contact-info" heading={content.contactInfo.heading}>
        <Paragraphs paragraphs={content.contactInfo.paragraphs} />
        <SocialLinks className="mt-5" />
      </SectionShell>

      <SectionShell id="categories" heading={content.categories.heading}>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.categories.cards.map((card) => (
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

      <SectionShell
        id="response-principles"
        heading={content.responsePrinciples.heading}
      >
        <Paragraphs paragraphs={content.responsePrinciples.paragraphs} />
      </SectionShell>

      <SectionShell id="channels" heading={content.channels.heading}>
        <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.channels.intro}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {content.channels.items.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="text-base font-black tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex text-sm font-bold text-[#f5c451] transition hover:text-[#ffe08a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
              >
                {item.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      <section
        id="faq-shortcut"
        className="rounded-[1.5rem] border border-white/10 bg-[#070912]/80 p-6 md:p-8"
      >
        <h2 className="text-xl font-black tracking-tight text-white md:text-2xl">
          {content.faqShortcut.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-[15px] md:leading-8">
          {content.faqShortcut.description}
        </p>
        <div className="mt-6">
          <CtaLink
            href="/faq"
            label={ctaFaq}
            ariaLabel={ctaFaqAria}
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
