import { site } from "../content/site.js";

const root = document.getElementById("root");

// Section header with a numbered eyebrow + bold title.
const sectionHeader = (num, eyebrow, title) => `
  <div class="section-header reveal">
    <span class="section-eyebrow">${num} · ${eyebrow}</span>
    <h2 class="section-title">${title}</h2>
  </div>
`;

// Map skill strings -> logo filename in /assets/logos.
// Keys are tested as substrings (case-insensitive) against each skill label.
const skillLogos = [
  ["laravel", "laravel-com-logo.png"],
  ["codeigniter", "codeigniter-com-logo.png"],
  ["wordpress", "wordpress-com-logo.png"],
  ["go", "golangweekly-com-logo.png"],
  ["javascript", "typescript-com-logo.png"],
  ["typescript", "typescript-com-logo.png"],
  ["python", "python-org-logo.png"],
  ["node", "nodejs-org-logo.png"],
  ["mysql", "mysql-com-logo.png"],
  ["postgres", "postgresql-org-logo.png"],
  ["algolia", "algolia-com-logo.png"],
  ["meilisearch", "meilisearch-com-logo.png"],
  ["elastic", "elastic-co-logo.png"],
  ["aws", "aws-logo.png"],
  ["digitalocean", "digitalocean-com-logo.png"],
  ["vercel", "vercel-com-logo.png"],
  ["docker", "docker-com-logo.png"],
  ["github", "github-co-jp-logo.png"],
  ["redis", "redis-net-cn-logo.png"],
  ["vue", "vuejs-org-logo.png"],
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

const logoFor = (label) => {
  const l = label.toLowerCase();
  // Earliest key in the label wins; ties broken by the longer key.
  // Handles "Google (Gemini)" -> google over go, and the
  // "AWS (...), DigitalOcean, Vercel" line -> aws (appears first).
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

// One skill: optional small monochrome logo tile + label.
const skillItem = (label) => {
  const logo = logoFor(label);
  const img = logo
    ? `<img class="skill-logo" src="${logo}" alt="" aria-hidden="true" loading="lazy" />`
    : "";
  return `<span class="skill-item">${img}<span class="skill-name">${label}</span></span>`;
};

if (root) {
  root.innerHTML = `
    <div class="scroll-progress" id="scrollProgress"></div>
    <div class="shell">
      <header class="topbar">
        <div class="topbar-inner">
          <a href="#top" class="topbar-brand">
            <span class="topbar-dot"></span>
            <span class="topbar-name">${site.hero.name}</span>
            <span class="topbar-role">${site.hero.title}</span>
          </a>
          <nav class="topbar-nav">
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#contributions">Contributions</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section class="hero">
          <div class="hero-inner">
            <div class="hero-main">
              <p class="hero-kicker">Senior Backend Engineer</p>
              <h1 class="hero-title">${site.hero.name}</h1>
              <p class="hero-tagline">${site.hero.tagline.replace(
    /(Laravel & Go|multi-tenant SaaS|fast and predictable)/g,
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
                <span>Open to remote backend roles</span>
              </div>
              <div class="hero-actions">
                ${site.hero.actions
      .map(
        (action, index) => `
                  <a href="${action.href}" class="btn ${index === 0 ? "btn-primary" : "btn-ghost"
          }">
                    ${action.label}
                  </a>
                `
      )
      .join("")}
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
                    <span class="chip chip-soft">Laravel</span>
                    <span class="chip chip-soft">Go (Fiber)</span>
                    <span class="chip chip-soft">Multi-tenant SaaS</span>
                    <span class="chip chip-soft">APIs</span>
                  </div>
                </div>
                <div class="hero-terminal">
                  <div class="terminal-header">
                    <span class="dot red"></span>
                    <span class="dot amber"></span>
                    <span class="dot green"></span>
                    <span class="terminal-title">session: backend.ravi</span>
                  </div>
                  <div class="terminal-body">
                    <code><span class="prompt">$</span> tail -f work.log
<span class="out">&gt;</span> designing multi-tenant SaaS backends
<span class="out">&gt;</span> hardening APIs and queries
<span class="out">&gt;</span> keeping systems boring &amp; reliable</code>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" class="section">
          <div class="section-inner">
            ${sectionHeader("01", "About", site.about.heading)}
            <div class="section-body two-column">
              <div>
                ${site.about.paragraphs
      .map((p) => `<p class="body-text">${p}</p>`)
      .join("")}
              </div>
              <div class="section-side">
                <h3 class="section-subheading">What I work on</h3>
                <ul class="bullet-list">
                  ${site.about.focusAreas
      .map((item) => `<li>${item}</li>`)
      .join("")}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tech" class="section">
          <div class="section-inner">
            ${sectionHeader("02", "Tech Stack", "Skills & tools")}
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

        <section id="contributions" class="section">
          <div class="section-inner">
            ${sectionHeader("03", "Open Source", site.contributions.heading)}
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
            .map(
              (link) => `
                        <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="link-primary">
                          ${link.label}
                        </a>
                      `
            )
            .join("")}
                    </div>
                  </header>
                  <p class="body-text">${contribution.description}</p>
                  <div class="tag-row">
                    ${contribution.techStack
            .map((t) => `<span class="chip chip-soft">${t}</span>`)
            .join("")}
                  </div>
                </article>
              `
      )
      .join("")}
            </div>
          </div>
        </section>

        <section id="projects" class="section">
          <div class="section-inner">
            ${sectionHeader("04", "Selected Work", site.projects.heading)}
            <div class="projects-grid">
              ${site.projects.items
      .map(
        (project) => `
                <article class="project-card reveal">
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
                  <header class="project-header">
                    <div>
                      <h3 class="project-title">${project.name}</h3>
                      <p class="project-meta">
                        ${project.category ? `${project.category} · ` : ""}${project.role
          } · ${project.period}
                      </p>
                    </div>
                    <div class="project-links">
                      ${project.links
            .map(
              (link) => `
                        <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="link-primary">
                          ${link.label}
                        </a>
                      `
            )
            .join("")}
                    </div>
                  </header>
                  <p class="body-text">${project.description}</p>
                  <div class="tag-row">
                    ${project.techStack
            .map((t) => `<span class="chip chip-soft">${t}</span>`)
            .join("")}
                  </div>
                </article>
              `
      )
      .join("")}
            </div>
          </div>
        </section>

        <section id="experience" class="section">
          <div class="section-inner">
            ${sectionHeader("05", "Experience", site.experience.heading)}
            <div class="timeline">
              ${site.experience.roles
      .map(
        (role) => `
                <article class="timeline-item reveal">
                  <div class="timeline-dot"></div>
                  <div class="timeline-body card">
                    <header class="card-header">
                      <div>
                        <h3 class="card-title">${role.title}</h3>
                        <p class="card-meta">${role.company}</p>
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
                    ${role.products && role.products.length
            ? `
                      <details class="products">
                        <summary>Products & platforms</summary>
                        <ul class="bullet-list">
                          ${role.products
              .map((p) => `<li>${p}</li>`)
              .join("")}
                        </ul>
                      </details>
                    `
            : ""
          }
                    <div class="tag-row">
                      ${role.techStack
            .map((t) => `<span class="chip chip-soft">${t}</span>`)
            .join("")}
                    </div>
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
            ${sectionHeader("06", "Get in Touch", site.contact.heading)}
            <div class="section-body two-column">
              <div>
                <p class="body-text">
                  I’m ${site.contact.openToWork ? "currently open to" : "selective about"
    } new backend roles, especially remote positions on SaaS or product teams.
                </p>
                <a href="mailto:${site.contact.email}" class="btn btn-primary" style="margin-top:18px">
                  ${site.contact.email}
                </a>
              </div>
              <div class="section-side">
                <ul class="contact-list">
                  <li>
                    <span class="label">Location</span>
                    <span>${site.contact.location}</span>
                  </li>
                  ${site.contact.links
      .map(
        (link) => `
                    <li>
                      <span class="label">${link.label}</span>
                      <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="link-primary">${link.href}</a>
                    </li>
                  `
      )
      .join("")}
                </ul>
              </div>
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

  // Scroll progress bar
  const progress = document.getElementById("scrollProgress");
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = (scrolled || 0) + "%";
  };
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
}
