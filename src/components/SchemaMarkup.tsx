import Script from "next/script";

interface SchemaMarkupProps {
  type: "Dentist" | "FAQ" | "Breadcrumb";
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schemaData: any = null;

  if (type === "Dentist") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Sri Deepam Multispeciality Dental Clinic",
      "image": "https://srideepamdental.in/clinic-og-image.jpg",
      "@id": "https://srideepamdental.in/#dentist",
      "url": "https://srideepamdental.in",
      "telephone": "+919489516326",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cuddalore Main Road, Near BSNL Office, Vandigate",
        "addressLocality": "Chidambaram",
        "addressRegion": "Tamil Nadu",
        "postalCode": "608001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.4057,
        "longitude": 79.6976
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "20:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "13:00"
        }
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Chidambaram"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Cuddalore"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Tamil Nadu"
        }
      ],
      "medicalSpecialty": [
        "Orthodontics",
        "Endodontics",
        "PediatricDentistry",
        "Periodontics",
        "Prosthodontics",
        "CosmeticDentistry"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "45",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
  } else if (type === "FAQ" && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((faq: { question: string; answer: string }) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  } else if (type === "Breadcrumb" && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.map((item: { name: string; url: string }, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://srideepamdental.in${item.url}`
      }))
    };
  }

  if (!schemaData) return null;

  return (
    <Script
      id={`json-ld-${type.toLowerCase()}-${Math.random().toString(36).substring(2, 9)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
