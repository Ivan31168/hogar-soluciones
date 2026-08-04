export async function sendContactEmail({ name, email, message }) {
  const endpoint = import.meta.env.VITE_EMAIL_API_URL
  const recipient = import.meta.env.VITE_EMAIL_TO || 'hola@rs-hogarsoluciones.com'
  const subject = import.meta.env.VITE_EMAIL_SUBJECT || 'Solicitud de servicio - RS Hogar Soluciones'

  if (!endpoint) {
    throw new Error('VITE_EMAIL_API_URL no está configurado. Añade la URL de tu backend de correo en .env.')
  }

  const payload = {
    to: recipient,
    subject,
    name,
    email,
    message,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'No se pudo enviar el formulario de contacto.')
  }

  return response.json()
}
