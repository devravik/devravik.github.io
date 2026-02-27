import { site } from "../content/site.js";

const root = document.getElementById("root");

if (root) {
  root.innerHTML = `
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
              <p class="hero-tagline">${site.hero.tagline}</p>
              <ul class="hero-highlights">
                ${site.hero.highlights
                  .map((h) => `<li>${h}</li>`)
                  .join("")}
              </ul>
              <div class="hero-meta">
                <span>${site.hero.location}</span>
              </div>
              <div class="hero-actions">
                ${site.hero.actions
                  .map(
                    (action, index) => `
                  <a href="${action.href}" class="btn ${
                      index === 0 ? "btn-primary" : "btn-ghost"
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
                    <code>$ tail -f work.log<br />&gt; designing multi-tenant SaaS backends<br />&gt; hardening APIs and queries<br />&gt; keeping systems boring &amp; reliable</code>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" class="section">
          <div class="section-inner">
            <div class="section-header">
              <h2 class="section-title">${site.about.heading}</h2>
            </div>
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
            <div class="section-header">
              <h2 class="section-title">Tech stack</h2>
            </div>
            <div class="skills-grid">
              ${site.skills.categories
                .map(
                  (cat) => `
                <article class="card">
                  <h3 class="card-title">${cat.name}</h3>
                  <ul class="chip-list">
                    ${cat.items
                      .map((s) => `<li class="chip">${s}</li>`)
                      .join("")}
                  </ul>
                </article>
              `
                )
                .join("")}
            </div>
          </div>
        </section>

        <section id="projects" class="section">
          <div class="section-inner">
            <div class="section-header">
              <h2 class="section-title">${site.projects.heading}</h2>
            </div>
            <div class="projects-grid">
              ${site.projects.items
                .map(
                  (project) => `
                <article class="project-card">
                  ${
                    project.image
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
                        ${project.category ? `${project.category} · ` : ""}${
                     project.role
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
            <div class="section-header">
              <h2 class="section-title">${site.experience.heading}</h2>
            </div>
            <div class="timeline">
              ${site.experience.roles
                .map(
                  (role) => `
                <article class="timeline-item">
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
                    ${
                      role.products && role.products.length
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
            <div class="section-header">
              <h2 class="section-title">${site.contact.heading}</h2>
            </div>
            <div class="section-body two-column">
              <div>
                <p class="body-text">
                  I’m ${
                    site.contact.openToWork ? "currently open to" : "selective about"
                  } new backend roles, especially remote positions on SaaS or product teams.
                </p>
              </div>
              <div class="section-side">
                <ul class="contact-list">
                  <li>
                    <span class="label">Email</span>
                    <a href="mailto:${site.contact.email}" class="link-primary">${site.contact.email}</a>
                  </li>
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
}

