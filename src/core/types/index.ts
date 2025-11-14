/**
 * Core Types for BMAD-Astro Stack
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}

export interface ComponentProps {
  class?: string;
  id?: string;
}

export interface LayoutProps extends ComponentProps {
  title: string;
  description?: string;
  image?: string;
}
