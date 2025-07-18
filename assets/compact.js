/* Compact Resume Layout - Proximity Design Principles */
export const css = `
:root {
  color-scheme: light dark;

  --color-background-light: #ffffff;
  --color-dimmed-light: #f3f4f5;
  --color-primary-light: #191e23;
  --color-secondary-light: #6c7781;
  --color-accent-light: #0073aa;

  --color-background-dark: #191e23;
  --color-dimmed-dark: #23282d;
  --color-primary-dark: #fbfbfc;
  --color-secondary-dark: #ccd0d4;
  --color-accent-dark: #00a0d2;

  --color-background: var(--color-background-light);
  --color-dimmed: var(--color-dimmed-light);
  --color-primary: var(--color-primary-light);
  --color-secondary: var(--color-secondary-light);
  --color-accent: var(--color-accent-light);

  --scale-ratio: 1.2;
  --scale0: 0.875rem;
  --scale1: calc(var(--scale0) * var(--scale-ratio));
  --scale2: calc(var(--scale1) * var(--scale-ratio));
  --scale3: calc(var(--scale2) * var(--scale-ratio));
  --scale4: calc(var(--scale3) * var(--scale-ratio));
  --scale5: calc(var(--scale4) * var(--scale-ratio));
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--color-background-dark);
    --color-dimmed: var(--color-dimmed-dark);
    --color-primary: var(--color-primary-dark);
    --color-secondary: var(--color-secondary-dark);
    --color-accent: var(--color-accent-dark);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 13px;
}

body {
  background: var(--color-background);
  color: var(--color-primary);
  display: grid;
  font: 1em/1.4 system-ui, sans-serif;
  gap: 1.2em;
  grid-template-columns:
    [full-start]
    1fr
    [main-start side-start]
    minmax(min-content, 10em)
    [side-end content-start]
    minmax(min-content, 40em)
    [main-end content-end]
    1fr
    [full-end];
  grid-template-rows: auto [content] 0;
  margin-bottom: 2em;
}

body::before {
  content: '';
  grid-column: full;
  grid-row: content;
}

/* PROXIMITY PRINCIPLE: Group related list items closer */
ol,
ul {
  padding-left: 1em;
}

:not(.icon-list, .tag-list) > li + li {
  margin-top: 0.25em;
}

li::marker,
.network {
  color: var(--color-secondary);
}

a {
  color: var(--color-accent);
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: underline;
}

h1,
h2,
h3,
h5 {
  font-weight: normal;
}

h1,
h2,
h3 {
  line-height: 1.1;
}

h1 {
  font-size: var(--scale5);
  margin-bottom: 0.3em;
}

h2 {
  color: var(--color-secondary);
  font-size: var(--scale3);
  margin-bottom: 0.5em;
}

/* PROXIMITY: Section headings closer to content */
h3 {
  color: var(--color-secondary);
  font-size: var(--scale2);
  grid-column: side;
  margin-bottom: 0.5rem;
  margin-top: 0.3rem;
}

h4 {
  font-size: var(--scale1);
  margin-bottom: 0.25em;
}

h5 {
  font-size: var(--scale0);
  margin-bottom: 0.2em;
}

h6 {
  font-size: var(--scale0);
}

blockquote {
  border-left: 0.2em solid var(--color-dimmed);
  padding-left: 1em;
}

cite {
  color: var(--color-secondary);
  font-style: inherit;
}

cite::before {
  content: '— ';
}

svg {
  margin-right: 0.2em;
  vertical-align: text-bottom;
}

/* COMPACT MASTHEAD: Reduced padding and tighter spacing */
.masthead {
  background: var(--color-dimmed);
  display: inherit;
  gap: 0.8em;
  grid-column: full;
  grid-template-columns: inherit;
  padding: 2em 0;
  text-align: center;
}

.masthead > *,
section {
  grid-column: main;
}

.masthead > img {
  border: 3px solid;
  border-radius: 50%;
  margin: 0 auto 0.5em;
  max-width: 8em;
}

/* PROXIMITY: Tighter spacing between related content */
article > * + *,
blockquote > * + *,
.timeline > div > * + * {
  margin-top: 0.4em;
}

.meta {
  color: var(--color-secondary);
  font-size: 0.9em;
  margin-top: 0.2em;
}

/* COMPACT SECTIONS: Reduced gap between sections */
.stack {
  display: grid;
  gap: 1em;
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em 0.8em;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 0.5em;
}

/* PROXIMITY: Skills grouped more tightly */
.grid-list {
  display: grid;
  gap: 0.8em;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25em 0.3em;
  list-style: none;
  padding: 0;
  margin-top: 0.3em;
}

.tag-list > li {
  background: var(--color-dimmed);
  border-radius: 0.2em;
  padding: 0.15em 0.4em;
  font-size: 0.9em;
}

/* COMPACT TIMELINE: Reduced spacing, closer proximity */
.timeline > div {
  position: relative;
}

.timeline > div:not(:last-child) {
  padding-bottom: 0.6rem;
}

.timeline > div:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 0.8rem;
  left: -12px;
  width: 1px;
  height: calc(100% - 0.2rem);
  background: var(--color-secondary);
}

.timeline > div:not(:only-child)::after {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: -15px;
  width: 6px;
  height: 6px;
  background: var(--color-secondary);
  border: 1px solid var(--color-background);
  border-radius: 50%;
}

/* RESPONSIVE: Maintain compact spacing on larger screens */
@media print, (min-width: 48em) {
  h3 {
    text-align: right;
    margin-bottom: inherit;
    margin-top: 0.5rem;
  }

  .masthead {
    text-align: inherit;
    gap: 1em;
  }

  .masthead > *,
  section {
    grid-column: content;
  }

  .masthead img {
    grid-column: side;
    grid-row: span 2;
    max-width: 100%;
    margin-bottom: 0;
  }

  section {
    display: contents;
  }

  .icon-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2em;
  }

  /* PROXIMITY: Two-column layout for better space usage */
  .grid-list {
    grid-template-columns: repeat(auto-fit, minmax(calc((100% - 0.8em) / 2), 1fr));
    gap: 0.6em 0.8em;
  }

  /* COMPACT SECTIONS: Sections closer together */
  body {
    gap: 0.8em;
  }

  .stack {
    gap: 0.8em;
  }
}

/* PRINT: Extra compact for print media */
@media print {
  html {
    font-size: 12px;
  }

  body {
    gap: 0.6em;
    margin-bottom: 1em;
  }

  .masthead {
    padding: 1.5em 0;
  }

  .stack {
    gap: 0.6em;
  }

  .timeline > div:not(:last-child) {
    padding-bottom: 0.4rem;
  }

  .duration {
    display: none;
  }
}

/* HIERARCHY: Clear visual separation between major sections */
section + section {
  margin-top: 0.8em;
}

/* PROXIMITY: Group article headers with their content */
article header {
  margin-bottom: 0.3em;
}

article header h4 {
  margin-bottom: 0.1em;
}

article header .meta {
  margin-top: 0.1em;
}
`
