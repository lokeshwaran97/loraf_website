import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { Reveal } from './Reveal'

export function Products() {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">What We Build</span>
          <h2 className="section__title">Our Products</h2>
          <p className="section__desc">
            Intelligent products designed to solve real problems in healthcare and industry.
          </p>
        </div>
        <div className="products__grid">
          {products.map((product) => (
            <Reveal key={product.slug} as="article" className="product-card">
              <h3>
                <Link to={product.href} className="product-card__title-link">
                  {product.title}
                </Link>
              </h3>
              <p>{product.description}</p>
              <ul className="product-card__list">
                {product.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={product.href} className="btn btn--primary product-card__cta">
                {product.ctaLabel}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
