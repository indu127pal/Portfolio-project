<div align="center">

# ✦ Indu Pal — Personal Portfolio

**Senior Full-Stack Engineer · 8+ Years · React · Node.js · TypeScript · Python**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-00e5a0?style=for-the-badge&logo=vercel&logoColor=black)](https://indu-pal.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/indu-pal-888223248/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/indu127pal)
[![Medium](https://img.shields.io/badge/Medium-Read-12100E?style=for-the-badge&logo=medium)](https://medium.com/@indu.pal)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-✓-264de4?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 📸 Preview

> A modern, dark-themed developer portfolio built with **React + Vite**. Features animated sections, interactive project cards, live experience timeline, and a full skills showcase — all without any UI framework dependency.

---

## ✨ Features

- 🌑 **Dark-first design** with a custom CSS design token system
- ⚡ **Blazing fast** — Vite-powered, no heavy dependencies
- 🎞️ **CSS animations** — staggered reveals, floating glows, pulse effects
- 📱 **Fully responsive** — mobile, tablet, and desktop
- 🗂️ **6 showcase projects** across Fintech, E-Commerce, and AI categories
- 🧩 **Component-based** — clean separation of sections and reusable components
- 🔤 **Custom typography** — Syne (display) + DM Sans (body)
- 🔗 **Zero external UI libraries** — pure React + CSS

---

## 🗂️ Project Structure

```
indu-portfolio/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with scroll detection & mobile menu
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Site footer with social links
│   │   └── Footer.css
│   ├── sections/
│   │   ├── Hero.jsx            # Animated hero — name, stats, CTA buttons
│   │   ├── Hero.css
│   │   ├── About.jsx           # Bio, NIT education, certifications
│   │   ├── About.css
│   │   ├── Experience.jsx      # Interactive timeline — 5 companies
│   │   ├── Experience.css
│   │   ├── Projects.jsx        # Filterable project grid with expand/collapse
│   │   ├── Projects.css
│   │   ├── Skills.jsx          # 8 skill category cards with hover effects
│   │   ├── Skills.css
│   │   ├── Contact.jsx         # Contact cards + footer
│   │   └── Contact.css
│   ├── data.js                 # Centralised resume & project data
│   ├── App.jsx                 # Root component — composes all sections
│   ├── main.jsx                # React entry point
│   └── index.css               # Global CSS — tokens, resets, shared utilities
├── index.html                  # HTML shell with Google Fonts
├── vite.config.js
└── package.json
```

---

## 💼 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Animated intro with availability badge, 3 stats, and social/CTA links |
| 02 | **About** | Personal bio, NIT Allahabad education, and 5 certifications |
| 03 | **Experience** | Full timeline across SambaNova, Meesho, Ixigo, Ajio, First Walk-In |
| 04 | **Projects** | 6 projects with tech stack, key features, GitHub + demo links |
| 05 | **Skills** | 8 categories: Languages, Frameworks, Backend, Testing, DevOps, Tools, Design |
| 06 | **Contact** | Email, LinkedIn, GitHub, Medium cards + phone |

---

## 🚀 Projects Showcased

### 💳 Fintech
| Project | Stack | Highlights |
|---------|-------|------------|
| **PayFlow Dashboard** | React, TypeScript, Node.js, WebSockets, PostgreSQL | Real-time transaction streaming, fraud alerts, multi-currency |
| **LendEase** | React, FastAPI, PostgreSQL, Docker, Kubernetes | KYC automation, credit scoring, EMI scheduler |
| **CryptoLens** | Next.js, TypeScript, Redis, CoinGecko API | Live price feeds, DeFi wallet, tax report generation |

### 🛒 E-Commerce
| Project | Stack | Highlights |
|---------|-------|------------|
| **SmartCart** | Next.js, MongoDB, Redis, Elasticsearch, Stripe | Micro-frontend, instant search, SSR, seller dashboard |
| **OrderTrack** | React PWA, GraphQL, Firebase, React Native | Real-time shipment tracking, one-click returns, offline support |
| **ShopAI** | React, FastAPI, LLM APIs, Vector DB | Conversational product discovery, visual search, A/B testing |

---

## 🎨 Design System

```css
/* Typography */
--font-display: 'Syne', sans-serif;   /* headings */
--font-body:    'DM Sans', sans-serif; /* body text */

/* Colors */
--bg:      #0a0a0f   /* page background */
--surface: #111118   /* card background */
--accent:  #00e5a0   /* primary green accent */
--accent2: #7c5cff   /* purple accent */
--accent3: #ff6b6b   /* red accent */
--text:    #f0f0f5   /* primary text */
--muted:   #6b6b7e   /* secondary text */
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/indu127pal/indu-portfolio.git

# 2. Navigate into the project
cd indu-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Build optimised production bundle to `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🌐 Deployment

### Vercel (Recommended — one click)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework preset: **Vite** (auto-detected)
5. Click **Deploy** — done!

### Netlify

```bash
npm run build
# Drag and drop the /dist folder to netlify.com/drop
```

Or connect your GitHub repo at [netlify.com](https://netlify.com) → **New site from Git**.

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| **UI Library** | React 18 |
| **Build Tool** | Vite 5 |
| **Language** | JavaScript (JSX) |
| **Styling** | CSS Modules + Custom CSS |
| **Fonts** | Google Fonts (Syne, DM Sans) |
| **Icons** | Inline SVG |
| **Deployment** | Vercel / Netlify |

---

## 📬 Contact

| Channel | Link |
|---------|------|
| 📧 Email | [ipal127@gmail.com](mailto:ipal127@gmail.com) |
| 💼 LinkedIn | [indu-pal-888223248](https://www.linkedin.com/in/indu-pal-888223248/) |
| 🐙 GitHub | [indu127pal](https://github.com/indu127pal) |
| ✍️ Medium | [@indu.pal](https://medium.com/@indu.pal) |
| 📞 Phone | +91 8604850015 |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Designed & built with ♥ by **Indu Pal**

⭐ Star this repo if you found it helpful!

</div>
