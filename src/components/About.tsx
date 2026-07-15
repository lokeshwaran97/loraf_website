import { aboutStats } from '../data/services'
import { Reveal } from './Reveal'

function StatIcon({ icon }: { icon: (typeof aboutStats)[number]['icon'] }) {
  if (icon === 'automation') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  if (icon === 'robotics') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  }
  if (icon === 'ai') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  )
}

export function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__text">
          <span className="section__tag">About Us</span>
          <h2 className="section__title">Automation, Robotics, AI &amp; Software</h2>
          <p>
            At Loraf Intelligence Private Ltd, we build practical systems across automation,
            robotics, artificial intelligence, and software engineering—tailored to how your
            operations actually run.
          </p>
          <p>
            From robotic platforms and ML pipelines to custom applications and integrations, we help
            organizations design and ship intelligent technology that improves efficiency and
            decision-making.
          </p>
        </div>
        <div className="about__stats">
          {aboutStats.map((stat) => (
            <Reveal key={stat.title} className="stat-card">
              <div className="stat-card__icon">
                <StatIcon icon={stat.icon} />
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
