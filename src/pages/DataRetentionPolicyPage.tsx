import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SITE_LEGAL_NAME, SITE_NAME } from '../data/nav'

export function DataRetentionPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Data Retention Policy | {SITE_NAME}</title>
        <meta
          name="description"
          content="Data Retention Policy for Loraf Intelligence Private Limited — how long we keep personal data and how deletion works."
        />
      </Helmet>
      <Header />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <p className="legal-page__crumb">
            <Link to="/">Home</Link> / Data Retention Policy
          </p>
          <h1>Data Retention Policy</h1>
          <p className="legal-page__meta">
            {SITE_LEGAL_NAME} · Effective date: October 28, 2026
          </p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              This Data Retention Policy explains how long Loraf Intelligence Private Limited
              (&quot;Loraf&quot;, &quot;we&quot;, &quot;us&quot;) keeps personal data processed through our
              application, and how we delete or anonymise it when it is no longer needed. It should be
              read together with our <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
              <Link to="/terms-of-service">Terms of Service</Link>.
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
          </section>

          <section>
            <h2>2. Purpose of Retention</h2>
            <p>We retain personal data only for as long as reasonably necessary to:</p>
            <ul>
              <li>Provide and operate the application and related services.</li>
              <li>Maintain your account and respond to support requests.</li>
              <li>Send WhatsApp messages as you instruct through your connected account.</li>
              <li>Keep the service secure and prevent misuse.</li>
              <li>Meet legal, regulatory, or contractual obligations.</li>
            </ul>
            <p>
              We do not keep personal data longer than needed for these purposes, except where the law
              requires a longer period.
            </p>
          </section>

          <section>
            <h2>3. Retention Periods</h2>
            <p>
              The table below summarises typical retention periods. Exact timing may vary where a
              longer period is required by law or ongoing dispute.
            </p>
            <div className="pharm-table-wrap legal-page__table-wrap">
              <table className="legal-page__table">
                <thead>
                  <tr>
                    <th>Data category</th>
                    <th>Examples</th>
                    <th>Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Account details</td>
                    <td>Name, phone number, email</td>
                    <td>While your account is active; then deleted or anonymised within 30 days of closure or deletion request</td>
                  </tr>
                  <tr>
                    <td>WhatsApp connection details</td>
                    <td>Business account identifiers and access credentials from Meta</td>
                    <td>While your WhatsApp Business account remains connected; removed when you disconnect or close your account (within 30 days)</td>
                  </tr>
                  <tr>
                    <td>Clients&apos; contact details</td>
                    <td>Names and phone numbers you upload to message clients</td>
                    <td>While needed to send messages you request and while your account is active; deleted or anonymised within 30 days of account closure or deletion request</td>
                  </tr>
                  <tr>
                    <td>Message records</td>
                    <td>Time sent, delivery status, and related technical logs</td>
                    <td>While your account is active for operational and support purposes; deleted or anonymised within 30 days after account closure, unless a longer period is required by law</td>
                  </tr>
                  <tr>
                    <td>Support and correspondence</td>
                    <td>Emails and support tickets</td>
                    <td>As long as needed to resolve the request, then up to a reasonable period for records; deleted or anonymised when no longer required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>4. Account Closure and Deletion Requests</h2>
            <p>
              After you close your account or ask us to delete your personal data, we delete or
              anonymise it within <strong>30 days</strong>, unless we must keep it longer to comply
              with law, resolve disputes, or enforce our agreements.
            </p>
            <p>
              To request deletion, email{' '}
              <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>. We may need to verify
              your identity before acting on the request. We aim to acknowledge and complete
              deletion requests within 30 days.
            </p>
          </section>

          <section>
            <h2>5. Anonymisation and Backups</h2>
            <p>
              Where full deletion is not immediately practical (for example, in encrypted backups),
              we may anonymise data so it can no longer reasonably identify you. Backup copies are
              overwritten or purged on a rolling schedule and are not used for active processing
              once deletion has been requested.
            </p>
          </section>

          <section>
            <h2>6. Meta and Third-Party Retention</h2>
            <p>
              Message delivery through WhatsApp depends on Meta Platforms. Meta may retain message
              content and related data under its own policies. Please review{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp&apos;s Privacy Policy
              </a>{' '}
              for how Meta handles retention. This policy covers only data held by Loraf.
            </p>
          </section>

          <section>
            <h2>7. Legal Holds</h2>
            <p>
              If we receive a lawful request, court order, or need to preserve data for an
              investigation or legal claim, we may retain relevant information beyond the periods
              above until the matter is resolved.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Data Retention Policy from time to time. When we do, we will post
              the new version on our website and update the effective date. If a change is
              significant, we will also notify you by email where appropriate. Continued use of the
              application after an update means you accept the revised policy.
            </p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>
              For questions about retention or to request deletion of your personal data, contact:
            </p>
            <p>
              <strong>Loraf Intelligence Private Limited</strong>
              <br />
              7, Muthaiah Pillai Layout, Udumalaipettai, Tiruppur 642126, Tamil Nadu, India
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:info@lorafintel.com">info@lorafintel.com</a>
            </p>
            <p>
              Related documents:{' '}
              <Link to="/privacy-policy">Privacy Policy</Link> ·{' '}
              <Link to="/terms-of-service">Terms of Service</Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
