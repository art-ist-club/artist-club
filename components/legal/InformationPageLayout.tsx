"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { InformationDocument } from "@/content/types";

type InformationPageLayoutProps = {
  title: string;
  description: string;
  document: Pick<InformationDocument, "updatedAt" | "sections">;
  children?: ReactNode;
  heroActions?: ReactNode;
  wide?: boolean;
};

export default function InformationPageLayout({
  title,
  description,
  document,
  children,
  heroActions,
  wide = false,
}: InformationPageLayoutProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  return (
    <main className="min-h-screen bg-[#03050b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(245,185,66,0.10),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(124,58,237,0.10),transparent_26%)]" />

      <div
        className={`relative z-10 mx-auto px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-12 ${
          wide ? "max-w-6xl" : "max-w-4xl"
        }`}
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-black tracking-[0.08em] text-[#f5c451] transition hover:text-[#ffe08a]"
          >
            {translate("corporate.layout.brandHome", "ART-IST.CLUB")}
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-white/65 transition hover:border-[#f5c451]/35 hover:text-[#f5c451]"
          >
            {translate("corporate.layout.backHome", "Ana sayfaya dön")}
          </Link>
        </div>

        <header className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
          <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl md:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
            {description}
          </p>
          {heroActions ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroActions}
            </div>
          ) : null}
          {document.updatedAt ? (
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              {translate("corporate.layout.lastUpdated", "Son güncelleme")}:{" "}
              {document.updatedAt}
            </p>
          ) : null}
        </header>

        <article className="mt-6 space-y-5">
          {document.sections.map((section) => (
            <section
              key={section.id}
              className="rounded-[1.5rem] border border-white/10 bg-[#070912]/80 p-6 md:p-7"
            >
              <h2 className="text-xl font-black tracking-tight text-white">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-white/58 md:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {children}
        </article>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <Footer />
      </div>
    </main>
  );
}
