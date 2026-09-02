import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { StoreButton } from "@/components/store-buttons";
import { Shot } from "@/components/shot";
import { Reveal } from "@/components/reveal";
import { StickyBuyBar } from "@/components/sticky-buy-bar";
import {
  care,
  faqs,
  images,
  marquee,
  products,
  reasons,
  reviews,
  site,
  souvenir,
  waShop,
  waSouvenir,
} from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Landing page Jefsiamore. Set cangkir keramik lucu dicat tangan, belanja di Shopee dan TikTok Shop, bisa juga borongan buat souvenir.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <StickyBuyBar />
      <main id="top">
        <AnnouncementBar />
        <Hero />
        <Marquee />
        <Collection />
        <Kenapa />
        <Souvenir />
        <Reviews />
        <BuyOptions />
        <Faq />
      </main>
      <SiteFooter />
      <FaqJsonLd />
    </>
  );
}

/* ------------------------------------------------------------------ */

function AnnouncementBar() {
  const items = [
    "Gratis ongkir min. belanja tertentu",
    "Tiap set sudah sama lepek",
    "Bisa borongan buat souvenir",
  ];
  return (
    <div className="bg-ink text-cream">
      <div className="wrap flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[0.75rem] font-medium">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-3">
            {i > 0 && (
              <span aria-hidden="true" className="text-lemon">
                ✳
              </span>
            )}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-lemon md:right-[8%]"
      />
      <div className="wrap relative grid gap-12 py-14 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-10 md:py-20">
        <div>
          <span className="eyebrow gap-2 text-ink">
            <span className="h-2.5 w-2.5 rounded-full bg-tomato" />
            {site.domain} · dari {site.city}
          </span>

          <h1 className="display mt-5 text-[clamp(2.7rem,8.5vw,5rem)] text-ink">
            Cangkir cantik buat{" "}
            <span className="box-decoration-clone bg-lemon px-2">teman ngopi</span>{" "}
            tiap hari.
          </h1>

          <p className="mt-5 max-w-md text-[1.05rem] text-ink-soft">
            Set cangkir dan lepek keramik yang dicat tangan, bentuknya lucu-lucu
            seperti buah dan bunga. Enak dipakai sendiri, cakep juga buat kado.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <StoreButton store="shopee" variant="lemon">
              Beli di Shopee
            </StoreButton>
            <StoreButton store="tiktok" variant="solid">
              Beli di TikTok Shop
            </StoreButton>
            <StoreButton store="lazada" variant="outline">
              Beli di Lazada
            </StoreButton>
          </div>

          <p className="mt-4 text-sm text-ink-soft">
            Mau pesan banyak buat souvenir?{" "}
            <a
              href={waSouvenir}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line font-bold text-ink"
            >
              Chat WhatsApp {site.waDisplay}
            </a>
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-ink pt-5 text-sm">
            <div>
              <dt className="text-ink-soft">Rating pembeli</dt>
              <dd className="display text-lg">{site.stats.rating} / 5</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Set terkirim</dt>
              <dd className="display text-lg">{site.stats.sold}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Pesanan souvenir</dt>
              <dd className="display text-lg">{site.stats.souvenirOrders}</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="card-hard rotate-[-1.5deg] bg-cream p-2">
            <Shot
              eager
              src={images.hero}
              alt="Set cangkir keramik Jefsiamore"
              hint="foto/hero.jpg"
              ratio="4 / 5"
              glaze="#6f7d3f"
              dip="#54622e"
              imgClassName="kenburns"
            />
          </div>
          <span className="card-hard absolute -bottom-4 -left-3 rotate-[-4deg] bg-lemon px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide">
            Sepaket + lepek
          </span>
          <span className="card-hard absolute -right-3 top-6 rotate-[5deg] bg-cream px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide">
            Dicat tangan
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="border-y-2 border-ink bg-lemon">
      <div className="flex overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <ul className="marquee-track flex shrink-0 items-center gap-8 pr-8 text-sm font-bold uppercase tracking-wide">
          {items.map((word, i) => (
            <li key={i} className="flex shrink-0 items-center gap-8 whitespace-nowrap">
              <span>{word}</span>
              <span aria-hidden="true">✳</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function PriceCta({ price }: { price: string }) {
  return (
    <span className="block text-sm font-bold">
      {price ? price : <span className="text-ink-soft">Cek harga di toko</span>}
    </span>
  );
}

function Collection() {
  return (
    <section id="koleksi" className="scroll-mt-16 py-16 md:py-24">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow text-tomato">Koleksi</span>
            <h2 className="display mt-3 text-[clamp(2.2rem,6vw,3.6rem)]">
              Pilih yang paling
              <br className="hidden sm:block" /> kamu banget
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ink-soft">
            Harga dan stok tiap varian ada di Shopee dan TikTok Shop. Warna bisa
            beda tipis karena semua dicat manual.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, i) => (
            <Reveal
              as="li"
              key={p.slug}
              delay={(i % 4) * 60}
              className="card-hard flex flex-col bg-cream"
            >
              <div className="relative border-b-2 border-ink">
                <Shot
                  src={p.photo}
                  alt={`${p.name}, ${p.tag.toLowerCase()}`}
                  hint={`foto/${p.slug}.jpg`}
                  ratio="1 / 1"
                  glaze={p.glaze}
                  dip={p.dip}
                />
                {p.bestSeller && (
                  <span className="absolute left-0 top-3 bg-tomato px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-cream">
                    Paling laris
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
                <p className="mt-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-tomato">
                  {p.tag}
                </p>
                <p className="mt-2 text-[0.86rem] text-ink-soft">{p.desc}</p>

                <p className="mt-3 text-[0.78rem] font-medium text-ink-soft">
                  1 set: {p.set}
                </p>

                <div className="mt-3 border-t-2 border-ink pt-3">
                  <PriceCta price={p.price} />
                  <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8rem] font-bold">
                    <span className="text-ink-soft">Beli:</span>
                    <a
                      href={site.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Beli ${p.name} di Shopee`}
                      className="link-line"
                    >
                      Shopee
                    </a>
                    <a
                      href={site.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Beli ${p.name} di TikTok Shop`}
                      className="link-line"
                    >
                      TikTok
                    </a>
                    <a
                      href={site.lazadaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Beli ${p.name} di Lazada`}
                      className="link-line"
                    >
                      Lazada
                    </a>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Masih ada Mug Bola, Bunga Lili, Nanas ukuran besar, sampai Tempat Garam
          &amp; Gula.{" "}
          <a
            href={site.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line font-bold text-ink"
          >
            Lihat semua di toko
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Kenapa() {
  return (
    <section id="kenapa" className="scroll-mt-16 border-y-2 border-ink bg-ink py-16 text-cream md:py-24">
      <div className="wrap grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div>
          <span className="eyebrow text-lemon">Kenapa Jefsiamore</span>
          <h2 className="display mt-3 text-[clamp(2rem,5.5vw,3.2rem)]">
            Bukan mug pabrikan yang biasa
          </h2>
          <p className="mt-4 max-w-sm text-[0.95rem] text-cream/70">
            Semua dikerjakan tangan di {site.city}. Sekali produksi jumlahnya
            terbatas, dan tiap set dicek dulu sebelum dikirim.
          </p>

          <div className="mt-8 max-w-xs">
            <Shot
              src={images.process}
              alt="Proses mengecat cangkir"
              hint="foto/proses.jpg"
              ratio="4 / 3"
              glaze="#c9b48a"
              dip="#a8946c"
              className="border-2 border-cream"
            />
          </div>
        </div>

        <div>
          <ul>
            {reasons.map((r, i) => (
              <Reveal
                as="li"
                key={r.n}
                className={`grid grid-cols-[3rem_1fr] gap-4 py-5 ${
                  i !== reasons.length - 1 ? "border-b border-cream/25" : ""
                }`}
              >
                <span className="display text-2xl text-lemon">{r.n}</span>
                <div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-1 text-[0.9rem] text-cream/70">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 border-2 border-cream/30 p-5">
            <span className="eyebrow text-lemon">Cara rawat</span>
            <ul className="mt-3 space-y-2 text-[0.86rem] text-cream/70">
              {care.map((tip, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-lemon">
                    ✳
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Souvenir() {
  return (
    <section id="souvenir" className="scroll-mt-16 bg-lemon py-16 md:py-24">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-14">
          <div>
            <span className="eyebrow">Bukan cuma buat sendiri</span>
            <h2 className="display mt-3 text-[clamp(2.2rem,6vw,3.6rem)]">
              Juga buat souvenir &amp; hampers
            </h2>
            <p className="mt-4 max-w-md text-[0.98rem] text-ink/80">
              Banyak yang pakai cangkir kami buat souvenir pernikahan, kado
              ulang tahun, aqiqah, sampai merchandise kantor. Bisa custom kartu
              ucapan dan warna, dikemas rapi siap bagi.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {souvenir.map((s) => (
                <div key={s.title} className="card-hard bg-cream p-4">
                  <h3 className="text-[0.95rem] font-bold">{s.title}</h3>
                  <p className="mt-1 text-[0.82rem] text-ink-soft">{s.note}</p>
                </div>
              ))}
            </div>

            <a
              href={waSouvenir}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hard mt-7 inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink/90"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-whatsapp" />
              Konsultasi souvenir di WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-2 text-[0.8rem] text-ink/70">
              {site.waDisplay} · dibalas jam kerja
            </p>
          </div>

          <div className="relative">
            <div className="card-hard rotate-[1.5deg] bg-cream p-2">
              <Shot
                src={images.souvenir}
                alt="Hampers cangkir Jefsiamore"
                hint="foto/souvenir.jpg"
                ratio="4 / 5"
                glaze="#c98f6b"
                dip="#a06a4a"
              />
            </div>
            <span className="card-hard absolute -left-3 top-8 rotate-[-6deg] bg-lemon px-3 py-1.5 text-[0.72rem] font-bold uppercase">
              Mulai lusinan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Reviews() {
  return (
    <section className="border-t-2 border-ink py-16 md:py-24">
      <div className="wrap">
        <span className="eyebrow text-tomato">Kata pembeli</span>
        <h2 className="display mt-3 text-[clamp(2rem,5.5vw,3.2rem)]">
          Dari kolom ulasan &amp; chat
        </h2>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 70}
              className="card-hard flex flex-col bg-cream p-5"
            >
              <span aria-hidden="true" className="display text-4xl text-lemon-deep">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[0.92rem] text-ink-soft">
                {r.quote}
              </blockquote>
              <footer className="mt-4 border-t-2 border-ink pt-3 text-[0.82rem]">
                <span className="font-bold">
                  {r.name}, {r.place}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-ink-soft">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      r.via === "Shopee"
                        ? "bg-shopee"
                        : r.via === "TikTok Shop"
                          ? "bg-tiktok"
                          : "bg-whatsapp"
                    }`}
                  />
                  via {r.via}
                </span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BuyOptions() {
  const cards = [
    {
      key: "shopee",
      name: "Shopee",
      dot: "bg-shopee",
      fit: "Buat beli 1 sampai beberapa set. Enak kalau kamu rajin pakai voucher gratis ongkir.",
      cta: "Buka toko Shopee",
      href: site.shopeeUrl,
      dark: false,
    },
    {
      key: "tiktok",
      name: "TikTok Shop",
      dot: "bg-tiktok",
      fit: "Buat beli satuan atau set kecil sambil scroll. Sering ada promo dan gratis ongkir.",
      cta: "Buka toko TikTok Shop",
      href: site.tiktokUrl,
      dark: false,
    },
    {
      key: "lazada",
      name: "Lazada",
      dot: "bg-lazada",
      fit: "Pilihan lain buat eceran. Cocok kalau kamu langganan LazPayLater atau kumpulin koin.",
      cta: "Buka toko Lazada",
      href: site.lazadaUrl,
      dark: false,
    },
    {
      key: "whatsapp",
      name: "WhatsApp",
      dot: "bg-whatsapp",
      fit: "Buat souvenir dan hampers jumlah banyak, custom kartu ucapan, atau tanya stok. Mulai lusinan.",
      cta: `Chat ${site.waDisplay}`,
      href: waShop,
      dark: true,
    },
  ];

  return (
    <section id="beli" className="scroll-mt-16 border-t-2 border-ink bg-lemon py-16 md:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <span className="eyebrow">Cara beli</span>
          <h2 className="display mt-3 text-[clamp(2rem,5.5vw,3.2rem)]">
            Empat tempat, harga sama
          </h2>
          <p className="mt-3 text-sm text-ink/80">
            Untuk eceran pilih Shopee, TikTok Shop, atau Lazada. Untuk pesanan
            souvenir yang banyak dan custom, langsung WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.key}
              className={`card-hard flex flex-col p-6 ${
                c.dark ? "bg-ink text-cream" : "bg-cream"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-3 w-3 rounded-full ${c.dot}`} />
                <h3 className="text-xl font-bold">{c.name}</h3>
              </div>
              <p
                className={`mt-3 flex-1 text-[0.88rem] ${
                  c.dark ? "text-cream/70" : "text-ink-soft"
                }`}
              >
                {c.fit}
              </p>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-hard mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[0.82rem] font-bold ${
                  c.dark ? "bg-lemon text-ink" : "bg-ink text-cream"
                }`}
              >
                {c.cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Faq() {
  return (
    <section className="border-t-2 border-ink py-16 md:py-24">
      <div className="wrap grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <span className="eyebrow text-tomato">Tanya jawab</span>
          <h2 className="display mt-3 text-[clamp(2rem,5.5vw,3.2rem)]">
            Yang sering ditanya
          </h2>
          <p className="mt-4 text-sm text-ink-soft">
            Belum kejawab? Chat kami di{" "}
            <a
              href={waShop}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line font-bold text-ink"
            >
              WhatsApp {site.waDisplay}
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-8">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border-b-2 border-ink py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.02rem] font-bold">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-tomato transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-[0.92rem] text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 text-lemon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logo}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-lemon object-cover"
              />
              <span className="display text-2xl">{site.brand}</span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9rem] text-cream/70">
              {site.tagline} Dibikin di {site.city}, dikirim ke seluruh
              Indonesia. Eceran lewat Shopee, TikTok Shop, dan Lazada, souvenir
              lewat WhatsApp.
            </p>
            <p className="mt-4 text-[0.85rem] font-bold">
              WhatsApp {site.waDisplay}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <h3 className="eyebrow text-lemon">Belanja</h3>
            <ul className="mt-3 space-y-2 text-[0.88rem] text-cream/80">
              <li>
                <a href={site.shopeeUrl} target="_blank" rel="noopener noreferrer" className="link-line">
                  Shopee
                </a>
              </li>
              <li>
                <a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer" className="link-line">
                  TikTok Shop
                </a>
              </li>
              <li>
                <a href={site.lazadaUrl} target="_blank" rel="noopener noreferrer" className="link-line">
                  Lazada
                </a>
              </li>
              <li>
                <a href={waSouvenir} target="_blank" rel="noopener noreferrer" className="link-line">
                  WhatsApp (souvenir)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow text-lemon">Lainnya</h3>
            <ul className="mt-3 space-y-2 text-[0.88rem] text-cream/80">
              <li>
                <a href="#koleksi" className="link-line">
                  Koleksi
                </a>
              </li>
              <li>
                <a href="#souvenir" className="link-line">
                  Souvenir
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-line">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/20 pt-5 text-[0.76rem] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} {site.brand} · {site.domain}
          </p>
          <a href="#top" className="link-line">
            Ke atas
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
