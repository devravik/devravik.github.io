## Ravi K Gupta - Portfolio Site

This is a minimal, single-page portfolio. All content lives in one config file so you can update text without touching layout or styles.

### How to edit your content

- **Main content file**: `content/site.js`
- The file exports a single `site` object with these sections:
  - `hero`: name, title, subtitle, location, \"open to work\" flag, and main links.
  - `about`: paragraphs and focus areas.
  - `skills`: categories and skills.
  - `featured`: featured projects (currently AttendAssist).
  - `experience`: roles with bullets and tech stack.
  - `education`: degrees.
  - `languages`: language proficiency.
  - `contact`: email, location, and profile links.

Update the copy directly in `content/site.js`, save, and push to GitHub Pages. No build step is required.

### Layout and styling

- **Layout & components** are rendered in the browser by `assets/main.js`, which reads from `content/site.js` and writes HTML into the `#root` div in `index.html`.
- **Styles** are in `assets/main.css`. You can tweak colors, spacing, and typography there.

### Files of interest

- `index.html` - HTML shell and meta tags.
- `assets/main.js` - Renders sections from the `site` config.
- `assets/main.css` - Minimal responsive styling.
- `content/site.js` - All portfolio text and data.

