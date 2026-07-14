# ART-IST.CLUB — Subscription Architecture Specification

**Document:** Sprint 20A / Adım 3 — Final Architecture Decisions  
**Status:** Architecture source of truth (technical + business rules) — **product decisions locked**  
**Audience:** Product, engineering, legal alignment, payment-provider integration  
**Currency model:** USD amounts stored as integer minor units (cents)  
**Time model:** All persisted timestamps are UTC  

---

## 1. Yönetici özeti

ART-IST.CLUB ücretli üyeliği, kullanıcı rolünden (`account_type`) ve özellik erişiminden (`entitlement`) ayrılmış bir **abonelik yaşam döngüsü** olarak tasarlanır.

| Kavram | Anlamı | Kaynak |
|--------|--------|--------|
| **account_type** | Kullanıcının platform rolü (`artist`, `client`, `company`, …) | `profiles.account_type` |
| **subscription** | Kullanıcının ücretli üyelik kaydı ve dönem durumu | ART-IST.CLUB DB (`subscriptions`) |
| **entitlement** | Planın verdiği özellik erişimi | `plan_entitlements` + efektif abonelik durumu |

**Ödeme sağlayıcısı** (PayTR, Stripe, Paddle, Adyen vb.) yalnızca ödeme işlemini gerçekleştirir. Abonelik yaşam döngüsünün **asıl kaynağı (source of truth)** ART-IST.CLUB veritabanıdır. Provider’daki subscription durumu tek başına güven kaynağı değildir.

### Kilitli planlar

| Plan | Kod | Fiyat | Not |
|------|-----|-------|-----|
| FREE | `free` | `0` | Ödeme planı değil; varsayılan erişim. Taslak profil OK; **public yayın / Discover yok** |
| ARTIST | `artist` | `4999` (= 49.99 USD) / yıl | Otomatik yenilenebilir; public yayın + Discover |
| PROFESSIONAL | `professional` | `9999` (= 99.99 USD) / yıl | Otomatik yenilenebilir; Verified Business Partner ilanları |
| SIGNATURE | `signature` | B2B’de belirlenecek | Invite-only; checkout’ta yok; admin manuel aktivasyon; ödeme zorunluluğu şimdilik tanımsız |

### Founding Campaign (ayrı plan değil)

- ARTIST planına uygulanan **ilk satın alma kampanyasıdır**.
- İlk satın alma: `2499` (= 24.99 USD).
- Standart / yenileme ARTIST fiyatı: `4999` (= 49.99 USD).
- Kampanya bitişi: **2027-06-30 20:59:59 UTC**  
  (Türkiye saati TRT = UTC+3 → yerel `30.06.2027 23:59:59` ile eşleşir; gösterim frontend’de lokalize edilir).
- Kampanya yalnızca **ilk başarılı ARTIST satın alımında**, kullanıcı başına **bir kez**; iptal/iade/chargeback sonrası tekrar kullanılamaz.
- Kullanıcıya kalıcı **Founding Artist** statüsü kazandırır; bu statü **abonelik planından ayrı** tutulur.

---

## 2. Mimari prensipler

1. **Üç kavram ayrımı:** `account_type` ≠ `subscription` ≠ `entitlement`.
2. **DB is source of truth** for subscription lifecycle; provider is payment executor + corroborating signal.
3. **Provider-agnostic:** adapter pattern; PayTR / Stripe / Paddle / Adyen / diğerleri aynı iç sözleşmeye map edilir.
4. **Money as integer minor units** (USD cents). Never `decimal`/`float` for amounts.
5. **UTC everywhere** in storage; campaign end normalized to UTC; local display is frontend-only.
6. **Price snapshots at purchase:** plan catalog changes must not silently rewrite existing renewal terms; purchase-time and renewal snapshots are stored on the subscription.
7. **One effective paid subscription per profile** at a time.
8. **No hard delete** of billing records; soft/audit retention.
9. **No secrets / PAN / CVV** in our DB; only provider tokens / references.
10. **Immutable payment events** + **idempotent webhooks** (`provider_event_id` unique).
11. **Founding is campaign + badge status**, not a `subscription_status` and not a plan code for renewals.
12. Do **not** encode plan identity (`founding`, `professional`) or billing outcomes (`refunded`, `chargeback`) as `subscription_status`.
13. **FREE publish rule:** FREE users may draft/preview profiles; public publish and Discover require active paid entitlement (`artist` / `professional` / eligible `signature`). On paid expiry, unpublish but **never delete** profile data.
14. **Founding eligibility ≠ badge visibility:** separate persisted fields; status permanent; visibility user/admin controllable (default visible).
15. **Provider selection is configuration**, not domain hardcoding. First operational candidate: PayTR. Transaction `provider` is immutable after create.
16. **Platform invoice ≠ fiscal e-document:** `billing_invoices` always; official e-fatura/e-arşiv optional separate fiscal provider later.
17. **No 30-day advance cancel requirement** to turn off auto-renew; legal/content must be aligned (action item).

---

## 3. Genel mimari diyagram

```text
┌──────────────────────────────────────────────────────────────────────┐
│                         ART-IST.CLUB App                              │
│  Dashboard / Founding / Checkout UI                                   │
│       │                                                               │
│       ▼                                                               │
│  Billing API (create checkout, cancel, upgrade, portal reads)         │
│       │                                                               │
│       ▼                                                               │
│  Subscription Domain Service                                          │
│   - eligibility / campaigns                                           │
│   - state machine                                                     │
│   - entitlements resolution                                           │
│   - audit                                                             │
│       │                                                               │
│       ├──────────────► ART-IST.CLUB Database (source of truth)        │
│       │                  subscriptions, plans, transactions,          │
│       │                  events, campaigns, audit logs                │
│       │                                                               │
│       └──────────────► PaymentProviderAdapter                         │
│                          createCheckout / renew / refund /            │
│                          verifyWebhook / normalizeWebhookEvent        │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  External Provider     │
                    │  PayTR / Stripe / …    │
                    └───────────┬───────────┘
                                │ webhooks
                                ▼
                    ┌───────────────────────┐
                    │  Webhook Ingest        │
                    │  verify → normalize →  │
                    │  idempotent apply      │
                    └───────────────────────┘
```

**Entitlement resolution (read path):**

```text
profile
  → effective subscription (if any, paid & eligible status)
  → plan_code
  → plan_entitlements
  → + founding_status (badge/visibility, not plan)
  → FREE defaults if no effective paid subscription
```

---

## 4. Domain sınırları

| Domain | Owns | Does not own |
|--------|------|--------------|
| **Identity / Role** | `profiles`, `account_type` | Paid features, plan prices |
| **Subscription** | Plans, status lifecycle, periods, renewals, upgrades/downgrades | Card data, provider secrets |
| **Campaign** | Founding eligibility, redemptions, Founding Artist status | Payment capture |
| **Billing** | Customers, transactions, invoices, payment methods (tokens), provider refs | Subscription business rules beyond payment signals |
| **Entitlement** | Feature matrix per plan + status | UI copy alone |
| **Payment Provider** | Capture / agreement / webhook payload | Final subscription truth |
| **Audit** | Immutable logs of actions and events | Mutable user preference storage |

---

## 5. Önerilen tablolar

1. `subscription_plans`
2. `plan_entitlements`
3. `subscriptions`
4. `subscription_status_history`
5. `campaigns`
6. `campaign_redemptions`
7. `billing_customers`
8. `billing_transactions`
9. `billing_invoices`
10. `payment_methods`
11. `payment_events`
12. `provider_customers`
13. `provider_references`
14. `subscription_audit_logs`

> **Founding (kilitli model):** `campaign_redemptions` eligibility/consumption kaydıdır. Kalıcı Founding **statüsü** ve **rozet görünürlüğü** `profiles` üzerinde ayrı alanlardır (aşağıda). Plan kodu değildir.

---

## 6–9. Tablo spesifikasyonları

Aşağıda her tablo için: amaç, alanlar, zorunlu/nullable, ilişkiler, unique, index, silme politikası, hassas veri.

### 6.1 `subscription_plans`

**Amaç:** Satılabilir / referans plan kataloğu (FREE dahil metadata; FREE checkout ile satılmaz).

| Alan | Tip (mantıksal) | Zorunlu | Nullable | Açıklama |
|------|-----------------|---------|----------|----------|
| `id` | uuid PK | ✓ | | |
| `code` | `plan_code` | ✓ | | `free`, `artist`, `professional`, `signature` |
| `name` | text | ✓ | | Görünen ad (i18n key veya varsayılan) |
| `description` | text | | ✓ | |
| `billing_interval` | text | ✓ | | MVP: `year` |
| `interval_count` | int | ✓ | | MVP: `1` |
| `price_amount_minor` | int | | ✓ | FREE=`0`, ARTIST=`4999`, PROFESSIONAL=`9999`; **SIGNATURE = `null`** (fiyat B2B’de) |
| `currency` | char(3) | ✓ | | `USD` (SIGNATURE fiyatı null olsa da katalog para birimi USD kalabilir) |
| `is_purchasable` | bool | ✓ | | FREE=`false`, SIGNATURE=`false` |
| `is_invite_only` | bool | ✓ | | SIGNATURE=`true` |
| `requires_payment` | bool | ✓ | | SIGNATURE=`false` (şimdilik ödeme zorunluluğu tanımlı değil); diğer purchasable planlar=`true` |
| `is_active` | bool | ✓ | | Katalog aktifliği |
| `sort_order` | int | ✓ | | |
| `created_at` | timestamptz UTC | ✓ | | |
| `updated_at` | timestamptz UTC | ✓ | | |

**İlişkiler:** `plan_entitlements.plan_id` → `subscription_plans.id`; `subscriptions.plan_id` → `subscription_plans.id`.

**Unique:** `code` UNIQUE.

**Index:** `(is_purchasable, is_active)`, `(code)`.

**Silme:** Hard delete yok; `is_active=false`.

**Hassas veri:** Hayır.

> Fiyat değişikliği yeni katalog satırı veya versiyonlama ile yapılır; mevcut aboneliklerin `renewal_price_amount_minor` snapshot’ı değişmez.

---

### 6.2 `plan_entitlements`

**Amaç:** Plan → özellik matrisi.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `plan_id` | uuid FK → `subscription_plans` | ✓ | |
| `feature` | `access_feature` | ✓ | |
| `is_enabled` | bool | ✓ | |
| `created_at` | timestamptz | ✓ | |

**Unique:** `(plan_id, feature)`.

**Index:** `(plan_id)`, `(feature)`.

**Silme:** Soft (row disable) veya plan deaktive ile; hard delete önerilmez.

**Hassas veri:** Hayır.

---

### 6.3 `subscriptions`

**Amaç:** Profil başına ücretli üyelik yaşam döngüsü (source of truth).

| Alan | Tip | Zorunlu | Nullable | Açıklama |
|------|-----|---------|----------|----------|
| `id` | uuid PK | ✓ | | |
| `profile_id` | uuid FK → `profiles` | ✓ | | |
| `plan_id` | uuid FK → `subscription_plans` | ✓ | | |
| `plan_code` | `plan_code` | ✓ | | Snapshot kolaylığı / sorgu |
| `status` | `subscription_status` | ✓ | | |
| `renewal_mode` | `renewal_mode` | ✓ | | `auto`, `manual` |
| `current_period_start` | timestamptz | ✓ | | UTC |
| `current_period_end` | timestamptz | ✓ | | UTC |
| `cancel_at_period_end` | bool | ✓ | | default false |
| `cancel_requested_at` | timestamptz | | ✓ | Kullanıcı normal iptal talep zamanı |
| `cancelled_at` | timestamptz | | ✓ | `cancelled` status’a geçiş zamanı (erken operasyonel kapanış) |
| `cancellation_reason` | `cancellation_reason` | | ✓ | |
| `ended_at` | timestamptz | | ✓ | Fiili bitiş |
| `grace_period_ends_at` | timestamptz | | ✓ | İlk fail + 7 takvim günü |
| `purchased_price_amount_minor` | int | ✓ | | Satın alma anı fiyatı |
| `purchased_currency` | char(3) | ✓ | | |
| `renewal_price_amount_minor` | int | ✓ | | Yenileme snapshot (ARTIST→`4999` founding sonrası) |
| `renewal_currency` | char(3) | ✓ | | |
| `campaign_id` | uuid FK → `campaigns` | | ✓ | İlk satın alımda founding |
| `scheduled_plan_id` | uuid FK → `subscription_plans` | | ✓ | Downgrade hedef planı |
| `scheduled_plan_code` | `plan_code` | | ✓ | örn. `artist` |
| `scheduled_change_at` | timestamptz | | ✓ | Genelde `current_period_end` |
| `scheduled_change_revoked_at` | timestamptz | | ✓ | Kullanıcı downgrade talebini geri alırsa |
| `billing_customer_id` | uuid FK → `billing_customers` | | ✓ | |
| `provider` | `payment_provider` | | ✓ | Config’den seçilir; kayıt sonrası immutable tercih (transaction provider ayrı ve kesin immutable) |
| `is_effective` | bool | ✓ | | Aynı anda tek `true` **paid effective**; `pending` asla effective değil |
| `created_at` / `updated_at` | timestamptz | ✓ | | |

**Zorunlu iş kuralları:**

- Aynı `profile_id` için aynı anda en fazla **bir** `is_effective = true` ücretli abonelik.
- `pending` checkout kayıtları **aktif/effective sayılmaz**.
- FREE satır olarak `subscriptions` tablosuna yazılmaz; FREE = “efektif ücretli abonelik yok”.
- Normal kullanıcı iptali → `cancel_at_period_end`; dönem sonunda → **`expired`** (cancelled değil).
- `cancelled` yalnızca dönem sonu beklenmeden operasyonel / yasal / fraud / refund / admin kapanışında.

**Unique / partial unique (öneri):**

- `UNIQUE (profile_id) WHERE is_effective = true` (partial unique index).

**Index:**

- `(profile_id, status)`
- `(status, current_period_end)`
- `(plan_code, status)`
- `(cancel_at_period_end, current_period_end)`

**Silme:** Hard delete yok; status `cancelled` / `expired` / `suspended`.

**Hassas veri:** Hayır (fiyat integer’ları ticari ama kart verisi değil).

---

### 6.4 `subscription_status_history`

**Amaç:** Status geçişlerinin append-only geçmişi.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `subscription_id` | uuid FK | ✓ | |
| `from_status` | `subscription_status` | | ✓ | İlk aktivasyonda null |
| `to_status` | `subscription_status` | ✓ | |
| `action` | `subscription_action` | ✓ | |
| `reason` | text | | ✓ |
| `actor_type` | text | ✓ | `system`, `user`, `admin`, `webhook` |
| `actor_id` | uuid | | ✓ |
| `payment_event_id` | uuid FK → `payment_events` | | ✓ |
| `created_at` | timestamptz | ✓ | |

**Unique:** Yok (append-only).

**Index:** `(subscription_id, created_at DESC)`.

**Silme:** Hard delete yok.

**Hassas veri:** Hayır.

---

### 6.5 `campaigns`

**Amaç:** Founding ve gelecekteki kampanyalar.

| Alan | Tip | Zorunlu | Nullable | Açıklama |
|------|-----|---------|----------|----------|
| `id` | uuid PK | ✓ | | |
| `code` | text | ✓ | | örn. `founding_artist_2026` |
| `type` | `campaign_type` | ✓ | | `founding_first_purchase` |
| `target_plan_code` | `plan_code` | ✓ | | `artist` |
| `campaign_price_amount_minor` | int | ✓ | | `2499` |
| `standard_price_amount_minor` | int | ✓ | | `4999` (yenileme referansı) |
| `currency` | char(3) | ✓ | | `USD` |
| `starts_at` | timestamptz | ✓ | | UTC |
| `ends_at` | timestamptz | ✓ | | **2027-06-30 20:59:59 UTC** |
| `max_redemptions_per_profile` | int | ✓ | | `1` |
| `is_active` | bool | ✓ | | |
| `grants_founding_status` | bool | ✓ | | `true` |
| `created_at` / `updated_at` | timestamptz | ✓ | | |

**Unique:** `code`.

**Index:** `(is_active, ends_at)`, `(target_plan_code)`.

**Silme:** Deaktive; hard delete yok.

**Hassas veri:** Hayır.

---

### 6.6 `campaign_redemptions`

**Amaç:** Kullanıcı başına kampanya kullanımı ve Founding entitlement kaydı.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `campaign_id` | uuid FK | ✓ | |
| `profile_id` | uuid FK → `profiles` | ✓ | |
| `subscription_id` | uuid FK | ✓ | |
| `billing_transaction_id` | uuid FK | | ✓ |
| `status` | `campaign_redemption_status` | ✓ | |
| `redeemed_at` | timestamptz | ✓ | |
| `amount_minor` | int | ✓ | |
| `currency` | char(3) | ✓ | |
| `created_at` | timestamptz | ✓ | |

**Redemption status önerisi:** `redeemed` (başarılı ve kilitli). İade/chargeback sonrası satır silinmez; status `revoked_but_consumed` gibi bir değere çekilebilir — **kampanya tekrar açılamaz**.

**Unique:** `(campaign_id, profile_id)` — kullanıcı kampanyayı yalnızca bir kez kullanır (başarılı redemption sonrası kalıcı).

**Index:** `(profile_id)`, `(campaign_id, status)`.

**Silme:** Hard delete yok.

**Hassas veri:** Hayır.

**Founding visibility / badge kuralları (kilitli):**

| Kural | Davranış |
|-------|----------|
| Eligibility / status | `profiles.is_founding_artist` (+ `founding_artist_granted_at`) — kampanya redeem ile set |
| Badge visibility | `profiles.founding_badge_visible` — **ayrı alan**; varsayılan `true` |
| Kalıcılık | Abonelik `expired` / `cancelled` / `suspended` olsa da Founding **statüsü silinmez** |
| Kullanıcı | Dashboard’dan rozeti gizleyebilir (`founding_badge_visible=false`) |
| Admin | Görünürlüğü kapatabilir; statüyü tamamen kaldırma yalnızca fraud / chargeback abuse / hatalı tanımlama |
| Plan ayrımı | Yenileme `artist` + `4999`; plan kodu `founding` olmaz |
| Public gösterim | Rozet yalnızca `is_founding_artist && founding_badge_visible` ve public profil yayındayken |
| Tekrar | İptal/iade/chargeback sonrası Founding fiyatı yeniden kullanılamaz |

### 6.6.1 `profiles` abonelik-ilgili alanlar (kilitli eklenti)

| Alan | Tip | Zorunlu | Nullable | Açıklama |
|------|-----|---------|----------|----------|
| `is_founding_artist` | bool | ✓ | | Eligibility/status; default `false` |
| `founding_artist_granted_at` | timestamptz | | ✓ | UTC |
| `founding_badge_visible` | bool | ✓ | | Default `true`; visibility only |
| `founding_status_revoked_at` | timestamptz | | ✓ | Yalnızca özel admin revoke |
| `founding_status_revoke_reason` | text | | ✓ | |

Mevcut `is_published` alanı public yayın için kullanılır: FREE veya expired sonrası `is_published=false`; profil satırı ve medya **silinmez**. Yeniden ücretli aktivasyonda kullanıcı mevcut profili yeniden yayımlayabilir.

---

### 6.7 `billing_customers`

**Amaç:** Platform içi faturalama müşteri kaydı (profil bağlantısı).

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `profile_id` | uuid FK | ✓ | |
| `email` | text | | ✓ | Snapshot iletişim |
| `created_at` / `updated_at` | timestamptz | ✓ | |

**Unique:** `profile_id` (1:1 önerilir).

**Silme:** Soft / sakla.

**Hassas veri:** PII (email) — evet, sınırlı.

---

### 6.8 `billing_transactions`

**Amaç:** Para hareketi kayıtları (charge, renew, refund, …).

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `billing_customer_id` | uuid FK | ✓ | |
| `subscription_id` | uuid FK | | ✓ |
| `type` | `billing_transaction_type` | ✓ | |
| `status` | `billing_transaction_status` | ✓ | |
| `amount_minor` | int | ✓ | |
| `currency` | char(3) | ✓ | |
| `provider` | `payment_provider` | ✓ | | Oluşturma anında set; **sonradan değiştirilemez** |
| `provider_payment_id` | text | | ✓ |
| `idempotency_key` | text | ✓ | |
| `failure_code` | text | | ✓ |
| `failure_message` | text | | ✓ |
| `occurred_at` | timestamptz | ✓ | |
| `created_at` / `updated_at` | timestamptz | ✓ | |

**Kural:** `provider` alanı insert sonrası immutable (uygulama + mümkünse DB trigger/policy).

**Unique:** `idempotency_key`; `(provider, provider_payment_id)` WHERE provider_payment_id IS NOT NULL.

**Index:** `(subscription_id, created_at)`, `(status, type)`.

**Silme:** Hard delete **yasak**.

**Hassas veri:** Ticari + limited PII linkage; kart yok.

---

### 6.9 `billing_invoices`

**Amaç:** ART-IST.CLUB kendi subscription invoice kaydı (platform finansal belge metadata’sı). Resmî e-fatura/e-arşiv **ayrı fiscal provider** entegrasyonudur; payment provider ile aynı sistem olmak zorunda değildir. İlk ödeme entegrasyonunda e-fatura API zorunlu değildir.

| Alan | Tip | Zorunlu | Nullable | Açıklama |
|------|-----|---------|----------|----------|
| `id` | uuid PK | ✓ | | |
| `billing_customer_id` | uuid FK | ✓ | | |
| `subscription_id` | uuid FK | | ✓ | |
| `billing_transaction_id` | uuid FK | | ✓ | |
| `status` | `invoice_status` | ✓ | | Platform invoice durumu |
| `amount_minor` | int | ✓ | | |
| `currency` | char(3) | ✓ | | |
| `period_start` / `period_end` | timestamptz | | ✓ | |
| `invoice_number` | text | | ✓ | Platform belge no; unique when set |
| `issued_at` | timestamptz | | ✓ | |
| `invoice_url` | text | | ✓ | Güvenli URL/reference; PDF ham saklama zorunlu değil |
| `fiscal_provider` | text | | ✓ | Ayrı fiscal entegratör kodu |
| `fiscal_document_id` | text | | ✓ | Resmî belge ID |
| `fiscal_status` | text | | ✓ | örn. `not_applicable`, `pending`, `issued`, `failed` |
| `created_at` / `updated_at` | timestamptz | ✓ | | |

**Unique:** `invoice_number` WHERE NOT NULL.

**Silme:** Hard delete yok.

**Hassas veri:** Fatura içeriği ticari; kart yok. Vergi/resmî detaylar mali müşavir kararıyla entegrasyon fazında netleşir.

---

### 6.10 `payment_methods`

**Amaç:** Provider token / reference ile saklanan ödeme yöntemi işaretçileri.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `billing_customer_id` | uuid FK | ✓ | |
| `provider` | `payment_provider` | ✓ | |
| `provider_payment_method_ref` | text | ✓ | Token / ref only |
| `brand` | text | | ✓ | örn. card brand label from provider |
| `last4` | char(4) | | ✓ | Provider’ın verdiği maskeli |
| `exp_month` / `exp_year` | int | | ✓ |
| `is_default` | bool | ✓ | |
| `is_active` | bool | ✓ | |
| `created_at` / `updated_at` | timestamptz | ✓ | |

**Yasak:** PAN, CVV, full track, provider secret.

**Unique:** `(provider, provider_payment_method_ref)`.

**Silme:** Soft deactivate.

**Hassas veri:** Evet (maskeli ödeme meta); PCI kapsamında minimum.

---

### 6.11 `payment_events`

**Amaç:** Normalize edilmiş, **değiştirilemez** webhook / ödeme olay kayıtları.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `provider` | `payment_provider` | ✓ | |
| `provider_event_id` | text | ✓ | |
| `type` | `payment_event_type` | ✓ | İç standart event |
| `status` | `payment_event_status` | ✓ | `received`, `processed`, `ignored`, `failed` |
| `payload_normalized` | jsonb | ✓ | Kart/secret temizlenmiş |
| `payload_raw_hash` | text | | ✓ | Ham payload hash (raw saklama politikası ayrı) |
| `billing_transaction_id` | uuid FK | | ✓ |
| `subscription_id` | uuid FK | | ✓ |
| `processing_error` | text | | ✓ |
| `received_at` | timestamptz | ✓ | |
| `processed_at` | timestamptz | | ✓ |
| `created_at` | timestamptz | ✓ | |

**Unique:** `(provider, provider_event_id)`.

**Index:** `(type, received_at)`, `(status)`, `(subscription_id)`.

**Silme:** Hard delete yok; update yalnızca `status` / `processed_at` / `processing_error` (işleme meta). `payload_normalized` ve kimlik alanları immutable kabul edilir.

**Hassas veri:** Normalize payload’da secret olmamalı.

---

### 6.12 `provider_customers`

**Amaç:** Provider müşteri ID eşlemesi.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `billing_customer_id` | uuid FK | ✓ | |
| `provider` | `payment_provider` | ✓ | |
| `provider_customer_id` | text | ✓ | |
| `created_at` / `updated_at` | timestamptz | ✓ | |

**Unique:** `(provider, provider_customer_id)`; `(billing_customer_id, provider)`.

**Silme:** Soft.

**Hassas veri:** Provider ID’leri — düşük/orta.

---

### 6.13 `provider_references`

**Amaç:** Abonelik / anlaşma / checkout session gibi provider nesne referansları.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `provider` | `payment_provider` | ✓ | |
| `reference_type` | text | ✓ | `checkout_session`, `recurring_agreement`, `subscription`, … |
| `provider_reference_id` | text | ✓ | |
| `subscription_id` | uuid FK | | ✓ |
| `billing_customer_id` | uuid FK | | ✓ |
| `metadata` | jsonb | | ✓ | secretsiz |
| `created_at` / `updated_at` | timestamptz | ✓ | |

**Unique:** `(provider, reference_type, provider_reference_id)`.

**Index:** `(subscription_id)`, `(billing_customer_id)`.

**Silme:** Soft / sakla.

**Hassas veri:** Hayır (ref IDs).

---

### 6.14 `subscription_audit_logs`

**Amaç:** İnsan/admin/sistem aksiyonlarının güvenlik ve uyum denetimi.

| Alan | Tip | Zorunlu | Nullable |
|------|-----|---------|----------|
| `id` | uuid PK | ✓ | |
| `profile_id` | uuid | | ✓ |
| `subscription_id` | uuid | | ✓ |
| `action` | text | ✓ | |
| `actor_type` | text | ✓ | |
| `actor_id` | uuid | | ✓ |
| `ip` | text | | ✓ |
| `user_agent` | text | | ✓ |
| `before_state` | jsonb | | ✓ |
| `after_state` | jsonb | | ✓ |
| `created_at` | timestamptz | ✓ | |

**Silme:** Hard delete yok (retention policy ayrı).

**Hassas veri:** IP/UA PII benzeri; kart yok.

---

## 7. Primary key ve foreign key ilişkileri (özet)

```text
profiles (id)
  └──1:1── billing_customers.profile_id
  └──1:N── subscriptions.profile_id
  └──1:N── campaign_redemptions.profile_id

subscription_plans (id)
  └──1:N── plan_entitlements.plan_id
  └──1:N── subscriptions.plan_id
  └──1:N── subscriptions.scheduled_plan_id

campaigns (id)
  └──1:N── campaign_redemptions.campaign_id
  └──1:N── subscriptions.campaign_id

subscriptions (id)
  └──1:N── subscription_status_history.subscription_id
  └──1:N── billing_transactions.subscription_id
  └──1:N── billing_invoices.subscription_id
  └──1:N── payment_events.subscription_id
  └──1:N── provider_references.subscription_id
  └──1:N── subscription_audit_logs.subscription_id

billing_customers (id)
  └──1:N── billing_transactions.billing_customer_id
  └──1:N── billing_invoices.billing_customer_id
  └──1:N── payment_methods.billing_customer_id
  └──1:N── provider_customers.billing_customer_id

billing_transactions (id)
  └──0..1── billing_invoices.billing_transaction_id
  └──0..1── campaign_redemptions.billing_transaction_id

payment_events (id)
  └──0..N── subscription_status_history.payment_event_id
```

---

## 8. Unique constraint önerileri (toplu)

| Tablo | Constraint |
|-------|------------|
| `subscription_plans` | `UNIQUE(code)` |
| `plan_entitlements` | `UNIQUE(plan_id, feature)` |
| `subscriptions` | `UNIQUE(profile_id) WHERE is_effective = true` |
| `campaigns` | `UNIQUE(code)` |
| `campaign_redemptions` | `UNIQUE(campaign_id, profile_id)` |
| `billing_customers` | `UNIQUE(profile_id)` |
| `billing_transactions` | `UNIQUE(idempotency_key)`; `UNIQUE(provider, provider_payment_id)` partial |
| `billing_invoices` | `UNIQUE(invoice_number)` partial |
| `payment_methods` | `UNIQUE(provider, provider_payment_method_ref)` |
| `payment_events` | `UNIQUE(provider, provider_event_id)` |
| `provider_customers` | `UNIQUE(billing_customer_id, provider)`; `UNIQUE(provider, provider_customer_id)` |
| `provider_references` | `UNIQUE(provider, reference_type, provider_reference_id)` |

---

## 9. Index önerileri (toplu)

- Status/period workers: `subscriptions(status, current_period_end)`, `subscriptions(grace_period_ends_at)`.
- User reads: `subscriptions(profile_id, is_effective)`, `subscriptions(profile_id, created_at DESC)`.
- Webhook dedupe already unique on `(provider, provider_event_id)`.
- Campaign eligibility: `campaign_redemptions(profile_id, campaign_id)`, `campaigns(is_active, ends_at)`.
- Billing history: `billing_transactions(billing_customer_id, created_at DESC)`.

---

## 10. Enum yapıları

### `plan_code`
`free` | `artist` | `professional` | `signature`

### `subscription_status`
`pending` | `active` | `past_due` | `grace_period` | `cancel_at_period_end` | `cancelled` | `expired` | `suspended`

**Kullanılmayacak status değerleri:** `founding`, `professional`, `refunded`, `chargeback`  
(bunlar plan / kampanya / billing olayıdır).

### `subscription_action`
`create` | `activate` | `renew` | `mark_past_due` | `enter_grace` | `schedule_cancel` | `cancel_immediate` | `expire` | `suspend` | `upgrade` | `schedule_downgrade` | `revoke_scheduled_downgrade` | `apply_downgrade` | `admin_override` | `revoke_founding_status` | `admin_activate_signature`

### `billing_transaction_status`
`created` | `pending` | `succeeded` | `failed` | `refunded` | `partially_refunded` | `chargeback_opened` | `chargeback_lost` | `chargeback_won` | `cancelled`

### `billing_transaction_type`
`initial_purchase` | `renewal` | `upgrade` | `refund` | `partial_refund` | `chargeback` | `manual_adjustment`

### `invoice_status`
`draft` | `open` | `paid` | `void` | `uncollectible`

### `payment_event_status`
`received` | `processed` | `ignored` | `failed`

### `payment_event_type` (iç standart — §22)
`payment.created` | `payment.pending` | `payment.succeeded` | `payment.failed` | `payment.refunded` | `payment.partially_refunded` | `payment.chargeback_opened` | `payment.chargeback_won` | `payment.chargeback_lost` | `subscription.activated` | `subscription.renewed` | `subscription.cancellation_scheduled` | `subscription.cancelled` | `subscription.expired` | `subscription.suspended` | `subscription.upgraded` | `subscription.downgrade_scheduled`

### `payment_provider`
`paytr` | `stripe` | `paddle` | `adyen` | `other`  

Domain model **primary provider’ı hardcode etmez**. Aktif provider environment/configuration katmanından seçilir (ör. `PAYMENT_PROVIDER=paytr`). İlk operasyonel aday: **PayTR**. Stripe / Adyen / Paddle / diğerleri eklenebilir. Transaction oluşturulduktan sonra `billing_transactions.provider` **değiştirilemez**.

### `campaign_type`
`founding_first_purchase` | `other`

### `campaign_redemption_status`
`redeemed` | `revoked_but_consumed`

### `cancellation_reason`
`user_requested` | `admin` | `payment_failure` | `upgrade_replaced` | `chargeback` | `legal` | `other`

### `access_feature` (MVP çekirdek; genişletilebilir)
`artist_profile_publish` | `discover_listing` | `job_requests` | `messaging` | `verified_business_partner_listings` | `founding_badge` | `priority_support` | …

> Public Founding rozeti entitlement tablosundan değil; `is_founding_artist && founding_badge_visible` (+ public yayın) ile çözülür. `access_feature` listesinde publish/discover özellik kodları plan matrisine bağlanır.

### `renewal_mode`
`auto` | `manual`

---

## 11. Subscription state machine

```text
                    [checkout started]
                           │
                           ▼
                       pending ──── (abandoned/timeout; NOT effective)
                           │
                           │ payment.succeeded
                           ▼
                        active ◄────────────────────────┐
                           │                            │ renewal success
           ┌───────────────┼──────────────┐             │
           │               │              │             │
           ▼               ▼              ▼             │
 cancel_at_period_end   past_due     upgraded (atomic)  │
           │               │                            │
           │               ▼                            │
           │          grace_period ─────────────────────┘
           │               │
           │               │ fail after 7 calendar days
           │               ▼
           └──────────► expired   ← normal user cancel at period end

suspended ← temporary admin/legal/security block (record kept)
cancelled ← early close only: admin / legal / fraud / refund / ops
            (NOT used for normal end-of-period user cancel)
```

### Status anlamları (kilitli)

| Status | Anlam |
|--------|-------|
| `pending` | Checkout başladı; ödeme tamamlanmadı; **effective değil** |
| `active` | Ücretli dönem aktif |
| `past_due` | Yenileme ilk başarısızlığı |
| `grace_period` | İlk fail’den sonra toplam **7 takvim günü**; public profil + ücretli özellikler devam |
| `cancel_at_period_end` | Kullanıcı iptal talebi verdi; mevcut dönem devam; auto-renew kapalı |
| `expired` | Süre sona erdi ve yenilenmedi / ödeme alınamadı; **normal kullanıcı iptalinin dönem sonu sonucu** |
| `cancelled` | Dönem sonu beklenmeden operasyonel / yasal / fraud / refund / admin kapanışı |
| `suspended` | Geçici erişim engeli; abonelik kaydı korunur |

**Kilitli kural:** Normal kullanıcı iptal akışında dönem sonunda status **`expired`** olur; **`cancelled` kullanılmaz**. `cancelled` terminala yakın bir durumdur; audit geçmişi her zaman korunur.

---

## 12. Payment state machine

Transaction (`billing_transactions.status`) akışı:

```text
created → pending → succeeded
                 ↘ failed
succeeded → refunded | partially_refunded
succeeded → chargeback_opened → chargeback_won | chargeback_lost
pending → cancelled (abandoned checkout)
```

Kart veya provider secret state’i saklanmaz; yalnızca transaction + event kayıtları.

---

## 13. Founding Campaign state ve eligibility mantığı

### Kampanya parametreleri (kilitli)

| Parametre | Değer |
|-----------|-------|
| Tip | ARTIST ilk satın alma kampanyası (ayrı plan değil) |
| Campaign price | `2499` USD cents |
| Standard / renewal ARTIST | `4999` |
| End (local TR display target) | 30.06.2027 23:59:59 TRT |
| End (DB UTC) | **2027-06-30 20:59:59 UTC** |
| Max per profile | 1 |
| Repeat after cancel/refund/chargeback | **Hayır** |

### Eligibility (tümü true olmalı)

1. `now_utc < campaigns.ends_at` ve `is_active`.
2. Hedef plan `artist`.
3. Profil için `campaign_redemptions` satırı **yok** (unique) — veya status her türlü “consumed”.
4. Profilin daha önce başarılı bir ARTIST (veya founding ARTIST) satın alımı yok (iş kuralı: “yalnızca ilk başarılı ARTIST satın alımı”).
5. Checkout path Founding CTA veya eligible ARTIST first purchase.

### Redeem anı

- `payment.succeeded` + subscription `activated` sonrası atomik:
  - `campaign_redemptions` insert `redeemed`
  - `profiles.is_founding_artist = true`
  - `profiles.founding_artist_granted_at = now_utc`
  - `profiles.founding_badge_visible = true` (default)
  - `subscriptions.purchased_price_amount_minor = 2499`
  - `subscriptions.renewal_price_amount_minor = 4999`

### Founding status vs badge visibility (kilitli)

| Alan | Rol |
|------|-----|
| `is_founding_artist` | Kalıcı eligibility/status |
| `founding_badge_visible` | Public rozet gösterimi (default true; user/admin kontrol) |

- Abonelik bitse bile status kalır.
- Rozet plan entitlement değildir.
- Public rozet: status ∧ visibility ∧ published profile.

---

## 14. Artist ve Professional erişim matrisi

| Feature | FREE | ARTIST (`active` / `grace_period` / `cancel_at_period_end`) | PROFESSIONAL (aynı) | SIGNATURE (admin-activated) |
|---------|------|------------------------------------------------------------------|---------------------|-------------------------------|
| Hesap / rol (`account_type`) | ✓ | ✓ | ✓ | ✓ |
| Profil taslağı oluşturma / düzenleme / önizleme | ✓ | ✓ | ✓ | ✓ |
| **Public artist profil yayınlama** | ✗ | ✓ | ✓ | ✓ (uygun erişim) |
| **Discover’da görünürlük** | ✗ | ✓ | ✓ | ✓ (uygun erişim) |
| Job requests / messaging | Ürün politikasına göre | ✓ | ✓ | ✓ |
| **Verified Business Partner ilanları** | ✗ | ✗ | ✓ | B2B’de netleşir |
| Founding rozet (public) | status ∧ visibility ∧ published | aynı | aynı | aynı |
| Normal checkout’ta satılır | ✗ | ✓ | ✓ | ✗ |

**FREE kuralı (kilitli):** FREE ödeme planı değildir. Taslak/önizleme serbesttir. Public yayın ve Discover için aktif ARTIST, PROFESSIONAL veya uygun SIGNATURE erişimi gerekir. Ücretli abonelik bitince profil **silinmez**; yayından kalkar (taslak kalır); yeniden ödeme sonrası tekrar yayımlanabilir.

**Grace (kilitli):** 7 takvim günü boyunca public profil + mevcut ücretli özellikler aktif kalır; PROFESSIONAL’da VBP erişimi devam eder. Yeni satın alma / upgrade gibi finansal işlemler başarısız ödeme çözülene kadar sınırlandırılabilir.

**EXPIRED / CANCELLED (erken) / SUSPENDED:** Ücretli publish/Discover kapanır → efektif FREE (+ Founding status kalır; rozet visibility tercihine bağlı). Profil verisi silinmez.

---

## 15. Renewal akışı

1. `current_period_end` yaklaşır; `renewal_mode = auto` ve `cancel_at_period_end = false`.
2. Sistem / provider `chargeRenewal` veya provider otomatik yenileme sinyali.
3. Başarı → `payment.succeeded` + `subscription.renewed`:
   - `current_period_start/end` +1 yıl
   - `renewal_price_amount_minor` snapshot kullanılır (katalog değil)
   - status `active`
4. Founding kullanılmış olsa bile charge amount = `4999` (ARTIST).
5. Başarısızlık → §17.

Provider auto-renew yoksa: ART-IST.CLUB kontrollü retry scheduler.

---

## 16. Cancellation akışı

1. Kullanıcı auto-renew’u kapatmak / iptal etmek ister → **hemen kapanmaz**.
2. **30 gün önceden bildirim zorunluluğu yoktur**; yenileme tahsilatı öncesi istediği zaman kapatabilir.
3. Status → `cancel_at_period_end`; `cancel_requested_at` set; `cancel_at_period_end=true`.
4. İç event: `subscription.cancellation_scheduled`.
5. Provider `cancelRecurringAgreement` (yenilemeyi durdur).
6. Dönem sonuna kadar haklar devam eder.
7. `current_period_end` → status **`expired`** (normal akışta **`cancelled` değil**); `is_effective=false`; public profil yayından kalkar; veri silinmez.
8. Yenileme tahsilatı **sonrası** iptal, yeni dönemi otomatik iade etmez; iade ayrı policy/mevzuat değerlendirmesidir.
9. Erken kapanış (admin/legal/fraud/refund) → `cancelled` veya geçici olarak `suspended`.

### Legal / content alignment action item

Founding sayfası ve `messages/*/founding.json` içindeki “en az 30 gün önce iptal” anlamına gelen metin **kaldırılmalı veya düzeltilmelidir** (uygulama sprint’inde; bu Adım 3 yalnızca doküman). `/legal/cancellation` ile hizalanmalıdır.

---

## 17. Failed Payment ve grace period akışı

Kilitli varsayılan:

1. İlk başarısız renewal → `past_due` + bildirim; grace sayacı **bu andan** başlar.
2. Kontrollü retry denemeleri (provider desteklemiyorsa sistem retry).
3. Toplam **7 takvim günü** → status `grace_period`; `grace_period_ends_at` UTC.
4. Grace boyunca: public profil + mevcut ücretli özellikler aktif; PROFESSIONAL VBP erişimi devam.
5. Yeni satın alma / plan yükseltme gibi finansal işlemler fail çözülene kadar sınırlandırılabilir.
6. 7 gün sonunda ödeme yok → `expired`, `is_effective=false`, public profil yayından kalkar; **profil verisi silinmez**.

---

## 18. Refund akışı

1. Admin veya policy-driven refund → adapter `refundPayment`.
2. Events: `payment.refunded` / `payment.partially_refunded`.
3. `billing_transactions` güncellenir; invoice void/adjust.
4. Subscription etkisi **policy’ye bağlı** (ürün/legal):
   - Full refund soon after purchase → expire/suspend + access revoke önerilir.
   - Founding redemption **tekrar açılmaz** (`revoked_but_consumed`).
5. `subscription_status` asla `refunded` olmaz; billing event + audit.

---

## 19. Chargeback akışı

1. `payment.chargeback_opened` → risk flag + audit; gerekirse `suspended`.
2. `payment.chargeback_lost` → access revoke (`expired`/`suspended`), Founding consumed kalır.
3. `payment.chargeback_won` → uygunsa access restore policy.
4. Status adı `chargeback` kullanılmaz.

---

## 20. Professional yükseltme akışı (MVP)

1. ARTIST (effective) kullanıcı PROFESSIONAL checkout’a girer.
2. UI açıkça belirtir: hemen yükselme; prorata yok; yeni tam yıllık PROFESSIONAL dönem.
3. **Atomik kural:** PROFESSIONAL ödemesi başarılı olmadan ARTIST aboneliği kapatılmaz.
4. Ödeme başarı (tek idempotent apply):
   - yeni PROFESSIONAL `active` + `is_effective=true`
   - eski ARTIST `upgrade_replaced` ile sonlandırılır (`ended_at`; status `expired` veya erken kapanış semantiğine uygun `cancelled` — upgrade reason)
   - event `subscription.upgraded`
5. Pending checkout effective sayılmaz.
6. Çift webhook / tekrar callback iki effective abonelik oluşturamaz (partial unique + idempotency).

---

## 21. Professional → Artist düşürme (downgrade)

Kilitli model:

1. Anında uygulanmaz.
2. `scheduled_plan_code = artist` (veya `scheduled_plan_id`), `scheduled_change_at = current_period_end`, event `subscription.downgrade_scheduled`.
3. Mevcut PROFESSIONAL dönemi sonuna kadar **tüm PROFESSIONAL hakları** devam eder.
4. Kullanıcı dönem sonundan önce talebi geri alabilir → `scheduled_*` temizlenir / `scheduled_change_revoked_at`; action `revoke_scheduled_downgrade`.
5. Bir sonraki yenilemede ARTIST **`4999` (49.99 USD / yıl)** üzerinden ücretlendirilir.
6. Renewal başarılı → yeni dönem ARTIST olarak başlar (`plan_code=artist`, yeni period bounds).
7. Renewal başarısız → normal `past_due` → grace (§17) → gerekirse `expired`.

---

## 22. Webhook event standardizasyonu

Provider ham olayları adapter `normalizeWebhookEvent` ile iç tiplere map edilir (§10 `payment_event_type` listesi).

Mapping örneği (sağlayıcıdan bağımsız kavramsal):

| İç event | Tipik anlam |
|----------|-------------|
| `payment.succeeded` | Para alındı |
| `payment.failed` | Tahsilat başarısız |
| `subscription.activated` | İlk dönem aktif |
| `subscription.renewed` | Dönem yenilendi |
| `subscription.cancellation_scheduled` | Dönem sonu iptal |
| `subscription.upgraded` | Plan yükseltildi |

Bilinmeyen provider event → `payment_events.status = ignored` + audit.

---

## 23. Webhook idempotency mantığı

1. `verifyWebhook` (imza / IP / secret — secret env’de).
2. Insert `payment_events` with `UNIQUE(provider, provider_event_id)`.
3. Conflict (duplicate) → no-op success (idempotent).
4. Process once; mark `processed`.
5. Domain apply aynı `idempotency_key` ile transaction üretiminde de korunur.

---

## 24. Event sıralama ve duplicate koruması

- Her event `received_at` + mümkünse provider `occurred_at`.
- Apply layer: subscription version / `updated_at` veya monotonic `status_history` ile stale event’leri reddet (ör. eski `payment.failed` yeni `succeeded` sonrası).
- Duplicate `provider_event_id` → ignore.
- Out-of-order: state machine yalnızca geçerli geçişlere izin verir; illegal transition → `failed` event process + alert, state bozulmaz.

---

## 25. Dashboard için gerekli read model

Kullanıcıya / dashboard’a sunulacak türetilmiş görünüm (view veya query service):

| Alan | Kaynak |
|------|--------|
| `account_type` | profiles |
| `effective_plan_code` | effective subscription or `free` |
| `subscription_status` | subscriptions |
| `current_period_end` | subscriptions |
| `cancel_at_period_end` | subscriptions |
| `grace_period_ends_at` | subscriptions |
| `is_founding_artist` | profiles (status/eligibility) |
| `founding_badge_visible` | profiles (visibility) |
| `is_published` | profiles (public publish gate) |
| `features[]` | entitlements resolver |
| `can_access_verified_business_partner_listings` | professional + eligible status |
| `renewal_price_amount_minor` / currency | snapshot |
| `scheduled_plan_code` | downgrade schedule |
| `last_payment_status` | billing_transactions |
| `invoices[]` | billing_invoices (platform + fiscal metadata) |

API yüzeyi provider detayı sızdırmamalı.

---

## 26. Payment Provider abstraction (kavramsal sözleşme)

Kod yazılmadan conceptual interface:

| Method | Responsibility |
|--------|----------------|
| `createCustomer` | Provider müşteri oluştur / eşle |
| `createCheckoutSession` | İlk satın alma / upgrade checkout URL veya token |
| `createRecurringAgreement` | Otomatik yenileme anlaşması |
| `chargeRenewal` | Yenileme tahsilatı (provider auto yoksa) |
| `cancelRecurringAgreement` | Yenilemeyi durdur |
| `refundPayment` | İade |
| `verifyWebhook` | Authenticity |
| `normalizeWebhookEvent` | Ham → iç `payment_event_type` + refs |
| `getPaymentStatus` | Provider payment poll |
| `getRecurringAgreementStatus` | Anlaşma durumu poll |

Uygulama katmanı yalnızca bu adapter’a bağımlıdır; provider SDK doğrudan domain service’e sızmaz.

**Konfigürasyon:** Hangi adapter’ın concrete implementasyonu yükleneceği environment/configuration ile seçilir. Domain kodu `paytr` string’ine kilitlenmez. İlk aday operasyonel olarak PayTR’dır.

---

## 27. Audit log gereksinimleri

Kaydedilecek minimum aksiyonlar:

- Checkout start / complete
- Activate / renew / cancel / upgrade / downgrade schedule
- Refund / chargeback
- Admin suspend / restore
- Campaign redeem
- Illegal webhook transition attempts

`subscription_audit_logs` + `payment_events` + `subscription_status_history` birlikte uyum izi oluşturur.

---

## 28. Güvenlik ve RLS önerileri

1. Kullanıcı kendi `subscriptions`, `billing_*` (sınırlı), `invoices` satırlarını **okuyabilir**.
2. Kullanıcı billing satırlarını **yazamaz**; yazma service role / secure API.
3. Webhook endpoint: imza doğrulama, raw body, rate limit.
4. Secrets: yalnızca env / vault; DB’de yok.
5. Admin işlemleri ayrı role + audit.
6. RLS: `profile_id = auth.uid()` read policies; no client inserts into `payment_events`.
7. Card data never logged.

---

## 29. Risk analizi

| Risk | Etki | Azaltma |
|------|------|---------|
| Provider truth sanılması | Yanlış erişim | DB source of truth + illegal transition reject |
| Duplicate webhook / çift effective sub | Çift ücretli kayıt | unique provider_event_id + idempotency + partial unique `is_effective` + atomic upgrade |
| Founding abuse (refund + retry) | Gelir kaybı | redemption unique + `revoked_but_consumed` |
| FREE public leak | Ücretsiz Discover | publish/Discover gate only for paid effective statuses |
| Plan price edit | Sessiz fiyat değişimi | purchase/renewal snapshots |
| Float money | Yuvarlama hataları | integer minor units |
| Timezone bug on campaign end | Erken/geç kapanış | UTC `ends_at` |
| Upgrade without disclosure | Şikâyet | checkout’ta prorata yok + yeni yıl açık metin |
| Stale founding “30 gün iptal” copy | Yasal/UX çelişkisi | content alignment action item |
| Provider API unknown (PayTR) | Entegrasyon gecikmesi | adapter sözleşmesi sabit; details deferred (§31) |
| Fiscal vs platform invoice confusion | Uyumsuz belge | ayrı fiscal_provider alanları; e-fatura API zorunlu değil (MVP) |
| Company dashboard auth yok (mevcut app) | Yetkisiz erişim | auth gate uygulama fazında |

---

## 30. Uygulama fazları

### Faz 0 — Spec lock (Sprint 20A — tamamlandı)
- Planlar, Founding, state machines, tablolar, ürün kararları kilitli.

### Faz 1 — Sprint 20B Data model + domain (PayTR’sız başlar)
- Migrations: enums + tablolar + `profiles` founding/publish alanları.
- Seed plans, entitlements, Founding campaign.
- Pure domain: types, state machine, entitlement resolver, campaign eligibility, money helpers.
- Provider adapter **interface** only; concrete PayTR sonra.

### Faz 2 — Billing UX + gates (provider sonrası veya mock ile)
- Publish/Discover entitlement gates.
- Founding badge visibility toggles.
- Cancel / downgrade schedule UX.
- Replace founding “30 gün iptal” copy.

### Faz 3 — PayTR (veya config’deki provider) adapter + webhook
- Checkout ARTIST (± Founding) + PROFESSIONAL upgrade.
- Idempotent webhook apply.

### Faz 4 — Hardening
- Grace/retry workers, RLS, audit, fiscal fields readiness (e-fatura API opsiyonel).

---

## 31. Final mimari kararlar

### Kritik açık ürün kararı kaldı mı?

**Hayır.** Sprint 20A Adım 3 ile ürün/mimari açık kararlar kapatılmıştır. Kalan maddeler yalnızca **provider implementation detail**’dir (aşağıda); ürün kararı değildir.

### Kesinleşen (kilitli) kararlar

1. **FREE:** Ödeme planı değil; taslak/önizleme OK; public yayın + Discover yok; expiry’de unpublish, veri silinmez.
2. **Downgrade:** Schedule to period end; sonraki yenilemede ARTIST `4999`; revoke edilebilir; fail → past_due/grace.
3. **Status semantiği:** `cancel_at_period_end` / `expired` / `cancelled` / `suspended` yukarıdaki kilitli tanımlar.
4. **Founding badge:** Status kalıcı; visibility ayrı (default visible); admin revoke istisnai.
5. **SIGNATURE:** Invite-only; checkout’ta yok; fiyat B2B; entitlement destekli; admin manuel aktivasyon; ödeme zorunluluğu şimdilik yok.
6. **Provider:** Domain provider-agnostic; config seçer; ilk aday PayTR; transaction provider immutable.
7. **Invoice:** Platform `billing_invoices` + fiscal metadata alanları; e-fatura API ilk ödeme entegrasyonunda zorunlu değil.
8. **30 gün iptal yok:** Auto-renew istediği zaman kapatılabilir; content alignment action item.
9. **Grace:** 7 takvim günü; publish/features/VBP devam; sonra expired + unpublish.
10. **Tek effective ücretli abonelik:** pending sayılmaz; upgrade atomik; çift webhook korumalı.

### Mimari kodlamaya hazır mı?

**Evet.** Schema + domain + entitlement gates Sprint 20B’de PayTR onayı olmadan başlayabilir.

### Sprint 20A mimarisi tamamlandı mı?

**Evet — Sprint 20A (audit + spec + final decisions) tamamlandı.**

### PayTR onayından bağımsız Sprint 20B’ye geçilebilir mi?

**Evet.** Sprint 20B önce data model + provider-agnostic domain ile ilerlemelidir. Concrete PayTR adapter, webhook ve sandbox; provider teknik detayları netleşince bağlanır.

### Sprint 20B kapsamı

1. SQL migration (tablolar, enum’lar, indexes, seeds, profiles founding/publish fields).
2. `lib/subscriptions/*` + `lib/billing/money.ts` + provider **interface** types.
3. Entitlement resolver + publish/Discover gate kuralları (uygulama bağlantısı).
4. Founding campaign eligibility helpers.
5. (Opsiyonel iskelet) billing API stubs without live provider calls.
6. Content fix ticket: founding “30 gün iptal” metni.
7. **Dahil değil (sonraki):** canlı PayTR checkout, webhook prod, e-fatura API.

### PayTR sonrası netleşecek — provider implementation details

*(Açık ürün kararı değil.)*

- Recurring payment kesin API akışı
- Token/kart saklama yöntemi (provider tarafı)
- Callback/webhook imza doğrulaması
- Retry desteği
- Ödeme durumu sorgulama endpoint’i
- Yabancı kart ve 3D Secure akışı
- Refund ve partial refund kabiliyeti
- Chargeback event desteği
- Sandbox/test ortamı
- Provider settlement ve reconciliation raporları

### Sprint 20B dosya / model önerisi

```text
docs/subscription-architecture.md          (bu doküman — locked)

supabase/migrations/YYYYMMDDHHMMSS_subscriptions.sql
lib/subscriptions/types.ts
lib/subscriptions/plans.ts
lib/subscriptions/entitlements.ts
lib/subscriptions/campaigns.ts
lib/subscriptions/state-machine.ts
lib/billing/provider.ts                    # interface only
lib/billing/money.ts
messages/*/billing.json
# content fix: messages/*/founding.json cancel copy (ayrı task)
```

### Sonuç özeti

| Soru | Cevap |
|------|-------|
| Sprint 20A tamamlandı mı? | **Evet** |
| Kodlamaya hazır mı? | **Evet** |
| Kritik açık ürün kararı kaldı mı? | **Hayır** |
| PayTR’sız 20B’ye geçilir mi? | **Evet** |
| 20B özü | Schema + domain + gates; PayTR adapter ayrı |

---

## Ek A — Para birimi örnekleri

| Gösterim | `amount_minor` |
|----------|----------------|
| 0.00 USD | `0` |
| 24.99 USD | `2499` |
| 49.99 USD | `4999` |
| 99.99 USD | `9999` |

## Ek B — Kampanya bitiş UTC notu

- Kullanıcıya gösterim hedefi: `2027-06-30 23:59:59` Europe/Istanbul (TRT, UTC+3).
- Veritabanı: `2027-06-30 20:59:59+00`.
- Eligibility karşılaştırması her zaman UTC `now()`.

---

**Document owner:** ART-IST.CLUB engineering  
**Sprint 20A status:** COMPLETE (Adım 1 audit + Adım 2 spec + Adım 3 final decisions)  
**Next step:** Sprint 20B — schema + domain types (PayTR approval not required to start)
