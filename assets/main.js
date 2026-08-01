import { site, profiles } from "../content/site.js";

const urlParams = new URLSearchParams(window.location.search);
const reqProfile = urlParams.get("profile");
const activeProfileSlug = (reqProfile && profiles[reqProfile]) ? reqProfile : "backend";
const activeProfile = profiles[activeProfileSlug];
const pdfFilename = activeProfileSlug === "backend" ? "Ravi_K_Gupta_Resume.pdf" : `Ravi_K_Gupta_Resume_${activeProfileSlug}.pdf`;
const pdfPath = `./assets/${pdfFilename}`;
const showTargetSelector = urlParams.get("target") === "1";

const root = document.getElementById("root");

// Section header with a numbered eyebrow + bold title + optional subtext.
const sectionHeader = (num, eyebrow, title, printTitle = "", subtext = "") => {
  const pTitle = printTitle || title;
  const subTextStr = typeof subtext === "string" ? subtext : "";
  return `
  <div class="section-header reveal">
    <span class="section-eyebrow">${num} · ${eyebrow}</span>
    <h2 class="section-title">
      <span class="title-screen">${title}</span>
      <span class="title-print">${pTitle}</span>
    </h2>
    ${subTextStr ? `<p class="body-text section-subtitle" style="margin-top:6px;color:var(--text-muted);font-size:0.95rem;">${subTextStr}</p>` : ""}
  </div>
`;
};

// Map skill & brand strings -> logo filename in /assets/logos.
// Keys are tested as substrings (case-insensitive) against each label / url.
const skillLogos = [
  ["waggingtail", "waggingtail-logo.png"],
  ["infoicon", "infoicon-logo.png"],
  ["webzesty", "webzesty-logo.png"],
  ["sunhill", "sunhill-logo.png"],
  ["laravel", "laravel-com-logo.png"],
  ["php", "php-net-logo.png"],
  ["codeigniter", "codeigniter-com-logo.png"],
  ["wordpress", "wordpress-com-logo.png"],
  ["apache", "apache-org-logo.png"],
  ["graphql", "graphql-org-logo.png"],
  ["grpc", "grpc-io-logo.png"],
  ["kafka", "kafka-summit-org-logo.png"],
  ["pusher", "pusher-com-logo.png"],
  ["go", "golangweekly-com-logo.png"],
  ["javascript", "typescript-com-logo.png"],
  ["typescript", "typescript-com-logo.png"],
  ["python", "python-org-logo.png"],
  ["node", "nodejs-org-logo.png"],
  ["mysql", "mysql-com-logo.png"],
  ["mongodb", "mongodb-com-logo.png"],
  ["postgres", "postgresql-org-logo.png"],
  ["algolia", "algolia-com-logo.png"],
  ["meilisearch", "meilisearch-com-logo.png"],
  ["elastic", "elastic-co-logo.png"],
  ["aws", "aws-logo.png"],
  ["digitalocean", "digitalocean-com-logo.png"],
  ["linux", "ubuntu-com-logo.png"],
  ["ubuntu", "ubuntu-com-logo.png"],
  ["vercel", "vercel-com-logo.png"],
  ["docker", "docker-com-logo.png"],
  ["kubernetes", "kubernetes-io-logo.png"],
  ["nginx", "nginx-org-logo.png"],
  ["github", "github-blog-logo.png"],
  ["linkedin", "linkedin-com-logo.png"],
  ["packagist", "packagist-com-logo.png"],
  ["instagram", "instagram-com-logo.png"],
  ["stackoverflow", "stackoverflow-com-logo.png"],
  ["play store", "googleplaylivros-com-logo.png"],
  ["play.google", "googleplaylivros-com-logo.png"],
  ["google play", "googleplaylivros-com-logo.png"],
  ["redis", "redis-net-cn-logo.png"],
  ["vue", "vuejs-org-logo.png"],
  ["tailwind", "tailwindcss-com-logo.png"],
  ["shadcn", "shadcn-io-logo.png"],
  ["react native", "reactnative-dev-logo.png"],
  ["react", "react-dev-logo.png"],
  ["next", "nextjs-org-logo.png"],
  ["expo", "expo-dev-logo.png"],
  ["claude", "claude-ai-logo.png"],
  ["anthropic", "anthropic-com-logo.png"],
  ["openai", "openai.jpg"],
  ["deepseek", "deepseek-com-logo.png"],
  ["cursor", "cursor-com-logo.png"],
  ["opencode", "opencode-ai-logo.png"],
  ["google", "google-com-logo.png"],
  ["fastapi", "tiangolo-com-logo.png"],
  ["statamic", "statamic-com-logo.png"],
  ["neon", "neon-com-logo.png"],
  ["supabase", "supabase-com-logo.png"],
  ["netlify", "sweet-pie-c52a63-blog-netlify-app-logo.png"],
  ["ollama", "ollama-com-logo.png"],
  ["langchain", "langchain-com-logo.png"],
];

const logoFor = (label = "") => {
  const l = label.toLowerCase();
  let best = null;
  let bestPos = Infinity;
  for (const [key, file] of skillLogos) {
    const pos = l.indexOf(key);
    if (pos === -1) continue;
    if (pos < bestPos || (pos === bestPos && best && key.length > best[0].length)) {
      best = [key, file];
      bestPos = pos;
    }
  }
  return best ? `./assets/logos/${best[1]}` : null;
};

// Feather-style stroke icons (24x24) used as fallback when a skill has no
// brand logo. Keyed the same way as skillLogos (substring, case-insensitive).
const iconPaths = {
  layers:
    '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  "trending-up":
    '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
  key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
  search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
  cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
  "upload-cloud":
    '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
  "bar-chart-2":
    '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  package:
    '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
};

const skillIcons = [
  ["azure", "cloud"],
  ["serverless", "upload-cloud"],
  ["observability", "bar-chart-2"],
  ["monitoring", "activity"],
  ["jwt", "key"],
  ["authentication", "key"],
  ["tenant", "shield"],
  ["scaling", "trending-up"],
  ["performance", "activity"],
  ["microservices", "box"],
  ["architecture", "layers"],
  ["system design", "layers"],
  ["data", "database"],
  ["modeling", "database"],
  ["query", "search"],
  ["indexing", "search"],
  ["optimization", "zap"],
  ["pipelines", "cpu"],
  ["queues", "cpu"],
  ["background", "cpu"],
  ["deployment", "package"],
  ["api", "server"],
];

const iconFor = (label = "") => {
  const l = label.toLowerCase();
  let best = null;
  let bestPos = Infinity;
  for (const [key, icon] of skillIcons) {
    const pos = l.indexOf(key);
    if (pos === -1) continue;
    if (pos < bestPos || (pos === bestPos && best && key.length > best[0].length)) {
      best = [key, icon];
      bestPos = pos;
    }
  }
  return best ? best[1] : null;
};

const svgIcon = (name, className = "") =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;

const getBrandLogoUrl = (label = "", href = "") => {
  const l = label.toLowerCase();
  if (l.includes("live site") || l.includes("website") || l.includes("demo") || l.includes("app")) {
    return null;
  }
  if (href.includes("github.io") && !l.includes("github")) {
    return null;
  }
  return logoFor(label + " " + href);
};

const renderLinkWithLogo = (link, extraClass = "") => {
  const logo = getBrandLogoUrl(link.label, link.href);
  const imgHtml = logo
    ? `<img src="${logo}" alt="" class="brand-link-logo" aria-hidden="true" />`
    : `<svg class="brand-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
  const cleanUrl = link.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return `<a href="${link.href}" target="_blank" rel="noopener noreferrer" class="link-primary brand-link ${extraClass}">${imgHtml}<span class="link-screen-label">${link.label}</span><span class="link-print-url">${cleanUrl}</span></a>`;
};

// One skill: optional small monochrome logo tile + label.
const skillItem = (label) => {
  const logo = logoFor(label);
  const icon = iconFor(label);
  const media = logo
    ? `<img class="skill-logo" src="${logo}" alt="" aria-hidden="true" loading="lazy" />`
    : icon
      ? svgIcon(icon, "skill-icon")
      : "";
  return `<span class="skill-item">${media}<span class="skill-name">${label}</span></span>`;
};

// Skill chip with brand logo
const renderSkillChip = (label) => {
  const logo = logoFor(label);
  const icon = iconFor(label);
  const media = logo
    ? `<img src="${logo}" alt="" class="chip-brand-logo" aria-hidden="true" loading="lazy" />`
    : icon
      ? svgIcon(icon, "chip-brand-logo chip-brand-icon")
      : "";
  return `<span class="chip chip-soft">${media}<span>${label}</span></span>`;
};

if (root) {
  root.innerHTML = `
    <canvas id="animatedLogoBg"></canvas>
    <div class="scroll-progress" id="scrollProgress"></div>
    <button id="backToTop" class="back-to-top" aria-label="Back to top">
      <svg class="progress-ring" width="44" height="44" viewBox="0 0 44 44">
        <circle class="progress-ring-bg" cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2.5" />
        <circle class="progress-ring-circle" cx="22" cy="22" r="18" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="113.097" stroke-dashoffset="113.097" stroke-linecap="round" />
      </svg>
      <svg class="arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
    <div class="shell">
      <div class="print-only-header">
        <h1 class="print-name">${site.hero.name}</h1>
        <p class="print-title">${activeProfile.printTitle}</p>
        <div class="print-contact">
          <div class="print-contact-row">
            <span><strong>Email:</strong> <a href="mailto:${site.contact.email}">${site.contact.email}</a></span> &bull; 
            <span><strong>Location:</strong> ${site.hero.location}</span> &bull; 
            <span><strong>Mobile:</strong> <a href="tel:+918285893766">${site.contact.phone}</a></span>
          </div>
          <div class="print-contact-row" style="margin-top:2px;">
            <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ravi-k-dev" target="_blank" rel="noopener noreferrer">linkedin.com/in/ravi-k-dev</a></span> &bull; 
            <span><strong>GitHub:</strong> <a href="https://github.com/devravik" target="_blank" rel="noopener noreferrer">github.com/devravik</a></span> &bull; 
            <span><strong>Portfolio:</strong> <a href="https://devravik.github.io" target="_blank" rel="noopener noreferrer">devravik.github.io</a></span>
          </div>
        </div>
      </div>
      <header class="topbar">
        <div class="topbar-inner">
          <a href="#top" class="topbar-brand">
            <span class="topbar-dot"></span>
            <div class="topbar-brand-text">
              <span class="topbar-name">${site.hero.name}</span>
              <span class="topbar-role">${activeProfile.name}</span>
            </div>
          </a>
          <nav class="topbar-nav">
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contributions">Contributions</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section class="hero">
          <div class="hero-inner">
            <div class="hero-main">
              ${showTargetSelector ? `
              <div class="profile-selector-wrap">
                <span class="profile-selector-label">Target Role:</span>
                <div class="profile-pills">
                  ${Object.keys(profiles)
        .map((slug) => {
          const p = profiles[slug];
          const isActive = slug === activeProfileSlug;
          const targetUrl = slug === "backend" ? "./?target=1" : `./?profile=${slug}&target=1`;
          return `<a href="${targetUrl}" class="profile-pill ${isActive ? "active" : ""}">${p.name}</a>`;
        })
        .join("")}
                </div>
              </div>
              ` : ""}
              <p class="hero-kicker">${activeProfile.name}</p>
              <h1 class="hero-title">${site.hero.name}</h1>
              <p class="hero-tagline">${activeProfile.heroTagline.replace(
          /(Laravel & Go|PHP & Laravel|Full Stack Software Engineer|Single-Page Applications|multi-tenant SaaS|REST APIs|Vue\.js|Inertia\.js)/g,
          "<strong>$1</strong>"
        )}</p>
              <ul class="hero-highlights">
                ${site.hero.highlights
        .map((h) => `<li>${h}</li>`)
        .join("")}
              </ul>
              <div class="hero-meta">
                <span>${site.hero.location}</span>
                <span class="sep"></span>
                <span>Open to remote engineering roles</span>
              </div>
              <div class="hero-actions">
                <div class="hero-actions-row">
                  ${site.hero.actions
        .map((action) => {
          const logo = getBrandLogoUrl(action.label, action.href);
          const iconHtml = logo
            ? `<img src="${logo}" alt="" class="btn-brand-logo" aria-hidden="true" />`
            : action.href.startsWith("mailto:")
              ? `<svg class="btn-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
              : "";
          return `<a href="${action.href}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">${iconHtml}<span>${action.label}</span></a>`;
        })
        .join("")}
                </div>
                <div class="hero-actions-row">
                  <a href="${pdfPath}" download="${pdfFilename}" target="_blank" rel="noopener noreferrer" class="btn btn-primary js-download-pdf" title="Download Executive Resume PDF (${activeProfile.name})">
                    <svg class="btn-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download PDF</span>
                  </a>
                  <button class="btn btn-secondary js-print-pdf" title="Print Executive Resume (${activeProfile.name})">
                    <svg class="btn-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    <span>Print Resume</span>
                  </button>
                </div>
              </div>
            </div>
            <aside class="hero-aside">
              <div class="hero-avatar-card">
                <div class="hero-avatar-ring">
                  <img
                    src="./avatar.png"
                    alt="Portrait of ${site.hero.name}"
                    class="hero-avatar"
                  />
                </div>
                <div class="hero-stack">
                  <span class="stack-label">Core stack</span>
                  <div class="stack-tags">
                    ${renderSkillChip("Laravel")}
                    ${renderSkillChip("Go (Fiber)")}
                    ${renderSkillChip("Multi-tenant SaaS")}
                    ${renderSkillChip("APIs")}
                  </div>
                </div>
                <div class="hero-terminal">
                  <div class="terminal-header">
                    <span class="dot red"></span>
                    <span class="dot amber"></span>
                    <span class="dot green"></span>
                    <span class="terminal-title">session: ${activeProfileSlug}.ravi</span>
                  </div>
                  <div class="terminal-body">
                    <code><span class="prompt">$</span> tail -f work.log
<span class="out">&gt;</span> target role: ${activeProfile.name}
<span class="out">&gt;</span> hardening backends &amp; APIs
<span class="out">&gt;</span> keeping systems fast &amp; reliable</code>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" class="section">
          <div class="section-inner">
            ${sectionHeader("01", "About", activeProfile.summaryHeading, activeProfile.summaryHeading)}
            <div class="section-body two-column">
              <div>
                ${activeProfile.summaryParagraphs
        .map((p) => `<p class="body-text">${p}</p>`)
        .join("")}
              </div>
              <div class="section-side">
                <h3 class="section-subheading">What I work on</h3>
                <ul class="bullet-list">
                  ${activeProfile.focusAreas
        .map((item) => `<li>${item}</li>`)
        .join("")}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tech" class="section">
          <div class="section-inner">
            ${sectionHeader("02", "Tech Stack", "Skills & tools", "TECHNICAL SKILLS & COMPETENCIES")}
            <div class="skills-list">
              ${site.skills.categories
      .map(
        (cat) => `
                <div class="skill-row reveal">
                  <div class="skill-label">${cat.name}</div>
                  <div class="skill-items">
                    ${cat.items
            .map((s) => skillItem(s))
            .join("")}
                  </div>
                </div>
              `
      )
      .join("")}
            </div>
          </div>
        </section>

        <section id="education" class="section">
          <div class="section-inner">
            ${sectionHeader("03", "Education", site.education.heading, "EDUCATION & ACADEMIC QUALIFICATIONS")}
            <div class="education-list">
              ${site.education.items
      .map(
        (item) => `
                <article class="education-item card reveal ${item.printHide ? "print-hide" : ""}">
                  <header class="card-header">
                    <div>
                      <h3 class="card-title">${item.degree}</h3>
                      <p class="card-meta">${item.institution}</p>
                      ${item.details ? `<p class="card-details" style="font-size: 0.85rem; color: var(--muted); margin-top: 4px;">${item.details}</p>` : ""}
                    </div>
                    <div class="card-meta text-right">${item.period}</div>
                  </header>
                </article>
              `
      )
      .join("")}
            </div>
          </div>
        </section>

        <section id="experience" class="section">
          <div class="section-inner">
            ${sectionHeader("04", "Experience", site.experience.heading, "PROFESSIONAL EXPERIENCE", site.experience.summary)}
            <div class="timeline">
              ${site.experience.roles
      .map(
        (role) => {
          const logo = getBrandLogoUrl(role.company, role.website);
          const companyHtml = role.website
            ? `<a href="${role.website}" target="_blank" rel="noopener noreferrer" class="link-primary company-link">${role.company} <span class="link-print-url">(${role.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")})</span></a>`
            : role.company;
          const logoHtml = logo
            ? `<img src="${logo}" alt="" class="company-logo" aria-hidden="true" />`
            : "";
          return `
                <article class="timeline-item reveal">
                  <div class="timeline-dot"></div>
                  <div class="timeline-body card">
                    <header class="card-header">
                      <div class="company-header-main">
                        ${logoHtml}
                        <div>
                          <h3 class="card-title">${role.title}</h3>
                          <p class="card-meta">${companyHtml}</p>
                        </div>
                      </div>
                      <div class="card-meta text-right">
                        <div>${role.period}</div>
                        <div>${role.location}</div>
                      </div>
                    </header>
                    <p class="body-text">${role.summary}</p>
                    <ul class="bullet-list">
                      ${role.bullets.map((b) => `<li>${b}</li>`).join("")}
                    </ul>
                    <div class="tag-row">
                      ${role.techStack
              .map((t) => renderSkillChip(t))
              .join("")}
                    </div>
                  </div>
                </article>
              `;
        }
      )
      .join("")}
            </div>
          </div>
        </section>

        <section id="projects" class="section">
          <div class="section-inner">
            ${sectionHeader("05", "Selected Work", site.projects.heading, "FEATURED PROJECTS & SAAS PRODUCTS")}
            <div class="projects-grid">
              ${(() => {
                const featuredNames = (activeProfile.featuredProjects || []).slice(0, 6);
                return site.projects.items
                  .map(
                    (project) => {
                      const isPrintHidden = !featuredNames.includes(project.name);
                      return `
                <article class="project-card reveal layout-${project.layout || "half"} ${isPrintHidden ? "print-hide" : ""}">
                  ${project.image
                    ? `
                  <div class="project-media">
                    <img
                      src="${project.image}"
                      alt="${project.imageAlt || project.name}"
                      class="project-image"
                      loading="lazy"
                    />
                  </div>
                  `
                    : ""
                  }
                  <div class="project-content">
                    <header class="project-header">
                      <div>
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-meta">
                          ${project.category ? `${project.category} · ` : ""}${project.role}${project.period ? `<span class="project-period"> · ${project.period}</span>` : ""}
                        </p>
                      </div>
                      <div class="project-links">
                        ${project.links
                          .map((link) => renderLinkWithLogo(link))
                          .join("")}
                      </div>
                    </header>
                    <p class="body-text">${project.description}</p>
                    <div class="tag-row">
                      ${project.techStack
                        .map((t) => renderSkillChip(t))
                        .join("")}
                    </div>
                  </div>
                </article>
              `;
                    }
                  )
                  .join("");
              })()}
            </div>
          </div>
        </section>

        <section id="contributions" class="section">
          <div class="section-inner">
            ${sectionHeader("06", "Open Source", site.contributions.heading, "OPEN SOURCE CONTRIBUTIONS")}
            <div class="contributions-grid">
              ${site.contributions.items
      .map(
        (contribution) => `
                <article class="project-card reveal">
                  <header class="project-header">
                    <div>
                      <h3 class="project-title">${contribution.name}</h3>
                      <p class="project-meta">
                        ${contribution.version ? `v${contribution.version} · ` : ""}${contribution.stats
            ? `${contribution.stats.downloads} downloads · ${contribution.stats.phpVersion} · ${contribution.stats.license}`
            : ""
          }
                      </p>
                    </div>
                    <div class="project-links">
                      ${contribution.links
            .map((link) => renderLinkWithLogo(link))
            .join("")}
                    </div>
                  </header>
                  <p class="body-text">${contribution.description}</p>
                  <div class="tag-row">
                    ${contribution.techStack
            .map((t) => renderSkillChip(t))
            .join("")}
                  </div>
                </article>
              `
      )
      .join("")}
            </div>
          </div>
        </section>

        <section id="contact" class="section">
          <div class="section-inner">
            ${sectionHeader("07", "Get in Touch", site.contact.heading, "CONTACT & PROFESSIONAL PROFILES")}
            <div class="section-body two-column">
              <div>
                <p class="body-text">
                  I’m ${site.contact.openToWork ? "currently open to" : "selective about"
    } new backend roles, especially remote positions on SaaS or product teams.
                </p>
                <div class="contact-actions" style="display:flex; flex-wrap:wrap; gap:12px; margin-top:20px;">
                  <a href="mailto:${site.contact.email}" class="btn btn-primary">
                    <svg class="btn-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>${site.contact.email}</span>
                  </a>
                  <a href="${pdfPath}" download="${pdfFilename}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary js-download-pdf" title="Download Executive Resume PDF (${activeProfile.name})">
                    <svg class="btn-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download PDF</span>
                  </a>
                  <button class="btn btn-secondary js-print-pdf" title="Print Executive Resume (${activeProfile.name})">
                    <svg class="btn-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    <span>Print Resume</span>
                  </button>
                </div>
              </div>
              <div class="section-side">
                <ul class="contact-list">
                  <li>
                    <span class="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </span>
                    <span class="label">Email</span>
                    <a href="mailto:${site.contact.email}" class="link-primary">${site.contact.email}</a>
                  </li>
                  <li>
                    <span class="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </span>
                    <span class="label">Mobile</span>
                    <a href="tel:+918285893766" class="link-primary">${site.contact.phone}</a>
                  </li>
                  <li>
                    <span class="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </span>
                    <span class="label">Location</span>
                    <span>${site.contact.location}</span>
                  </li>
                  ${site.contact.links
      .map((link) => {
        const logo = getBrandLogoUrl(link.label, link.href);
        const iconHtml = logo
          ? `<img src="${logo}" alt="" class="contact-brand-logo" aria-hidden="true" />`
          : `<svg class="contact-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
        const cleanUrl = link.href.replace(/^https?:\/\/(www\.)?/, "");
        return `
                        <li>
                          <span class="contact-item-icon">${iconHtml}</span>
                          <span class="label">${link.label}</span>
                          <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="link-primary">${cleanUrl}</a>
                        </li>
                      `;
      })
      .join("")}
                </ul>
              </div>
            </div>
            <div class="print-contact-section">
              <ul class="print-contact-grid">
                <li><strong>Email:</strong> <a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
                <li><strong>Mobile:</strong> <a href="tel:+918285893766">${site.contact.phone}</a></li>
                <li><strong>Location:</strong> ${site.contact.location} (Open to Remote Roles)</li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ravi-k-dev" target="_blank">https://www.linkedin.com/in/ravi-k-dev</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/devravik" target="_blank">https://github.com/devravik</a></li>
                <li><strong>Portfolio Website:</strong> <a href="https://devravik.github.io" target="_blank">https://devravik.github.io</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="site-footer-inner">
          <span>© ${new Date().getFullYear()} ${site.hero.name}</span>
          <span class="site-footer-meta">Backend engineering · Laravel · Go · SaaS</span>
        </div>
      </footer>
    </div>
  `;

  // Scroll progress bar & Back-to-Top circular indicator
  const progress = document.getElementById("scrollProgress");
  const backToTopBtn = document.getElementById("backToTop");
  const circle = backToTopBtn ? backToTopBtn.querySelector(".progress-ring-circle") : null;
  const radius = 18;
  const circumference = 2 * Math.PI * radius; // ~113.097

  if (circle) {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
  }

  const onScroll = () => {
    const h = document.documentElement;
    const scrollTotal = h.scrollHeight - h.clientHeight;
    const scrolled = scrollTotal > 0 ? (h.scrollTop / scrollTotal) * 100 : 0;

    progress.style.width = scrolled + "%";

    if (h.scrollTop > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    if (circle) {
      const offset = circumference - (scrolled / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  };

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active nav link via IntersectionObserver
  const navLinks = Array.from(document.querySelectorAll(".topbar-nav a"));
  const linkById = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const setActive = (id) => {
    navLinks.forEach((a) => a.classList.remove("active"));
    const active = linkById.get(id);
    if (active) active.classList.add("active");
  };
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => navObserver.observe(s));

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // Toast notification element for copying email
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Copied to clipboard!</span>`;
  document.body.appendChild(toast);

  let toastTimeout = null;
  const showToast = (text = "Copied to clipboard!") => {
    toast.querySelector("span").textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".js-print-pdf")) {
      window.print();
      return;
    }
    const mailtoBtn = e.target.closest('a[href^="mailto:"]');
    if (mailtoBtn) {
      const email = mailtoBtn.getAttribute("href").replace("mailto:", "");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => { });
      }
    }
  });

  // Ambient floating background logos animation
  initAnimatedLogoBackground();
}

function initAnimatedLogoBackground() {
  const canvas = document.getElementById("animatedLogoBg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const logoFiles = [
    "algolia-com-logo.png",
    "amazon-com-logo.png",
    "anthropic-com-logo.png",
    "aws-logo.png",
    "aws-training-logo.png",
    "chromeenterprise-google-logo.png",
    "claude-ai-logo.png",
    "codeigniter-com-logo.png",
    "cursor-com-logo.png",
    "deepseek-com-logo.png",
    "digitalocean-com-logo.png",
    "docker-com-logo.png",
    "elastic-co-logo.png",
    "expo-dev-logo.png",
    "firefox-com-logo.png",
    "github-blog-logo.png",
    "golangweekly-com-logo.png",
    "google-com-logo.png",
    "googleplaylivros-com-logo.png",
    "instagram-com-logo.png",
    "langchain-com-logo.png",
    "laravel-com-logo.png",
    "linkedin-com-logo.png",
    "locationguru-com-logo.png",
    "meilisearch-com-logo.png",
    "mysql-com-logo.png",
    "neon-com-logo.png",
    "nextjs-org-logo.png",
    "nodejs-org-logo.png",
    "ollama-com-logo.png",
    "openai-com-logo.png",
    "opencode-ai-logo.png",
    "packagist-com-logo.png",
    "php-net-logo.png",
    "postgresql-org-logo.png",
    "python-org-logo.png",
    "react-dev-logo.png",
    "reactnative-dev-logo.png",
    "redis-net-cn-logo.png",
    "stackoverflow-com-logo.png",
    "statamic-com-logo.png",
    "supabase-com-logo.png",
    "tiangolo-com-logo.png",
    "typescript-com-logo.png",
    "vercel-com-logo.png",
    "vuejs-org-logo.png",
    "waggingtail-logo.png",
    "infoicon-logo.png",
    "webzesty-logo.png",
    "sunhill-logo.png"
  ];

  const codeSnippets = [
    // PHP Built-ins & Core Methods
    "dd($data);",
    "dump($payload);",
    "echo $response;",
    "printf(\"%s: %d\\n\", $label, $count);",
    "var_dump($user);",
    "print_r($config);",
    "sprintf(\"id_%04d\", $id);",
    "json_encode($data, JSON_PRETTY_PRINT);",
    "json_decode($json, true);",
    "array_push($queue, $item);",
    "array_map(fn($x) => $x->id, $items);",
    "array_filter($list, fn($v) => !empty($v));",
    "str_replace($search, $replace, $str);",
    "explode(',', $tags);",
    "implode('/', $paths);",
    "isset($params['key']);",
    "empty($result);",
    "die('Service unavailable');",

    // JavaScript / TypeScript Built-ins & Core Methods
    "console.log(data);",
    "console.error(err);",
    "console.table(metrics);",
    "fetch(url, options);",
    "setTimeout(fn, 1000);",
    "setInterval(tick, 500);",
    "JSON.stringify(payload);",
    "JSON.parse(raw);",
    "Object.keys(target);",
    "Object.values(record);",
    "Object.entries(map);",
    "Array.from(items);",
    "Array.isArray(val);",
    "encodeURIComponent(query);",
    "parseFloat(str);",
    "parseInt(val, 10);",

    // Go (Golang) Built-in Functions & Methods
    "fmt.Printf(\"%s: %v\\n\", key, val)",
    "fmt.Println(\"Server started\")",
    "fmt.Sprintf(\"node-%d\", id)",
    "len(slice)",
    "cap(buffer)",
    "append(slice, item)",
    "make([]byte, 1024)",
    "new(StructType)",
    "panic(err)",
    "recover()",
    "copy(dst, src)",
    "delete(hashMap, key)",
    "close(channel)",

    // Python Built-ins & Core Methods
    "print(f\"User: {name}\")",
    "len(collection)",
    "range(0, total)",
    "enumerate(items)",
    "zip(keys, values)",
    "type(instance)",
    "isinstance(val, dict)",
    "getattr(obj, 'attr', None)",
    "setattr(obj, 'key', val)",
    "hasattr(obj, 'field')",
    "dir(object)",
    "sorted(items, key=fn)",
    "repr(instance)",
    "any(conditions)",
    "all(conditions)",
    "input('Enter option: ')"
  ];

  const codeColors = [
    "#f08a5d", // Electric Copper / Amber
    "#e2b714", // Warm Sand / Gold
    "#ff9f43", // Warm Sun Glow
    "#a0a6be", // Muted Slate
    "#ffffff", // Crisp White
  ];

  const loadedImages = new Array(logoFiles.length).fill(null);
  logoFiles.forEach((file, idx) => {
    const img = new Image();
    img.src = `./assets/logos/${file}`;
    img.onload = () => {
      loadedImages[idx] = img;
    };
  });

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = 48;
  const particles = [];

  function createParticle(isInitial = false) {
    const isLogo = Math.random() > 0.5; // 50% logos, 50% code methods
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.15 + Math.random() * 0.35;
    const maxLife = 450 + Math.random() * 550;

    if (isLogo) {
      const size = 26 + Math.random() * 26; // 26px to 52px
      return {
        type: "logo",
        imgIndex: Math.floor(Math.random() * logoFiles.length),
        x: isInitial ? Math.random() * width : Math.random() * width,
        y: isInitial ? Math.random() * height : (Math.random() < 0.5 ? -size : height + size),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: size,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.005,
        maxOpacity: 0.08 + Math.random() * 0.1,
        life: isInitial ? Math.floor(Math.random() * maxLife) : 0,
        maxLife: maxLife,
      };
    } else {
      const fontSize = 13 + Math.floor(Math.random() * 5); // 13px to 17px font
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const color = codeColors[Math.floor(Math.random() * codeColors.length)];

      return {
        type: "code",
        text: text,
        color: color,
        fontSize: fontSize,
        x: isInitial ? Math.random() * width : Math.random() * width,
        y: isInitial ? Math.random() * height : (Math.random() < 0.5 ? -20 : height + 20),
        vx: Math.cos(angle) * speed * 0.9,
        vy: Math.sin(angle) * speed * 0.9,
        rotation: (Math.random() - 0.5) * 0.08, // Slight tilt
        vRot: (Math.random() - 0.5) * 0.001,
        maxOpacity: 0.08 + Math.random() * 0.08, // Soft ambient 0.08 - 0.16 opacity
        life: isInitial ? Math.floor(Math.random() * maxLife) : 0,
        maxLife: maxLife,
      };
    }
  }

  for (let i = 0; i < numParticles; i++) {
    particles.push(createParticle(true));
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.life++;

      // Mouse magnetic repulsion & subtle glow boost
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let mouseBoost = 1;

      if (dist < 160) {
        const force = (160 - dist) / 160;
        p.x += (dx / dist) * force * 1.8;
        p.y += (dy / dist) * force * 1.8;
        mouseBoost = 1 + force * 1.8;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;

      // Smooth fade-in & fade-out lifecycle
      let alpha = 0;
      const fadeInFrames = p.maxLife * 0.2;
      const fadeOutFrames = p.maxLife * 0.2;

      if (p.life < fadeInFrames) {
        alpha = (p.life / fadeInFrames) * p.maxOpacity;
      } else if (p.life > p.maxLife - fadeOutFrames) {
        alpha = ((p.maxLife - p.life) / fadeOutFrames) * p.maxOpacity;
      } else {
        alpha = p.maxOpacity;
      }

      alpha = Math.min(0.4, alpha * mouseBoost);

      if (alpha > 0) {
        if (p.type === "logo") {
          const img = loadedImages[p.imgIndex];
          if (img && img.complete) {
            ctx.save();
            ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          }
        } else if (p.type === "code") {
          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.font = `400 ${p.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
          ctx.fillStyle = p.color;
          ctx.fillText(p.text, 0, 0);
          ctx.restore();
        }
      }

      // Respawn if life cycle ends or particle drifts off-screen
      if (
        p.life >= p.maxLife ||
        p.x < -180 ||
        p.x > width + 180 ||
        p.y < -120 ||
        p.y > height + 120
      ) {
        particles[i] = createParticle(false);
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

