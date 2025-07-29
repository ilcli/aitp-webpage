# AITP - AI Training & Process

A modern Next.js landing page for AITP, a consultancy focused on AI automation and training solutions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd aitp-agency
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS 3.x
- **Language**: TypeScript
- **UI Components**: Custom React components
- **Theme**: next-themes for dark/light mode
- **Font**: Inter (via next/font/google)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── call-to-action.tsx   # Mid-page CTA section
│   ├── features.tsx         # Services/features section
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section
│   ├── navbar.tsx           # Navigation bar
│   ├── social-proof.tsx     # Client logos section
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Dark/light mode toggle
└── lib/                     # Utility functions
```

## 📌 Page Sections

1. **Navbar** - Sticky navigation with logo, links, and dark mode toggle
2. **Hero Section** - Bold headline with CTA button
3. **Social Proof** - Client logos with trust messaging
4. **Features/Services** - Value proposition cards
5. **Call to Action** - Mid-page conversion section
6. **Footer** - Contact info and additional links

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## 🌚 Styling Guidelines

- Mobile-first responsive design
- Clean layouts with grid/flexbox
- Inter font family (Google Fonts)
- Pill-shaped buttons with hover effects
- Dark/light mode support
- Tailwind CSS utility classes

## 🚀 Deployment

This project is optimized for [Vercel](https://vercel.com/) deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
