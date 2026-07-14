"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  useEffect(() => {
    async function routeUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("account_type")
        .eq("id", user.id)
        .maybeSingle();

      switch (profile?.account_type) {
        case "client":
          router.replace("/dashboard/client");
          break;

        case "company":
        case "enterprise":
          router.replace("/dashboard/company");
          break;

        default:
          router.replace("/dashboard/artist");
      }
    }

    routeUser();
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#03050b] text-white">
      {translate("dashboard.redirecting", "Dashboard yönlendiriliyor...")}
    </main>
  );
}
