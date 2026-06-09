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
            <p className="cert-label" style={{ margin: '2rem 0' }}>Licenses & certifications</p>
            {[
              { title: 'Generative AI 2025 Executive Briefing: LLMs for Leaders', provider: 'Udemy', providerIcon: '🎓', issued: 'Issued Jun 2026', credentialId: 'UC-5c90c4c1-57e5-4c9b-980f-77a4d7eee0f1' },
              { title: 'AI Agents & Workflows - The Practical Guide', provider: 'Udemy', providerIcon: '🎓', issued: 'Issued Jun 2026', credentialId: 'UC-f295c15c-4785-4df4-af05-2b640c567abc' },
              { title: 'Advanced React For Enterprise: React for senior engineers', provider: 'Coursera', providerIcon: '🎓', issued: 'Issued Jun 2025', credentialId: 'UC-13000c38-aa13-45b2-9688-faaa233fb472' },
              { title: 'React Native - The Practical Guide [2025]', provider: 'Udemy', providerIcon: '🎓', issued: 'Issued Nov 2025', credentialId: 'UC-f42b0360-15b1-4cb9-b1f6-a006ab3d00a8' },
              { title: 'TypeScript for Professionals', provider: 'Udemy', providerIcon: '🎓', issued: 'Issued Feb 2025', credentialId: 'UC-9e02dd0c-7cd1-4bd2-b058-1c69e30ac68f/' },
              { title: 'Playwright: Web Automation Testing From Zero to Hero', provider: 'FrontendMasters', providerIcon: '🎓', issued: 'Issued Jun 2025', credentialId: 'UC-f9301a51-148e-4812-b166-98b96b847ea8' },
              { title: 'Udemy Labs - Online Kubernetes Lab for Beginners - Hands On', provider: 'Udemy', providerIcon: '🎓', issued: 'Issued Feb 2024', credentialId: '2DECCBF7C697-2DECD1CF9BCC-2DECC5C4B649' },
              { title: 'Powerful speaking', provider: 'Udemy', providerIcon: '🎓', issued: 'Issued Feb 2026', credentialId: 'UC-7616ee49-33c4-4be8-bb57-683316abe29f' },
            ].map(c => (
              <div key={c.title} className="course-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {c.providerIcon && <span style={{ fontSize: '1.1rem' }}>{c.providerIcon}</span>}
                    <strong>{c.title}</strong>
                  </div>
                  {c.issued && <div style={{ fontSize: '0.85rem', color: '#6b7280', marginLeft: '2rem' }}>{c.issued}</div>}
                </div>
                {c.credentialId && (
                  <a
                    className="credential-btn"
                    href={`https://www.udemy.com/certificate/${c.credentialId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show credential ↗️
                  </a>
                )}
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
