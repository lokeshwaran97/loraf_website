export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Automation · Robotics · AI · Software</p>
        <h1 className="hero__title">
          Intelligent Solutions for a <span>Smarter Tomorrow</span>
        </h1>
        <p className="hero__subtitle">
          Loraf Intelligence Private Ltd designs and delivers automation, robotics, AI, and software
          engineering solutions that streamline operations and drive innovation across industries.
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--primary">
            Explore Services
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero__grid" aria-hidden="true">
        <div className="hero__grid-line" />
        <div className="hero__grid-line" />
        <div className="hero__grid-line" />
        <div className="hero__grid-line" />
      </div>
    </section>
  )
}
