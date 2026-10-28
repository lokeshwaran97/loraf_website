import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SITE_LEGAL_NAME, SITE_NAME } from '../data/nav'

export function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {SITE_NAME}</title>
        <meta
          name="description"
          content="Privacy Policy for Loraf Intelligence Private Limited — how we collect, use, and protect personal data."
        />
      </Helmet>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <p className="legal-page__crumb">
            <Link to="/">Home</Link> / Privacy Policy
          </p>
          <h1>Privacy Policy</h1>
          <p className="legal-page__meta">
            {SITE_LEGAL_NAME} · Effective date: October 28, 2026
          </p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Loraf Intelligence Private Limited (&quot;Loraf&quot;, &quot;we&quot;, &quot;us&quot;) runs an application that
              lets businesses connect their WhatsApp Business account and send WhatsApp messages to
              their own clients. This Privacy Policy explains what personal data we collect, why we
              collect it, how we handle it, and the rights you have over it.
            </p>
            <ul>
              <li>
                <strong>Company:</strong> Loraf Intelligence Private Limited
              </li>
              <li>
                <strong>Registered address:</strong> 7, Muthaiah Pillai Layout, Udumalaipettai,
                Tiruppur 642126, Tamil Nadu, India
              </li>
              <li>
                <strong>Contact:</strong>{' '}
                <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>
              </li>
              <li>
                <strong>Effective date:</strong> October 28, 2026
              </li>
            </ul>
            <p>
              By creating an account or using our application, you agree to this policy. If you do
              not agree, please do not use the application.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We collect only the personal data we need to run the application.</p>
            <ul>
              <li>
                <strong>Account details you give us:</strong> your name, phone number and email
                address.
              </li>
              <li>
                <strong>WhatsApp connection details:</strong> when you connect through WhatsApp
                Embedded Signup, Meta gives us the identifiers and access credentials needed to send
                messages from your WhatsApp Business account.
              </li>
              <li>
                <strong>Your clients&apos; contact details:</strong> names and phone numbers of the
                people you choose to message through the application. We process these on your behalf
                and only to send the messages you request.
              </li>
              <li>
                <strong>Message records:</strong> basic technical records of messages sent through
                the application, such as time sent and delivery status.
              </li>
            </ul>
            <p>
              We do not intentionally collect sensitive personal data such as payment card details,
              government ID numbers, or health information.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data only for the purposes below.</p>
            <ul>
              <li>To store your user information and let you log in to the application.</li>
              <li>
                To send WhatsApp messages to your clients, as you instruct, through your connected
                WhatsApp Business account.
              </li>
              <li>
                To contact you about your account, respond to support requests, and send service
                notices.
              </li>
              <li>To keep the application secure and prevent misuse.</li>
              <li>To meet legal obligations.</li>
            </ul>
            <p>We do not sell your personal data, and we do not use it for advertising.</p>
          </section>

          <section>
            <h2>4. WhatsApp Embedded Signup and Meta</h2>
            <p>
              Our application uses WhatsApp Embedded Signup, a service provided by Meta Platforms.
              When you open our signup link, you log in to WhatsApp on Meta&apos;s own screens. Meta
              handles that login under its own terms and privacy policy, and we never see your
              WhatsApp password.
            </p>
            <p>
              After you connect, we send messages through the WhatsApp Business Platform. Meta
              processes message content and related data to deliver those messages. Please read{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp&apos;s Privacy Policy
              </a>{' '}
              to understand how Meta handles your data.
            </p>
            <p>We receive from Meta only what is needed to operate your connected account.</p>
          </section>

          <section>
            <h2>5. Sharing and Disclosure</h2>
            <p>We share personal data only in these cases.</p>
            <ul>
              <li>
                <strong>Meta Platforms:</strong> to connect your WhatsApp Business account and
                deliver messages.
              </li>
              <li>
                <strong>Service providers:</strong> hosting, storage and email providers that help
                us run the application, bound by confidentiality obligations.
              </li>
              <li>
                <strong>Legal requirements:</strong> where a court, government authority or law
                requires disclosure, or to protect our rights and users&apos; safety.
              </li>
              <li>
                <strong>Business transfer:</strong> if Loraf is merged with or acquired by another
                company, your data may transfer to it, and we will tell you first.
              </li>
            </ul>
            <p>We do not sell or rent personal data to anyone.</p>
          </section>

          <section>
            <h2>6. Data Retention and Deletion</h2>
            <p>
              We keep your personal data while your account is active and for as long as needed to
              provide the service. After you close your account or ask us to delete your data, we
              delete or anonymise it within 30 days, unless the law requires us to keep it longer. To
              request deletion, email{' '}
              <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>. Full details are in our{' '}
              <Link to="/data-retention-policy">Data Retention Policy</Link>.
            </p>
          </section>

          <section>
            <h2>7. Data Security</h2>
            <p>
              We use reasonable security safeguards to protect your personal data, such as encrypted
              connections and access controls limited to authorised staff. No system is completely
              secure, so we cannot guarantee absolute security. If a personal data breach affects
              you, we will notify you and the authorities as the law requires.
            </p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
            <ul>
              <li>
                Ask for a summary of the personal data we hold about you and how we use it.
              </li>
              <li>Ask us to correct, complete or update your data.</li>
              <li>Ask us to erase your data when it is no longer needed.</li>
              <li>
                Withdraw your consent at any time. Withdrawal does not affect processing done before
                it, and we may be unable to provide the service afterwards.
              </li>
              <li>
                Nominate another person to exercise your rights if you die or become unable to do so.
              </li>
              <li>Complain to us about how your data is handled (see Section 11).</li>
            </ul>
            <p>
              Email <a href="mailto:info@lorafintel.com">info@lorafintel.com</a> to use any of these
              rights. We may need to verify your identity first, and we aim to respond within 30
              days.
            </p>
          </section>

          <section>
            <h2>9. Children&apos;s Data</h2>
            <p>
              Our application is for businesses and is not meant for anyone under 18. We do not
              knowingly collect personal data of children. If you believe a child has given us data,
              email <a href="mailto:info@lorafintel.com">info@lorafintel.com</a> and we will delete
              it.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will post the new version
              on our website and change the effective date above. If a change is significant, we will
              also notify you by email. Continued use of the application after an update means you
              accept it.
            </p>
          </section>

          <section>
            <h2>11. Grievance Officer and Contact</h2>
            <p>
              For questions, requests or complaints about your personal data, contact our Grievance
              Officer:
            </p>
            <ul>
              <li>
                <strong>Company:</strong> Loraf Intelligence Private Limited
              </li>
              <li>
                <strong>Address:</strong> 7, Muthaiah Pillai Layout, Udumalaipettai, Tiruppur 642126,
                Tamil Nadu, India
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>
              </li>
            </ul>
            <p>
              We aim to acknowledge complaints promptly and resolve them within 30 days. If you are
              not satisfied with our response, you may approach the Data Protection Board of India
              once it is operational.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
