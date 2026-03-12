export const personal = {
  name: "Indu Pal",
  title: "Senior Software Engineer",
  tagline: "8+ years crafting full-stack products at scale",
  email: "ipal127@gmail.com",
  phone: "+91-8604850015",
  linkedin: "https://www.linkedin.com/in/indu-pal-888223248/",
  github: "https://github.com/indu127pal",
  medium: "https://medium.com/@indu.pal",
  summary:
    "Passionate Senior Software Engineer with 8+ years of hands-on experience in full-stack development. Expert in React, React-Native, Node.js, TypeScript, Next.js and Python. Led multiple transformative projects across AI/ML, e-commerce, and consumer platforms. Strong team player committed to delivering high-quality, scalable solutions.",
};

export const experience = [
  {
    company: "SambaNova Systems",
    role: "Senior Software Engineer",
    period: "May 2023 — Present",
    tag: "AI/ML",
    color: "#00e5a0",
    highlights: [
      "Spearheaded end-to-end development of SambaVerse, an advanced GenAI platform",
      "Engineered complex UIs with React, Next.js, and Redux Toolkit — 80%+ test coverage",
      "Led CRA → Remix migration, reducing page load times significantly",
      "Built reusable design system with theming across multiple AI products",
      "Designed scalable RESTful APIs using Node.js and Python (micro-services)",
      "Deployed containerized apps via Kubernetes & Docker with CI/CD pipelines",
    ],
  },
  {
    company: "Meesho",
    role: "Software Development Engineer III",
    period: "May 2022 — Apr 2023",
    tag: "E-Commerce",
    color: "#ff6b6b",
    highlights: [
      "Migrated React monorepo to micro-frontend architecture with separate deployments",
      "Improved Core Web Vitals — 16.6% bounce rate reduction & 3% order increase",
      "Mentored junior developers on modular code, testing, and design best practices",
    ],
  },
  {
    company: "Ixigo.com",
    role: "Senior Software Engineer I",
    period: "Apr 2021 — May 2022",
    tag: "Travel-Tech",
    color: "#7c5cff",
    highlights: [
      "Enhanced trains booking funnel — 10% reduction in booking cancellations",
      "Integrated Node.js API for captcha reading in customer support tool",
      "Re-architected mono-repo using Lerna, workspaces, and loadable-components",
      "Managed a team of 4 developers with code review and technical guidance",
    ],
  },
  {
    company: "Jio Platforms (Ajio)",
    role: "Software Engineer",
    period: "Jan 2019 — Mar 2021",
    tag: "E-Commerce",
    color: "#ffd166",
    highlights: [
      "Spearheaded AJIO website redesign with TypeScript + ReactJS component library",
      "Implemented PWA with optimized caching and Firebase performance monitoring",
      "Integrated AJIO-Wallet and JIO-to-AJIO silent login features",
      "Managed CMS dashboard and error log rotation integration dashboard",
    ],
  },
  {
    company: "First Walk-In Technology",
    role: "Software Engineer",
    period: "Aug 2017 — Jan 2019",
    tag: "Mobile",
    color: "#06d6a0",
    highlights: [
      "Developed Cafe Coffee Day's mobile app using React Native",
      "Built analytical dashboard with React.js for real-time sales & inventory monitoring",
    ],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "Go (Golang)"],
  "Frameworks & Libraries": ["React.js", "React Native", "Angular", "Vue.js", "Redux", "MUI", "Next.js", "Remix", "Svelte"],
  Backend: ["Node.js (Express)", "RESTful APIs", "GraphQL", "Micro-services"],
  Testing: ["Jest", "Cypress", "React Testing Library", "Playwright"],
  "DevOps & Cloud": ["Git", "GitHub", "GitLab CI/CD", "Docker", "Kubernetes"],
  Tools: ["Webpack", "Babel", "ESLint", "Storybook", "Postman", "Chrome DevTools"],
};

export const projects = [
  {
    title: "PayFlow Dashboard",
    category: "Fintech",
    tag: "💳 Fintech",
    tagColor: "#00e5a0",
    description:
      "A real-time financial analytics dashboard for tracking transactions, spending patterns, and portfolio performance. Features interactive charts, anomaly detection alerts, and multi-currency support.",
    tech: ["React", "TypeScript", "Node.js", "Redux Toolkit", "WebSockets", "Recharts", "PostgreSQL"],
    features: [
      "Real-time transaction streaming via WebSockets",
      "Spending heatmaps and category breakdowns",
      "AI-powered fraud anomaly alerts",
      "Multi-currency wallet with live FX rates",
      "Export to CSV/PDF with custom date ranges",
    ],
    github: "https://github.com/indu127pal",
    live: "#",
    color: "#00e5a0",
    icon: "💳",
  },
  {
    title: "SmartCart — E-Commerce Platform",
    category: "E-Commerce",
    tag: "🛒 E-Commerce",
    tagColor: "#ff6b6b",
    description:
      "A full-stack e-commerce platform with micro-frontend architecture. Includes product catalogue, smart search, cart, wishlist, and a seller dashboard. Optimized for Core Web Vitals.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Redis", "Elasticsearch", "Stripe"],
    features: [
      "Micro-frontend architecture with Module Federation",
      "Elasticsearch-powered instant product search",
      "Stripe payment integration with webhooks",
      "Server-side rendering for SEO and Core Web Vitals",
      "Seller dashboard with inventory management",
    ],
    github: "https://github.com/indu127pal",
    live: "#",
    color: "#ff6b6b",
    icon: "🛒",
  },
  {
    title: "LendEase — Loan Management System",
    category: "Fintech",
    tag: "💰 Fintech",
    tagColor: "#7c5cff",
    description:
      "A B2B loan origination and management platform for NBFCs. Streamlines KYC, credit scoring, EMI scheduling, and repayment tracking with role-based access control.",
    tech: ["React", "TypeScript", "Python (FastAPI)", "PostgreSQL", "Docker", "Kubernetes", "Jest"],
    features: [
      "Automated KYC with Aadhaar & PAN verification APIs",
      "Credit score integration (CIBIL/Experian)",
      "EMI schedule generator with prepayment logic",
      "Role-based access: Admin, Loan Officer, Customer",
      "Dockerized micro-services on Kubernetes",
    ],
    github: "https://github.com/indu127pal",
    live: "#",
    color: "#7c5cff",
    icon: "💰",
  },
  {
    title: "OrderTrack — Post-Order Experience",
    category: "E-Commerce",
    tag: "📦 E-Commerce",
    tagColor: "#ffd166",
    description:
      "Inspired by Ajio work — a post-order tracking and returns management PWA. Features real-time shipment tracking, one-click returns/refunds, and a chatbot for order support.",
    tech: ["React", "PWA", "Node.js", "GraphQL", "Firebase", "Playwright (E2E)", "React Native"],
    features: [
      "Progressive Web App with offline support",
      "Real-time shipment tracking with push notifications",
      "One-click returns with smart refund eligibility check",
      "GraphQL API for flexible order data queries",
      "Cross-platform: web + React Native mobile",
    ],
    github: "https://github.com/indu127pal",
    live: "#",
    color: "#ffd166",
    icon: "📦",
  },
  {
    title: "CryptoLens — Portfolio Tracker",
    category: "Fintech",
    tag: "📈 Fintech",
    tagColor: "#06d6a0",
    description:
      "A crypto portfolio tracker with live price feeds, P&L analysis, tax reporting helpers, and DeFi protocol integrations. Built with performance-first architecture.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Redis", "Node.js", "Docker", "CoinGecko API"],
    features: [
      "Live price feeds for 500+ cryptocurrencies",
      "P&L tracking with cost-basis calculation",
      "DeFi wallet integrations (MetaMask)",
      "Tax report generation (FIFO/LIFO methods)",
      "Dark/light mode design system with Storybook",
    ],
    github: "https://github.com/indu127pal",
    live: "#",
    color: "#06d6a0",
    icon: "📈",
  },
  {
    title: "ShopAI — GenAI Shopping Assistant",
    category: "E-Commerce",
    tag: "🤖 AI + E-Commerce",
    tagColor: "#c77dff",
    description:
      "An AI-powered shopping assistant (inspired by SambaNova work) that uses LLMs for product recommendations, visual search, and conversational checkout within an e-commerce platform.",
    tech: ["React", "Next.js", "Python", "FastAPI", "LLM APIs", "Vector DB", "Redis", "Docker"],
    features: [
      "Conversational product discovery via LLM chat",
      "Visual search — upload image to find similar products",
      "Personalized recommendations using embeddings",
      "Streaming AI responses for fast UX",
      "A/B testing framework for recommendation models",
    ],
    github: "https://github.com/indu127pal",
    live: "#",
    color: "#c77dff",
    icon: "🤖",
  },
];

export const education = {
  degree: "MCA",
  institution: "Motilal Nehru National Institute of Technology (NIT Allahabad)",
  period: "2014 – 2017",
  cgpa: "8.34",
};

export const courses = [
  "Advanced React For Enterprise: React for Senior Engineers",
  "Working with Microservices in Go (Golang)",
  "The Ultimate Redux Course 2024 — Latest Redux Toolkit",
  "Docker & Kubernetes: The Practical Guide [2025 Edition]",
  "Playwright: Web Automation Testing From Zero to Hero",
];
