// Generates src/data/products.generated.ts and reference/REVIEW-NOTES.md.
// Source of truth for name / packing / composition: reference/catalogue.xls, "new list" sheet.
// Category structure: the printed catalogue lists supplied by the client (encoded below).
// Price sheets ("PTR + VAT") are never read.
import XLSX from 'xlsx'
import { writeFileSync } from 'node:fs'

const wb = XLSX.readFile('reference/catalogue.xls')
const rows = (n) => XLSX.utils.sheet_to_json(wb.Sheets[n], { header: 1, defval: '' })
const clean = (v) => String(v ?? '').replace(/\s+/g, ' ').trim()

const excel = new Map()
for (const r of rows('new list').slice(1)) if (r[1]) excel.set(Number(r[0]), { name: clean(r[1]), packing: clean(r[2]), composition: clean(r[3]) })
if (excel.size !== 88) throw new Error(`Expected 88 rows in new list, got ${excel.size}`)

// [display name (printed catalogue), Excel "No." or null if absent from Excel, review note?]
const NA = null
// Details read from the client's own pack photos (composition as printed on the carton; strengths only where printed).
const FROM_PACK = {
  'Cefdron-O Tab.': ['Cefpodoxime Proxetil & Ofloxacin', '10 x 10'],
  'Telimac Beta 25': ['Telmisartan & Metoprolol Succinate (ER)', '10 x 15'],
  'Telimac Beta 50': ['Telmisartan & Metoprolol Succinate (ER)', '10 x 15'],
  'Sedam-LC Syrup': ['Levocetirizine & Montelukast', '60 ml'],
  'Sedam-LC Tab.': ['Montelukast Sodium & Levocetirizine Hydrochloride', '10 x 10'],
  'Maate VG2 Tab.': ['Glimepiride, Voglibose & Metformin (SR)', '10 x 15'],
  'Defzo 12 Tab.': ['Deflazacort 12mg', '10 x 10'],
  'Delphi-L PFS Inj.': ['Methylcobalamin 2500 mcg (pre-filled syringe)', '1 ml'],
  'Delphi-L-NT Tab.': ['Nortriptyline, Methylcobalamin & Pregabalin (SR)', '10 x 10'],
  'Bemowa Mouthwash': ['Chlorhexidine Gluconate, Sodium Fluoride & Zinc Chloride Oral Rinse', '150 ml'],
}
const catalogue = {
  antibiotics: [
    ['Azam Sus.', 1], ['Azam 200 Sus.', 2], ['Azam 200 XL Sus.', 5], ['Azam-250 mg Tab.', 3], ['Azam-500 mg Tab.', 4], ['Azam CX 250', 6],
    ['Besco 500 mg Tab.', 7], ['Cefdron 100 Dry Sy.', 8], ['Cefdron 100 DT', 9], ['Cefdron 200 DT', 10], ['Cefdron 50 DT', 11], ['Cefdron CV Dry Sy.', 12], ['Cefdron Dry Sy.', 13],
    ['Cefdron-O Tab.', NA], ['Cefobanta-250 Tab.', 14], ['Cefobanta-500 Tab.', 15], ['Cifibac-100 DT', 16], ['Cifibac LB 200 DT', 17],
    ['Logistic-250 DT', 37], ['Logistic-CV 625', 38], ['Logistic-CV DS Dry Sy.', 39], ['Logistic-CV KID Dry Sy.', 40],
    ['Retel 1 Gm. Inj.', 62], ['Retel 250 mg Inj.', 63], ['Retel 500 mg Inj.', 64], ['Retel-S 1500 mg Inj.', 65], ['Retel-S 375 mg', 66],
    ['Vitor 200 Tab.', 79], ['Vitor CX 100mg Tab.', 80], ['Vitor CX 200mg Tab.', 81], ['Vitor M Sus.', 82], ['Vitor M DS Susup.', 83], ['Vitor-OZ Tab.', 84],
  ],
  'cough-syrup': [['Sedam Sy.', 67], ['Sedam-D Sy.', 68], ['Sedam-LS Sy.', 69]],
  'anti-hypertensive': [['Telimac Beta 25', NA], ['Telimac Beta 50', NA], ['Telimac-3D', 76], ['Telimac-40', 73], ['Telimac-AM', 74], ['Telimac-HT', 75]],
  'anti-allergic': [['Sedam-LC Syrup', NA], ['Sedam-LC Tab.', NA]],
  'gastro-care': [['Rabevera Tab.', 55], ['Rabevera-D Tab.', 56], ['Rabevera-DSR Cap.', 57], ['Rabevera-L Cap.', 58]],
  'anti-malarial': [['Radiant Sus.', 59], ['Radiant Tab.', 60], ['Radiant-LR Tab.', 61], ['α-Radiant Inj.', 87], ['α-Radiant Jr. Inj.', 88]],
  mouthwash: [['Bemowa Mouthwash', NA]],
  'anti-diabetic': [['Maate 500 SR Tab.', 43], ['Maate G1 Tab.', 44], ['Maate G2 Tab.', 45], ['Maate VG2 Tab.', NA]],
  'anti-fungal': [['McSTAT Tab.', 47], ['McSTAT Tab.', 48], ['Lucimac 10g', 41, 'In Excel but not in the printed category list – assigned to Anti Fungal (luliconazole); confirm.'], ['Lucimac 20g', 42, 'In Excel but not in the printed category list – assigned to Anti Fungal (luliconazole); confirm.']],
  'analgesic-oil': [['Norton Linimentum', 50], ['Norton Linimentum', 51]],
  'herbal-female-uterine-tonic': [['Macnari Sy.', 46]],
  'other-hormone': [['Zaneta 25 Inj.', 85], ['Zaneta 50 Inj.', 86]],
  'anti-anxiety': [['Clonzy 0.25 mg Tab.', 18], ['Clonzy 0.50 mg Tab.', 19]],
  corticosteroid: [['Defzo 6 Sus.', 20], ['Defzo 6 Tab.', 21], ['Defzo 12 Tab.', NA]],
  neuropathy: [['Delphi-L Inj.', 25], ['Delphi-L PFS Inj.', NA], ['Delphi-L-NT Tab.', NA], ['Cefdron Dry Sy.', 13, 'Printed catalogue lists Cefdron Dry Sy. under Neuropathy; it is an antibiotic (cefpodoxime) and also appears under Antibiotics. Category assignment needs confirmation.'], ['Delphi-L Tab.', 27]],
  antioxidants: [['Softgel : Delphi-L Plus Cap.', 26]],
  nutraceuticals: [['Delphi-L Sy. 100 ml', 22], ['Delphi-L Sy. 200 ml', 23], ['Slazer Powder (Chocolate)', 72, 'Printed catalogue says "Slazer Powder (Chocolate)"; Excel says "Slazer Powder DHA" (Whey Protein with Vitamins, Minerals & DHA). Excel composition shown; confirm flavour/variant.'], ['Harison-Z Sy.', 30], ['Delphi-L EZ Powder', 24], ['Hungermac Sy.', 31]],
  'iron-preparation': [['Femac-XT Sy.', 28], ['Femac-XT Tab.', 29]],
  'anti-pyretic-pedia': [['Ibuprom Sus.', 32], ['Ibuprom-MDS Sus.', 33], ['Ibuprom-MF Sus.', 34]],
  'analgesic-anti-inflammatory': [['Norton Tab.', 52], ['Norton-DPS Tab.', 53], ['Norton-SP Tab.', 54], ['Pame-D', 77], ['Lester-P Tab.', 35], ['Lester-SP Tab.', 36],
    ['Norton Inj.', 49, 'In Excel but not in the printed category list – assigned to Analgesic & Anti Inflammatory (diclofenac); confirm.'], ['Vector Tab.', 78, 'In Excel but not in the printed category list – assigned to Analgesic & Anti Inflammatory (serratiopeptidase); confirm.']],
  'anti-cold': [['Sedam AC Sus.', 71], ['Sedam AC Tab.', 70]],
}

const formOf = (name) => {
  if (/\bInj/i.test(name)) return 'Injection'
  if (/Dry\s*Sy/i.test(name)) return 'Dry Syrup'
  if (/\bSus/i.test(name)) return 'Suspension'
  if (/\bCap/i.test(name)) return 'Capsule'
  if (/\bDT\b/.test(name)) return 'Dispersible Tablet'
  if (/\bTab/i.test(name)) return 'Tablet'
  if (/Mouthwash/i.test(name)) return 'Mouthwash'
  if (/\bSy\b|\bSy\.|Syrup|Syp/i.test(name)) return 'Syrup'
  if (/Powder/i.test(name)) return 'Powder'
  if (/Liniment/i.test(name)) return 'Liniment'
  return undefined
}

const items = []
const used = new Set()
const flags = []
let id = 0
for (const [category, list] of Object.entries(catalogue)) {
  for (const [name, no, note] of list) {
    const x = no ? excel.get(no) : undefined
    if (no && !x) throw new Error(`Missing Excel row ${no}`)
    if (no) used.add(no)
    const verify = []
    if (!x) verify.push('Listed in the printed catalogue but not in the Excel "new list": composition and packing pending verification.')
    if (note) verify.push(note)
    items.push({ id: ++id, no: no ?? undefined, name, packing: x?.packing || FROM_PACK[name]?.[1] || undefined, composition: x?.composition || FROM_PACK[name]?.[0] || undefined, form: formOf(name) ?? (x ? formOf(x.name) : undefined), category, pending: (!x && !FROM_PACK[name]) || undefined })
    if (x && clean(x.name).toLowerCase().replace(/[^a-z0-9]/g, '') !== clean(name).toLowerCase().replace(/[^a-z0-9]/g, '')) flags.push(`Name differs: printed "${name}" vs Excel #${no} "${x.name}". Printed name displayed.`)
    for (const v of verify) flags.push(`${name}${no ? ` (#${no})` : ''}: ${v}`)
  }
}
const unassigned = [...excel.keys()].filter((n) => !used.has(n))
if (unassigned.length) throw new Error('Excel rows not placed in any category: ' + unassigned.join(','))

// duplicate display names
const seen = new Map()
for (const p of items) seen.set(p.name, [...(seen.get(p.name) ?? []), p])
for (const [n, l] of seen) if (l.length > 1) flags.push(`"${n}" appears ${l.length}× (${l.map((p) => `${p.category}${p.packing ? ' / ' + p.packing : ''}`).join('; ')}). Kept as separate entries.`)

// data-quality flags on Excel text (preserved, not corrected)
const typos = [['Aceclofenace', 'Aceclofenac'], ['Sulbactum', 'Sulbactam'], ['Telimsartan', 'Telmisartan'], ['Ferrour', 'Ferrous'], ['Nicinamide', 'Nicotinamide'], ['Cynocobalamin', 'Cyanocobalamin'], ['Hydrocloride', 'Hydrochloride'], ['Proxetile', 'Proxetil'], ['Utrine', 'Uterine'], ['Rotoside', 'Rutoside']]
for (const p of items) for (const [bad, good] of typos) if (p.composition?.includes(bad)) flags.push(`${p.name} (#${p.no}): source spells "${bad}" (likely "${good}"). Preserved.`)
for (const p of items) if (p.composition && (p.composition.length < 3)) flags.push(`${p.name}: composition empty in Excel`)
flags.push(
  'Maate G2 Tab. appears under Antibiotics in the printed list; kept under Anti Diabetic (composition glimepiride + metformin).',
  'Retel-S 1500 mg Inj.: Excel composition "Ceftriaxone + Sulbactum 1.5mg" (unit likely wrong). Preserved.',
  'Retel-S 375 mg: no "Inj." in name and strength 375 mg conflicts with composition "…Sulbactum 750mg". Preserved.',
  'Cefdron Dry Sy.: Excel composition reads "Cefpodoxime proxetil 5ml" (no mg strength). Preserved.',
  'Delphi-L Inj.: Excel composition is truncated ("…Nicotinamide", no strengths). Preserved.',
  'Hungermac Sy. placed in Nutraceuticals per printed list.',
  'No product in the printed lists has a price on this site; the PTR + VAT sheet was not read.',
)

// old-list diff
const oldRows = rows('old list').slice(1).filter((r) => r[1])
const norm = (s) => clean(s).toLowerCase().replace(/[^a-z0-9]/g, '')
const byKey = new Map([...excel.values()].map((e) => [norm(e.name) + norm(e.packing), e]))
const diff = []
for (const r of oldRows) {
  const hit = byKey.get(norm(r[1]) + norm(r[2]))
  if (!hit) diff.push(`Old list only (legacy, not published): ${clean(r[1])} (${clean(r[2])}) – ${clean(r[3])}`)
  else if (norm(hit.composition) !== norm(r[3])) diff.push(`Composition differs for ${hit.name}: old "${clean(r[3])}" vs new "${hit.composition}" (new list used)`)
}

writeFileSync('src/data/products.generated.ts', `// AUTO-GENERATED by scripts/generate-products.mjs from reference/catalogue.xls ("new list"). Do not edit by hand.
// Re-run: npm run gen:products
export type DosageForm = 'Tablet' | 'Dispersible Tablet' | 'Capsule' | 'Syrup' | 'Dry Syrup' | 'Suspension' | 'Injection' | 'Powder' | 'Liniment' | 'Mouthwash'
/** pending = listed in the printed catalogue but absent from the Excel; composition/packing awaiting verification. */
export interface RawProduct { id: number; no?: number; name: string; packing?: string; composition?: string; form?: DosageForm; category: string; pending?: boolean }
export const rawProducts: RawProduct[] = ${JSON.stringify(items, null, 1)}
`)
writeFileSync('reference/REVIEW-NOTES.md', `# Catalogue review notes\n\nGenerated ${new Date().toISOString().slice(0, 10)}.\n\n## Flags (${flags.length})\n${flags.map((f) => `- ${f}`).join('\n')}\n\n## Old list vs new list\n${diff.map((f) => `- ${f}`).join('\n') || '- none'}\n`)
const counts = {}
for (const p of items) counts[p.category] = (counts[p.category] ?? 0) + 1
console.log(items.length, 'entries (', items.filter((p) => p.pending).length, 'pending );', flags.length, 'flags'); console.log(counts)
