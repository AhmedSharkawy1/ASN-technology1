# ASN Technology — Futuristic Digital Agency

A visually stunning, high-conversion, bilingual (English + Arabic) marketing website for ASN Technology.
Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and next-intl.

## Features Included
- **Dark-first Premium Design**: Glassmorphism, neon glows, and custom CSS variables.
- **Bilingual Support (i18n)**: English (LTR) and Arabic (RTL) routing via `next-intl`.
- **Framer Motion Animations**: Scroll reveals, 3D tilt interactions, and animated counters.
- **Particle System**: Custom performant HTML5 Canvas particle background.
- **Strategic Funnel**: Animated SVG funnel explainer.
- **Interactive E-Menu**: Client-side mockup simulating an online order.
- **Mock API**: `/api/mock-order` endpoint for contact forms and orders.
- **SEO & Social**: Generated `sitemap.xml`, `robots.txt`, and dynamic `/api/og` Open Graph images.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Build and Export**
   ```bash
   npm run build
   ```
   The site can then be started with `npm start`.

## Deployment to Vercel

The quickest way to deploy your Next.js app is to use the Vercel Platform.
Since this uses the Next.js App Router, it is fully optimized for Vercel out of the box.

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Sign in to Vercel and click **Add New Project**.
3. Import your repository. Vercel will automatically detect Next.js.
4. Click **Deploy**.

## Content Editing & Customization

- **Logo**: Replace `public/logo.png` with your high-res logo.
- **Translations (Copy)**: Edit `messages/en.json` and `messages/ar.json`. All text on the site is centralized in these files.
- **Design Tokens**: Reference `public/design-tokens.json` to see the core hex codes, fonts, and animation times used. These are functionally implemented in `tailwind.config.ts` and `src/app/globals.css`.
- **WhatsApp Number**: Update the number in `src/components/FloatingWhatsApp.tsx` and `src/components/CTA.tsx` if it changes.
