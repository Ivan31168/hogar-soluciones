import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Estilo • Funcionalidad • Diseño</p>
        <h2>Soluciones para transformar cada espacio con piezas que marcan la diferencia.</h2>
        <p className="hero-text">
          Descubre una selección de productos pensados para dar personalidad, confort y orden a cocinas, baños, dormitorios y áreas comunes.
        </p>
        <div className="hero-actions">
          <a href="#featured" className="btn btn-primary">
            Ver productos destacados
          </a>
          <a href="/contact" className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </div>
      <div className="hero-card">
        <h3>Lo que encontrarás</h3>
        <ul>
          <li>Detalles modernos para interiores completos</li>
          <li>Opciones funcionales para cada ambiente</li>
          <li>Estética cuidada y acabados de alto impacto</li>
        </ul>
      </div>
    </section>
  )
}

export default HeroSection
