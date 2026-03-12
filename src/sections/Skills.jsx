import { useState } from 'react'
import './Skills.css'

const skillData = [
  { cat: 'Languages', icon: '{ }', color: '#00e5a0', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go (Golang)'] },
  { cat: 'Frameworks', icon: '⚛', color: '#7c5cff', items: ['React.js', 'Next.js', 'Remix', 'React Native', 'Vue.js', 'Angular', 'Svelte'] },
  { cat: 'State & Data', icon: '⚡', color: '#ff6b6b', items: ['Redux Toolkit', 'GraphQL', 'REST APIs', 'WebSockets', 'React Query'] },
  { cat: 'Backend', icon: '⬡', color: '#ffd166', items: ['Node.js (Express)', 'FastAPI (Python)', 'Micro-services', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { cat: 'Testing', icon: '✓', color: '#06d6a0', items: ['Jest', 'React Testing Library', 'Playwright', 'Cypress'] },
  { cat: 'DevOps & Cloud', icon: '☁', color: '#c77dff', items: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'GitLab CI', 'Firebase'] },
  { cat: 'Tools & DX', icon: '⚙', color: '#f4a261', items: ['Webpack', 'Vite', 'Storybook', 'ESLint', 'Prettier', 'Babel', 'Postman'] },
  { cat: 'Design Systems', icon: '◈', color: '#48cae4', items: ['MUI', 'Tailwind CSS', 'CSS Modules', 'Styled Components', 'Theming APIs'] },
]

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-label">04 / Skills</div>
        <h2 className="section-title">Technology <em>Stack</em></h2>
        <p className="skills-sub">8 years of building — here's what's in the toolkit.</p>
        <div className="skills-grid">
          {skillData.map((s) => (
            <div
              key={s.cat}
              className={`skill-card ${hovered === s.cat ? 'hovered' : ''}`}
              style={{ '--card-color': s.color }}
              onMouseEnter={() => setHovered(s.cat)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="skill-icon" style={{ color: s.color }}>{s.icon}</div>
              <div className="skill-cat">{s.cat}</div>
              <div className="skill-tags">
                {s.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
