import './ServicesPage.css'

const services = [
  {
    title: 'Reparaciones generales',
    text: 'Arreglos rápidos y confiables para puertas, muebles, grifería y pequeños desperfectos eléctricos.',
  },
  {
    title: 'Instalación y mantenimiento',
    text: 'Montaje de accesorios, persianas, espejos y ventiladores, con limpieza al terminar.',
  },
  {
    title: 'Mejoras del hogar',
    text: 'Soluciones prácticas para optimizar espacios, ordenar ambientes y actualizar detalles.',
  },
  {
    title: 'Asistencia personalizada',
    text: 'Diagnóstico atento y presupuesto claro para cada trabajo, sin sorpresas ni demoras.',
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
