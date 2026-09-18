import './WelcomeSection.css'

const cards = [
  {
    title: 'Cambio de cerraduras',
    text: 'Protege tu vivienda con nuevas cerraduras.',
    image: '/img/cerradura.png',
  },
  {
    title: 'Cortinas, estores y rieles',
    text: 'Da a tu ventana una imagen diferente. Instalación de cortinas, estores y rieles para tener intimidad y estilo.',
    image: '/img/cortinas.png',
  },
  {
    title: 'Instalación de espejos',
    text: 'Dale a tu baño o tu dormitorio un nuevo estilo.',
    image: '/img/espejo_baño.png',
  },
  {
    title: 'Cambio de grifería',
    text: 'Instalación de nueva grifería y mejora el aspecto de tu vivienda.',
    image: '/img/griferia.png',
  },
  {
    title: 'Montaje de muebles',
    text: 'Armado limpio y rápido para muebles nuevos o de segunda mano.',
    image: '/img/mueble.png',
  },
  {
    title: 'Arreglos de enchufes',
    text: 'Solucionamos tomas y enchufes estropeados con seguridad.',
    image: '/img/persiana.png',
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
