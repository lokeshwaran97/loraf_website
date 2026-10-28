import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SITE_LEGAL_NAME, SITE_NAME } from '../data/nav'

export function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | {SITE_NAME}</title>
        <meta
          name="description"
          content="Terms of Service for Loraf Intelligence Private Limited — rules for using our application and related services."
        />
      </Helmet>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <p className="legal-page__crumb">
            <Link to="/">Home</Link> / Terms of Service
          </p>
          <h1>Terms of Service</h1>
          <p className="legal-page__meta">
            {SITE_LEGAL_NAME} · Effective date: October 28, 2026
          </p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) are an agreement between you and Loraf
              Intelligence Private Limited (&quot;Loraf&quot;, &quot;we&quot;, &quot;us&quot;),
              registered at 7, Muthaiah Pillai Layout, Udumalaipettai, Tiruppur 642126, Tamil Nadu,
              India. They apply to your use of our application and related services (the
              &quot;Service&quot;).
            </p>
            <p>
              By creating an account or using the Service, you agree to these Terms and to our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>. If you use the Service for a
              business, you confirm you have authority to bind that business. If you do not agree, do
              not use the Service.
            </p>
            <p>
              <strong>Effective date:</strong> October 28, 2026
            </p>
          </section>

          <section>
            <h2>2. The Service</h2>
            <p>
              The Service lets you log in to our application, connect your WhatsApp Business account
              through WhatsApp Embedded Signup, and send WhatsApp messages to your own clients. We may
              improve, change or discontinue features at any time, and we will try to give notice of
              major changes.
            </p>
          </section>

          <section>
            <h2>3. Eligibility and Accounts</h2>
            <ul>
              <li>You must be at least 18 and legally able to enter a contract under Indian law.</li>
              <li>
                You must give accurate name, phone number and email details, and keep them up to
                date.
              </li>
              <li>
                You are responsible for all activity under your account. Tell us at once at{' '}
                <a href="mailto:info@lorafintel.com">info@lorafintel.com</a> if you suspect
                unauthorised access.
              </li>
              <li>
                One account may not be shared across unrelated businesses without our written
                consent.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. WhatsApp Business and Meta Terms</h2>
            <p>
              The Service depends on the WhatsApp Business Platform, which Meta Platforms provides.
              By connecting your WhatsApp Business account, you agree to follow Meta&apos;s{' '}
              <a
                href="https://www.whatsapp.com/legal/business-terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Business Terms of Service
              </a>{' '}
              and its messaging and commerce policies. Meta may limit, suspend or ban your WhatsApp
              account or messaging at any time, and we are not responsible for Meta&apos;s decisions
              or for interruptions in Meta&apos;s services.
            </p>
          </section>

          <section>
            <h2>5. Your Responsibilities for Your Clients&apos; Data</h2>
            <p>You decide whom you message and what you send. You confirm that:</p>
            <ul>
              <li>
                You have a lawful basis and valid consent from each client before you upload their
                details or message them on WhatsApp.
              </li>
              <li>You will honour opt-out requests promptly.</li>
              <li>
                Your messages comply with applicable Indian laws, including the Digital Personal Data
                Protection Act, 2023, and with Meta&apos;s policies.
              </li>
            </ul>
            <p>
              We process your clients&apos; details only on your instructions to deliver your
              messages.
            </p>
          </section>

          <section>
            <h2>6. Acceptable Use</h2>
            <p>You must not use the Service to:</p>
            <ul>
              <li>
                Send spam, unsolicited bulk messages, or messages to people who have not agreed to
                receive them.
              </li>
              <li>
                Send unlawful, misleading, abusive, harassing, defamatory or fraudulent content.
              </li>
              <li>Send content that violates Meta&apos;s policies or anyone&apos;s rights.</li>
              <li>
                Attempt to break, reverse-engineer, overload or gain unauthorised access to the
                Service.
              </li>
              <li>
                Resell or give access to the Service to others without our written consent.
              </li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              Loraf owns the Service, including its software, design and branding. We give you a
              limited, non-exclusive, non-transferable right to use the Service for your business
              while these Terms apply. You keep ownership of your content and your clients&apos;
              data, and you give us permission to process them only as needed to run the Service.
            </p>
          </section>

          <section>
            <h2>8. Suspension and Termination</h2>
            <p>
              You may stop using the Service and close your account at any time by emailing{' '}
              <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>. We may suspend or end
              your access immediately if you break these Terms, misuse the Service, or if Meta
              suspends your WhatsApp account, or if the law requires. After termination, we handle
              your data as described in our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>9. Disclaimers and Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot;. We do not
              promise it will be uninterrupted or error-free, or that every message will be
              delivered, since delivery depends on Meta and on the recipient&apos;s phone and
              network.
            </p>
            <p>
              To the extent the law allows, Loraf is not liable for indirect, incidental or
              consequential losses, or for loss of profit, data or goodwill. Our total liability for
              any claim is limited to the amount you paid us for the Service in the 12 months before
              the claim arose, or INR 5,000 if you paid nothing.
            </p>
          </section>

          <section>
            <h2>10. Indemnity</h2>
            <p>
              You agree to cover Loraf against claims, losses and costs (including reasonable legal
              fees) that arise from your messages, your clients&apos; data, your breach of these
              Terms, or your breach of any law or Meta policy.
            </p>
          </section>

          <section>
            <h2>11. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of India. We will first try to settle any dispute
              through good-faith discussion. If that fails, the courts at Tiruppur, Tamil Nadu, have
              exclusive jurisdiction.
            </p>
          </section>

          <section>
            <h2>12. Changes and Contact</h2>
            <p>
              We may update these Terms. We will post the new version and change the effective date,
              and notify you by email if the change is significant. Continued use after an update
              means you accept it.
            </p>
            <p>
              <strong>Loraf Intelligence Private Limited</strong>
              <br />
              7, Muthaiah Pillai Layout, Udumalaipettai, Tiruppur 642126, Tamil Nadu, India
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
