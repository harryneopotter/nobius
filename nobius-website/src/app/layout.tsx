import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AnalyticsInit } from "@/components/AnalyticsInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://nobius.bluepanda.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nobius Audio - Handcrafted Premium Speakers",
    template: "%s | Nobius Audio",
  },
  description:
    "High-performance speakers designed for the love of music. Handcrafted in Illinois with disciplined engineering and artisanal care.",
  keywords: [
    "premium speakers",
    "handcrafted audio",
    "hi-fi speakers",
    "bookshelf speakers",
    "audiophile",
    "Illinois",
    "Nobius Audio",
  ],
  authors: [{ name: "Nobius Audio" }],
  creator: "Nobius Audio",
  publisher: "Nobius Audio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Nobius Audio",
    title: "Nobius Audio - Handcrafted Premium Speakers",
    description:
      "High-performance speakers designed for the love of music. Handcrafted in Illinois with disciplined engineering and artisanal care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nobius Audio - Premium Handcrafted Speakers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobius Audio - Handcrafted Premium Speakers",
    description:
      "High-performance speakers designed for the love of music.",
    images: ["/og-image.jpg"],
    creator: "@nobiusaudio",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nobius Audio",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-dark.png`,
  description:
    "Handcrafted premium audio speakers built in Illinois with disciplined engineering and artisanal care.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "IL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@nobiusaudio.com",
  },
  sameAs: [
    // Add social links when available
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}
      >
        <AnalyticsInit />
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
