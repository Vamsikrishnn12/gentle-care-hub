import { services, type Service } from "@/lib/services-data";

export const site = {
  name: "Care Touch Nursing & Home Care Agency",
  shortName: "Care Touch Nursing",
  url: "https://caretouchnursinghomecare.com",
  phonePrimary: "+918825500905",
  phoneSecondary: "+919442756140",
  email: "caretouchnursinghomecare@gmail.com",
  address: {
    streetAddress:
      "No 91, KR Complex, Vallimalai Rd, opposite to vinayagar temple, Kumarappan Nagar, KRS Nagar, Katpadi",
    addressLocality: "Vellore",
    addressRegion: "Tamil Nadu",
    postalCode: "632007",
    addressCountry: "IN",
  },
  geo: {
    latitude: 12.9698,
    longitude: 79.1453,
  },
  serviceAreas: ["Vellore", "Katpadi", "Kumarappan Nagar", "KRS Nagar", "Tamil Nadu"],
};

export const defaultDescription =
  "Trusted home nursing, doctor visits, physiotherapy, elder care, ambulance and patient transfer services in Vellore and Katpadi. Available 24/7.";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function seoMeta({
  title,
  description = defaultDescription,
  path = "/",
  image,
  type = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}) {
  const canonical = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : undefined;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "home nursing Vellore, home care Katpadi, elder care Vellore, doctor visit at home Vellore, physiotherapy at home Vellore, ambulance service Vellore, nursing agency Vellore, patient transfer Vellore",
    },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "author", content: site.name },
    { name: "geo.region", content: "IN-TN" },
    { name: "geo.placename", content: "Katpadi, Vellore, Tamil Nadu" },
    { name: "geo.position", content: `${site.geo.latitude};${site.geo.longitude}` },
    { name: "ICBM", content: `${site.geo.latitude}, ${site.geo.longitude}` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: "en_IN" },
    ...(imageUrl ? [{ property: "og:image", content: imageUrl }] : []),
    { name: "twitter:card", content: imageUrl ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(imageUrl ? [{ name: "twitter:image", content: imageUrl }] : []),
  ];
}

export function canonicalLink(path = "/") {
  return { rel: "canonical", href: absoluteUrl(path) };
}

export function jsonLd(data: Record<string, unknown>) {
  return { "script:ld+json": data } as never;
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  url: site.url,
  telephone: [site.phonePrimary, site.phoneSecondary],
  email: site.email,
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  address: {
    "@type": "PostalAddress",
    ...site.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: site.serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  medicalSpecialty: [
    "Home Nursing",
    "Elder Care",
    "Physiotherapy",
    "Doctor Home Visit",
    "Postoperative Care",
  ],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Vellore, Tamil Nadu",
    },
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "ContactAction",
    target: `tel:${site.phonePrimary}`,
    name: "Call Care Touch Nursing",
  },
};

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    description: service.description,
    image: service.image,
    provider: {
      "@id": `${site.url}/#localbusiness`,
    },
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceType: service.title,
    termsOfService: absoluteUrl("/contact"),
  };
}

export function faqJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
