import { site, socialProfiles } from "@/lib/site";

/**
 * Structured data (JSON-LD) tingkat situs: identitas toko + website.
 * FAQ punya blok sendiri di `page.tsx` (`FaqJsonLd`).
 */
export function SiteJsonLd() {
  const abs = (p: string) => new URL(p, site.url).toString();
  const orgId = `${site.url}/#store`;
  const webId = `${site.url}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": orgId,
        name: site.brand,
        legalName: site.legalName,
        url: site.url,
        logo: abs(site.logo),
        image: abs(site.ogImage),
        description: site.description,
        telephone: `+${site.waNumber}`,
        priceRange: "Rp",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${site.waNumber}`,
          contactType: "customer service",
          availableLanguage: ["Indonesian"],
        },
        sameAs: socialProfiles,
      },
      {
        "@type": "WebSite",
        "@id": webId,
        url: site.url,
        name: site.brand,
        description: site.description,
        inLanguage: "id-ID",
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
