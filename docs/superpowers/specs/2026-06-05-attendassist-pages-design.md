# AttendAssist Pages — Design Spec
**Date:** 2026-06-05
**Scope:** Build system (template + generator) and main `/attendassist` landing page

---

## 1. Goal

Create a static SEO landing page system for AttendAssist at `devravik.github.io/attendassist/` covering all 4 app pillars (Attendance & Payroll, Household Staff, Rent & Tenant, Classroom) plus the offline/private/free positioning. Start with the template + main landing page; extend to all 20 target pages in follow-up sessions.

---

## 2. File Structure

```
attendassist/
├── build.js                        ← Node.js build script (zero deps)
├── index.html                      ← generated: /attendassist/
└── <slug>/
    └── index.html                  ← generated: /attendassist/<slug>/
```

Run `node attendassist/build.js` to regenerate all pages.

---

## 3. Build System (build.js)

**Pattern:** Data-in-JS + template literals. Zero npm dependencies, runs with `node` only.

**Structure of build.js:**
- `PAGES[]` — array of page config objects
- `template(page)` — function returning full HTML string
- `generate()` — writes each page's `index.html` to the correct directory (creates dirs as needed)

**Page config shape:**
```js
{
  slug: 'maid-attendance-app',       // '' for main landing
  title: 'Maid Attendance App — AttendAssist',
  description: 'SEO meta description string',
  hero: {
    h1: '...',
    subtext: '...',
    screenshot: 'scr-maid-attendance.jpeg',  // placed by user later
  },
  sections: [                        // ordered list of section configs
    { type: 'features', items: [...] },
    { type: 'screenshots', items: [...] },
    { type: 'cta' },
  ]
}
```

**Section types available in template:**
- `hero` — h1, subtext, banner/screenshot, two CTA buttons
- `trust_strip` — 3 badges (Offline, No Account, Free)
- `pillars` — 4-card grid linking to feature pages
- `features` — icon + title + description list (USPs)
- `screenshots` — horizontal scrollable strip with labeled images
- `tools_teaser` — 28 financial tools category grid
- `cta` — full-width navy download section
- `footer` — links back to devravik.github.io, privacy, donate

---

## 4. Landing Page (`/attendassist`) — Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Sticky nav | Logo (`attendance-app-logo.png`) + wordmark · "Download Free" → Play Store |
| 2 | Hero | H1: "All-in-one attendance, payroll, rent & classroom management" · tagline one-liner · Download + Screenshots CTAs · `attendance-app-banner.png` |
| 3 | Trust strip | 100% Offline · No Account Needed · Completely Free |
| 4 | 4 Pillars grid | Household Staff · Attendance & Payroll · Rent & Tenant · Classroom — each links to its feature sub-page |
| 5 | USP section | Privacy first · All-in-one · 28 free tools — 3 highlighted USPs from the 10 listed in feature guide |
| 6 | Screenshots strip | Horizontal scroll of `scr1–scr14.jpeg`, each labeled with feature name |
| 7 | 28 Tools teaser | Category grid (Investments, Loans, Savings, Everyday, Business) with CTA |
| 8 | Download CTA | Navy full-width section, Play Store button |
| 9 | Footer | devravik.github.io · Privacy · Donate (buymeacoffee) |

---

## 5. Design Tokens

| Token | Value |
|-------|-------|
| Primary Navy | `#1C355E` |
| Gold Accent | `#E8B76D` |
| Background | `#FCFCFC` |
| Card BG | `#F8F6F1` |
| Success Green | `#4F9D7E` |
| Error Red | `#9C3B4B` |
| Border | `#E3D5BF` |
| Font | Poppins (Google Fonts — Regular 400, Medium 500, SemiBold 600, Bold 700) |
| Border radius | 8px buttons/inputs · 12px cards · 16px content sections |
| Max content width | 1100px centered |

---

## 6. Screenshot Conventions

- On feature-specific sub-pages, `<img>` tags reference descriptive filenames: `scr-attendance-calendar.jpeg`, `scr-payroll.jpeg`, etc.
- Files do not exist yet; user will add them to `assets/attendassist/` later.
- Images use `loading="lazy"` and meaningful `alt` text.
- The main landing uses existing `scr1–scr14.jpeg` labeled by feature name in caption text.

---

## 7. SEO Requirements

Each generated page must include:
- Unique `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Canonical `<link rel="canonical">`
- Structured data: `MobileApplication` JSON-LD on the main landing
- `robots.txt` already present in repo root — no changes needed

---

## 8. Target Pages (Phase 1 — this session)

| # | Slug | Focus |
|---|------|-------|
| 1 | *(root)* | Main landing — all pillars |

Phase 2 (follow-up session): remaining 19 pages from the user's priority list.

---

## 9. Play Store Link

`https://play.google.com/store/apps/details?id=com.devravik.attendassist`

---

## 10. Out of Scope (this session)

- Sitemap.xml generation (can be added to build.js later)
- Blog pages
- Comparison pages
- Any of the 19 feature sub-pages (Phase 2)
