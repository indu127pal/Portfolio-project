import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-label">05 / Contact</div>
        <div className="contact-inner">
          <h2 className="contact-heading">Let's build something<br/><em>remarkable</em> together.</h2>
          <p className="contact-sub">
            Open to senior/staff frontend & full-stack roles, consulting projects, and interesting collaborations.
            Drop a message — I respond within 24 hours.
          </p>
          <div className="contact-cards">
            <a href="mailto:ipal127@gmail.com" className="contact-card primary">
              <span className="cc-icon">✉</span>
              <span className="cc-label">Email</span>
              <span className="cc-val">ipal127@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/indu-pal-888223248/" target="_blank" rel="noreferrer" className="contact-card">
              <span className="cc-icon">in</span>
              <span className="cc-label">LinkedIn</span>
              <span className="cc-val">indu-pal-888223248</span>
            </a>
            <a href="https://github.com/indu127pal" target="_blank" rel="noreferrer" className="contact-card">
              <span className="cc-icon">⌥</span>
              <span className="cc-label">GitHub</span>
              <span className="cc-val">indu127pal</span>
            </a>
            <a href="https://medium.com/@indu.pal" target="_blank" rel="noreferrer" className="contact-card">
              <span className="cc-icon">M</span>
              <span className="cc-label">Medium</span>
              <span className="cc-val">@indu.pal</span>
            </a>
          </div>
          <div className="contact-cta">
            <a href="mailto:ipal127@gmail.com" className="btn-primary big-cta">
              Say Hello ↗
            </a>
            <span className="contact-phone">📞 +91 8604850015</span>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <span>© 2025 Indu Pal · Built with React + Vite</span>
          <span className="footer-right">Designed & Developed by Indu Pal</span>
        </div>
      </footer>
    </section>
  )
}
