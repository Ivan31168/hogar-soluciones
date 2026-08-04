import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/company', label: 'Empresa' },
  { to: '/services', label: 'Servicios' },
  { to: '/contact', label: 'Contacto' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="brand-block">
        <img className="brand-icon" src="/img/logo-short.png" alt="RS - Hogar Soluciones" />
        <div>
          <h1>RS - Hogar Soluciones</h1>
          <p>Calidad y confianza para tu hogar</p>
        </div>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Menú de navegación"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end={link.to === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
