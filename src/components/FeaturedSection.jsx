import './FeaturedSection.css'

const items = [
  {
    title: 'Ambientes con estilo',
    text: 'Cortinas y persianas que aportan textura, luz y elegancia.',
    image: '/img/cortinas.png',
  },
  {
    title: 'Detalles funcionales',
    text: 'Grifería y cerraduras que combinan seguridad con diseño premium.',
    image: '/img/griferia.png',
  },
  {
    title: 'Soluciones de organización',
    text: 'Muebles pensados para ordenar y realzar cada espacio.',
    image: '/img/mueble.png',
  },
  {
    title: 'Confort diario',
    text: 'Ventiladores y espejos que mejoran la comodidad y la estética.',
    image: '/img/ventilador_techo.png',
  },
]

function FeaturedSection() {
  return (
    <section className="featured-section" id="featured">
      {/* Header removed per request; the grid below lists services */}
      <div className="featured-grid">
        {items.map((item) => (
          <article key={item.title} className="featured-card">
            <img src={item.image} alt={item.title} />
            <div className="featured-card-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedSection
