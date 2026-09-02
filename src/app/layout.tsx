import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-display",
  display: "swap",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jefsiamore.example"),
  title: {
    default: `${site.brand}, cangkir keramik cantik buat teman ngopi & souvenir`,
    template: `%s | ${site.brand}`,
  },
  description:
    "Set cangkir dan lepek keramik lucu, dicat tangan. Enak buat ngopi tiap hari, cakep juga buat souvenir pernikahan, hampers, dan kado. Belanja di Shopee dan Tokopedia.",
  keywords: [
    "cangkir cantik",
    "mug keramik lucu",
    "cangkir set",
    "souvenir pernikahan cangkir",
    "hampers cangkir",
    "mug nanas",
    "mug kelapa",
    "jefsiamore",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: `${site.brand}, cangkir keramik cantik`,
    description:
      "Set cangkir dan lepek keramik lucu dicat tangan. Belanja di Shopee dan Tokopedia, bisa juga borongan buat souvenir.",
    siteName: site.brand,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
