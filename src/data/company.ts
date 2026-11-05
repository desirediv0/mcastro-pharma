/**
 * Company facts. Anything not supplied/verified by McASTRO is a PLACEHOLDER: `null` values render as
 * "To be confirmed" and are excluded from structured data. Do not invent values here.
 */
export const company = {
  name: 'McASTRO PHARMA LLP',
  shortName: 'McASTRO PHARMA',
  tagline: 'Advancing Healthcare Through Quality & Innovation',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mcastropharma.com', // TODO: confirm production domain
  email: null as string | null, // Not supplied. Set only a verified address; it then appears in the footer, contact page and structured data.
  phone: null as string | null,
  whatsapp: null as string | null,
  address: null as string | null,
  /** Seen on the Excel price-list letterhead; NOT shown until the client confirms it is the registered/office address. */
  addressCandidate: '26, Usha Nagar, Gotri Road, Vadodara – 390020',
  mapEmbedUrl: null as string | null, // TODO: Google Maps embed URL
  social: { linkedin: null, facebook: null, instagram: null } as Record<string, string | null>,
  /**
   * Form submission endpoint (e.g. Formspree / Getform / Web3Forms). While null the forms validate
   * but do NOT send anything and tell the visitor so.
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? null,
  /** Show small "Placeholder" tags on unverified content so reviewers can find it. Set false to launch. */
  showPlaceholderBadges: false,
}

