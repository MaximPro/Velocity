# BMAD-METHOD Philosophy in Velocity

This document explains how Velocity implements the BMAD-METHOD C.O.R.E. philosophy.

## What is BMAD-METHOD?

BMAD-METHOD is a universal platform for human-AI collaboration, built around the C.O.R.E. philosophy:

- **Collaboration** - Partnership between human and AI capabilities
- **Optimized** - Battle-tested processes for maximum effectiveness
- **Reflection** - Strategic thinking that unlocks innovative solutions
- **Engine** - A framework with specialized workflows

## How Velocity Implements C.O.R.E.

### 1. Collaboration

**Structured for Team Development**

```
src/
├── components/      # Shared, reusable components
├── layouts/         # Consistent page layouts
├── core/
│   ├── config/      # Centralized configuration
│   ├── utils/       # Shared utilities
│   └── types/       # Shared type definitions
```

**Benefits:**
- Clear separation of concerns
- Easy for teams to work on different parts simultaneously
- Consistent patterns across the codebase
- Path aliases (`@/`) for clean imports

### 2. Optimized

**Pre-configured Best Practices**

Velocity comes with:
- ✅ TypeScript strict mode for type safety
- ✅ Tailwind CSS for efficient styling
- ✅ ESLint for code quality
- ✅ Prettier for consistent formatting
- ✅ SEO optimization built-in
- ✅ Performance best practices (lazy loading, image optimization)
- ✅ Responsive design patterns

**Configuration Files:**
- `tsconfig.json` - Strict TypeScript settings
- `tailwind.config.mjs` - Customizable design system
- `.prettierrc` - Consistent code formatting
- `.eslintrc.json` - Code quality rules

### 3. Reflection

**Clear, Intentional Architecture**

The structure encourages thoughtful development:

```typescript
// Core configuration - Single source of truth
src/core/config/site.config.ts

// Type definitions - Clear contracts
src/core/types/index.ts

// Utility functions - DRY principle
src/core/utils/helpers.ts
```

**Development Workflow:**
1. Configure site settings in one place
2. Define types for type safety
3. Build reusable components
4. Compose pages from components
5. Maintain consistent layouts

### 4. Engine

**Complete Development Framework**

Velocity provides:

**Core Components:**
- `SEO.astro` - Meta tags and SEO optimization
- `Hero.astro` - Hero sections
- `Card.astro` - Content cards
- `FeatureCard.astro` - Feature showcases

**Layouts:**
- `BaseLayout.astro` - Foundation layout with SEO
- `MainLayout.astro` - Header + Content + Footer

**Utilities:**
- `cn()` - Class name merging
- `formatDate()` - Date formatting
- `truncate()` - Text truncation
- `slugify()` - URL slug generation

**Tooling:**
- Hot module reloading (HMR)
- TypeScript IntelliSense
- Tailwind CSS IntelliSense
- ESLint real-time feedback

## Scalable Development

Like BMAD-METHOD's scalable planning, Velocity adapts to your needs:

### Quick Prototypes
```bash
# Use pre-built components
import { Hero, Card } from '@/components/ui'
```

### Medium Projects
```typescript
// Extend configuration
export const SITE_CONFIG = {
  // Add custom settings
  features: {...},
  integrations: {...}
}
```

### Large Applications
```
# Add new layers
src/
├── components/
├── features/        # Feature modules
├── services/        # API services
├── stores/          # State management
└── core/
```

## Update-Safe Customization

Following BMAD principles, customization is separated from core:

**Your Configuration:**
- `src/core/config/site.config.ts` - Your site settings
- `tailwind.config.mjs` - Your design tokens
- `.env` - Your environment variables

**Core Framework:**
- Component patterns remain stable
- Update Velocity without losing customizations
- Add new components without breaking existing ones

## Best Practices

### 1. Configuration Over Code

```typescript
// ✅ Good - Configure in site.config.ts
export const SITE_CONFIG = {
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ]
  }
}

// ❌ Avoid - Hardcoding in components
<a href="/home">Home</a>
```

### 2. Component Composition

```astro
<!-- ✅ Good - Compose from smaller pieces -->
<MainLayout>
  <Hero {...heroProps} />
  <Features items={features} />
</MainLayout>

<!-- ❌ Avoid - Monolithic pages -->
<div>
  <!-- 500 lines of HTML -->
</div>
```

### 3. Type Safety

```typescript
// ✅ Good - Define types
interface PageProps {
  title: string;
  description?: string;
}

// ❌ Avoid - Any types
const props: any = {...}
```

### 4. Utility Functions

```typescript
// ✅ Good - Reusable utilities
import { cn, formatDate } from '@/core/utils/helpers'

// ❌ Avoid - Inline logic duplication
const className = [class1, class2].filter(Boolean).join(' ')
```

## Conclusion

Velocity embodies BMAD-METHOD's philosophy by providing:
- 🤝 **Collaboration** through clear structure
- ⚡ **Optimization** through best practices
- 🔄 **Reflection** through intentional architecture
- 🚀 **Engine** through complete tooling

This creates an environment where you can focus on building great websites rather than configuration and setup.

---

For more on BMAD-METHOD: https://github.com/bmad-code-org/BMAD-METHOD
