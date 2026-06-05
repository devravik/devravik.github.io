# AttendAssist Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `attendassist/build.js` — a zero-dependency Node.js static site generator — and run it to produce the main `/attendassist/index.html` landing page covering all 4 app pillars with the navy/gold design system.

**Architecture:** A single `build.js` file holds a `PAGES[]` array of page configs and a `template(page)` function using template literals. Running `node attendassist/build.js` writes `index.html` files into the correct directory. The landing page has 7 sections: hero, trust strip, pillars grid, features grid, screenshots scroll, tools teaser, and download CTA.

**Tech Stack:** Node.js (built-ins only: `fs`, `path`) · HTML · CSS (Poppins via Google Fonts) · Static output on GitHub Pages

---

## Files

| Action | Path | Purpose |
|--------|------|---------|
| Create | `attendassist/build.js` | Build script: page configs + template + section renderers + file writer |
| Generate | `attendassist/index.html` | Output — main landing page at `/attendassist/` |

---

## Task 1: Create `attendassist/build.js`

**Files:**
- Create: `attendassist/build.js`

- [ ] **Step 1: Write the full build script**

Create `attendassist/build.js` with this exact content:

```js
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.devravik.attendassist';
const BASE_URL = 'https://devravik.github.io';
const ASSETS = '/assets/attendassist';

// ─── Page configs ─────────────────────────────────────────────────────────────

const PAGES = [
  {
    slug: '',
    title: 'AttendAssist — Attendance, Payroll, Rent & Classroom App',
    description: 'Free offline app for tracking staff attendance, employee payroll, tenant rent, and classroom students. No account required. 100% private, zero cloud.',
    canonical: `${BASE_URL}/attendassist/`,
    ogImage: `${BASE_URL}${ASSETS}/attendance-app-banner.png`,
    sections: [
      { type: 'hero' },
      { type: 'trust_strip' },
      { type: 'pillars' },
      { type: 'features' },
      { type: 'screenshots' },
      { type: 'tools_teaser' },
      { type: 'cta' },
    ],
  },
];

// ─── Section renderers ────────────────────────────────────────────────────────

function heroSection() {
  return `
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>Attendance. Payroll. Rent.<br>Classroom. One app.</h1>
        <p class="hero-sub">AttendAssist replaces spreadsheets and paper registers — track staff, tenants, and students all offline, for free, with zero cloud dependency.</p>
        <div class="hero-actions">
          <a href="${PLAY_STORE_URL}" class="btn btn-primary" target="_blank" rel="noopener">Download Free on Play Store</a>
          <a href="#screenshots" class="btn btn-outline">See Screenshots</a>
        </div>
        <p class="hero-note">No ads &middot; No subscriptions &middot; No account required</p>
      </div>
      <div class="hero-image">
        <img src="${ASSETS}/attendance-app-banner.png" alt="AttendAssist app screenshot" width="480" loading="eager" />
      </div>
    </div>
  </section>`;
}

function trustStripSection() {
  const badges = [
    { icon: '📴', title: '100% Offline', sub: 'No internet required, ever' },
    { icon: '🔒', title: 'No Account Needed', sub: 'Zero sign-up, zero email' },
    { icon: '🆓', title: 'Completely Free', sub: 'No ads, no subscriptions' },
  ];
  return `
  <section class="trust-strip">
    <div class="container trust-inner">
      ${badges.map(b => `
      <div class="trust-badge">
        <span class="trust-icon">${b.icon}</span>
        <div>
          <strong>${b.title}</strong>
          <span>${b.sub}</span>
        </div>
      </div>`).join('')}
    </div>
  </section>`;
}

function pillarsSection() {
  const pillars = [
    {
      icon: '🏠',
      title: 'Household Staff',
      sub: 'Track maids, cooks, drivers, and more. Daily attendance + salary history per person.',
      href: '/attendassist/household-staff-attendance/',
    },
    {
      icon: '📋',
      title: 'Attendance & Payroll',
      sub: 'Mark daily status, export monthly CSV, record salary, bonus, and advance payments.',
      href: '/attendassist/staff-attendance-app/',
    },
    {
      icon: '🏘️',
      title: 'Rent & Tenant',
      sub: 'Monthly rent tracking, security deposit, yearly summaries — per tenant.',
      href: '/attendassist/rent-management-app/',
    },
    {
      icon: '📚',
      title: 'Classroom',
      sub: 'Bulk attendance, fee collection, student roll numbers — built for tutors and coaching centers.',
      href: '/attendassist/classroom-management-app/',
    },
  ];
  return `
  <section class="pillars">
    <div class="container">
      <h2>Everything you manage, in one app</h2>
      <p class="section-sub">Three entity types — Household, Business, Classroom — unified in a single interface.</p>
      <div class="pillars-grid">
        ${pillars.map(p => `
        <a class="pillar-card" href="${p.href}">
          <span class="pillar-icon">${p.icon}</span>
          <h3>${p.title}</h3>
          <p>${p.sub}</p>
          <span class="pillar-link">Learn more →</span>
        </a>`).join('')}
      </div>
    </div>
  </section>`;
}

function featuresSection() {
  const usps = [
    {
      icon: '🔐',
      title: 'Privacy First',
      body: 'All data lives on your device in SQLite. No servers, no cloud, no tracking. Your staff and tenant data never leaves your phone.',
    },
    {
      icon: '📦',
      title: 'All-in-One',
      body: 'Attendance, payroll, rent, classroom, to-do list, and 28 financial tools — one app, nothing to install separately.',
    },
    {
      icon: '📊',
      title: '28 Free Tools',
      body: 'SIP, FD, EMI, GST, unit converter, salary calculator — a full financial toolkit included at no extra cost.',
    },
    {
      icon: '💾',
      title: 'Full Data Portability',
      body: 'Export everything as JSON, import onto any device. Switch phones without losing a single record.',
    },
    {
      icon: '⚡',
      title: 'Smart Reminders',
      body: "Background notifications if attendance hasn't been marked within 2+ hours of the usual arrival time.",
    },
    {
      icon: '🎯',
      title: '40 Ready-to-Use Roles',
      body: '14 household roles (maid, cook, driver…) and 26 business roles with icons — get started instantly.',
    },
  ];
  return `
  <section class="features">
    <div class="container">
      <h2>Why teams choose AttendAssist</h2>
      <div class="features-grid">
        ${usps.map(u => `
        <div class="feature-card">
          <span class="feature-icon">${u.icon}</span>
          <h3>${u.title}</h3>
          <p>${u.body}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

const SCREENSHOTS = [
  { file: 'scr1.jpeg',   label: 'Dashboard overview' },
  { file: 'scr2.jpeg',   label: 'Staff list' },
  { file: 'scr3.jpeg',   label: 'Add staff' },
  { file: 'scr4.jpeg',   label: 'Attendance calendar' },
  { file: 'scr5.jpeg',   label: 'Monthly stats' },
  { file: 'scr6.jpeg',   label: 'Payroll view' },
  { file: 'scr7.jpeg',   label: 'Add payment' },
  { file: 'scr8.jpeg',   label: 'Tenant management' },
  { file: 'scr9.jpeg',   label: 'Rent history' },
  { file: 'scr10.jpeg',  label: 'Classroom view' },
  { file: 'scr11.jpeg',  label: 'Student attendance' },
  { file: 'scr12.jpeg',  label: 'Financial tools' },
  { file: 'scr12a.jpeg', label: 'Calculator' },
  { file: 'scr14.jpeg',  label: 'Settings' },
];

function screenshotsSection() {
  return `
  <section class="screenshots" id="screenshots">
    <div class="container">
      <h2>See it in action</h2>
      <p class="section-sub">Clean, warm design. One primary action per screen.</p>
    </div>
    <div class="screenshots-scroll">
      ${SCREENSHOTS.map(s => `
      <figure class="screenshot-item">
        <img src="${ASSETS}/${s.file}" alt="AttendAssist — ${s.label}" loading="lazy" width="180" />
        <figcaption>${s.label}</figcaption>
      </figure>`).join('')}
    </div>
  </section>`;
}

function toolsTeaserSection() {
  const categories = [
    { name: 'Investments', tools: 'SIP · Lumpsum · PPF · NPS · SWP · Goal Planner' },
    { name: 'Loans & EMI', tools: 'Home Loan · Car Loan · Bike Loan · Rent vs Buy' },
    { name: 'Savings', tools: 'Fixed Deposit · Recurring Deposit · Retirement' },
    { name: 'Everyday', tools: 'Salary · Compound Interest · Profit · Discount · Inflation' },
    { name: 'Business Utilities', tools: 'GST · Cash Counter · Unit Converter · Age · Date Diff' },
  ];
  return `
  <section class="tools-teaser">
    <div class="container">
      <div class="tools-header">
        <div>
          <h2>28 financial tools. Free.</h2>
          <p class="section-sub">Usually sold as separate apps. Included in AttendAssist at no cost.</p>
        </div>
        <a href="${PLAY_STORE_URL}" class="btn btn-gold" target="_blank" rel="noopener">Get the App</a>
      </div>
      <div class="tools-grid">
        ${categories.map(c => `
        <div class="tool-category">
          <h4>${c.name}</h4>
          <p>${c.tools}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function ctaSection() {
  return `
  <section class="cta-section">
    <div class="container cta-inner">
      <img src="${ASSETS}/attendance-app-logo.png" alt="AttendAssist logo" width="64" height="64" />
      <div>
        <h2>Start tracking in 30 seconds</h2>
        <p>Free download. No account. Works offline from day one.</p>
      </div>
      <a href="${PLAY_STORE_URL}" class="btn btn-gold" target="_blank" rel="noopener">Download on Play Store</a>
    </div>
  </section>`;
}

function footerSection() {
  return `
  <footer class="site-footer">
    <div class="container footer-inner">
      <span>© 2026 <a href="https://devravik.github.io">devravik</a></span>
      <nav class="footer-links">
        <a href="https://devravik.github.io">Portfolio</a>
        <a href="${PLAY_STORE_URL}" target="_blank" rel="noopener">Play Store</a>
        <a href="https://buymeacoffee.com/devravik" target="_blank" rel="noopener">Donate</a>
      </nav>
    </div>
  </footer>`;
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function jsonLd(page) {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "AttendAssist",
  "operatingSystem": "Android",
  "applicationCategory": "BusinessApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "${PLAY_STORE_URL}",
  "description": "${page.description}",
  "image": "${page.ogImage}"
}
</script>`;
}

// ─── CSS ──────────────────────────────────────────────────────────────────────

const CSS = `
  :root {
    --navy: #1C355E;
    --gold: #E8B76D;
    --bg: #FCFCFC;
    --card-bg: #F8F6F1;
    --green: #4F9D7E;
    --border: #E3D5BF;
    --cream: #E8DCC8;
    --text: #1a1a2e;
    --text-muted: #5a6070;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --shadow-sm: 0 1px 3px rgba(28,53,94,.08);
    --shadow-md: 0 4px 12px rgba(28,53,94,.12);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Poppins', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    font-size: 16px;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 24px; border-radius: var(--radius-sm); font-family: inherit;
    font-size: 15px; font-weight: 600; cursor: pointer;
    transition: opacity .15s, transform .1s; white-space: nowrap;
  }
  .btn:hover { opacity: .9; transform: translateY(-1px); }
  .btn-primary { background: var(--navy); color: #fff; }
  .btn-outline { background: transparent; color: var(--navy); border: 2px solid var(--navy); }
  .btn-gold { background: var(--gold); color: var(--navy); }

  .site-nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(252,252,252,.95); backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border); padding: 12px 0;
  }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .nav-brand { display: flex; align-items: center; gap: 10px; }
  .nav-logo { width: 36px; height: 36px; border-radius: 8px; object-fit: cover; }
  .nav-wordmark { font-size: 18px; font-weight: 700; color: var(--navy); }

  .hero { padding: 72px 0 56px; }
  .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .hero-text h1 { font-size: 40px; font-weight: 700; color: var(--navy); line-height: 1.2; margin-bottom: 16px; }
  .hero-sub { font-size: 17px; color: var(--text-muted); margin-bottom: 28px; max-width: 480px; }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
  .hero-note { font-size: 13px; color: var(--text-muted); }
  .hero-image img { border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%; }

  .trust-strip { background: var(--navy); padding: 24px 0; }
  .trust-inner { display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; }
  .trust-badge { display: flex; align-items: center; gap: 12px; color: #fff; }
  .trust-icon { font-size: 28px; }
  .trust-badge strong { display: block; font-size: 15px; font-weight: 600; }
  .trust-badge span { font-size: 13px; opacity: .75; }

  .pillars { padding: 80px 0; }
  .pillars h2, .features h2, .screenshots h2 {
    font-size: 32px; font-weight: 700; color: var(--navy);
    text-align: center; margin-bottom: 8px;
  }
  .section-sub { color: var(--text-muted); text-align: center; margin-bottom: 40px; font-size: 16px; }
  .pillars-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .pillar-card {
    background: var(--card-bg); border: 1px solid var(--border);
    border-radius: var(--radius-md); padding: 28px 20px;
    transition: box-shadow .15s, transform .15s;
    display: flex; flex-direction: column; gap: 8px;
  }
  .pillar-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .pillar-icon { font-size: 32px; }
  .pillar-card h3 { font-size: 16px; font-weight: 700; color: var(--navy); }
  .pillar-card p { font-size: 14px; color: var(--text-muted); flex: 1; }
  .pillar-link { font-size: 13px; font-weight: 600; color: var(--navy); margin-top: 4px; }

  .features { padding: 80px 0; background: var(--card-bg); }
  .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .feature-card {
    background: #fff; border: 1px solid var(--border);
    border-radius: var(--radius-md); padding: 28px 24px; box-shadow: var(--shadow-sm);
  }
  .feature-icon { font-size: 28px; margin-bottom: 12px; display: block; }
  .feature-card h3 { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
  .feature-card p { font-size: 14px; color: var(--text-muted); }

  .screenshots { padding: 80px 0; overflow: hidden; }
  .screenshots-scroll {
    display: flex; gap: 16px; overflow-x: auto; padding: 8px 24px 20px;
    scrollbar-width: thin; scrollbar-color: var(--border) transparent;
  }
  .screenshot-item { flex: 0 0 auto; text-align: center; }
  .screenshot-item img { border-radius: var(--radius-md); box-shadow: var(--shadow-md); width: 180px; height: auto; }
  .screenshot-item figcaption { font-size: 12px; color: var(--text-muted); margin-top: 8px; }

  .tools-teaser { padding: 80px 0; background: var(--navy); color: #fff; }
  .tools-header {
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 24px; margin-bottom: 40px; flex-wrap: wrap;
  }
  .tools-teaser h2 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
  .tools-teaser .section-sub { color: rgba(255,255,255,.7); text-align: left; margin-bottom: 0; }
  .tools-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
  .tool-category {
    background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15);
    border-radius: var(--radius-md); padding: 20px 16px;
  }
  .tool-category h4 { font-size: 14px; font-weight: 700; color: var(--gold); margin-bottom: 8px; }
  .tool-category p { font-size: 12px; color: rgba(255,255,255,.7); line-height: 1.7; }

  .cta-section { padding: 72px 0; background: var(--card-bg); border-top: 1px solid var(--border); }
  .cta-inner {
    display: flex; align-items: center; gap: 32px;
    flex-wrap: wrap; justify-content: center; text-align: center;
  }
  .cta-inner img { border-radius: var(--radius-md); flex-shrink: 0; }
  .cta-inner h2 { font-size: 28px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .cta-inner p { color: var(--text-muted); font-size: 15px; }

  .site-footer { padding: 24px 0; border-top: 1px solid var(--border); }
  .footer-inner {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px; font-size: 14px; color: var(--text-muted);
  }
  .footer-links { display: flex; gap: 20px; }
  .footer-links a:hover, .footer-inner a:hover { color: var(--navy); }

  @media (max-width: 900px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-image { order: -1; }
    .hero-text h1 { font-size: 32px; }
    .pillars-grid { grid-template-columns: repeat(2, 1fr); }
    .features-grid { grid-template-columns: repeat(2, 1fr); }
    .tools-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .hero-text h1 { font-size: 26px; }
    .pillars-grid { grid-template-columns: 1fr; }
    .features-grid { grid-template-columns: 1fr; }
    .tools-grid { grid-template-columns: 1fr; }
    .trust-inner { flex-direction: column; align-items: flex-start; padding: 0 24px; }
    .cta-inner { flex-direction: column; }
  }
`;

// ─── HTML template ────────────────────────────────────────────────────────────

const SECTION_RENDERERS = {
  hero: heroSection,
  trust_strip: trustStripSection,
  pillars: pillarsSection,
  features: featuresSection,
  screenshots: screenshotsSection,
  tools_teaser: toolsTeaserSection,
  cta: ctaSection,
};

function template(page) {
  const sectionsHtml = page.sections
    .map(s => SECTION_RENDERERS[s.type]())
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <link rel="canonical" href="${page.canonical}" />
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${page.canonical}" />
  <meta property="og:image" content="${page.ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>${CSS}</style>
</head>
<body>
  <nav class="site-nav">
    <div class="container nav-inner">
      <a class="nav-brand" href="/attendassist/">
        <img class="nav-logo" src="${ASSETS}/attendance-app-logo.png" alt="AttendAssist logo" />
        <span class="nav-wordmark">AttendAssist</span>
      </a>
      <a href="${PLAY_STORE_URL}" class="btn btn-primary" target="_blank" rel="noopener">Download Free</a>
    </div>
  </nav>
  ${sectionsHtml}
  ${footerSection()}
  ${jsonLd(page)}
</body>
</html>`;
}

// ─── File writer ──────────────────────────────────────────────────────────────

function generate() {
  for (const page of PAGES) {
    const dir = page.slug ? path.join(ROOT, page.slug) : ROOT;
    fs.mkdirSync(dir, { recursive: true });
    const outPath = path.join(dir, 'index.html');
    fs.writeFileSync(outPath, template(page), 'utf8');
    console.log(`✓  ${outPath.replace(process.cwd() + '/', '')}`);
  }
  console.log(`\nDone — ${PAGES.length} page(s) generated.`);
}

generate();
```

---

## Task 2: Run the build and verify output

**Files:**
- Generates: `attendassist/index.html`

- [ ] **Step 1: Run the build script**

```bash
node attendassist/build.js
```

Expected output:
```
✓  attendassist/index.html

Done — 1 page(s) generated.
```

- [ ] **Step 2: Verify the file was created**

```bash
ls -lh attendassist/index.html
```

Expected: file exists, size > 10KB.

- [ ] **Step 3: Verify HTML structure**

```bash
grep -c '<section' attendassist/index.html
```

Expected: `7` (hero, trust-strip, pillars, features, screenshots, tools-teaser, cta-section).

- [ ] **Step 4: Verify key content**

```bash
grep -q 'AttendAssist' attendassist/index.html && echo "title OK"
grep -q 'com.devravik.attendassist' attendassist/index.html && echo "Play Store link OK"
grep -q 'application/ld+json' attendassist/index.html && echo "JSON-LD OK"
grep -q 'Poppins' attendassist/index.html && echo "font OK"
grep -q 'og:image' attendassist/index.html && echo "OG image OK"
```

Expected: all five lines print `OK`.

- [ ] **Step 5: Open in browser to visually verify**

```bash
xdg-open attendassist/index.html 2>/dev/null || open attendassist/index.html 2>/dev/null || echo "open manually: attendassist/index.html"
```

Check: nav renders, hero has banner image, trust strip is navy, all 4 pillar cards display, screenshots scroll horizontally, tools grid shows on dark navy background, footer links present.

---

## Task 3: Commit

- [ ] **Step 1: Stage and commit**

```bash
git add attendassist/build.js attendassist/index.html
git commit -m "$(cat <<'EOF'
feat: add AttendAssist landing page with static site generator

Adds attendassist/build.js (zero-dep Node.js builder) and generates
the main /attendassist/ landing with hero, trust strip, 4-pillar grid,
feature cards, screenshot strip, 28-tools teaser, and download CTA.
Run `node attendassist/build.js` to regenerate.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

Expected: commit succeeds, shows `2 files changed`.
