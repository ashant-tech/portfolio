# Ashenafi Haile — Next.js Portfolio

A responsive portfolio starter built with Next.js App Router, React, TypeScript, Tailwind CSS v4, and Lucide icons.

## Requirements
- Node.js 20.9 or later (recommended: current LTS)
- npm
- VS Code (recommended)

## Run locally
1. Extract the ZIP and open the project folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000 in your browser.

## Build for production
```bash
npm run build
npm start
```

## Deploy to Render
This repository includes a `render.yaml` Blueprint for a Node web service.

1. Push the project changes to the GitHub repository.
2. In Render, choose **New → Blueprint**, connect `ashant-tech/portfolio`, and apply the Blueprint.
3. Render builds with `npm ci --include=dev && npm run build` and runs `npm run start`.
4. The configured service URL is `https://ashenafi-portfolio.onrender.com`. If you change the Render service name or use a custom domain, update `NEXT_PUBLIC_SITE_URL` in `render.yaml` to that URL and redeploy.
5. Confirm `public/profile.jpg` is committed to GitHub so the deployed profile image is available.

The service uses the free plan, so it may spin down after a period without traffic and take a little time to respond to the next visit.

## Before publishing
1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your live domain.
2. Edit `lib/site.ts`: LinkedIn, GitHub, email, and optional `cvPath` (e.g. `/Ashenafi-Haile-CV.pdf` after adding the PDF under `public/`).
3. Review `lib/content.ts` — experience bullets and lab descriptions should match what you have actually done and documented.
4. Contact uses `mailto:` (no backend form).

## Project structure
- `app/page.tsx` — page sections and layout
- `app/layout.tsx` — fonts, SEO metadata, structured data
- `lib/site.ts` — site-wide links and copy
- `lib/content.ts` — skills, experience, and labs
- `components/header.tsx` — navigation (desktop + mobile)
- `app/globals.css` — visual design and responsive styles

## Excluded projects
As requested, AI-Powered Job Matching System, PropertySales, and EthioCars are not included.
