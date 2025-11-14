/**
 * BMAD-CORE Site Configuration
 * C.O.R.E. Philosophy: Collaboration, Optimized, Reflection, Engine
 */

export const SITE_CONFIG = {
  name: 'Velocity',
  title: 'Velocity - Astro BMAD Stack',
  description: 'Optimized Astro Stack with BMAD-METHOD Philosophy for easy and effective website creation',
  author: 'MaximPro',
  url: 'https://github.com/MaximPro/Velocity',

  // BMAD-CORE: Collaboration Settings
  collaboration: {
    enableComments: false,
    enableFeedback: true,
  },

  // BMAD-CORE: Optimized Performance
  optimization: {
    imageOptimization: true,
    lazyLoading: true,
    criticalCSS: true,
  },

  // Navigation
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Docs', href: '/docs' },
    ],
  },

  // Social Links
  social: {
    github: 'https://github.com/MaximPro',
    twitter: '',
    linkedin: '',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
