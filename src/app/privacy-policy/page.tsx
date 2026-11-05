import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { photos } from '@/data/images'
import { company } from '@/data/company'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({ title: 'Privacy Policy', description: 'How McASTRO PHARMA LLP collects, uses and protects information submitted through this website.', path: '/privacy-policy' })

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy <em>Policy</em></>} intro="How we collect, use and protect the information you share with us through this website." crumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} photo={photos.labInterior} position="30% 50%" />
      <section className="py-12 lg:py-16">
      <div className="wrap max-w-3xl">
        <div className="prose-legal mt-8">
          <p>This Privacy Policy explains how {company.name} (“we”, “us”, “our”) handles information collected through this website.</p>
          <h2>1. Information we collect</h2>
          <p>We collect only the information you choose to give us. We do not require you to create an account to browse this website. We may also receive limited technical information that browsers send automatically, such as browser type and pages requested.</p>
          <h2>2. Contact and enquiry form data</h2>
          <p>When you submit a general or partnership enquiry, we receive the details you enter: your name, company name, email address, phone number, city, business type and message.</p>
          <h2>3. Purpose of collection</h2>
          <ul><li>To read and respond to your enquiry.</li><li>To discuss distribution opportunities and business partnerships.</li><li>To keep reasonable records of business correspondence.</li></ul>
          <h2>4. Data protection</h2>
          <p>We take reasonable steps to protect the information you send us from unauthorised access, loss or misuse. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.</p>
          <h2>5. Third-party services</h2>
          <p>Enquiry forms may be processed by a third-party form-handling service that we configure for this website. This website may also contain links to external websites; we are not responsible for their privacy practices. We do not sell your personal information.</p>
          <h2>6. Cookies</h2>
          <p>This website does not intentionally set advertising or tracking cookies. If analytics or similar tools are added in future, this policy will be updated and, where required, your consent will be sought.</p>
          <h2>7. Your requests</h2>
          <p>You may ask us to access, correct or delete the personal information you have submitted, or object to its use. We will respond to such requests within a reasonable time and in line with applicable law.</p>
          <h2>8. Contact</h2>
          <p>For any privacy-related question, please use the <a href="/contact" className="text-royal underline">contact form</a>{company.email ? <> or email <a className="text-royal underline" href={`mailto:${company.email}`}>{company.email}</a></> : null}.</p>
          <h2>9. Changes to this policy</h2>
          <p>We may update this policy from time to time. The current version is always published on this page.</p>
        </div>
      </div>
    </section>
      <PartnerCTA />
    </>
  )
}
