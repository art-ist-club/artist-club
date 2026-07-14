import { redirect } from "next/navigation";

export default function ClientMyRequestsPage() {
  redirect("/dashboard/client");

  return null;
}

/*
Sprint 10C

Bu sayfa geçici yönlendirme sayfasıdır.

Sonraki sprintte burada:
- My Requests listesi
- Conversation butonu
- Status
- Booking geçmişi
yer alacak.
*/
