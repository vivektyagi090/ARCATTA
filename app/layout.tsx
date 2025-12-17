import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ARCATTA GROUP - Premium Eco-Friendly & Sustainable Products | Coir, Areca Leaf, Biodegradable Packaging",
  description:
    "Premium handmade eco-friendly products including 100% natural coir fibre, areca leaf plates, and sustainable biodegradable packaging. ISO certified manufacturer & exporter.",
  keywords:
    "eco-friendly products, coir products, areca leaf plates, biodegradable packaging, sustainable products, natural products, coir rope, coir mats, areca leaf bowls, kraft paper boxes",
  authors: [{ name: "ARCATTA GROUP" }],
  creator: "ARCATTA GROUP",
  publisher: "ARCATTA GROUP",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arcattagroup.com",
    title: "ARCATTA GROUP - Premium Eco-Friendly Products",
    description: "100% natural, biodegradable eco-friendly products for sustainable living",
    images: [
      {
        url: "https://arcattagroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARCATTA GROUP Eco-Friendly Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCATTA GROUP - Eco-Friendly Products",
    description: "Premium sustainable products from natural materials",
    images: ["https://arcattagroup.com/twitter-image.jpg"],
    creator: "@arcattagroup",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://arcattagroup.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ARCATTA GROUP",
              url: "https://arcattagroup.com",
              logo: "https://arcattagroup.com/logo.png",
              description: "Premium eco-friendly and sustainable products manufacturer",
              sameAs: ["https://www.facebook.com/arcattagroup", "https://www.linkedin.com/company/arcattagroup"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "India",
                addressCountry: "IN",
              },
              contact: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "info@arcatta.com",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
