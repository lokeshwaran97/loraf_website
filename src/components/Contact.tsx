import { contactInfo } from '../data/contact'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section__tag">Contact Us</span>
          <h2 className="section__title">Let's Build Something Intelligent</h2>
          <p>
            Reach out to discuss automation, robotics, AI, or software engineering. Our team is
            ready to help you find the right solution.
          </p>

          <div className="contact__details">
            <Reveal className="contact__item">
              <div className="contact__item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </Reveal>

            <Reveal className="contact__item">
              <div className="contact__item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                {contactInfo.phones.map((phone, index) => (
                  <span key={phone.href}>
                    <a href={phone.href}>{phone.display}</a>
                    {index < contactInfo.phones.length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="contact__item">
              <div className="contact__item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4>Address</h4>
                <address>
                  {contactInfo.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
