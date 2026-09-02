# Jefsiamore — Landing Page

Landing page toko **Jefsiamore** (jefsiamore.store): set cangkir + lepek keramik lucu
dicat tangan. Fokus jualan eceran di **Shopee** & **TikTok Shop**, plus jalur
**WhatsApp** untuk souvenir/hampers borongan.

Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

## Menjalankan

```bash
npm run dev      # http://localhost:3000
npm run build
```

Kalau `npm run dev` bilang "Another next dev server is already running", ada server
lama nyangkut: `taskkill //PID <pid> //F` dulu.

## 1. Link toko & WhatsApp

`src/lib/site.ts` bagian atas — ganti `shopeeUrl`, `tiktokUrl`, `instagramUrl`,
`waNumber` (format 62..., untuk link wa.me) dan `waDisplay` (yang tampil).

Logo: `public/logo.png` (sekarang hasil crop dari flyer, agak buram). Kalau punya
file logo asli, timpa `public/logo.png` dengan nama yang sama, tanpa ubah kode.

## 2. Foto

Taruh JPG di `public/foto/` — daftar nama lengkap ada di `public/foto/BACA.txt`.
Lalu isi path-nya di `src/lib/site.ts` (`images.*` dan `photo:` tiap produk).
Selama kosong, halaman menampilkan placeholder berlabel nama file.

## 3. Produk & harga

Semua varian ada di array `products` (`src/lib/site.ts`): `name`, `tag`, `desc`,
`set` (isi 1 set), `price`. Kalau `price` dibiarkan `""`, tombol jadi
"Cek harga di toko". Tambah/hapus varian sesuai stok asli.

## Susunan halaman (`src/app/page.tsx`)

Header · pengumuman · hero · marquee · **koleksi** · kenapa Jefsiamore + cara rawat ·
**souvenir & hampers** (CTA WhatsApp) · ulasan · cara beli (Shopee/Tokopedia/WA) ·
FAQ · footer. Sticky buy bar muncul saat scroll.

## Desain

- Warna: kuning `#F7CE1E`, hitam `#17150F`, kertas `#FBF6E9`, aksen tomat `#E0512B`.
- Font: **Anton** (judul, huruf kapital tebal) + **Archivo** (teks).
- Gaya kartu bergaris tebal + bayangan solid ("card-hard") ikut vibe flyer brand.
- Jalur beli: Shopee + TikTok Shop (eceran), WhatsApp (souvenir/borongan).
