const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotlyne.com'

// Base organization info reused across schemas
export const org = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#org`,
  name: "RobotLyne",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "Warehouse automation company specializing in AGV systems, ASRS solutions, and intelligent warehouse management software since 2004.",
  foundingDate: "2004",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 1000 },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@robotlyne.com",
    availableLanguage: ["English", "Chinese"]
  }
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    ...org,
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "RobotLyne",
    publisher: { "@id": `${BASE_URL}/#org` },
  }
}

export function productSchema({ name, description, model, url, image, category }: {
  name: string; description: string; model: string; url: string; image?: string; category: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    model,
    url: `${BASE_URL}${url}`,
    image,
    category,
    brand: { "@type": "Brand", name: "RobotLyne" },
    manufacturer: { "@id": `${BASE_URL}/#org` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/contact`,
      priceCurrency: "USD",
      seller: { "@id": `${BASE_URL}/#org` }
    }
  }
}

export function serviceSchema({ name, description, url, serviceType }: {
  name: string; description: string; url: string; serviceType: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    serviceType,
    provider: { "@id": `${BASE_URL}/#org` },
    areaServed: { "@type": "Place", name: "Worldwide" },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    }))
  }
}
