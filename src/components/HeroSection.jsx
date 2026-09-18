import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Profesionalidad • rapidez • precio cerrado</p>
        <h2>Manitas a domicilio en la provincia de Almería.</h2>
        <p className="hero-text">
          ¿Necesitas arreglar una persiana, una lámpara o un grifo de tu hogar? Contáctame y lo soluciono
        </p>
        <div className="hero-actions">
          <a href="#featured" className="btn btn-primary">
            Ver servicios
          </a>
          <Link to="/contact" className="btn btn-secondary">
            Contactar
          </Link>
        </div>
      </div>
      <div className="hero-card">
        <h3>Lo que encontrarás</h3>
        <ul>
          <li>Soluciones para tu hogar.</li>
          <li>Profesionalidad y limpieza.</li>
          <li>Presupuesto sin sorpresas.</li>
          <li>Citas rápidas</li>
        </ul>
      </div>
    </section>
  )
}

export default HeroSection
