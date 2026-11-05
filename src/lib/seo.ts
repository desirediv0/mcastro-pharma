import type { Metadata } from 'next'
import { company } from '@/data/company'

export const absUrl = (path = '/') => `${company.siteUrl.replace(/\/$/, '')}${path === '/' ? '' : path}`

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = absUrl(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${company.name}`, description, url, siteName: company.name, type: 'website', locale: 'en_IN', images: [{ url: absUrl('/brand/logo.jpg'), alt: company.name }] },
    twitter: { card: 'summary', title: `${title} | ${company.name}`, description },
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absUrl(it.path) })),
  }
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: absUrl('/'),
    logo: absUrl('/brand/logo.jpg'),
    ...(company.email ? { email: company.email } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
    ...(company.address ? { address: { '@type': 'PostalAddress', streetAddress: company.address, addressCountry: 'IN' } } : {}),
  }
}
