import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { photos } from '@/data/images'
import { company } from '@/data/company'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({ title: 'Terms & Conditions', description: 'Terms of use for the McASTRO PHARMA LLP website, an informational pharmaceutical company website.', path: '/terms-and-conditions' })

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>Terms &amp; <em>Conditions</em></>} intro="The terms that apply when you use this website. It is informational and is not an online medicine ordering or medical advice platform." crumbs={[{ name: 'Terms & Conditions', path: '/terms-and-conditions' }]} photo={photos.qcLab} position="60% 45%" />
      <section className="py-12 lg:py-16">
      <div className="wrap max-w-3xl">
        <div className="prose-legal mt-8">
          <p>By accessing this website you agree to these terms. The website is operated by {company.name}.</p>
          <h2>1. Website usage</h2>
          <p>This website is provided for general, informational use. This website is informational only. It is not an online medicine ordering platform and does not provide medical advice. You agree not to misuse the website or attempt to disrupt its operation.</p>
          <h2>2. Product information</h2>
          <p>Product names, compositions, packing and dosage forms are provided for trade reference and may change without notice. Information is not a recommendation for use, a claim of treatment benefit or a substitute for professional advice. Prescription medicines must be used only on the advice of a qualified healthcare professional.</p>
          <h2>3. Content ownership</h2>
          <p>Logos, brand names, text, graphics and other content on this website belong to {company.name} or its licensors and may not be copied, reproduced or distributed without written permission.</p>
          <h2>4. External links</h2>
          <p>This website may link to third-party websites for convenience. We do not control and are not responsible for their content or practices.</p>
          <h2>5. Enquiry submissions</h2>
          <p>Submitting an enquiry does not create a contract, supply obligation or business relationship. We may decline or not respond to any enquiry. Please do not include sensitive personal or medical information in your message.</p>
          <h2>6. Limitation of liability</h2>
          <p>To the fullest extent permitted by law, {company.name} is not liable for any loss or damage arising from the use of, or reliance on, this website or its content.</p>
          <h2>7. Changes to these terms</h2>
          <p>We may revise these terms at any time. Continued use of the website after changes are published means you accept the revised terms.</p>
          <h2>8. Governing law</h2>
          <p>These terms are governed by the laws of India.</p>
          <h2>9. Contact</h2>
          <p>Questions about these terms can be sent through our <a href="/contact" className="text-royal underline">contact form</a>{company.email ? <> or to <a className="text-royal underline" href={`mailto:${company.email}`}>{company.email}</a></> : null}.</p>
        </div>
      </div>
    </section>
      <PartnerCTA />
    </>
  )
}
