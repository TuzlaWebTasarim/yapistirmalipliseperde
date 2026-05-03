import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Yapıştırmalı Plise Perde ile Hemen Dekorasyon',
  description:
    'Yapıştırmalı plise perde seçenekleriyle evinizi dakikalar içinde yenileyin. Delmeden montaj, özel ölçü üretim, renk ve kumaş çeşitleriyle şıklık bir tık uzağınızda.',
  keywords:
    'yapıştırmalı plise perde, plise perde, pliseli perde, cam balkon perdesi, delmeden montaj perde, gece gündüz plise perde, honeycomb plise perde',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yapistirmalipliseperde.com.tr',
    siteName: 'Yapıştırmalı Plise Perde',
    title: 'Yapıştırmalı Plise Perde ile Hemen Dekorasyon',
    description:
      'Yapıştırmalı plise perde seçenekleriyle evinizi dakikalar içinde yenileyin. Delmeden montaj, özel ölçü üretim, renk ve kumaş çeşitleriyle şıklık bir tık uzağınızda.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yapıştırmalı Plise Perde ile Hemen Dekorasyon',
    description: 'Yapıştırmalı plise perde seçenekleriyle evinizi dakikalar içinde yenileyin.',
  },
  alternates: {
    canonical: 'https://yapistirmalipliseperde.com.tr',
  },
  other: {
    'geo.region': 'TR-41',
    'geo.placename': 'Gebze, Kocaeli',
    'geo.position': '40.8029;29.4304',
    'ICBM': '40.8029, 29.4304',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://yapistirmalipliseperde.com.tr/#website',
      url: 'https://yapistirmalipliseperde.com.tr',
      name: 'Yapıştırmalı Plise Perde',
      inLanguage: 'tr-TR',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} pb-mobile`}>{children}</body>
    </html>
  )
}
