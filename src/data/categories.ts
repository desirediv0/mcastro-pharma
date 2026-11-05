export type CategoryIcon =
  | 'shield' | 'heart-pulse' | 'wind' | 'stomach' | 'bug' | 'smile' | 'droplet' | 'leaf' | 'flame'
  | 'flower' | 'dna' | 'sparkles' | 'apple' | 'activity' | 'thermometer' | 'bandage' | 'snowflake'
  | 'brain' | 'pill' | 'zap'

export interface Category {
  slug: string
  name: string
  /** One line used on cards and menus. Descriptive of the category only – no medical claims. */
  short: string
  /** Paragraph used in category hero / overview. */
  intro: string
  icon: CategoryIcon
  /** Colour tone index for the category-specific visual treatment (0–4). */
  tone: 0 | 1 | 2 | 3 | 4
  /** Mega-menu column. */
  group: 'Anti-Infective' | 'Cardio & Metabolic' | 'Pain & Neuro' | 'Digestive & Wellness'
}

export const categories: Category[] = [
  { slug: 'antibiotics', name: 'Antibiotics', short: 'Oral and injectable anti-infective brands.', intro: 'Our anti-infective range spans tablets, dispersible tablets, dry syrups, suspensions and injectables, covering cephalosporin, macrolide, quinolone and penicillin-class compositions.', icon: 'shield', tone: 0, group: 'Anti-Infective' },
  { slug: 'cough-syrup', name: 'Cough Syrup', short: 'Cough-and-cold syrups.', intro: 'Syrup formulations in the cough-and-cold segment, built on combinations such as ambroxol, guaifenesin, cetirizine and levosalbutamol as listed in our catalogue.', icon: 'wind', tone: 1, group: 'Anti-Infective' },
  { slug: 'anti-hypertensive', name: 'Anti Hypertensive', short: 'Telmisartan-based cardiovascular combinations.', intro: 'A focused cardiovascular range built around telmisartan, available alone and in combination with amlodipine and hydrochlorothiazide.', icon: 'heart-pulse', tone: 1, group: 'Cardio & Metabolic' },
  { slug: 'anti-allergic', name: 'Anti Allergic', short: 'Syrup and tablet presentations.', intro: 'The anti-allergic segment of the McASTRO PHARMA portfolio, presented as a syrup and a tablet. Composition and packing for this segment are being verified against the catalogue.', icon: 'wind', tone: 2, group: 'Anti-Infective' },
  { slug: 'gastro-care', name: 'Gastro Care', short: 'Rabeprazole-based digestive-care range.', intro: 'Rabeprazole-based tablets and capsules, including combinations with domperidone and levosulpiride.', icon: 'stomach', tone: 3, group: 'Digestive & Wellness' },
  { slug: 'anti-malarial', name: 'Anti Malarial', short: 'Quinine, artemether and arteether brands.', intro: 'Anti-malarial compositions in tablet, suspension and injectable formats for professional channels.', icon: 'bug', tone: 4, group: 'Anti-Infective' },
  { slug: 'mouthwash', name: 'Mouthwash', short: 'Oral-care range.', intro: 'The oral-care segment of the McASTRO PHARMA portfolio. Composition and packing details are being verified against the catalogue.', icon: 'smile', tone: 0, group: 'Digestive & Wellness' },
  { slug: 'anti-diabetic', name: 'Anti Diabetic', short: 'Metformin and glimepiride combinations.', intro: 'Oral anti-diabetic compositions based on metformin, alone and with glimepiride.', icon: 'droplet', tone: 1, group: 'Cardio & Metabolic' },
  { slug: 'anti-fungal', name: 'Anti Fungal', short: 'Fluconazole and luliconazole brands.', intro: 'Anti-fungal brands in oral and topical presentations.', icon: 'leaf', tone: 2, group: 'Anti-Infective' },
  { slug: 'analgesic-oil', name: 'Analgesic Oil', short: 'Topical liniment formats.', intro: 'Topical analgesic liniment available in two pack sizes.', icon: 'flame', tone: 3, group: 'Pain & Neuro' },
  { slug: 'herbal-female-uterine-tonic', name: 'Herbal Female Uterine Tonic', short: 'Herbal tonic for women’s health.', intro: 'A herbal syrup in the women’s-health segment of the portfolio.', icon: 'flower', tone: 4, group: 'Cardio & Metabolic' },
  { slug: 'other-hormone', name: 'Other Hormone', short: 'Injectable hormone-class products.', intro: 'Injectable hormone-class products for professional channels.', icon: 'dna', tone: 0, group: 'Cardio & Metabolic' },
  { slug: 'antioxidants', name: 'Antioxidants', short: 'Multivitamin and mineral capsules.', intro: 'A multivitamin, multimineral and amino-acid capsule for supplementation.', icon: 'sparkles', tone: 1, group: 'Digestive & Wellness' },
  { slug: 'nutraceuticals', name: 'Nutraceuticals', short: 'Syrups and powders for nutrition support.', intro: 'Nutrition-led syrups and powders, including multivitamin, amino-acid and whey-protein formats.', icon: 'apple', tone: 2, group: 'Digestive & Wellness' },
  { slug: 'iron-preparation', name: 'Iron Preparation', short: 'Ferrous ascorbate haematinics.', intro: 'Ferrous ascorbate-based haematinic preparations in syrup and tablet form.', icon: 'activity', tone: 3, group: 'Cardio & Metabolic' },
  { slug: 'anti-pyretic-pedia', name: 'Anti Pyretic Pedia', short: 'Paediatric suspensions.', intro: 'Paediatric oral suspensions in the antipyretic and analgesic segment.', icon: 'thermometer', tone: 4, group: 'Pain & Neuro' },
  { slug: 'analgesic-anti-inflammatory', name: 'Analgesic & Anti Inflammatory', short: 'Diclofenac, aceclofenac and enzyme combinations.', intro: 'Our broadest pain-care range: diclofenac and aceclofenac combinations, enzyme combinations and an injectable.', icon: 'bandage', tone: 0, group: 'Pain & Neuro' },
  { slug: 'anti-cold', name: 'Anti Cold', short: 'Cold formulations in suspension and tablet form.', intro: 'Cold-segment formulations presented as a suspension and a tablet, built on paracetamol-based combinations as listed in our catalogue.', icon: 'snowflake', tone: 1, group: 'Anti-Infective' },
  { slug: 'anti-anxiety', name: 'Anti Anxiety', short: 'Clonazepam tablets.', intro: 'Clonazepam tablets in two strengths. Schedule-restricted medicine, supplied through professional channels.', icon: 'brain', tone: 2, group: 'Pain & Neuro' },
  { slug: 'corticosteroid', name: 'Corticosteroid', short: 'Deflazacort tablets and suspension.', intro: 'Deflazacort in tablet and suspension formats.', icon: 'pill', tone: 3, group: 'Pain & Neuro' },
  { slug: 'neuropathy', name: 'Neuropathy', short: 'Methylcobalamin-based neuro-nutrition.', intro: 'Methylcobalamin-based neuro-nutrition products in tablet and injectable formats.', icon: 'zap', tone: 4, group: 'Pain & Neuro' },
]

export const categoryGroups = ['Anti-Infective', 'Cardio & Metabolic', 'Pain & Neuro', 'Digestive & Wellness'] as const
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)

export const heroTitle = (c: Category) => `${c.name} Product Portfolio`
export const heroDesc = (c: Category) => `Explore the ${c.name.toLowerCase()} segment of the McASTRO PHARMA product portfolio, organised as a catalogue with composition, packing and dosage-form details.`
