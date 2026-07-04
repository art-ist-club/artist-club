export function Waitlist() {
  return (
    <section id="waitlist" className="mx-auto max-w-7xl px-5 pb-24">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.07] px-6 py-16 text-center md:px-16">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-brand-gold">
          Çok Yakında
        </p>
        <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
          ART-IST.CLUB erken erişim listesine katıl.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-soft">
          Platform yayına açıldığında ilk haberdar olanlardan biri ol.
        </p>

        <form className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
          <input
            type="email"
            placeholder="E-posta adresin"
            className="h-14 rounded-full border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-brand-soft"
          />
          <button
            type="button"
            className="h-14 rounded-full bg-brand-gold px-8 font-black text-brand-dark"
          >
            Katıl
          </button>
        </form>

        <p className="mt-4 text-sm text-brand-soft">
          Bu form sonraki adımda Supabase ile gerçek kayıt sistemine bağlanacak.
        </p>
      </div>
    </section>
  );
}
