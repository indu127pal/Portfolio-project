import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'SambaVerse GenAI Platform',
    category: 'AI / Professional',
    categoryColor: '#7c6ff7',
    desc: 'The flagship AI platform at SambaNova Systems showcasing large-language model capabilities. A sophisticated full-stack application with streaming inference, model benchmarks, prompt playground, and enterprise access controls.',
    stack: ['React', 'Next.js', 'Remix', 'Redux Toolkit', 'Python', 'Kubernetes', 'Docker'],
    highlights: ['Streaming token output with real-time UI updates', 'Migration from CRA → Remix (50% faster page loads)', '80%+ test coverage with Jest + Playwright E2E', 'Reusable theming design system used across 3 products'],
    github: 'https://github.com/indu127pal',
    demo: 'https://cloud.sambanova.ai/dashboard',
    icon: '🤖',
    featured: true,
  },
  {
    title: 'PayFlow Dashboard',
    category: 'Fintech',
    categoryColor: '#06d6a0',
    desc: 'A real-time financial analytics dashboard for payment processing companies. Features transaction monitoring, fraud detection alerts, revenue breakdowns, and multi-currency ledger views. Built with live WebSocket data streams and sub-100ms update latency.',
    stack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Chart.js', 'PostgreSQL'],
    highlights: ['Live transaction feed with fraud score visualisation', 'Multi-currency P&L reports with CSV export', 'Role-based access (admin, analyst, auditor)', 'Dark-mode first, WCAG AA accessible'],
    github: 'https://github.com/indu127pal/PayFlow',
    demo: 'https://pay-flow-drab.vercel.app/',
    icon: '💳',
  },
  {
    title: 'CryptoLens Portfolio Tracker',
    category: 'Fintech',
    categoryColor: '#06d6a0',
    desc: 'A crypto & DeFi portfolio tracker with real-time price feeds via CoinGecko API. Displays asset allocation, profit/loss heatmaps, historical performance charts, and supports wallet-address tracking across EVM chains.',
    stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Recharts', 'Tailwind'],
    highlights: ['Real-time price streaming with 30s cache invalidation', 'Interactive candlestick charts with custom zoom', 'Wallet integration via MetaMask', 'PWA with offline capability'],
    github: 'https://github.com/indu127pal',
    demo: '#',
    icon: '₿',
  },
  {
    title: 'LoanIQ — Credit Risk Engine',
    category: 'Fintech',
    categoryColor: '#06d6a0',
    desc: 'A loan origination platform frontend for NBFCs. Applicants fill a multi-step smart form; the system calls an ML risk-scoring API and returns an instant credit decision. Includes an admin portal for underwriters with detailed applicant profiles.',
    stack: ['React', 'React Hook Form', 'Node.js', 'Express', 'Python FastAPI', 'Docker'],
    highlights: ['Multi-step form with real-time field validation', 'ML-powered credit score widget (instant decisioning)', 'Underwriter admin portal with queue management', 'PDF report generation (loan sanction letters)'],
    github: 'https://github.com/indu127pal',
    demo: '#',
    icon: '🏦',
  },
  {
    title: 'ShopNest — Micro-Frontend Store',
    category: 'E-Commerce',
    categoryColor: '#f97316',
    desc: 'A production-grade e-commerce storefront built as a micro-frontend mono-repo. Each domain (catalog, cart, checkout, account) is an independently deployable module. Implements dynamic imports, shared design system, and a unified auth layer.',
    stack: ['React', 'Next.js', 'Module Federation', 'Redux RTK', 'Node.js', 'Kubernetes'],
    highlights: ['Micro-frontend architecture with Webpack Module Federation', 'Core Web Vitals: LCP < 1.8s, CLS < 0.05', 'Cart persistence across sessions (Redis-backed)', 'A/B testing hooks built into checkout flow'],
    github: 'https://github.com/indu127pal',
    demo: '#',
    icon: '🛒',
  },
  {
    title: 'StyleAI — Fashion Recommender',
    category: 'E-Commerce',
    categoryColor: '#f97316',
    desc: 'An AI-powered fashion discovery app where users upload outfit photos or describe their style, and Claude (Anthropic API) generates personalised product recommendations. Integrates a mock product catalogue with semantic search.',
    stack: ['React', 'TypeScript', 'Anthropic API', 'Python', 'Vector DB', 'FastAPI'],
    highlights: ['GenAI outfit description → product match flow', 'Semantic search over 10K SKUs with pgvector', 'Wishlist & comparison drawer with state persistence', 'Shareable lookbook generation'],
    github: 'https://github.com/indu127pal',
    demo: '#',
    icon: '👗',
  },
]

const filters = ['All', 'Fintech', 'E-Commerce', 'AI / Professional']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="projects-sub">
          A mix of professional work and showcase projects demonstrating expertise across
          fintech, e-commerce, and AI product domains.
        </p>

        <div className="filter-bar">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''} ${expanded === i ? 'expanded' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {project.featured && (
                <span className="featured-badge">⭐ Featured</span>
              )}
              <div className="project-top">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>

              <span className="project-category" style={{ color: project.categoryColor, borderColor: project.categoryColor + '44', background: project.categoryColor + '11' }}>
                {project.category}
              </span>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              {expanded === i && (
                <ul className="project-highlights">
                  {project.highlights.map((h, j) => (
                    <li key={j}>
                      <span style={{ color: project.categoryColor }}>→</span> {h}
                    </li>
                  ))}
                </ul>
              )}

              <button
                className="expand-btn"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? '↑ Less' : '↓ Details'}
              </button>

              <div className="project-stack">
                {project.stack.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
