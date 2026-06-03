import './About.css'

const highlights = [
  { icon: '🚀', label: 'GenAI Platform', desc: 'Built SambaVerse at SambaNova' },
  { icon: '📦', label: 'Micro-Frontend', desc: 'Led architecture at Meesho' },
  { icon: '🛍️', label: 'E-Commerce', desc: 'AJIO, Meesho, Cafe Coffee Day' },
  { icon: '⚙️', label: 'DevOps', desc: 'Kubernetes, Docker, CI/CD' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <div className="about-left">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="about-text">
            <p>
              I am a passionate Senior Software Engineer with <strong>8+ years</strong> of hands-on experience
              building full-stack web products. I have worked across the stack — from pixel-perfect React interfaces
              to scalable Node.js/Python APIs and cloud-native deployments.
            </p>
            <p>
              Currently at <strong>SambaNova Systems</strong>, I am building the SambaCloud GenAI platform
              — leading full-stack development, test automation, design systems, and the migration from
              CRA to Remix. Before that, I drove major performance wins at <strong>Meesho</strong> and
              helped rebuild <strong>AJIO's</strong> fashion storefront from the ground up.
            </p>
            <p>
              I care deeply about <strong>code quality, accessibility</strong>, and mentoring teams to build
              better. When I am not shipping features, I am writing on Medium and deepening my expertise
              in Go, Kubernetes, and AI-powered products.
            </p>
          </div>

          <div className="about-courses">
            <p className="section-label" style={{ marginTop: '1.5rem' }}>Certifications</p>
            {[
              'Advanced React For Enterprise: React for senior engineers',
              'Working with Microservices in Go (Golang)',
              'The Ultimate Redux Course 2024',
              'Docker and Kubernetes: The Practical Guide [2025]',
              'Playwright: Web Automation Testing From Zero to Hero',
            ].map(c => (
              <div key={c} className="course-item">
                <span className="course-dot" />
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-grid">
            {highlights.map(h => (
              <div key={h.label} className="about-card">
                <span className="about-card-icon">{h.icon}</span>
                <p className="about-card-label">{h.label}</p>
                <p className="about-card-desc">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-quote">
            <span className="quote-mark">&#8220;</span>
            A strong team player with excellent communication skills, committed to collaborating
            with cross-functional teams and delivering exceptional results.
            <span className="quote-mark">&#8221;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
