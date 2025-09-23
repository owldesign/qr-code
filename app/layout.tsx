import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free QR Code Generator - Create QR Codes Online Instantly | QR Generator Tool",
  description: "Free online QR code generator. Create professional QR codes instantly for websites, URLs, and links. Download in PNG or SVG format. No registration required. Fast, secure, and mobile-friendly QR code maker.",
  keywords: [
    "free qr code generator",
    "qr code maker",
    "qr generator online",
    "create qr code",
    "qr code creator",
    "free code generator",
    "website qr code",
    "url qr code",
    "qr code tool",
    "online qr generator",
    "qr code builder",
    "free qr maker",
    "qr code converter",
    "quick response code generator",
    "barcode generator",
    "free online tools",
    "web tools",
    "code generators",
    "free utilities",
    "developer tools"
  ],
  authors: [{ name: "QR Code Generator" }],
  creator: "QR Code Generator",
  publisher: "QR Code Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Free QR Code Generator',
    title: 'Free QR Code Generator - Create QR Codes Online Instantly',
    description: 'Create professional QR codes for free. Download in PNG or SVG format. Fast, secure, and mobile-friendly QR code generator tool.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free QR Code Generator - Create QR Codes Online',
    description: 'Create professional QR codes for free. Download in PNG or SVG format. No registration required.',
    images: ['/og-image.jpg'],
    creator: '@yourhandle',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  category: 'Technology',
  classification: 'Free Online Tools',
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Free QR Code Generator",
              "description": "Free online QR code generator. Create professional QR codes instantly for websites, URLs, and links. Download in PNG or SVG format.",
              "url": "https://your-domain.com",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Any",
              "permissions": "browser",
              "isAccessibleForFree": true,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Free QR code generation",
                "PNG and SVG format support",
                "Multiple size options",
                "URL validation",
                "Dark/Light theme",
                "Mobile responsive",
                "No registration required",
                "Instant download"
              ],
              "screenshot": "https://your-domain.com/screenshot.jpg",
              "softwareVersion": "1.0",
              "author": {
                "@type": "Organization",
                "name": "QR Code Generator"
              },
              "provider": {
                "@type": "Organization",
                "name": "QR Code Generator"
              },
              "browserRequirements": "Requires JavaScript. Compatible with all modern browsers.",
              "softwareHelp": {
                "@type": "CreativeWork",
                "text": "Enter any URL and click Generate QR Code to create your QR code instantly."
              }
            })
          }}
        />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
