import './WelcomeSection.css'

const cards = [
  {
    title: 'Cerradura',
    text: 'Soluciones funcionales y seguras para puertas con estilo moderno.',
    image: '/img/cerradura.png',
  },
  {
    title: 'Cortinas',
    text: 'Opciones elegantes para dar calidez y personalidad a cada ambiente.',
    image: '/img/cortinas.png',
  },
  {
    title: 'Espejo de baño',
    text: 'Diseños prácticos y sofisticados que potencian los espacios.',
    image: '/img/espejo_baño.png',
  },
  {
    title: 'Grifería',
    text: 'Detalle premium para cocinas y baños con acabados de alto impacto.',
    image: '/img/griferia.png',
  },
  {
    title: 'Mueble',
    text: 'Propuestas de organización y diseño para interiores contemporáneos.',
    image: '/img/mueble.png',
  },
  {
    title: 'Persiana',
    text: 'Control de luz y privacidad con un acabado limpio y funcional.',
    image: '/img/persiana.png',
  },
  {
    title: 'Ventilador de techo',
    text: 'Comodidad y diseño para espacios que necesitan frescura y estilo.',
    image: '/img/ventilador_techo.png',
  },
]

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="section-heading">
        <p className="eyebrow">Welcome</p>
        <h2>Productos destacados para crear espacios más completos y acogedores.</h2>
      </div>
      <div className="welcome-grid">
        {cards.map((card) => (
          <article key={card.title} className="welcome-card">
            <img src={card.image} alt={card.title} />
            <div className="welcome-card-body">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WelcomeSection
