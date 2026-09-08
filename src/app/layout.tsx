import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteJsonLd } from "@/components/structured-data";

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

const title = `${site.brand}, cangkir keramik cantik buat teman ngopi & souvenir`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  applicationName: site.brand,
  keywords: [
    "cangkir cantik",
    "mug keramik lucu",
    "cangkir set keramik",
    "cangkir dan lepek",
    "souvenir pernikahan cangkir",
    "hampers cangkir keramik",
    "kado cangkir",
    "mug nanas",
    "mug kelapa",
    "jefsiamore",
    "jefsiamore store",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brand,
    title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo ${site.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: site.googleSiteVerification,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7ce1e",
  width: "device-width",
  initialScale: 1,
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
      <body>
        {children}
        <SiteJsonLd />
      </body>
    </html>
  );
}
