import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { site, waShop } from "@/lib/site";

type Store = "shopee" | "tiktok" | "lazada" | "whatsapp";
type Variant = "solid" | "outline" | "lemon";

const label: Record<Store, string> = {
  shopee: "Shopee",
  tiktok: "TikTok Shop",
  lazada: "Lazada",
  whatsapp: "WhatsApp",
};

function hrefFor(store: Store) {
  if (store === "shopee") return site.shopeeUrl;
  if (store === "tiktok") return site.tiktokUrl;
  if (store === "lazada") return site.lazadaUrl;
  return waShop;
}

export function StoreButton({
  store,
  variant = "outline",
  children,
  className = "",
}: {
  store: Store;
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    solid: "bg-ink text-cream hover:bg-ink/90",
    lemon: "bg-lemon text-ink hover:bg-lemon-deep",
    outline: "bg-cream text-ink hover:bg-lemon",
  };

  return (
    <a
      href={hrefFor(store)}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-hard group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold transition-colors ${styles[variant]} ${className}`}
    >
      <BrandMark brand={store} className="h-[18px] w-[18px] shrink-0" />
      {children ?? `Belanja di ${label[store]}`}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
