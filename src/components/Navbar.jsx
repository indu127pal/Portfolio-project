import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        IP<span className="accent-dot">.</span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}><button onClick={() => go(l)}>{l}</button></li>
        ))}
      </ul>
      <a href="mailto:ipal127@gmail.com" className="nav-cta">Hire Me ↗</a>
      <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span/><span/><span/>
      </button>
    </nav>
  )
}
