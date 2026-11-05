/**
 * Editorial content. Nothing here states a founder name, date, certification, location or statistic that
 * McASTRO has not supplied. Fields set to `null` (e.g. milestone `year`) are editable and, when filled,
 * automatically render as large year typography.
 */

export const homeCopy = {
  eyebrow: 'McASTRO PHARMA LLP  |  QUALITY • TRUST • INNOVATION',
  heroBody: 'Delivering a diverse pharmaceutical portfolio through a commitment to quality-focused processes, responsible business practices and lasting partnerships.',
  support: 'Building stronger connections across the pharmaceutical industry.',
}

export interface Milestone { year: string | null; group: string; title: string; body: string }
export const milestones: Milestone[] = [
  { year: null, group: 'Company Journey', title: 'The beginning', body: 'McASTRO PHARMA LLP was established with a commitment to building a meaningful presence in the pharmaceutical sector.' },
  { year: null, group: 'Portfolio Development', title: 'A growing product portfolio', body: 'The portfolio has been organised across therapeutic categories and dosage forms, from tablets and capsules to syrups, suspensions and injectables.' },
  { year: null, group: 'Business Growth', title: 'Building business relationships', body: 'Growth is built on long-term relationships with distributors, stockists and business associates.' },
  { year: null, group: 'Future Direction', title: 'Looking ahead', body: 'A forward-looking approach to portfolio development, quality-focused processes and wider partnerships.' },
]

export const whyChoose = [
  { title: 'Diverse Product Portfolio', body: 'A broad portfolio covering multiple pharmaceutical categories.', icon: 'layers' },
  { title: 'Quality-Focused Approach', body: 'A commitment to quality-oriented processes and product standards.', icon: 'shield' },
  { title: 'Business Partnerships', body: 'Building lasting relationships with distributors and business associates.', icon: 'handshake' },
  { title: 'Continuous Growth', body: 'A forward-looking approach to pharmaceutical business development.', icon: 'trending' },
] as const

export const founderSections = [
  { title: 'The Beginning', body: 'Every organisation begins with a vision. McASTRO PHARMA LLP started with the aim of building a respected name in pharmaceuticals through dependable products and honest business relationships.' },
  { title: 'The Vision', body: 'To grow into a pharmaceutical company that partners and healthcare professionals trust: known for a diverse portfolio, a quality-focused approach and a clear commitment to better healthcare.' },
  { title: 'Our Philosophy', body: 'We believe long-term success comes from doing the basics well: clear product information, consistent standards, responsive communication and respect for every partner.' },
  { title: 'Our Commitment', body: 'We are committed to responsible business practices, to presenting accurate product information and to continuously improving how we work.' },
  { title: 'Looking Ahead', body: 'The journey continues with portfolio development, stronger distribution relationships and a steady focus on quality.' },
]

export const values = [
  { title: 'Quality first', body: 'Products and processes are expected to meet the standards our partners rely on.' },
  { title: 'Integrity', body: 'Clear information, honest communication and dependable dealings.' },
  { title: 'Partnership', body: 'We grow together with distributors, stockists and associates.' },
  { title: 'Continuous improvement', body: 'We keep refining our portfolio, processes and service.' },
]

export const presenceSections = [
  { title: 'Distribution Network', body: 'McASTRO PHARMA LLP works to build a connected distribution network through distributors, stockists and wholesalers, so that its portfolio can reach healthcare channels reliably.', icon: 'network' },
  { title: 'Regional Presence', body: 'Our approach is India-focused. We welcome conversations with partners about their regions and the products that fit their markets.', icon: 'route' },
  { title: 'Business Relationships', body: 'Strong, transparent and long-term relationships are the foundation of everything we do with our trade partners.', icon: 'handshake' },
  { title: 'Expansion Vision', body: 'We aim to extend our reach through meaningful partnerships and a growing, well-organised product portfolio.', icon: 'trending' },
] as const

export const qualitySections = [
  { title: 'Quality Commitment', body: 'Quality is an important part of pharmaceutical business responsibility. We value structured processes, attention to standards and a consistent focus on product quality.' },
  { title: 'Production Processes', body: 'We believe in documented, repeatable production practices: defined procedures, verified materials and clear records, so that every batch is handled consistently.' },
  { title: 'Quality Control', body: 'Quality control means checking materials and finished products against defined specifications, and acting on what the checks show.' },
  { title: 'Manufacturing Standards', body: 'Responsible manufacturing practices and attention to product standards are essential to pharmaceutical excellence, and guide how we work with our manufacturing and supply partners.' },
  { title: 'Continuous Improvement', body: 'We review our processes regularly and look for practical ways to do things better: more consistent, better documented and easier to verify.' },
]

export const productionSteps = [
  { n: '01', title: 'Material verification', body: 'Raw and packaging materials are checked before use.' },
  { n: '02', title: 'Controlled production', body: 'Products are made following documented procedures.' },
  { n: '03', title: 'In-process checks', body: 'Quality checks are carried out at defined stages.' },
  { n: '04', title: 'Packaging & labelling', body: 'Products are packed and labelled with the correct information.' },
  { n: '05', title: 'Review & release', body: 'Products are released only after quality review.' },
]

export const partnerSections = [
  { title: 'Distribution Partnerships', body: 'For distributors who want a diverse pharmaceutical portfolio from one company, organised by therapeutic category with clear composition and packing information.' },
  { title: 'Stockist & Wholesaler Enquiries', body: 'Stockists and wholesalers are welcome to enquire about product availability and trade terms through our enquiry form.' },
  { title: 'Business Collaboration', body: 'We are open to business associations and collaborations that fit our portfolio and standards.' },
]

export const partnerBenefits = [
  { title: 'Diverse portfolio', body: 'Twenty-one product categories to build a balanced range.' },
  { title: 'Clear catalogue', body: 'Composition, packing and dosage form organised by category.' },
  { title: 'Responsive enquiry channel', body: 'A dedicated route for business enquiries.' },
  { title: 'Long-term approach', body: 'We value lasting relationships over one-off transactions.' },
]

export interface Post { slug: string; title: string; excerpt: string; category: string; date: string; read: string; body: { h?: string; p: string }[] }
/** General, non-clinical editorial content. Review before publishing. */
export const posts: Post[] = [
  { slug: 'how-to-read-a-pharmaceutical-product-catalogue', title: 'How to read a pharmaceutical product catalogue', excerpt: 'Brand name, composition, dosage form and pack: what each field tells a distributor.', category: 'Industry Insights', date: '2026-10-01', read: '4 min', body: [
    { p: 'A well-organised product catalogue is the first tool a distributor or stockist uses to evaluate a pharmaceutical company. Knowing what each field means makes comparing ranges faster and more reliable.' },
    { h: 'Brand name', p: 'The brand name is the commercial identity of a presentation. The same composition can be sold under many brand names, so always read the brand together with its composition.' },
    { h: 'Composition', p: 'Composition lists the active ingredients and their strengths. Combination products list several actives. It is the field that defines what a product is.' },
    { h: 'Dosage form', p: 'Tablet, capsule, syrup, suspension, dry syrup, injection: the dosage form affects storage, handling and how a product is supplied.' },
    { h: 'Packing', p: 'Pack information such as 10 x 10 or 60 ml describes the unit in which a product is supplied.' },
  ] },
  { slug: 'why-quality-documentation-matters', title: 'Why quality documentation matters in pharmaceutical supply', excerpt: 'Records and traceability are the quiet backbone of a trustworthy supply chain.', category: 'Quality', date: '2026-09-15', read: '3 min', body: [
    { p: 'Pharmaceutical quality is not only about what happens inside a production facility. It is also about the records that show it happened.' },
    { h: 'Traceability', p: 'Good records allow a product to be followed from raw material to dispatch, which supports accountability at every step.' },
    { h: 'Consistency', p: 'Written procedures help ensure that each batch is made and checked in the same way.' },
    { h: 'Confidence for partners', p: 'For distributors and stockists, clear documentation is part of what makes a supplier dependable.' },
  ] },
  { slug: 'choosing-a-pharma-distribution-partner', title: 'What to look for in a pharma distribution partner', excerpt: 'Portfolio breadth, clarity of information and responsiveness: a practical checklist.', category: 'Partnerships', date: '2026-08-20', read: '5 min', body: [
    { p: 'For stockists and wholesalers, the company they represent is a long-term business relationship. A short checklist helps.' },
    { h: 'Portfolio fit', p: 'Does the range cover the therapeutic categories your customers ask for, in the dosage forms they need?' },
    { h: 'Information clarity', p: 'Is composition and packing information clear, consistent and easy to find?' },
    { h: 'Responsiveness', p: 'How quickly and clearly does the company respond to business enquiries?' },
    { h: 'Long-term outlook', p: 'Look for a partner that values continuity: consistent communication, steady standards and a willingness to grow together.' },
  ] },
  { slug: 'understanding-dosage-forms', title: 'Understanding dosage forms: tablets, capsules, syrups and injectables', excerpt: 'A plain-language guide to the main dosage forms found in a pharmaceutical portfolio.', category: 'Education', date: '2026-07-10', read: '4 min', body: [
    { p: 'The same active ingredient is often available in several dosage forms. This guide is general information about the forms themselves and is not medical advice.' },
    { h: 'Solid oral forms', p: 'Tablets and capsules are the most common solid forms. Dispersible tablets are designed to disperse in water before use.' },
    { h: 'Liquid oral forms', p: 'Syrups and suspensions are ready-to-use liquids, while dry syrups are supplied as a powder and reconstituted before use.' },
    { h: 'Injectables', p: 'Injections are administered by a healthcare professional and are supplied in vials, ampoules or pre-filled syringes.' },
    { h: 'Topicals and others', p: 'Liniments, powders and mouthwashes complete the range of presentations found in a typical portfolio.' },
  ] },
  { slug: 'what-a-therapeutic-category-means', title: 'What a “therapeutic category” means in a product portfolio', excerpt: 'Why portfolios are grouped by category, and how that helps trade partners.', category: 'Industry Insights', date: '2026-06-05', read: '3 min', body: [
    { p: 'Pharmaceutical portfolios are usually grouped by therapeutic category: antibiotics, gastro care, anti-diabetic and so on. Grouping makes a large catalogue easier to navigate.' },
    { h: 'Why it matters for trade', p: 'Stockists and distributors typically plan their ranges by category, so a clear category structure shortens the path from catalogue to enquiry.' },
    { h: 'A note on interpretation', p: 'Category names describe how products are grouped in a catalogue. They are not treatment recommendations. Medicines should only be used under the guidance of a qualified healthcare professional.' },
  ] },
]
export const postCategories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]
