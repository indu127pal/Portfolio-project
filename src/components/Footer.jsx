import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span style={{ color: 'var(--accent)' }}>[</span>
          IP
          <span style={{ color: 'var(--accent)' }}>]</span>
        </div>
        <p className="footer-copy">
          Designed & built by <span>Indu Pal</span> · {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/indu127pal" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/indu-pal-888223248/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://medium.com/@indu.pal" target="_blank" rel="noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  )
}
