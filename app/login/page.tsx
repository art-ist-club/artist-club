"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type AccountType = "artist" | "client" | "company" | "enterprise";

function isSafePostLoginPath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return false;
  }

  const pathname = path.split("?")[0].split("#")[0];
  return pathname !== "/login";
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginPageFallback />}>
      <LoginPageContent />
    </Suspense>
  );
}

function LoginPageFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#03050b] px-6 py-12 text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#f5b942]/10 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#f5b942]/5 blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/40">
        <p className="text-sm font-black uppercase tracking-[0.4em] text-[#f5b942]">
          ART-IST.CLUB
        </p>
      </div>
    </main>
  );
}

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const oauthRedirectHandledRef = useRef(false);

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const redirect = searchParams.get("redirect") || "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "apple" | "">(
    ""
  );
  const [message, setMessage] = useState("");

  function getDashboardPath(accountType?: AccountType) {
    if (accountType === "client") return "/dashboard/client";
    if (accountType === "company") return "/dashboard/company";
    if (accountType === "enterprise") return "/dashboard/company";

    return "/dashboard/artist";
  }

  async function syncProfileAccountType(userId: string, userMetadata: any) {
    const metadataAccountType = userMetadata?.account_type as
      | AccountType
      | undefined;

    const metadataFullName = String(userMetadata?.full_name ?? "").trim();

    if (!metadataAccountType) return;

    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id, account_type")
      .eq("id", userId)
      .maybeSingle();

    if (existingProfile) {
      await supabase
        .from("profiles")
        .update({
          account_type: metadataAccountType,
          full_name: metadataFullName || undefined,
        })
        .eq("id", userId);

      return;
    }

    await supabase.from("profiles").insert({
      id: userId,
      full_name: metadataFullName || null,
      account_type: metadataAccountType,
      is_published: false,
    });
  }

  async function getAccountRedirectPath(userId: string, userMetadata: any) {
    if (redirect) return redirect;

    await syncProfileAccountType(userId, userMetadata);

    const metadataAccountType = userMetadata?.account_type as
      | AccountType
      | undefined;

    if (metadataAccountType) {
      return getDashboardPath(metadataAccountType);
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("account_type")
      .eq("id", userId)
      .maybeSingle();

    return getDashboardPath(profile?.account_type as AccountType | undefined);
  }

  useEffect(() => {
    let cancelled = false;

    async function redirectAuthenticatedUser(user: {
      id: string;
      user_metadata: any;
    }) {
      if (cancelled || oauthRedirectHandledRef.current) {
        return;
      }

      oauthRedirectHandledRef.current = true;

      const targetPath = await getAccountRedirectPath(
        user.id,
        user.user_metadata
      );
      const safePath = isSafePostLoginPath(targetPath)
        ? targetPath
        : "/dashboard";

      if (cancelled) {
        return;
      }

      router.replace(safePath);
    }

    async function handleOAuthCallback() {
      const code = searchParams.get("code");

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          if (!cancelled) {
            setMessage(error.message);
            setSocialLoading("");
          }
          return;
        }
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        await redirectAuthenticatedUser(session.user);
      }
    }

    handleOAuthCallback();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (
        (event === "SIGNED_IN" || event === "INITIAL_SESSION") &&
        session?.user
      ) {
        void redirectAuthenticatedUser(session.user);
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [redirect, router, searchParams]);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    if (!user) {
      setMessage(
        translate(
          "auth.login.userMissing",
          "Giriş başarılı fakat kullanıcı bilgisi alınamadı."
        )
      );
      setLoading(false);
      return;
    }

    const targetPath = await getAccountRedirectPath(user.id, user.user_metadata);
    const safePath = isSafePostLoginPath(targetPath)
      ? targetPath
      : "/dashboard";

    oauthRedirectHandledRef.current = true;
    setLoading(false);
    router.push(safePath);
  }

  async function handleSocialLogin(provider: "google" | "apple") {
    setSocialLoading(provider);
    setMessage("");

    const siteUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const targetPath =
      redirect && isSafePostLoginPath(redirect) ? redirect : "/dashboard";

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${siteUrl}/login?redirect=${encodeURIComponent(
          targetPath
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
      setMessage(error.message);
      setSocialLoading("");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#03050b] px-6 py-12 text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#f5b942]/10 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#f5b942]/5 blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/40">
        <p className="text-sm font-black uppercase tracking-[0.4em] text-[#f5b942]">
          ART-IST.CLUB
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-white">
          {translate("auth.login.title", "Giriş Yap")}
        </h1>

        <p className="mt-3 text-sm leading-6 text-white/60">
          {translate(
            "auth.login.description",
            "Hesabına giriş yap. Sistem hesap tipine göre seni doğru alana yönlendirecek."
          )}
        </p>

        {redirect && (
          <div className="mt-5 rounded-2xl border border-[#f5b942]/20 bg-[#f5b942]/10 p-4">
            <p className="text-sm font-bold text-[#f5b942]">
              {translate(
                "auth.login.redirectNoticeTitle",
                "Devam etmek için giriş yapmalısın."
              )}
            </p>
            <p className="mt-1 text-xs leading-5 text-white/55">
              {translate(
                "auth.login.redirectNoticeText",
                "Girişten sonra kaldığın sayfaya yönlendirileceksin."
              )}
            </p>
          </div>
        )}

        <div className="mt-7 grid gap-3">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            disabled={Boolean(socialLoading) || loading}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-black text-white transition hover:border-[#f5b942]/40 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {socialLoading === "google"
              ? translate("auth.login.googleLoading", "Google açılıyor...")
              : translate("auth.login.googleContinue", "Google ile devam et")}
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin("apple")}
            disabled={Boolean(socialLoading) || loading}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-black text-white transition hover:border-[#f5b942]/40 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {socialLoading === "apple"
              ? translate("auth.login.appleLoading", "Apple açılıyor...")
              : translate("auth.login.appleContinue", "Apple ile devam et")}
          </button>
        </div>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
            {translate("auth.login.orEmail", "veya email ile")}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder={translate("auth.login.emailPlaceholder", "Email")}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            type="password"
            placeholder={translate("auth.login.passwordPlaceholder", "Şifre")}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading || Boolean(socialLoading)}
            className="w-full rounded-xl bg-[#f5b942] py-3 font-black text-black transition hover:scale-[1.02] hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? translate("auth.login.submitting", "Giriş yapılıyor...")
              : translate("auth.login.submit", "Giriş Yap")}
          </button>
        </form>

        <button
          type="button"
          onClick={() =>
            router.push(
              redirect
                ? `/register?redirect=${encodeURIComponent(redirect)}`
                : "/register"
            )
          }
          className="mt-5 w-full rounded-xl border border-white/10 px-5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5b942]/40 hover:text-[#f5b942]"
        >
          {translate("auth.login.noAccount", "Hesabın yok mu? Üye ol")}
        </button>

        {message && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}
