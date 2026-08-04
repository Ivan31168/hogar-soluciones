import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleInvalid = (event) => {
    const field = event.target
    field.setCustomValidity('')

    if (field.name === 'email' && field.validity.typeMismatch) {
      field.setCustomValidity('Por favor, introduce una dirección de correo válida.')
    } else if (field.value.trim() === '') {
      field.setCustomValidity('Este campo es obligatorio.')
    } else {
      field.setCustomValidity('Por favor, revisa este campo.')
    }
  }

  const handleInput = (event) => {
    event.target.setCustomValidity('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!name || !email || !message) {
      setError('Por favor, completa todos los campos.')
      return
    }

    const subject = encodeURIComponent('Solicitud de servicio - RS Hogar Soluciones')
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nDescripción del servicio:\n${message}`
    )

    setStatus('Abriendo tu cliente de correo...')
    window.location.href = `mailto:hola@rs-hogarsoluciones.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Contacto</p>
        <h2>Contacta con nosotros para tus reparaciones y mejoras en el hogar.</h2>
        <p>
          Cuéntanos qué necesitas y te responderemos con una solución rápida, clara y profesional.
        </p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              name="name"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onInvalid={handleInvalid}
              onInput={handleInput}
              required
            />
          </label>
          <label>
            Correo electrónico
            <input
              name="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onInvalid={handleInvalid}
              onInput={handleInput}
              required
            />
          </label>
          <label>
            Descripción del servicio
            <textarea
              name="message"
              rows="5"
              placeholder="Cuéntanos qué necesitas reparar o mejorar..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onInvalid={handleInvalid}
              onInput={handleInput}
              required
            />
          </label>
          <button type="submit">Enviar consulta</button>
          {status && <p className="form-status success">{status}</p>}
          {error && <p className="form-status error">{error}</p>}
        </form>

        <aside className="contact-card">
          <h3>Escríbenos</h3>
          <p>hola@rs-hogarsoluciones.com</p>
          <p>+34 600 123 456</p>
          <p>Madrid, España</p>
        </aside>
      </div>
    </section>
  )
}

export default ContactPage
