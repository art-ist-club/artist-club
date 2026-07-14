import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase.from("artists").select("*").limit(1);

  return (
    <main style={{ padding: 40, color: "white", background: "#03050b", minHeight: "100vh" }}>
      <h1>Supabase Test</h1>

      {error ? (
        <pre style={{ color: "#ff6b6b" }}>
          Bağlantı var ama tablo yok veya sorgu hatası:
          {"\n"}
          {error.message}
        </pre>
      ) : (
        <pre style={{ color: "#7CFFB2" }}>
          Supabase bağlantısı başarılı.
          {"\n"}
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </main>
  );
}