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
            Intelligent systems that bring automation, robotics, and computer vision into real
            operations.
          </p>
        </div>

        <div className="products__list">
          {products.map((product) => (
            <Reveal key={product.id} as="article" className="product-feature">
              <div className="product-feature__copy">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="product-feature__list">
                  {product.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {product.videoUrl ? (
                  <a
                    href={product.videoUrl}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </a>
                ) : null}
              </div>
              <div className="product-feature__media">
                {product.videoId ? (
                  <div className="product-feature__video">
                    <iframe
                      src={`https://www.youtube.com/embed/${product.videoId}`}
                      title={product.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : null}
                {product.images?.length ? (
                  <div className="product-feature__gallery">
                    {product.images.map((image) => (
                      <figure key={image.src} className="product-feature__shot">
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
