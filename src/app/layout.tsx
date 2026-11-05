import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { JsonLd } from '@/components/ui/json-ld'
import { company } from '@/data/company'
import { organizationLd } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['500', '600', '700', '800'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: { default: `${company.name} | ${company.tagline}`, template: `%s | ${company.name}` },
  description: 'McASTRO PHARMA LLP – trusted pharmaceutical solutions through quality-focused products, continuous improvement and a diverse portfolio across 21 therapeutic categories.',
  icons: { icon: '/icon.svg' },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#0a2447', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-navy">Skip to content</a>
        <JsonLd data={organizationLd()} />
        <Header />
        <main id="main" className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
