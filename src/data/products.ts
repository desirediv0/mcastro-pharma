import { rawProducts, type RawProduct, type DosageForm } from './products.generated'
import { categories } from './categories'

export type { DosageForm }
export type Product = RawProduct

/** Single source of truth. Regenerate from the Excel with `npm run gen:products`. */
export const allProducts: Product[] = rawProducts

export const productsByCategory = (slug: string) => allProducts.filter((p) => p.category === slug)
export const categoryCount = (slug: string) => productsByCategory(slug).length
export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug

export const portfolioStats = {
  products: allProducts.length,
  categories: categories.length,
  activeCategories: categories.filter((c) => categoryCount(c.slug) > 0).length,
  forms: new Set(allProducts.map((p) => p.form).filter(Boolean)).size,
}
