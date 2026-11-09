/**
 * Editorial content. Company-journey facts (1999 onward) come from the client's handwritten notes.
 * Do not add a founder name, certification, address or statistic that McASTRO has not supplied.
 */

export const homeCopy = {
  eyebrow: 'McASTRO PHARMA LLP  |  QUALITY • TRUST • INNOVATION',
  heroBody: 'Delivering a diverse pharmaceutical portfolio through a commitment to quality-focused processes, responsible business practices and lasting partnerships.',
  support: 'Building stronger connections across the pharmaceutical industry.',
}

/** Company journey, transcribed from the client's handwritten notes. `home` marks entries shown on the home page strip (uses `brief`). */
export interface Milestone { year: string; group: string; title: string; body: string; brief?: string; home?: boolean; chips?: string[] }
export const milestones: Milestone[] = [
  { year: '1999', group: 'The Beginning', title: 'A mission to make healthcare medicine affordable', brief: 'Started as a mission to provide healthcare medicine at an affordable price, with a single product.', home: true,
    body: 'McASTRO began its journey as a mission to provide healthcare medicine at an affordable price. It started with a single product, Tab. Delphi-L, and three headquarters: Jabalpur, Bilaspur and Durg.', chips: ['Tab. Delphi-L', 'Jabalpur', 'Bilaspur', 'Durg'] },
  { year: 'Early years', group: 'Product Basket', title: 'More products, more headquarters', brief: 'Syrup and powder joined Delphi-L, followed by antibiotics and new headquarters.',
    body: 'The second product was Delphi-L Syrup and the third was Slazer Powder. To strengthen the portfolio, antibiotics were added, beginning with Tab. Logistic, followed by Tab. Vitor, Tab. Vitor-OZ and its suspension, and later Azam. An antimalarial segment came with the Radiant brand and its injectable, Alpha Radiant. New headquarters were opened at Balaghat and Shahdol in Madhya Pradesh.', chips: ['Delphi-L Syrup', 'Slazer Powder', 'Logistic', 'Vitor', 'Azam', 'Radiant', 'Balaghat', 'Shahdol'] },
  { year: '2003–2006', group: 'Expansion', title: 'Smaller towns and the Mahakoushal region', brief: 'Operations reached smaller towns and most of the Mahakoushal region; Delphi-L gained an injectable and a soft gelatin capsule.',
    body: 'In 2003 and 2004 operations expanded into smaller towns, Mandla and Seoni districts. In 2005 and 2006 most of the Mahakoushal region was covered, including Satna and Rewa. In 2005 the first product was strengthened with an injectable form of Delphi-L and the soft gelatin capsule, Delphi-L Plus.', chips: ['Mandla', 'Seoni', 'Satna', 'Rewa', 'Delphi-L Inj.', 'Delphi-L Plus'] },
  { year: '2007', group: 'Expansion', title: 'Bundelkhand and central Madhya Pradesh', brief: 'Entry into two important regions of Madhya Pradesh: Bundelkhand and the central part of the state.',
    body: 'In 2007 the company entered two important regions of Madhya Pradesh: Bundelkhand (Damoh, Sagar, Chhatarpur, Tikamgarh) and the central part of the state (Bhopal, Vidisha, Itarsi, Betul), and continued the journey.', chips: ['Damoh', 'Sagar', 'Chhatarpur', 'Tikamgarh', 'Bhopal', 'Vidisha', 'Itarsi', 'Betul'] },
  { year: 'By 2010', group: 'Growing Roots', title: 'Chhattisgarh, and a team of 30+', brief: 'The team grew from 3 MSRs to 30+, and the portfolio reached 30–35 products.', home: true,
    body: 'Not only in Madhya Pradesh: roots were expanded and strengthened in Chhattisgarh by covering almost all headquarters of the state, including Raipur, Rajnandgaon, Raigarh, Dhamtari and Ambikapur. By 2010 the journey that began with 3 MSRs had reached 30+ MSRs, and the product portfolio had grown to 30–35 products.', chips: ['Raipur', 'Rajnandgaon', 'Raigarh', 'Dhamtari', 'Ambikapur'] },
  { year: '2010–2015', group: 'Every Corner', title: 'Available in every corner of both states', brief: 'By 2015 the entire states of Madhya Pradesh and Chhattisgarh were covered, with newer antibiotics added to the range.', home: true,
    body: 'After 2010 the aim was to be available in every nook and corner of Madhya Pradesh and Chhattisgarh. Operations expanded in the Gwalior region (Morena, Guna, Shivpuri) and, by 2015, covered both states entirely, with entry into western Madhya Pradesh: Indore, Ratlam, Ujjain, Dewas and the border district of Neemuch. The portfolio was strengthened with the latest antibiotic molecules and line extensions such as Tab. Cefobanta and Tab. Logistic-CV.', chips: ['Gwalior', 'Morena', 'Guna', 'Shivpuri', 'Indore', 'Ratlam', 'Ujjain', 'Dewas', 'Neemuch', 'Cefobanta', 'Logistic-CV'] },
  { year: '2017', group: 'Portfolio', title: 'Diabetes and hypertension ranges', brief: 'First basic products for diabetes and hypertension: the Maate and Telimac ranges.',
    body: 'In 2017 basic products to manage diabetes and hypertension were introduced for the first time, with two product ranges: Tab. Maate and Tab. Telimac.', chips: ['Maate', 'Telimac'] },
  { year: '2018', group: 'Expansion', title: 'Entering Maharashtra', brief: 'Market operations expanded into Maharashtra.', home: true,
    body: 'In 2018 market operations expanded into the state of Maharashtra, with entry into Nagpur, Gondia, Amravati, Chandrapur and Wardha.', chips: ['Nagpur', 'Gondia', 'Amravati', 'Chandrapur', 'Wardha'] },
  { year: '2020', group: 'Resilience', title: 'Staying together through the pandemic', brief: 'Keeping the team together through the work-from-home period.',
    body: 'During the Corona period, the big challenge was to keep the team together. The work is fully field-based, but society had moved to work from home. In that challenging phase, long-standing colleagues supported the company in maintaining sales through a tough period.' },
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
  { title: 'Looking Ahead', body: 'The journey is still about more than new products and new headquarters: it is about adding people to a big family, and growing from strong to stronger to keep providing quality medicine at affordable prices.' },
]

export const values = [
  { title: 'Quality first', body: 'Products and processes are expected to meet the standards our partners rely on.' },
  { title: 'Integrity', body: 'Clear information, honest communication and dependable dealings.' },
  { title: 'Partnership', body: 'We grow together with distributors, stockists and associates.' },
  { title: 'Continuous improvement', body: 'We keep refining our portfolio, processes and service.' },
]

export const presenceSections = [
  { title: 'Distribution Network', body: 'McASTRO PHARMA LLP works to build a connected distribution network through distributors, stockists and wholesalers, so that its portfolio can reach healthcare channels reliably.', icon: 'network' },
  { title: 'Regional Presence', body: 'Since 1999 our field network has grown from three headquarters (Jabalpur, Bilaspur and Durg) across Madhya Pradesh and Chhattisgarh, and since 2018 into Maharashtra.', icon: 'route' },
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
    'The journey was never only about adding new products and new headquarters. It has also been a journey of adding new people as part of a big family, to make that family go from strong to stronger and march ahead to fulfil the mission of providing quality medicine at affordable prices.',
    'It is a matter of pride and of building relationships: members who started the journey with us at the beginning of their careers are continuing with us today.',
  ],
}

/** Field presence, from the client's notes (headquarters/districts named there). */
export const presenceRegions = [
  { state: 'Madhya Pradesh', since: 'Since 1999', lead: 'Covered across the state by 2015, from the Mahakoushal region to Bundelkhand, Gwalior and the western districts.', places: ['Jabalpur', 'Balaghat', 'Shahdol', 'Mandla', 'Seoni', 'Satna', 'Rewa', 'Damoh', 'Sagar', 'Chhatarpur', 'Tikamgarh', 'Bhopal', 'Vidisha', 'Itarsi', 'Betul', 'Gwalior', 'Morena', 'Guna', 'Shivpuri', 'Indore', 'Ratlam', 'Ujjain', 'Dewas', 'Neemuch'] },
  { state: 'Chhattisgarh', since: 'Since 1999', lead: 'Started with Bilaspur and Durg; almost all headquarters of the state were covered by 2010.', places: ['Bilaspur', 'Durg', 'Raipur', 'Rajnandgaon', 'Raigarh', 'Dhamtari', 'Ambikapur'] },
  { state: 'Maharashtra', since: 'Since 2018', lead: 'Market operations expanded into the state in 2018.', places: ['Nagpur', 'Gondia', 'Amravati', 'Chandrapur', 'Wardha'] },
]
