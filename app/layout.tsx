import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import LatestArticles from "@/components/LatestArticles";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://addicted-rehab.se"),
  title: {
    default: "Nytt Liv | Addicted Rehab",
    template: "%s | Addicted Rehab",
  },
  description:
    "Privat rehab & beroendeklinik i Spanien. Individuell behandling för alkoholism och beroende.",
  keywords: [
    "rehab",
    "alkoholism",
    "beroende",
    "behandling",
    "Spanien",
    "12-stegsbehandling",
    "Minnesotamodellen",
  ],
  authors: [{ name: "Addicted Rehab" }],
  creator: "Addicted Rehab",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://addicted-rehab.se",
    siteName: "Addicted Rehab",
    title: "Nytt Liv | Addicted Rehab",
    description:
      "Privat rehab & beroendeklinik i Spanien. Individuell behandling för alkoholism och beroende.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Addicted Rehab - Privat rehab i Spanien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nytt Liv | Addicted Rehab",
    description:
      "Privat rehab & beroendeklinik i Spanien. Individuell behandling för alkoholism och beroende.",
    images: ["/images/og-image.jpg"],
  },
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
  icons: {
    icon: [
      {
        url: "https://addicted-rehab.se/images/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "https://addicted-rehab.se/images/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "https://addicted-rehab.se/images/favicon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "https://addicted-rehab.se/images/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: {
      url: "https://addicted-rehab.se/images/favicon-48x48.png",
      type: "image/png",
    },
    apple: {
      url: "https://addicted-rehab.se/images/favicon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
  },
};

// JSON-LD structured data for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Addicted Rehab",
  description:
    "Privat rehab & beroendeklinik i Spanien. Individuell behandling för alkoholism och beroende.",
  url: "https://addicted-rehab.se",
  telephone: "+46732520358",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  medicalSpecialty: "Addiction Medicine",
  availableService: {
    "@type": "MedicalTherapy",
    name: "12-stegsbehandling enligt Minnesotamodellen",
    description: "Individuell behandling för alkoholism och beroende",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Cookiebot */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="322f89ec-5b98-45b0-9790-7ebb24f693b5"
          data-blockingmode="auto"
          type="text/javascript"
          async
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GVBPQ387CE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GVBPQ387CE');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-brand-peach selection:text-brand-navy">
        {/* Paper Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 bg-paper-texture mix-blend-multiply"></div>

        <Header />
        <main>{children}</main>
        <LatestArticles />
        <MegaFooter />
      </body>
    </html>
  );
}
