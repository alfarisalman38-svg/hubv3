# Nuclear Engineering Hub — No Registration Edition (V3)

Public-first Next.js platform. **No sign-up, no login and no account required.**

## Features
- Knowledge Base and technology roadmap
- University directory
- Scholarship filter
- Isotope explorer
- Educational reactor simulator
- Radioactive decay and shielding calculators
- Global nuclear facilities map integration layer
- Career portal
- Local browser workspace and scholarship tracker
- Dark/light theme
- Vercel-ready Next.js project

## Privacy model
The workspace uses browser `localStorage` for lightweight progress/tracker data. Nothing requires an account.

## Deploy
```bash
npm install
npm run build
```
Then import the repository into Vercel. No Supabase environment variables are required.

## Important
The reactor simulator and calculators are educational models and must not be used for real reactor operation, safety analysis, engineering design or licensed decisions.

## Vercel troubleshooting
If Vercel still shows an old build error, redeploy the latest commit/repository and verify Root Directory is `./` and that `app/page.tsx` and `package.json` are in the repository root. Do not import an older nested folder.
