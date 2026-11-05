import type { MetadataRoute } from 'next'
import { categories } from '@/data/categories'
import { absUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const corporate = ['/', '/founders-story', '/milestones', '/products', '/our-presence', '/quality-production', '/partner-with-us', '/contact', '/privacy-policy', '/terms-and-conditions']
  return [
    ...corporate.map((p) => ({ url: absUrl(p) || absUrl('/'), changeFrequency: 'monthly' as const, priority: p === '/' ? 1 : p === '/products' ? 0.9 : 0.6 })),
    ...categories.map((c) => ({ url: absUrl(`/products/${c.slug}`), changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
