import { allProducts, type Product } from './products'

/**
 * Featured products, by exact catalogue name + category (see products.generated.ts).
 *
 * This is an editorial selection from across the portfolio, NOT sales data: no sales ranking has been
 * supplied. While FEATURED_CONFIRMED is false the UI says "Featured". When the client confirms a
 * top-seller list, replace the entries below and set FEATURED_CONFIRMED = true.
 */
export const FEATURED_CONFIRMED = false

const featuredNames: [name: string, category: string][] = [
  ['Azam 200 Sus.', 'antibiotics'], ['Cefdron 200 DT', 'antibiotics'], ['Retel 1 Gm. Inj.', 'antibiotics'], ['Vitor-OZ Tab.', 'antibiotics'],
  ['Sedam-LS Sy.', 'cough-syrup'], ['Telimac-40', 'anti-hypertensive'], ['Telimac-AM', 'anti-hypertensive'],
  ['Rabevera-DSR Cap.', 'gastro-care'], ['Rabevera-D Tab.', 'gastro-care'], ['Radiant-LR Tab.', 'anti-malarial'],
  ['Maate G1 Tab.', 'anti-diabetic'], ['McSTAT Tab.', 'anti-fungal'], ['Defzo 6 Tab.', 'corticosteroid'],
  ['Delphi-L Inj.', 'neuropathy'], ['Delphi-L Plus Cap.', 'antioxidants'], ['Femac-XT Tab.', 'iron-preparation'],
  ['Ibuprom-MF Sus.', 'anti-pyretic-pedia'], ['Norton-SP Tab.', 'analgesic-anti-inflammatory'], ['Lester-SP Tab.', 'analgesic-anti-inflammatory'], ['Harison-Z Sy.', 'nutraceuticals'],
]

export const featuredProducts: Product[] = featuredNames
  .map(([name, cat]) => allProducts.find((p) => p.name.replace(/^Softgel : /, '') === name && p.category === cat))
  .filter((p): p is Product => Boolean(p))

export const featuredTitle = FEATURED_CONFIRMED ? 'Top Selling Products' : 'Featured Across Our Product Portfolio'
