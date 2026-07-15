import { services } from '../data/services'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">What We Do</span>
          <h2 className="section__title">Our Services</h2>
          <p className="section__desc">
            End-to-end solutions across automation, robotics, AI, and software engineering—built to
            solve real operational challenges.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <Reveal key={service.number} as="article" className="service-card">
              <div className="service-card__number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
