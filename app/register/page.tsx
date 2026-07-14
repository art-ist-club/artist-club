"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type AccountType = "artist" | "client" | "company";

export default function RegisterPage() {
  return (
    <Suspense fallback={<RegisterPageFallback />}>
      <RegisterPageContent />
    </Suspense>
  );
}

function RegisterPageFallback() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03050b] px-6 py-12 text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#f5b942]/10 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#f5b942]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/40 md:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#f5b942]">
              ART-IST.CLUB
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function RegisterPageContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const redirectFromUrl = searchParams.get("redirect") || "";
  const [accountType, setAccountType] = useState<AccountType>("artist");
  const [showForm, setShowForm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "apple" | "">(
    ""
  );
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [explicitConsent, setExplicitConsent] = useState(false);
  const [legalNoticePresentedAt, setLegalNoticePresentedAt] = useState<
    string | null
  >(null);

  useEffect(() => {
    // Evidence that the legal notice block was rendered (presentation proof for UI; not sent to Supabase yet).
    setLegalNoticePresentedAt(new Date().toISOString());
  }, []);

  const redirectPath = useMemo(() => {
    if (redirectFromUrl) return redirectFromUrl;

    if (accountType === "artist") return "/profile/setup";
    if (accountType === "company") return "/dashboard/company";

    return "/dashboard/client";
  }, [accountType, redirectFromUrl]);

  const accountCopy = {
    artist: {
      title: translate(
        "auth.register.accountTypes.artist.title",
        "Artist hesabı"
      ),
      subtitle: translate(
        "auth.register.accountTypes.artist.subtitle",
        "Profil oluştur, portfolyo ekle ve keşfedil."
      ),
      badge: translate("auth.register.accountTypes.artist.badge", "🎭"),
    },
    client: {
      title: translate(
        "auth.register.accountTypes.client.title",
        "Bireysel müşteri"
      ),
      subtitle: translate(
        "auth.register.accountTypes.client.subtitle",
        "Sanatçı keşfet, favorilere ekle ve talep gönder."
      ),
      badge: translate("auth.register.accountTypes.client.badge", "🔎"),
    },
    company: {
      title: translate(
        "auth.register.accountTypes.company.title",
        "Şirket / Ajans"
      ),
      subtitle: translate(
        "auth.register.accountTypes.company.subtitle",
        "Marka, ajans veya organizasyon için sanatçı ara."
      ),
      badge: translate("auth.register.accountTypes.company.badge", "🏢"),
    },
  };

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    if (!acceptedTerms || !legalNoticePresentedAt) {
      setMessage(
        translate(
          "auth.register.legalRequired",
          "Devam etmek için zorunlu yasal onayları tamamlayın."
        )
      );
      return;
    }

    setLoading(true);
    setMessage("");

    const siteUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: `${siteUrl}/login?redirect=${encodeURIComponent(
          redirectPath
        )}`,
        data: {
          full_name: fullName.trim(),
          account_type: accountType,
        },
      },
    });

    if (error) {
      setMessage(
        translate("auth.register.errorPrefix", "Hata: ") + error.message
      );
      setLoading(false);
      return;
    }

    setMessage(
      translate(
        "auth.register.success",
        "Kayıt başarılı. Lütfen email adresini kontrol et. Onaydan sonra doğru sayfaya yönlendirileceksin."
      )
    );
    setLoading(false);
  }

  async function handleSocialLogin(provider: "google" | "apple") {
    // Social login legal gate
    if (!acceptedTerms || !legalNoticePresentedAt) {
      setMessage(
        translate(
          "auth.register.legalRequired",
          "Devam etmek için zorunlu yasal onayları tamamlayın."
        )
      );
      return;
    }

    setSocialLoading(provider);
    setMessage("");

    const siteUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${siteUrl}/login?redirect=${encodeURIComponent(
          redirectPath
        )}`,
        queryParams:
          provider === "google"
            ? {
                access_type: "offline",
                prompt: "consent",
              }
            : undefined,
      },
    });

    if (error) {
      setMessage(
        translate("auth.register.errorPrefix", "Hata: ") + error.message
      );
      setSocialLoading("");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#03050b] px-6 py-12 text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#f5b942]/10 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#f5b942]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/40 md:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#f5b942]">
              ART-IST.CLUB
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              {translate("auth.register.title", "Üye Ol")}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55">
              {translate(
                "auth.register.description",
                "Platformu nasıl kullanmak istediğini seç. Hesap tipine göre seni doğru alana yönlendireceğiz."
              )}
            </p>
          </div>

          {!showForm ? (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <AccountTypeCard
                  active={accountType === "artist"}
                  icon={translate(
                    "auth.register.accountTypes.artist.badge",
                    "🎭"
                  )}
                  title={translate(
                    "auth.register.cards.artist.title",
                    "Artist'im"
                  )}
                  description={translate(
                    "auth.register.cards.artist.description",
                    "Sanatçı profili oluşturmak ve keşfedilmek istiyorum."
                  )}
                  onClick={() => setAccountType("artist")}
                />

                <AccountTypeCard
                  active={accountType === "client"}
                  icon={translate(
                    "auth.register.accountTypes.client.badge",
                    "🔎"
                  )}
                  title={translate(
                    "auth.register.cards.client.title",
                    "Artist Arıyorum"
                  )}
                  description={translate(
                    "auth.register.cards.client.description",
                    "Bireysel olarak sanatçı keşfetmek istiyorum."
                  )}
                  onClick={() => setAccountType("client")}
                />

                <AccountTypeCard
                  active={accountType === "company"}
                  icon={translate(
                    "auth.register.accountTypes.company.badge",
                    "🏢"
                  )}
                  title={translate(
                    "auth.register.cards.company.title",
                    "Şirket / Ajans"
                  )}
                  description={translate(
                    "auth.register.cards.company.description",
                    "Marka, ajans veya organizasyon adına sanatçı arıyorum."
                  )}
                  onClick={() => setAccountType("company")}
                />
              </div>

              <div className="rounded-3xl border border-[#f5b942]/15 bg-[#f5b942]/5 p-5">
                <p className="text-sm font-black text-[#f5b942]">
                  {translate(
                    "auth.register.selectedType",
                    "Seçilen hesap tipi"
                  )}
                </p>
                <div className="mt-3 flex items-start gap-4">
                  <span className="text-3xl">{accountCopy[accountType].badge}</span>
                  <div>
                    <h2 className="text-xl font-black">
                      {accountCopy[accountType].title}
                    </h2>
                    <p className="mt-1 text-sm text-white/55">
                      {accountCopy[accountType].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="w-full rounded-2xl bg-[#f5b942] px-7 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a]"
              >
                {translate("auth.register.continue", "Devam Et")}
              </button>
            </div>
          ) : (
            <div className="mx-auto max-w-md">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mb-5 rounded-2xl border border-white/10 px-4 py-3 text-sm font-black text-white/65 transition hover:border-[#f5b942]/40 hover:text-[#f5b942]"
              >
                {translate(
                  "auth.register.changeAccountType",
                  "← Hesap tipini değiştir"
                )}
              </button>

              <div className="mb-5 rounded-3xl border border-white/10 bg-black/25 p-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{accountCopy[accountType].badge}</span>
                  <div>
                    <p className="font-black">{accountCopy[accountType].title}</p>
                    <p className="mt-1 text-sm text-white/45">
                      {accountCopy[accountType].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-legal-notice-presented-at={legalNoticePresentedAt ?? undefined}
                className="mb-6 space-y-4 rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <div>
                  <p className="text-sm font-black text-white">
                    {translate(
                      "auth.register.legalNoticeHeading",
                      "Yasal bilgilendirme"
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {translate(
                      "auth.register.legalNoticeBody",
                      "Hesap oluşturmadan önce Kullanım Koşulları ile Gizlilik Politikası / KVKK Aydınlatma Metni’ni inceleyebilirsiniz. Aydınlatma metni bilgilendirme amaçlıdır; bu metin için “onay veriyorum” şartı aranmaz."
                    )}
                  </p>
                  <p className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm">
                    <Link
                      href="/legal/terms"
                      className="font-bold text-[#f5b942] underline-offset-2 hover:underline"
                    >
                      {translate(
                        "auth.register.termsLink",
                        "Kullanım Koşulları"
                      )}
                    </Link>
                    <Link
                      href="/legal/privacy"
                      className="font-bold text-[#f5b942] underline-offset-2 hover:underline"
                    >
                      {translate(
                        "auth.register.privacyLink",
                        "Gizlilik Politikası"
                      )}
                    </Link>
                    <Link
                      href="/legal/kvkk"
                      className="font-bold text-[#f5b942] underline-offset-2 hover:underline"
                    >
                      {translate(
                        "auth.register.kvkkLink",
                        "KVKK Aydınlatma Metni"
                      )}
                    </Link>
                  </p>
                </div>

                <label className="flex items-start gap-3 text-sm text-white/75">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(event) => setAcceptedTerms(event.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-black/40"
                    required
                  />
                  <span>
                    {translate(
                      "auth.register.termsAccept",
                      "Kullanım Koşulları’nı okudum ve kabul ediyorum."
                    )}
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-white/60">
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(event) =>
                      setMarketingConsent(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-black/40"
                  />
                  <span>
                    {translate(
                      "auth.register.marketingConsent",
                      "Kampanya, fırsat ve duyuru e-postaları almak istiyorum (isteğe bağlı)."
                    )}{" "}
                    <Link
                      href="/legal/electronic-communications"
                      className="font-bold text-[#f5b942] underline-offset-2 hover:underline"
                    >
                      {translate(
                        "auth.register.marketingLink",
                        "Ticari elektronik ileti bilgilendirmesi"
                      )}
                    </Link>
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-white/60">
                  <input
                    type="checkbox"
                    checked={explicitConsent}
                    onChange={(event) =>
                      setExplicitConsent(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-black/40"
                  />
                  <span>
                    {translate(
                      "auth.register.explicitConsent",
                      "Açık rıza gerektiren işlemler için ayrıca izin veriyorum (isteğe bağlı)."
                    )}{" "}
                    <Link
                      href="/legal/explicit-consent"
                      className="font-bold text-[#f5b942] underline-offset-2 hover:underline"
                    >
                      {translate(
                        "auth.register.explicitConsentLink",
                        "Açık Rıza Metni"
                      )}
                    </Link>
                  </span>
                </label>
              </div>

              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  disabled={Boolean(socialLoading) || loading || !acceptedTerms}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-black text-white transition hover:border-[#f5b942]/40 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {socialLoading === "google"
                    ? translate(
                        "auth.register.googleLoading",
                        "Google açılıyor..."
                      )
                    : translate(
                        "auth.register.googleContinue",
                        "Google ile devam et"
                      )}
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("apple")}
                  disabled={Boolean(socialLoading) || loading || !acceptedTerms}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-black text-white transition hover:border-[#f5b942]/40 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {socialLoading === "apple"
                    ? translate(
                        "auth.register.appleLoading",
                        "Apple açılıyor..."
                      )
                    : translate(
                        "auth.register.appleContinue",
                        "Apple ile devam et"
                      )}
                </button>
              </div>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
                  {translate("auth.register.orEmail", "veya email ile")}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {translate("auth.register.fullName", "Ad Soyad")}
                  </label>
                  <input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-[#f5b942]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {translate("auth.register.email", "Email")}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-[#f5b942]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {translate("auth.register.password", "Şifre")}
                  </label>
                  <input
                    type="password"
                    minLength={6}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-[#f5b942]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || Boolean(socialLoading) || !acceptedTerms}
                  className="w-full rounded-xl bg-[#f5b942] px-5 py-3 font-black text-black transition hover:scale-[1.02] hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? translate("auth.register.submitting", "Kaydediliyor...")
                    : translate("auth.register.submit", "Üye Ol")}
                </button>
              </form>

              {message && (
                <p className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
                  {message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function AccountTypeCard({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border p-6 text-left transition ${
        active
          ? "border-[#f5b942] bg-[#f5b942] text-black"
          : "border-white/10 bg-black/25 text-white hover:border-[#f5b942]/40 hover:bg-white/[0.06]"
      }`}
    >
      <span className="text-4xl">{icon}</span>
      <h2 className="mt-5 text-xl font-black">{title}</h2>
      <p
        className={`mt-3 text-sm leading-6 ${
          active ? "text-black/70" : "text-white/50"
        }`}
      >
        {description}
      </p>
    </button>
  );
}
