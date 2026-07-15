import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RespondWidget } from "@/components/RespondWidget";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/seo";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury, Supercar & Prestige Car Hire Birmingham`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "luxury car hire Birmingham",
    "supercar hire Birmingham",
    "prestige car hire",
    "wedding car hire Birmingham",
    "chauffeur hire Birmingham",
    "supercar hire UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-champagne focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Spacer so content is never hidden behind the mobile action bar */}
        <div className="h-14 md:hidden" aria-hidden />
        <RespondWidget />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
