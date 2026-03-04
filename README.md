# Prince Mahmud — Portfolio

A modern, single-page portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features a cohesive blue-indigo design system, dark/light mode, smooth animations, and a fully responsive layout.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=fff)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=fff)

---

## Preview

| Light Mode | Dark Mode |
|:---:|:---:|
| Clean white background with subtle gray alternating sections | Deep navy (`#060b18`) with elevated card surfaces |

---

## Features

- **Dark / Light Mode** — Toggle with system preference detection and `localStorage` persistence
- **Smooth Animations** — Scroll-triggered reveals, staggered lists, hover effects via Framer Motion
- **Counter Animation** — Stats count up from 0 with easeOutCubic curve on scroll into view
- **Responsive Design** — Mobile-first layout with adaptive navigation
- **Cohesive Color System** — Unified blue-indigo palette across all sections
- **Glassmorphism Navbar** — Backdrop blur with scroll-aware styling
- **FAQ Accordion** — Animated expand/collapse with single-item toggle
- **Contact Form** — Validated form with success state feedback
- **SEO Optimized** — Metadata, semantic HTML, and static generation

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans & Geist Mono |

---

## Sections

1. **Navbar** — Sticky navigation with active section tracking & theme toggle
2. **Hero** — Full-screen intro with code editor illustration & animated counters
3. **About** — Feature cards + professional bio with status badges
4. **Skills** — Frontend, Backend, and Tools categorized with skill badges
5. **Services** — 6 service offerings with gradient icon cards
6. **FAQ** — 6 common questions in an accordion layout
7. **Contact** — Info cards + validated contact form
8. **Footer** — Social links & scroll-to-top

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/princevip1/portfolio
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, dark mode, utilities
│   ├── layout.tsx          # Root layout with ThemeProvider
│   └── page.tsx            # Main page composing all sections
└── components/
    ├── ThemeProvider.tsx    # Dark/light mode context
    ├── Navbar.tsx           # Sticky navigation
    ├── Hero.tsx             # Hero section with counters
    ├── About.tsx            # About section
    ├── Skills.tsx           # Technical skills
    ├── Services.tsx         # Service offerings
    ├── FAQ.tsx              # FAQ accordion
    ├── Contact.tsx          # Contact form
    └── Footer.tsx           # Footer
```

---

## Customization

- **Colors** — Edit the gradient and color classes in each component (uses `blue-600`, `indigo-600` family)
- **Content** — Update text, skills, services, and FAQ items directly in the component files
- **Dark Mode Background** — Change `#060b18` in `globals.css` and `layout.tsx`
- **Fonts** — Modify font imports in `layout.tsx`

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built by Prince Mahmud** — Full-Stack Developer from Bangladesh

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
