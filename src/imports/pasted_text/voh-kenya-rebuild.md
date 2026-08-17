Role: You are an elite UX/UI Engineer and Principal Frontend Architect specializing in performance, dynamic interactivity, and premium design systems.

Goal: Completely re-engineer, design, and optimize www.vohkenya.org into a premium, high-performance, and deeply interactive Next.js (App Router) web application. This is a complete architectural overhaul, moving from a template-style site to a premium digital product that justifies a high valuation (e.g., $1000 USD+).

Technical Stack (Mandatory): React, Next.js, Tailwind CSS (with a highly optimized theme), Framer Motion (for all interactions), TypeScript, a headless CMS (structured to retain original data), and edge-optimized image delivery (AVIF/WebP).

Project Scope & Constraints
1. Total Data Retention & Migration (Zero Loss)
You must retain all existing information from the current www.vohkenya.org site. The content must be restructured but not omitted.

Pages: All current pages must exist (Home, About Us, Our Story, Leadership [with specific content on Pastor Timothy Nyamgero], Programs [all listed individual programs], Bible Club, The Move!, VOH Music - PHASS, Discipleship Master Class, Discipleship Programs, Missions and Outreach, Fellowships, Membership, Blog).

Content & Media: Retain all text descriptions, original images (optimized), contact details, and the structure of giving/support instructions.

Linking: All internal links, external links to social media, giving support channels, and forms must function perfectly. Use next/link for internal routing.

2. Premium Design System
Create a cohesive design system that feels expensive, trust-based, and highly engaging for a young professional and youth audience.

Aesthetics: Modern, clean, and deeply textured 'Bento Box UI' layout with extensive use of negative space, large border radii (24px+), soft diffused shadows (custom shadow-lg theme), and glassmorphism overlays on interactive elements.

Typography: Headings in Clash Display or Plus Jakarta Sans (bold, tight tracking). Body text in Inter (optimal legibility).

Color Palette: Use a dynamic, deep palette. Primary: Deep Navy (#0F172A). Accents: Vibrant Amber (#F59E0B) and Electric Cyan (#06B6D4). Background: Off-White (#FAFAFA) with subtle texture.

3. Advanced Interactivity (Framer Motion)
Interactivity must be sophisticated, purposeful, and smooth. No gimmicky animations.

Hero: A high-quality dynamic video background or image hero (from existing footage) with large magnetic CTA buttons. Text should use reveal animations.

Bento Grid: The 'Our Mandate' core pillars section should be an advanced interactive grid. Cards should have video loops that play on hover, large micro-hover state changes, and use shared layout animations when filtering or expanding.

Dynamic Program Slider: Instead of a simple carousel, use a custom-built infinite slider (e.g., via embla-carousel-react) where program cards gracefully scale and fade as they center. Each card should feature a dynamic hover reveal showing more details from the original content.

Digital Altar: Add an interactive testimony wall where users can filter by category (Discipleship, Missions, Family) with elegant fade-in/out transitions when the data updates. Include an interactive contact/prayer request component.

4. Performance & Mobile Compatibility
Mobile-First: This must be a masterclass in mobile UX. Use bottom-sheet modal components for complex interactions on phones, extensive touch-swipe support for all carousels, and ensure massive tap targets.

Speed: Optimize for 100 on Lighthouse. Mandate zero Cumulative Layout Shift (CLS), sub-200ms Time to Interactive (TTI), and use Critical CSS optimizations.

Kenyan Localized Optimization: Require edge-caching for static pages and images to ensure lightning-fast load times across Kenya on all network types.

Key Homepage Components (Re-engineered)
Premium Sticky Nav: Clean layout with a glassmorphism effect, subtle border, and custom-styled magnetic primary CTAs (Give/Support and Join Group).

Dynamic Bento Mandate: Interactive grid covering Discipleship, Missions, Youth, and Family, with video loops on hover.

Infinite Program Slider: Seamless infinite scroll for all individual programs, with premium hover effects.

Interactive Impact Stat: Section with large, animated counters and localized testimonials.

Digital Altar Component: Interactive prayer submission and testimony display.

Membership Portal Mockup: A section previewing a private member dashboard for premium community access.

Community Map: An interactive, filterable map or list of fellowship locations in Nairobi and beyond.

Deliverables for Opus 4.8
Based on this prompt, Opus 4.8 must generate:

Tailwind Configuration (tailwind.config.ts): Specifying the new design system (colors, spacing, shadows, radii).

App Router Layout (app/layout.tsx): The global layout with advanced typography and critical CSS setup.

Homepage Component (app/page.tsx): The complete, interactive Next.js bento box structure.

Core Components:

<Header/> (Premium Sticky Navigation with mobile menu logic).

<Hero/> (Dynamic hero with video and magnetic buttons).

<BentoMandate/> (The interactive grid component).

<ProgramSlider/> (Custom slider component using Framer Motion).

<DigitalAltar/> (Testimony wall component).

<MembershipPortalCTA/> (Interactive community component).

The generated code must be clean, component-based, uses next/image, and features integrated framer-motion animation logic for all interactive states.