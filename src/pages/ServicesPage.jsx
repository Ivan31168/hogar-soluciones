import './ServicesPage.css'

const services = [
  {
    title: 'Cambio de cerraduras',
    text: 'Protege tu vivienda con nuevas cerraduras.',
  },
  {
    title: 'Cortinas, estores y rieles',
    text: 'Da a tu ventana una imagen diferente. Instalación de cortinas, estores y rieles para tener intimidad y estilo.',
  },
  {
    title: 'Instalación de espejos',
    text: 'Dale a tu baño o tu dormitorio un nuevo estilo.',
  },
  {
    title: 'Cambio de grifería',
    text: 'Instalación de nueva grifería y dale a tu vivienda un aspecto modernizado.',
  },
]

function ServicesPage() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Servicios</p>
        <h2>Todo lo que necesitas para mantener tu hogar en perfecto estado.</h2>
        <p>
          RS - Hogar Soluciones ofrece servicios de manitas con atención, rapidez y confianza en cada intervención.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
