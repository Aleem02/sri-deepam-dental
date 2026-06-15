import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

// Configure preloaded high-readability typography
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Deepam Multispeciality Dental Clinic | Best Dentist in Chidambaram",
  description: "Experience premium, advanced dental care at Sri Deepam Dental Clinic, Vandigate, Chidambaram. Offering root canals, cleanings, crowns, and implants.",
  keywords: [
    "Best Dentist in Chidambaram",
    "Dental Clinic in Chidambaram",
    "Root Canal Treatment Chidambaram",
    "Teeth Cleaning Chidambaram",
    "Teeth Whitening Chidambaram",
    "Dental Care Chidambaram",
    "Family Dentist Chidambaram",
    "Sri Deepam Dental Clinic",
    "Vandigate dental clinic"
  ],
  metadataBase: new URL("https://srideepamdental.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sri Deepam Multispeciality Dental Clinic | Best Dentist in Chidambaram",
    description: "Offering premium, advanced dental care: root canals, whitening, crowns, and pediatric dentistry at Vandigate, Chidambaram.",
    url: "https://srideepamdental.in",
    siteName: "Sri Deepam Multispeciality Dental Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/clinic-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Deepam Multispeciality Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Deepam Multispeciality Dental Clinic | Best Dentist in Chidambaram",
    description: "Advanced dental treatments with a patient-first approach. Located near BSNL Office, Vandigate, Chidambaram.",
    images: ["/clinic-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-bg text-slate-text">
        {/* Subtle, architectural background grid lines */}
        <div className="bg-gridlines" aria-hidden="true">
          <div />
          <div />
          <div />
          <div />
        </div>

        {/* Dynamic Dentist & LocalBusiness Schema JSON-LD */}
        <SchemaMarkup type="Dentist" />

        {/* Global Component Shell */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
