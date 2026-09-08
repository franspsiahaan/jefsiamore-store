/**
 * Satu tempat untuk semua isi landing page.
 *
 * FOTO: taruh file di folder `public/foto/`, nama file lihat komentar tiap
 * baris `photo` / `images.*` di bawah. Selama masih "" halaman menampilkan
 * kotak placeholder berlabel nama file.
 *
 * LINK TOKO & WHATSAPP: ganti di bawah.
 * HARGA: isi `price` tiap produk. Kalau dibiarkan "" tombolnya jadi
 * "Cek harga di toko".
 */

export const site = {
  brand: "Jefsiamore",
  legalName: "Jefsiamore Store",
  domain: "jefsiamore.store",
  url: "https://jefsiamore.store", // canonical, tanpa trailing slash
  tagline: "Cangkir keramik lucu, dicat tangan.",
  city: "Tangerang",
  region: "Banten",
  country: "ID",
  locale: "id_ID",

  // Dipakai untuk <meta description>, Open Graph, dan structured data.
  description:
    "Set cangkir dan lepek keramik lucu dicat tangan dari Jefsiamore. Enak buat ngopi tiap hari, cakep juga buat souvenir pernikahan, hampers, dan kado. Ready di Shopee, TikTok Shop, dan Lazada.",

  // --- GANTI KALAU BERUBAH ---
  shopeeUrl: "https://s.shopee.co.id/3B6wBxeBsu",
  tiktokUrl: "https://vt.tiktok.com/ZSVoNE8Kc/?page=Mall",
  lazadaUrl: "https://s.lazada.co.id/s.ZJ4LME",
  instagramUrl: "https://instagram.com/jefsiamore.store",
  waNumber: "6281296643788", // untuk link wa.me
  waDisplay: "0812-9664-3788", // yang tampil di layar
  logo: "/logo.png", // ganti dengan file logo asli kalau ada yang lebih bagus
  ogImage: "/og.png", // gambar share (1200x630)
  // Verifikasi kepemilikan di Google Search Console.
  googleSiteVerification: "MvZ62zG_VIXH8aZFm6lKreeoZ6d1SFh0zvjkaXIByHs",
  // ---------------------------

  stats: {
    rating: "4,9",
    sold: "ribuan",
    souvenirOrders: "500+",
  },
  marketplaces: ["Shopee", "TikTok Shop", "Lazada"] as const,
} as const;

/** Profil resmi toko di luar situs — dipakai untuk `sameAs` di structured data. */
export const socialProfiles: string[] = [
  site.instagramUrl,
  site.shopeeUrl,
  site.tiktokUrl,
  site.lazadaUrl,
];

export const waUrl = (msg: string) =>
  `https://wa.me/${site.waNumber}?text=${encodeURIComponent(msg)}`;

export const waShop = waUrl(
  "Halo Jefsiamore, saya mau tanya soal cangkirnya.",
);
export const waSouvenir = waUrl(
  "Halo Jefsiamore, saya mau tanya paket souvenir / hampers. Rencana untuk acara ...",
);

/** Foto besar di luar grid produk. */
export const images = {
  // foto/hero.jpg  — satu set cangkir yang paling menarik, latar terang.
  hero: "",
  // foto/souvenir.jpg — foto hampers / gift box (kotak kado yang ditata).
  souvenir: "",
  // foto/proses.jpg — tangan mengecat / menata cangkir.
  process: "",
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  set: string;
  price: string;
  glaze: string;
  dip: string;
  photo: string; // foto/<slug>.jpg  (rasio 4:5)
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    slug: "kelapa",
    name: "Mug Kelapa",
    tag: "Bentuk buah kelapa",
    desc: "Hijau tua dengan bibir bergerigi seperti batok kelapa asli. Paling sering diserbu.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#6f7d3f",
    dip: "#54622e",
    photo: "",
    bestSeller: true,
  },
  {
    slug: "nanas",
    name: "Mug Nanas",
    tag: "Bentuk buah nanas",
    desc: "Kuning cerah, badannya bertekstur kulit nanas, lepeknya bentuk daun. Ada ukuran besar dan kecil.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#e6b23c",
    dip: "#c69128",
    photo: "",
  },
  {
    slug: "apel",
    name: "Mug Apel",
    tag: "Bentuk buah apel",
    desc: "Merah mengkilap, gemuk dan menggemaskan. Lepeknya bulat senada.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#d5482c",
    dip: "#ad371f",
    photo: "",
  },
  {
    slug: "pisang",
    name: "Mug Pisang",
    tag: "Lukisan pisang",
    desc: "Putih gading dengan lukisan setandan pisang. Manis buat sarapan.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#ecdfb4",
    dip: "#d6c185",
    photo: "",
  },
  {
    slug: "anggur",
    name: "Mug Anggur",
    tag: "Lukisan anggur",
    desc: "Putih bersih dengan lukisan anggur ungu dan daun. Klasik, cocok buat siapa saja.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#e9e4d8",
    dip: "#cbc3ac",
    photo: "",
  },
  {
    slug: "fruity",
    name: "Mug Fruity",
    tag: "Lukisan aneka buah",
    desc: "Campuran stroberi, ceri, dan buah lain dilukis rapat. Warna paling ramai.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#ecdfbf",
    dip: "#d5c395",
    photo: "",
  },
  {
    slug: "kol",
    name: "Mug Kol",
    tag: "Bentuk sayur kol",
    desc: "Hijau muda dengan urat daun timbul seperti kol sungguhan. Nyeleneh tapi bikin senyum.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#7fae5c",
    dip: "#5f8a3f",
    photo: "",
  },
  {
    slug: "bunga-pink",
    name: "Mug Bunga Pink",
    tag: "Lukisan bunga",
    desc: "Krem lembut dengan setangkai bunga pink. Favorit buat kado ke ibu-ibu.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#efe3d0",
    dip: "#d8c4a6",
    photo: "",
  },
  {
    slug: "rumah-gadang",
    name: "Mug Rumah Gadang",
    tag: "Bentuk rumah adat",
    desc: "Cangkir berbentuk atap rumah gadang Minang. Pilihan khas buat souvenir daerah.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#b0693b",
    dip: "#8a4f2b",
    photo: "",
  },
  {
    slug: "papa-mama",
    name: "Mug Papa Mama",
    tag: "Sepasang, 4 warna",
    desc: "Cangkir couple bertuliskan Papa dan Mama. Ada abu-abu, biru, cokelat, dan hijau.",
    set: "sepasang cangkir + lepek",
    price: "",
    glaze: "#9a978c",
    dip: "#7c7a70",
    photo: "",
  },
  {
    slug: "coffee-te",
    name: "Mug Coffee & Te",
    tag: "Set warna solid",
    desc: "Cangkir polos warna solid dengan lepek. Ada biru dan merah bata. Simpel buat sehari-hari.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#4a74a8",
    dip: "#365a86",
    photo: "",
  },
  {
    slug: "emot",
    name: "Mug Emot",
    tag: "Wajah emoji",
    desc: "Cangkir kuning dengan wajah emoji. Paling laku buat kado ulang tahun anak dan remaja.",
    set: "3 cangkir + 3 lepek",
    price: "",
    glaze: "#f1c53c",
    dip: "#d3a528",
    photo: "",
  },
];

export const marquee: string[] = [
  "Dicat tangan",
  "Sudah sepaket sama lepek",
  "Aman buat minuman panas",
  "Bisa buat souvenir & hampers",
  "Dikirim aman, ganti kalau pecah",
  "Ready di Shopee, TikTok Shop & Lazada",
];

export const reasons: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Dicat dan dibentuk tangan",
    body: "Bukan cetakan pabrik. Tiap cangkir sedikit berbeda, dan itu justru bikin kelihatan hidup.",
  },
  {
    n: "02",
    title: "Keramik tebal, bukan yang tipis",
    body: "Badannya berat dan padat, tidak gampang gompal di bibir. Panas kopi juga lebih lama nyimpan.",
  },
  {
    n: "03",
    title: "Warnanya dikunci glasur",
    body: "Setelah dicat, dilapisi glasur bening lalu dibakar lagi. Warnanya tidak luntur walau sering dicuci.",
  },
  {
    n: "04",
    title: "Lepek sudah termasuk",
    body: "Tiap set sudah lengkap dengan lepek atau tatakannya. Tidak perlu beli terpisah.",
  },
];

export const care: string[] = [
  "Cuci pakai spons biasa. Hindari sabut kawat supaya cat dan glasurnya awet.",
  "Aman diisi air panas. Yang dihindari cuma perubahan suhu mendadak, misalnya dari kulkas langsung air mendidih.",
  "Kalau ditumpuk, selipkan tisu di antara cangkir biar tidak saling menggores.",
];

export const souvenir: { title: string; note: string }[] = [
  { title: "Souvenir pernikahan", note: "Bisa custom kartu ucapan dan pilihan warna. Minimal lusinan." },
  { title: "Hampers & kado", note: "Dikemas dalam gift box rapi, siap kirim atau serah langsung." },
  { title: "Merchandise kantor", note: "Cangkir polos atau dengan logo untuk seminar dan gathering." },
  { title: "Souvenir ulang tahun", note: "Termasuk aqiqah dan syukuran bayi. Ada pilihan Mug Emot buat anak-anak." },
];

export const reviews: {
  quote: string;
  name: string;
  place: string;
  via: "Shopee" | "TikTok Shop" | "WhatsApp";
}[] = [
  {
    quote:
      "Pesan 150 set buat souvenir nikahan, semua sampai utuh. Banyak tamu yang japri nanya belinya di mana.",
    name: "Dinda",
    place: "Tangerang",
    via: "WhatsApp",
  },
  {
    quote:
      "Mug Nanas-nya lucu banget dan tebal. Dipakai tiap pagi, catnya belum pudar walau sering dicuci.",
    name: "Sarah",
    place: "Depok",
    via: "Shopee",
  },
  {
    quote:
      "Packingnya niat, bubble wrap tebal dan dus keras. Dikasih ke mama pas ulang tahun, langsung dipajang.",
    name: "Yoga",
    place: "Semarang",
    via: "TikTok Shop",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Satu set isinya apa saja?",
    a: "Rata-rata 3 cangkir dan 3 lepek. Beberapa varian seperti Papa Mama dijual sepasang. Isi tiap set ditulis lengkap di deskripsi produk di tiap marketplace.",
  },
  {
    q: "Bisa pesan banyak untuk souvenir atau hampers?",
    a: "Bisa, dan ini yang paling sering. Chat WhatsApp kami untuk harga khusus, custom kartu ucapan, pilihan warna, dan jadwal produksi. Mulai dari lusinan.",
  },
  {
    q: "Aman untuk minuman panas dan microwave?",
    a: "Aman untuk minuman panas dan aman dicuci. Untuk microwave aman selama tidak ada aksen logam. Hindari menuang air mendidih ke cangkir yang baru keluar dari kulkas.",
  },
  {
    q: "Catnya gampang luntur?",
    a: "Tidak. Setelah dicat, cangkir dilapisi glasur bening lalu dibakar ulang sehingga warnanya terkunci di bawah lapisan kaca. Cukup jangan digosok pakai sabut kawat.",
  },
  {
    q: "Kalau pecah waktu pengiriman?",
    a: "Kami ganti. Kirim video buka paket tanpa jeda beserta foto ke chat toko, klaim kami proses dalam 1x24 jam.",
  },
  {
    q: "Beli di Shopee, TikTok Shop, Lazada, atau WhatsApp?",
    a: "Untuk beli satuan atau beberapa set, pilih Shopee, TikTok Shop, atau Lazada. Harga dan stok sama. Untuk souvenir jumlah banyak dan yang custom, langsung WhatsApp saja.",
  },
];
