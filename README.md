# Loraf Intelligence Website

Marketing site for **Loraf Intelligence Private Ltd** — automation, robotics, AI & software engineering.

Built with **Vite + React + TypeScript**.

## Local Developments

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (usually [http://localhost:5173](http://localhost:5173)).

### Google Analytics (optional)

Copy `.env.example` to `.env` and set your GA4 Measurement ID:

```bash
cp .env.example .env
# VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics loads only when this variable is set.

## Production Build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select this repository and configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Add environment variable `VITE_GA_MEASUREMENT_ID` in Pages settings if using Analytics.

Or deploy with Wrangler from a local build:

```bash
npm run build
npx wrangler pages deploy dist
```

Custom domain: attach `www.lorafintel.com` under **Custom domains**. Cloudflare provides HTTPS/SSL/CDN automatically.

## Google Search Console (after deploy)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add/verify `https://www.lorafintel.com`.
3. Submit sitemap: `https://www.lorafintel.com/sitemap.xml`.
4. Request indexing for the homepage.

## Project Structure

```
loraf_website/
├── public/
│   ├── assets/logo.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192.png / icon-512.png
│   ├── manifest.webmanifest
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── wrangler.toml
```

## Contact

- **Email:** info@lorafintel.com
- **Phone:** +91 79044 90811, +91 88709 72470
