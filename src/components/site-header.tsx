import { StoreButton } from "@/components/store-buttons";
import { site } from "@/lib/site";

const nav = [
  { href: "#koleksi", label: "Koleksi" },
  { href: "#kenapa", label: "Kenapa" },
  { href: "#souvenir", label: "Souvenir" },
  { href: "#beli", label: "Cara beli" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-lemon">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label={site.brand} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logo}
            alt={site.brand}
            width={132}
            height={72}
            className="h-10 w-auto rounded-xl bg-ink px-2.5 py-1.5"
          />
        </a>

        <nav className="hidden items-center gap-6 text-[0.8rem] font-bold uppercase tracking-wide md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-line">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <StoreButton store="shopee" variant="outline" className="px-3 py-2 text-[0.8rem]">
            Shopee
          </StoreButton>
          <StoreButton store="tiktok" variant="outline" className="px-3 py-2 text-[0.8rem]">
            TikTok
          </StoreButton>
          <StoreButton store="lazada" variant="solid" className="px-3 py-2 text-[0.8rem]">
            Lazada
          </StoreButton>
        </div>

        <a
          href="#beli"
          className="card-hard bg-cream px-3.5 py-2 text-sm font-bold lg:hidden"
        >
          Cara beli
        </a>
      </div>
    </header>
  );
}
