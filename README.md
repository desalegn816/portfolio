# Desalegn Worku: Portfolio

A single-page developer portfolio built with **React, JavaScript, HTML5 and CSS3**, bundled with **Vite**.
No UI libraries, no Tailwind, no TypeScript, no backend. The only runtime dependencies are `react` and `react-dom`.

> **Status:** tested in headless Chromium (production build, dev server and the single-file build). See
> [What has and has not been tested](#what-has-and-has-not-been-tested). It has **not** been deployed, the contact
> form needs its one-time email activation (see below).

---

## Architecture and design system

```
portfolio/
├── public/
│   ├── cv.pdf                 your CV (keep the file name when updating)
│   ├── icons/favicon.svg
│   └── images/                hero portrait + project screenshots
├── scripts/inline-build.mjs   turns the build into ONE html file (npm run build:standalone)
├── src/
│   ├── components/            one component per section, plus Icon, ProjectPreview, ProjectCard, ProjectModal
│   ├── data/
│   │   ├── siteData.js        name, links, skills, about cards, learning topics
│   │   └── projects.js        all project content (cards and modal render from this)
│   ├── hooks/                 useScrollReveal (IntersectionObserver), useActiveSection
│   ├── styles/                global.css (tokens) + one CSS file per section
│   ├── App.jsx  main.jsx
├── index.html                 title, meta description, Open Graph, theme colour
├── .env.example               contact form endpoint
└── package.json
```

**Design tokens** live in `src/styles/global.css` as CSS custom properties: dark palette (`#0B0D12`, `#11151D`,
`#151A23`), violet `#8B5CF6` and sky `#38BDF8` accents, fluid type with `clamp()`, one spacing scale.
Font: Plus Jakarta Sans (Google Fonts) with a system sans-serif fallback, so the site still looks fine offline.

**Motion:** one deliberate moment (the hero entrance and the code window typing in line by line). Everything else is
restrained: reveals on scroll, hover lifts, modal open/close. Only `transform` and `opacity` animate.
`prefers-reduced-motion` removes movement and keeps all content visible.

---

## Run it locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build              # production build in dist/
npm run preview            # serve dist/ locally to check the production build
npm run build:standalone   # ALSO writes dist-standalone/portfolio.html (see below)
```

### Single-file version (no build step to open it)

`npm run build:standalone` produces `dist-standalone/portfolio.html`, the same React app with its CSS and JavaScript
inlined. Double-click it to open it, or upload it to any static host. Keep `cv.pdf` and `icons/` next to it
(the script copies them for you). Fonts still load from Google Fonts when online.

---

## What you must replace (placeholders)

| What | Where | Notes |
|---|---|---|
| **CV** | `public/cv.pdf` | Your CV is installed. To update it, overwrite the file with the same name. |
| **Portrait photo** | `public/images/desalegn.jpg` and `desalegn.webp` | Hero portrait (4:5 crop, about 35 KB / 19 KB). Replace both files to change it. |
| **Project links** | `src/data/projects.js` (`liveUrl`, `repoUrl`) | Empty value = a disabled "not added yet" button, never a fake link. Projects 01 and 02 have their GitHub links set; Project 03 and all live demo links are still empty. |
| **Feature status** | `featureStatus` in `projects.js` | Shows **"Feature goals"** by default. Change to `'implemented'` only after you confirm every listed feature exists. |
| **Challenges / lessons** | `challenges`, `lessons` in `projects.js` | Marked `[Edit me]`. Write your real experience. |
| **Screenshots** | `public/images/` + `screenshots` in `projects.js` | Until you add real ones, the site shows CSS concept previews labelled "not a screenshot". |
| **Open Graph URL/image** | `index.html` | Add `og:url` and a 1200x630 `og:image` after deploying. |

Your GitHub, LinkedIn and email are in `src/data/siteData.js`. Compress images before adding them (for example with
[squoosh.app](https://squoosh.app)), and give each screenshot `width` and `height` to avoid layout shift.

---

## Contact form (connected to your email via FormSubmit)

The form sends messages to **desalegnworku816@gmail.com** through [FormSubmit](https://formsubmit.co), a free service
that needs no account. The address comes from `src/data/siteData.js`, and the code is at the top of
`src/components/Contact.jsx`.

**One-time activation (required, and not yet done):**
1. Deploy the site (or run it locally), fill in the form and send a test message.
2. FormSubmit emails an **"Activate Form"** link to that Gmail address (check Spam / Promotions too). Click it.
3. Send another test message and confirm it arrives in your inbox.

Until step 2 is done nothing is delivered. In that state the form tells the visitor their message was **not**
delivered and shows your email address, so a recruiter is never told a message was sent when it wasn't.

Good to know:
- Messages pass through FormSubmit's servers before reaching your inbox.
- Visitors' addresses become the reply-to, so you can reply straight from Gmail.
- A hidden honeypot field silently drops most spam bots.
- To use another service (for example Formspree), copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT`.
  Rebuild afterwards. On Netlify/Vercel set the same variable in the site's environment settings.

---

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/desalegn816/<repo-name>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `dist` and `.env`.

## Deploy

**Netlify**
1. Netlify dashboard → *Add new site → Import an existing project* → pick the GitHub repo.
2. Build command `npm run build`, publish directory `dist`.
3. Deploy. (Only add `VITE_FORM_ENDPOINT` under *Site configuration → Environment variables* if you switch form services.)

**Vercel**
1. Vercel dashboard → *Add New → Project* → import the repo (it auto-detects Vite).
2. Build command `npm run build`, output directory `dist`.
3. Deploy. (Only add `VITE_FORM_ENDPOINT` under *Settings → Environment Variables* if you switch form services.)

The build uses relative asset paths (`base: './'`), so it works at the site root and under a sub-path.

---

## What has and has not been tested

Tested automatically in headless Chromium (Playwright) against the production build, the single-file build opened
from disk, and the dev server:

- every nav link scrolls to the right section and highlights as active; mobile menu opens, closes (Escape and link click)
- all 3 project modals: open, labelled `role="dialog"`, background made `inert`, focus trapped, Escape / close button / backdrop close, focus returns to the button that opened it
- contact form (against a *mocked* FormSubmit, not the real service): validation errors, focus on first error, loading state, success, the not-yet-activated notice, server and network errors, correct recipient and payload, honeypot
- no horizontal overflow at 320, 375, 768, 1024, 1440 and 1920 px; project mockups fit their frames at each width
- `prefers-reduced-motion`: all content visible, no smooth scroll
- no console errors or warnings; buttons at least 44px tall; external links use `rel="noopener noreferrer"`

- **View CV** opens `cv.pdf` in a new tab (the request is verified; headless Chromium has no PDF viewer, so how the PDF *looks* in your browser's viewer was not checked); **Download CV** still downloads it

**Not tested:** real delivery of a message to your inbox (needs the activation step above), real devices and other browsers (Safari, Firefox), screen-reader testing, Lighthouse scores, a live
deployment. Do these before you rely on the site. In particular, run Lighthouse in Chrome
DevTools after deploying and fix whatever it reports; no score is claimed here.

## Final checklist before you share the link

- [ ] Replace `public/cv.pdf` with your CV and click **Download CV** on the live site
- [ ] Add the Project 03 repo link and live demo links for all projects
- [ ] Review each feature list, then set `featureStatus: 'implemented'` where true
- [ ] Replace the `[Edit me]` challenges and lessons with your own words
- [ ] Add real screenshots (compressed, with width/height)
- [ ] Send a test message through the live form, click the FormSubmit activation email, then send a second one and confirm it arrives
- [ ] Add `og:url` and `og:image`; run Lighthouse; test on your phone
