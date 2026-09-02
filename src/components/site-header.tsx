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
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logo}
            alt=""
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-full border-2 border-ink object-cover"
          />
          <span className="display text-xl">{site.brand}</span>
        </a>

        <nav className="hidden items-center gap-7 text-[0.8rem] font-bold uppercase tracking-wide md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-line">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <StoreButton store="shopee" variant="outline" className="px-3.5 py-2">
            Shopee
          </StoreButton>
          <StoreButton store="tiktok" variant="solid" className="px-3.5 py-2">
            TikTok Shop
          </StoreButton>
        </div>

        <a
          href="#beli"
          className="card-hard bg-cream px-3.5 py-2 text-sm font-bold sm:hidden"
        >
          Cara beli
        </a>
      </div>
    </header>
  );
}
