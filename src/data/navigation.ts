export interface NavItem { label: string; href: string; children?: { label: string; href: string }[]; mega?: boolean }

export const navMain: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/founders-story', children: [{ label: 'Founder’s Story', href: '/founders-story' }, { label: 'Milestones', href: '/milestones' }] },
  { label: 'Categories', href: '/products', mega: true },
  { label: 'Our Presence', href: '/our-presence' },
  { label: 'Quality Production', href: '/quality-production' },
  { label: 'Partner With Us', href: '/partner-with-us' },
  { label: 'Contact', href: '/contact' },
]

export const footerCompany = [
  ['Founder’s Story', '/founders-story'], ['Milestones', '/milestones'], ['Our Presence', '/our-presence'], ['Quality Production', '/quality-production'], ['Partner With Us', '/partner-with-us'], ['Contact Us', '/contact'],
] as const
