# SurgiMatch

React + Vite single-page app for SurgiMatch, deployable to Vercel.

## Development

```bash
npm install
cp .env.example .env
# Add your Google Apps Script URL to .env as GOOGLE_SCRIPT_URL
npm run dev
```

Form submissions in dev are proxied to Google Apps Script via a Vite middleware at `/api/submit`.

## Production (Vercel)

1. Push this repo to GitHub and import in [Vercel](https://vercel.com).
2. Set environment variable **`GOOGLE_SCRIPT_URL`** in Project Settings → Environment Variables.
3. Deploy. Vercel serves the SPA and the serverless function at `api/submit.js`.

## Routes

| Path | Page |
|------|------|
| `/` | Home (hero, how it works, specialties, match form) |
| `/about` | About Us |
| `/faq` | FAQ |
| `/privacy-policy` | Privacy Policy |

Legacy static HTML files are in `legacy/` for reference.

## Build

```bash
npm run build
npm run preview
```
