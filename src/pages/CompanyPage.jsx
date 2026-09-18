import './CompanyPage.css'

const highlights = [
  'Atendemos reparaciones y mejoras para cada rincón del hogar.',
  'Trabajamos con rapidez, limpieza y resultados duraderos.',
  'Nuestro compromiso es ofrecer tranquilidad y confianza en cada visita.',
]

function CompanyPage() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Nuestra empresa</p>
        <h2>Soluciones de manitas para mantener tu casa en perfecto estado.</h2>
        <p>
          RS - Hogar Soluciones ofrece soluciones para pequeños arreglos domésticos y mejoras del hogar: cambio de cerraduras; instalación de cortinas, estores y rieles; instalación de espejos; cambio de grifería; montaje de muebles y arreglos eléctricos menores.
        </p>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>En lo que creemos</h3>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="info-card accent-card">
          <h3>Nuestro proceso</h3>
          <p>
            Escuchamos tus necesidades, evaluamos el trabajo y realizamos la tarea con cuidado, manteniendo la limpieza y la seguridad como prioridad en cada hogar.
          </p>
        </article>
      </div>
    </section>
  )
}

export default CompanyPage
