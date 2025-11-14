# ⚡ Velocity - Astro BMAD Stack

> Optimized Astro Stack with BMAD-METHOD Philosophy for Easy & Effective Website Creation

Velocity is a production-ready Astro starter template inspired by the [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) philosophy, designed to help you create modern, fast websites with minimal setup.

## 🎯 Features

- **🚀 Astro 4** - Lightning-fast static site generator with island architecture
- **📘 TypeScript** - Full type safety out of the box
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **⚛️ React Integration** - Use React components where you need interactivity
- **📦 Pre-built Components** - Hero, Card, Layout components ready to use
- **🔧 Dev Tools** - ESLint, Prettier pre-configured
- **📱 Responsive** - Mobile-first, fully responsive design
- **⚡ Optimized** - Best practices for performance and SEO built-in

## 🧠 C.O.R.E. Philosophy

Velocity follows the BMAD-METHOD C.O.R.E. principles:

- **C**ollaboration - Structured for seamless team development
- **O**ptimized - Pre-configured with performance best practices
- **R**eflection - Clear architecture for maintainable code
- **E**ngine - Complete framework with essential tools

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MaximPro/Velocity.git my-website

# Navigate to the project
cd my-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

## 📁 Project Structure

```
src/
├── components/
│   ├── core/        # Core components (SEO, analytics, etc.)
│   ├── ui/          # UI components (Hero, Card, Button, etc.)
│   └── layout/      # Layout components (Header, Footer)
├── layouts/         # Page layout templates
├── pages/           # File-based routing pages
├── styles/          # Global styles and Tailwind config
└── core/
    ├── config/      # Site configuration
    ├── utils/       # Utility functions
    └── types/       # TypeScript type definitions
```

## 🛠️ Configuration

### Site Configuration

Update your site settings in `src/core/config/site.config.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Site Name',
  title: 'Your Site Title',
  description: 'Your site description',
  author: 'Your Name',
  url: 'https://yoursite.com',
  // ... more config
};
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## 📝 Usage

### Creating Pages

Create new pages in `src/pages/`:

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
---

<MainLayout title="My Page">
  <div class="container py-20">
    <h1>Welcome to My Page</h1>
  </div>
</MainLayout>
```

### Using Components

```astro
---
import Hero from '@/components/ui/Hero.astro';
import Card from '@/components/ui/Card.astro';
---

<Hero
  title="Welcome"
  subtitle="Get started quickly"
  cta={{ text: 'Learn More', href: '/about' }}
/>

<Card title="Feature">
  <p>Feature description</p>
</Card>
```

## 📜 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run format    # Format code with Prettier
npm run lint      # Lint code with ESLint
```

## 🚀 Deployment

Velocity works with all major hosting platforms:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages

Use the official [Astro GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/).

### Other Platforms

Build the project and upload the `dist/` folder to any static hosting service.

## 🎨 Customization

### Tailwind Configuration

Customize colors, fonts, and more in `tailwind.config.mjs`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your color palette
        },
      },
    },
  },
};
```

### Adding New Components

1. Create component in `src/components/ui/YourComponent.astro`
2. Import and use in your pages
3. Follow the existing component patterns

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for your projects!

## 🙏 Acknowledgments

- Inspired by [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**Built with ⚡ by [MaximPro](https://github.com/MaximPro)**
