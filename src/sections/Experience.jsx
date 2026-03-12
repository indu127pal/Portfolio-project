import { useState } from 'react'
import './Experience.css'

const experiences = [
  {
    company: 'SambaNova Systems',
    role: 'Senior Software Engineer',
    period: 'May 2023 — Present',
    type: 'AI / Infrastructure',
    color: '#7c6ff7',
    highlights: [
      'Spearheaded end-to-end development of SambaVerse, an advanced GenAI platform showcasing cutting-edge model capabilities.',
      'Engineered complex UI features with React, Next.js, and Redux Toolkit — optimising performance and delivering an intuitive, dynamic interface.',
      'Achieved 80%+ test coverage using Jest, React Testing Library, and Playwright E2E automation pipelines.',
      'Led migration of CRA to Remix, improving page load times and streamlining code maintainability.',
      'Developed a reusable design system and component library with theming capabilities, used across multiple products.',
      'Built scalable RESTful APIs using Node.js and Python with microservices architecture.',
      'Leveraged Kubernetes and Docker for CI/CD pipelines; integrated real-time performance monitoring.',
    ],
  },
  {
    company: 'Meesho',
    role: 'Software Development Engineer III',
    period: 'May 2022 — Apr 2023',
    type: 'E-Commerce',
    color: '#06d6a0',
    highlights: [
      'Restructured service management UI from React monorepo to micro-frontend architecture, enabling pod-level deployments.',
      'Improved Core Web Vitals (LCP, FID, CLS) — achieved 16.6% bounce rate reduction and 3% order increase.',
      'Mentored junior developers on modular code, testing, version control, and high-level design patterns.',
    ],
  },
  {
    company: 'Ixigo.com',
    role: 'Senior Software Engineer I',
    period: 'Apr 2021 — May 2022',
    type: 'Travel Tech',
    color: '#f97316',
    highlights: [
      'Enhanced booking funnel experience for IRCTC pages — created dynamic Svelte components resulting in 10% reduction in booking cancellations.',
      'Integrated Node.js API for captcha reading and refactored customer support UI tool.',
      'Spearheaded mono-repo re-architecture using Lerna, workspaces, and loadable-components.',
      'Managed a team of 4 developers including code review and technical guidance.',
    ],
  },
  {
    company: 'Jio Platforms (AJIO)',
    role: 'Software Engineer',
    period: 'Jan 2019 — Mar 2021',
    type: 'E-Commerce / Fashion',
    color: '#a78bfa',
    highlights: [
      'Spearheaded complete AJIO website redesign — built comprehensive component library with TypeScript and ReactJS.',
      'Implemented Progressive Web App (PWA) with optimized caching strategy and Firebase performance monitoring.',
      'Managed multiple projects: CMS dashboard, error log rotation dashboard, post-order UI optimization.',
      'Integrated AJIO-Wallet and JIO-to-AJIO silent login for seamless cross-platform transitions.',
    ],
  },
  {
    company: 'First Walk-in Technology',
    role: 'Software Engineer',
    period: 'Aug 2017 — Jan 2019',
    type: 'Mobile / Consumer',
    color: '#06d6a0',
    highlights: [
      "Developed Cafe Coffee Day's mobile app using React Native — enabling customers to order and pay for beverages and food.",
      "Designed and implemented a real-time analytical dashboard in React.js for Cafe Coffee Day's management team to monitor sales, inventory, and customer behaviour.",
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work <span>Experience</span></h2>

        <div className="exp-layout">
          {/* Tab list */}
          <div className="exp-tabs">
            {experiences.map((e, i) => (
              <button
                key={e.company}
                className={`exp-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--tab-color': e.color }}
              >
                <span className="tab-company">{e.company}</span>
                <span className="tab-type">{e.type}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company" style={{ color: exp.color }}>{exp.company}</p>
              </div>
              <div className="exp-period">
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {exp.period}
              </div>
            </div>
            <ul className="exp-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                  <span className="bullet" style={{ background: exp.color }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
