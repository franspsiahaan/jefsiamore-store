"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Bar belanja yang muncul dari bawah setelah pengunjung melewati hero,
 * dan bersembunyi lagi saat mendekati bagian "Cara beli" atau footer.
 */
export function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const past = window.scrollY > window.innerHeight * 0.9;

      const buy = document.getElementById("beli");
      const nearBuy = buy
        ? buy.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;

      const footer = document.querySelector("footer");
      const atFooter = footer
        ? footer.getBoundingClientRect().top < window.innerHeight
        : false;

      setVisible(past && !nearBuy && !atFooter);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="wrap pb-3">
        <div className="card-hard flex items-center justify-between gap-3 bg-lemon px-3 py-2.5 sm:px-5">
          <p className="hidden text-[0.82rem] font-bold leading-tight min-[440px]:block">
            Cangkir set Jefsiamore
            <span className="block text-[0.72rem] font-medium text-ink/70">
              Harga sama di semua toko
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={site.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hard flex items-center gap-1.5 bg-cream px-2.5 py-2 text-[0.74rem] font-bold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-shopee" />
              Shopee
            </a>
            <a
              href={site.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hard flex items-center gap-1.5 bg-cream px-2.5 py-2 text-[0.74rem] font-bold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-tiktok" />
              TikTok
            </a>
            <a
              href={site.lazadaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hard flex items-center gap-1.5 bg-cream px-2.5 py-2 text-[0.74rem] font-bold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lazada" />
              Lazada
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
