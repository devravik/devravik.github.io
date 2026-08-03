## Ravi K Gupta - Portfolio Site

This is a minimal, single-page portfolio. All content lives as plain YAML files in `content/` (Statamic-style), so you can edit text without touching any code or styles.

### How to edit your content

- **Content lives in `content/`** — one YAML file per section. Edit the copy directly, save, and push to GitHub Pages. No build step is required.
- `content/hero.yaml` - name, title, tagline, location, \"open to work\" flag, and main links.
- `content/about.yaml` - paragraphs and focus areas.
- `content/skills.yaml` - skill categories and items.
- `content/featured.yaml` - the featured project.
- `content/contributions.yaml` - open source contributions.
- `content/projects.yaml` - full project list.
- `content/experience.yaml` - roles with bullets and tech stack.
- `content/education.yaml` - degrees.
- `content/languages.yaml` - language proficiency.
- `content/contact.yaml` - email, phone, location, profile links, and the Web3Forms key.
- `content/profiles.yaml` - per-profile variant data (`backend`, `php-laravel`, `fullstack`, ...). Switch the page's profile with `?profile=<slug>`.

### Layout and styling

- **Layout & components** are rendered in the browser by `assets/main.js`, which fetches the YAML files above, parses them with the vendored `assets/vendor/js-yaml.mjs`, and writes HTML into the `#root` div in `index.html`.
- **Styles** are in `assets/main.css`. You can tweak colors, spacing, and typography there.

> Note: because content is fetched at runtime, the page must be served over HTTP (GitHub Pages or `npx http-server`), not opened directly from disk.

### Files of interest

- `index.html` - HTML shell and meta tags.
- `assets/main.js` - Fetches + parses the YAML content and renders the sections.
- `assets/vendor/js-yaml.mjs` - Vendored YAML parser (js-yaml 4.1.0, MIT).
- `assets/main.css` - Minimal responsive styling.
- `content/*.yaml` - All portfolio text and data.

