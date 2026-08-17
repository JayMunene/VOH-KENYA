we need to transition it from a basic, template-style layout into a modern, high-performance web application.

1. Analysis of the Current Site
Based on the current site's structure, here is what needs fixing to elevate the UX/UI:

Target Audience Mismatch: The ministry targets teens, young adults, and young professionals. The design needs to feel energetic, modern, and engaging to capture a Gen Z and Millennial audience, rather than looking like a traditional corporate page.

Cluttered Information Architecture (IA): The "Programs" dropdown is overwhelming (Love God's Way, The Breakdown Space, Bible Club, The Move!, VOH Music, etc.). These need to be categorized logically or displayed in an interactive, scannable format rather than a massive list.

Unoptimized Assets: Image filenames like IMG-20241021-WA0106(1)_edited.jpg suggest the site is heavy and not optimized for fast loading on Kenyan mobile networks.

Buried Call-to-Actions (CTAs): The primary actions—joining a program and giving/donating—are pushed to the bottom. They need to be front and center.

2. The UX & Tech Strategy
Since you build with React, Next.js, and Tailwind CSS, the design should be structured to take advantage of component-based architecture and Framer Motion animations.

Mobile-First: Massive tap targets, bottom-sheet navigation for mobile, and touch-swipeable carousels for the programs.

Bento Box UI: Use a modern bento grid for the "Core Pillars" (Discipleship, Missions, Youth Ministry, Family) to make it visually striking and easy to build with CSS Grid/Tailwind.

Micro-interactions: Soft hover states, smooth page transitions, and lazy-loading images to keep the UI feeling premium and snappy.

3. Top-Tier Figma Prompt
Whether you are feeding this into a Figma AI generator (like Relume, Musho, or Galileo) or using it as a strict design brief to build from scratch, use this exact prompt:

Role & Context:
Create a high-fidelity, responsive homepage UI design for "VOH Kenya" (Vessels of Honor), a youth and young adult Christian ministry. The design must be modern, vibrant, and highly engaging for Gen Z and Millennials, utilizing a clean, component-based layout suitable for a Next.js and Tailwind CSS build.

Design System & Styling:

Vibe: Dynamic, trustworthy, community-focused, and premium.

Color Palette:

Background: #FAFAFA (Off-white for clean contrast)

Primary: #0F172A (Deep Slate/Navy for authority and modern contrast)

Accent: #F59E0B (Vibrant Amber/Gold for energy and youth) or #06B6D4 (Cyan).

Typography: Headings in Clash Display or Plus Jakarta Sans (bold, tight tracking). Body text in Inter (clean, highly legible).

Styling: Use soft, diffused drop shadows (Tailwind shadow-lg), large border radii (16px to 24px) for cards, and plenty of negative space.

Homepage Structure (Top to Bottom):

1. Navigation Bar (Sticky & Glassmorphism):

Left: Minimalist VOH Logo.

Center (Desktop): Clean links (About, Ministries, Programs, Media, Blog).

Right: Primary Solid Button ("Give/Support"), Secondary Outline Button ("Join a Group").

Mobile: Replace center links with a smooth hamburger menu icon.

2. Hero Section (Dynamic & Immersive):

Layout: Split layout or large centered typography over a high-quality, darkened hero image/video of young people in worship/fellowship.

Headline: "Transforming the World by Raising Vessels of Honor."

Subtext: "Equipping teens, young adults, and professionals for effective Christian living and transformational leadership in Africa and beyond."

CTAs: A glowing primary button ("Discover Our Programs") and a subtle secondary link with a play icon ("Watch Our Story").

3. Core Pillars (Bento Box Grid):

Section Title: "Our Mandate"

Layout: A modern, asymmetrical 4-card bento grid displaying the main ministries.

Cards:

Card 1 (Large): Discipleship (Equipping youths at different stages).

Card 2 (Wide): Missions & Outreach (Partnering with institutions).

Card 3 (Square): Youth Ministry (Focus on teens and young professionals).

Card 4 (Square): Relationships & Family (Biblical perspectives on modern love).

Interaction Note: Cards should have a slight upward lift and shadow expansion on hover.

4. Programs & Platforms (Horizontal Swipe/Slider):

Section Title: "Find Your Space"

Layout: A horizontally scrollable carousel of sleek, vertical cards.

Card Contents: Cover image, Tag (e.g., "Music", "Bible Study"), Title (Love God's Way, The Move!, Bible Club, PHASS, The Breakdown Space), and a small arrow icon -> indicating a link to learn more.

5. Impact & Leadership (Social Proof):

A clean, minimalist section featuring a quote from Pastor Timothy Nyamgero on one side, and 3 large, bold statistics on the other (e.g., "Active Members", "Campuses Reached", "Years of Impact").

6. Footer (Clean & Actionable):

Top half of footer: A large, rounded CTA card spanning the width of the container: "Ready to step into your calling? Join a fellowship today." with a prominent signup button.

Bottom half: 4-column grid (VOH Logo/Address in Garden Estate Nairobi, Quick Links, Contact details [info@vohkenya.org, +254 738 900218], and Social Icons [IG, YT, X, FB, LinkedIn]).

Pro-Tips for the Development Phase
Routing: When you build this out, pull those 10+ individual programs into a dynamic Next.js route (e.g., /programs/[slug]) pulling data from a headless CMS or a simple JSON array. This keeps your codebase clean and the UI uncluttered.

Images: For the redesign to look as good as the Figma file, you will need high-quality imagery. If they don't have good photos, use high-end Unsplash placeholders for the mockup (search terms: diverse youth, modern church, community group) to sell the vision.