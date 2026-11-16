/**
 * Editorial content. Company-journey facts (1999 onward) come from the client's handwritten notes.
 * Do not add a founder name, certification, address or statistic that McASTRO has not supplied.
 */

export const homeCopy = {
  eyebrow: 'McASTRO PHARMA LLP  |  QUALITY • TRUST • INNOVATION',
  heroBody: 'Delivering a diverse pharmaceutical portfolio through a commitment to quality-focused processes, responsible business practices and lasting partnerships.',
  support: 'Building stronger connections across the pharmaceutical industry.',
}

/** Company journey, from the client's typed "Journey of McAstro Pharma". `home` marks entries shown on the home strip (uses `brief`). */
export interface Milestone { year: string; group: string; title: string; body: string; brief?: string; home?: boolean; chips?: string[] }
export const milestones: Milestone[] = [
  { year: '1999', group: 'The Beginning', title: 'A mission to make healthcare medicine affordable', brief: 'Started as a mission to provide healthcare medicine at an affordable price, with a first product, Tab. Delphi-L.', home: true,
    body: 'McASTRO started its journey as a mission: healthcare medicine at an affordable price. Way back in 1999 it began with one product, Tab. Delphi-L, launched at three headquarters: Jabalpur, Bilaspur and Durg.', chips: ['Tab. Delphi-L', 'Jabalpur', 'Bilaspur', 'Durg'] },
  { year: 'Early years', group: 'Product Basket', title: 'A wider basket, year on year', brief: 'Delphi-L line extensions, Slazer, antibiotics and anti-malarials joined the range.',
    body: 'McASTRO kept expanding its operational area and its product basket, year on year. The second product was a line extension of the Delphi-L group, Delphi-L Syrup, and the third was Slazer powder. To strengthen the portfolio, antibiotics were added: first Tab. Logistic, then Tab. Vitor, Tab. Vitor-OZ and its suspension. New headquarters were added to cover other parts of the state, and Delphi-L came out in an injectable form. In 2005 the soft gelatin capsule, Delphi-L Plus, followed. Keeping the needs of the market in view, the next antibiotic group was Azam, and the anti-malarial need was met with Radiant in tablet, syrup and injection forms.', chips: ['Delphi-L Syrup', 'Slazer', 'Logistic', 'Vitor', 'Vitor-OZ', 'Delphi-L Inj.', 'Delphi-L Plus', 'Azam', 'Radiant'] },
  { year: '2003–2004', group: 'Expansion', title: 'Smaller towns of the state', brief: 'Entry into smaller towns of the state, such as Seoni and Chhindwara.',
    body: 'In 2003 and 2004 the company entered the smaller towns of the state, such as Seoni and Chhindwara.', chips: ['Seoni', 'Chhindwara'] },
  { year: '2005–2006', group: 'Expansion', title: 'The Mahakoushal region', brief: 'The Mahakoushal region of the state was covered completely.',
    body: 'In 2005 and 2006 the company covered the Mahakoushal region of the state completely, including Satna, Rewa and Sidhi.', chips: ['Satna', 'Rewa', 'Sidhi'] },
  { year: '2007', group: 'Expansion', title: 'Bundelkhand and central Madhya Pradesh', brief: 'Entry into the Bundelkhand area and central Madhya Pradesh.',
    body: 'In 2007 the company started covering the Bundelkhand area as well as central Madhya Pradesh, such as Bhopal, Vidisha, Itarsi and Betul.', chips: ['Bundelkhand', 'Bhopal', 'Vidisha', 'Itarsi', 'Betul'] },
  { year: 'By 2010', group: 'Growing Roots', title: 'From 3 MSRs to 30+', brief: 'The entire state of Chhattisgarh was covered; the team grew from 3 MSRs to 30+ and the portfolio to 30+ products.', home: true,
    body: 'Not only in M.P.: to strengthen operations, the entire state of Chhattisgarh was covered. Up to 2010 the journey that started with 3 MSRs reached 30+ MSRs, and the product portfolio, too, reached 30+ products.', chips: ['Chhattisgarh', '3 → 30+ MSRs', '30+ products'] },
  { year: 'After 2010', group: 'Every Corner', title: 'Presence in every nook and corner', brief: 'Presence in every nook and corner of the state, covering the Gwalior region.', home: true,
    body: 'After 2010 the company made its presence felt in every nook and corner of the state, covering the Gwalior region including Shivpuri, Guna and Bhind.', chips: ['Gwalior', 'Shivpuri', 'Guna', 'Bhind'] },
  { year: 'By 2015', group: 'Statewide', title: 'Madhya Pradesh and Chhattisgarh, entirely', brief: 'The entire states of M.P. and C.G. covered, and a new entry into the cardio and diabetic segment.', home: true,
    body: 'Up to 2015 the company covered the entire states of M.P. and C.G., making entry into the western part of the state: the financial capital Indore, Ratlam, Ujjain, Dewas and even the border district of Neemuch. The portfolio was further strengthened with newer molecules and new therapeutics, with entry into the cardio and diabetic segments.', chips: ['Indore', 'Ratlam', 'Ujjain', 'Dewas', 'Neemuch', 'Cardio', 'Diabetic'] },
  { year: '2017', group: 'Expansion', title: 'Vidarbha, Maharashtra', brief: 'Operations expanded into the Vidarbha part of Maharashtra.', home: true,
    body: 'In 2017 the company expanded its operation by launching in the Vidarbha part of Maharashtra: Nagpur, Gondia, Chandrapur, Amravati and Wardha.', chips: ['Nagpur', 'Gondia', 'Chandrapur', 'Amravati', 'Wardha'] },
]

export const whyChoose = [
  { title: 'Diverse Product Portfolio', body: 'A broad portfolio covering multiple pharmaceutical categories.', icon: 'layers' },
  { title: 'Quality-Focused Approach', body: 'A commitment to quality-oriented processes and product standards.', icon: 'shield' },
  { title: 'Business Partnerships', body: 'Building lasting relationships with distributors and business associates.', icon: 'handshake' },
  { title: 'Continuous Growth', body: 'A forward-looking approach to pharmaceutical business development.', icon: 'trending' },
] as const

export const founderSections = [
  { title: 'The Beginning', body: 'McASTRO began in 1999 as a mission to provide healthcare medicine at an affordable price, starting with a single product, Tab. Delphi-L, and three headquarters: Jabalpur, Bilaspur and Durg.' },
  { title: 'The Vision', body: 'To grow into a pharmaceutical company that partners and healthcare professionals trust: known for a diverse portfolio, a quality-focused approach and a clear commitment to better healthcare.' },
  { title: 'Our Philosophy', body: 'We believe long-term success comes from doing the basics well: clear product information, consistent standards, responsive communication and respect for every partner.' },
  { title: 'Our Commitment', body: 'We are committed to responsible business practices, to presenting accurate product information and to continuously improving how we work.' },
  { title: 'Looking Ahead', body: 'The journey is about more than new products and new headquarters: it is about adding new members to a big family, and growing from strong to stronger to keep providing quality medicine at affordable prices.' },
]

export const values = [
  { title: 'Quality first', body: 'Products and processes are expected to meet the standards our partners rely on.' },
  { title: 'Integrity', body: 'Clear information, honest communication and dependable dealings.' },
  { title: 'Partnership', body: 'We grow together with distributors, stockists and associates.' },
  { title: 'Continuous improvement', body: 'We keep refining our portfolio, processes and service.' },
]

export const presenceSections = [
  { title: 'Distribution Network', body: 'McASTRO PHARMA LLP works to build a connected distribution network through distributors, stockists and wholesalers, so that its portfolio can reach healthcare channels reliably.', icon: 'network' },
  { title: 'Regional Presence', body: 'Since 1999 our field network has grown from three headquarters (Jabalpur, Bilaspur and Durg) to the entire states of Madhya Pradesh and Chhattisgarh, and since 2017 into the Vidarbha part of Maharashtra.', icon: 'route' },
  { title: 'Business Relationships', body: 'Strong, transparent and long-term relationships are the foundation of everything we do with our trade partners.', icon: 'handshake' },
  { title: 'Expansion Vision', body: 'We keep expanding area by area, together with our product basket and our team, and we welcome partners who would like McASTRO PHARMA in their region.', icon: 'trending' },
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

/** From the client's notes: the journey is also a journey of people. */
export const peopleStory = {
  title: 'More than products and headquarters',
  paragraphs: [
    'This journey was never only about adding new products and new headquarters. It has been about adding new family members to the group, as part of a big family, to make that family go from strong to stronger and march ahead to fulfil the mission of providing quality medicine at affordable prices.',
    'It is a matter of pride and of building relationships: the members who started the journey with us at the beginning of their careers are continuing their careers with us till today.',
  ],
}

/** Field presence, from the client's typed journey (districts/regions named there). */
export const presenceRegions = [
  { state: 'Madhya Pradesh', since: 'Since 1999', lead: 'The entire state was covered by 2015, from the Mahakoushal region and Bundelkhand to Gwalior and the western districts.', places: ['Jabalpur', 'Seoni', 'Chhindwara', 'Satna', 'Rewa', 'Sidhi', 'Bundelkhand', 'Bhopal', 'Vidisha', 'Itarsi', 'Betul', 'Gwalior', 'Shivpuri', 'Guna', 'Bhind', 'Indore', 'Ratlam', 'Ujjain', 'Dewas', 'Neemuch'] },
  { state: 'Chhattisgarh', since: 'Since 1999', lead: 'Started with Bilaspur and Durg, and the entire state was covered by 2010.', places: ['Bilaspur', 'Durg'] },
  { state: 'Maharashtra', since: 'Since 2017', lead: 'Operations were launched in the Vidarbha part of the state in 2017.', places: ['Nagpur', 'Gondia', 'Chandrapur', 'Amravati', 'Wardha'] },
]

/**
 * Founder profile, from the client's "Founder story" document. The name is NOT in the source: set `name`
 * (and `photo`, e.g. '/images/founder.jpg') only once confirmed; the page shows a placeholder until then.
 */
export const founder = {
  name: null as string | null,
  role: 'Founder, McASTRO PHARMA LLP',
  photo: null as string | null,
  lead: 'A career built in the field, and a company founded in 1999 with one clear objective: quality medicine at an affordable price, with performance always rewarded.',
  highlights: [
    { v: 'Gold medal', l: 'In graduation, Guru Nanak Dev University, Amritsar' },
    { v: 'Age 25', l: 'Youngest area manager in his company' },
    { v: '1999', l: 'Founded McASTRO PHARMA' },
    { v: '3 → 75+', l: 'Field force, then and today' },
  ],
  steps: [
    { tag: 'Education', title: 'A gold-medal graduate', body: 'After completing his B.Sc. (Hons), the founder began his career as a medical representative in a pharma company. A highlight of his education was a gold medal in his graduation from Guru Nanak Dev University, Amritsar.' },
    { tag: 'A choice', title: 'Central government offer, private-sector path', body: 'While working as a medical representative he prepared for a competitive exam for a central government job and was selected as an Economic Investigator in the Ministry of Finance. On the advice of the vice president of his company, he did not join, and continued in the private sector.' },
    { tag: 'Early rise', title: 'Youngest area manager at 25', body: 'In view of his performance and managerial capabilities, his company promoted him to area manager at the age of 25. He became the youngest area manager in the company.' },
    { tag: 'Leadership', title: 'Turning a weak territory around', body: 'He brought a weak territory up to the national average and beyond. His top management elevated him to second-line manager and took him from Punjab to Maharashtra.' },
    { tag: 'A turning point', title: 'Madhya Pradesh, then a company of his own', body: 'After one and a half years in Maharashtra, his management sent him to Madhya Pradesh to strengthen field operations where the company’s performance was not up to the mark. After performing that special task for one year, he left the job and founded this company in 1999.' },
  ],
  closing: 'The journey of McASTRO PHARMA began with 3 field force personnel and today has reached 75+. It continues to perform, to reward performance, and to contribute to the betterment of society to a larger extent.',
}
