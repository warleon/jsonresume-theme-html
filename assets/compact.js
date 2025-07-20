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
  font: 1em/1.3 system-ui, sans-serif;
  gap: 0.8em;
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
  margin-bottom: 1.5em;
}

body::before {
  content: '';
  grid-column: full;
  grid-row: content;
}

/* HORIZONTAL-FIRST LISTS: Minimize vertical space usage */
ol,
ul {
  padding-left: 0.8em;
}

/* Reduce vertical spacing for regular lists */
:not(.icon-list, .tag-list, .grid-list) > li + li {
  margin-top: 0.15em;
}

/* HORIZONTAL LAYOUT: Only for specific contexts */
.icon-list li {
  display: inline-block;
  margin-right: 1em;
  vertical-align: top;
  max-width: 15em;
  word-wrap: break-word;
}

/* HORIZONTAL FOR SHORT LISTS: Most lists try horizontal first */
ul:not(.tag-list) li {
  display: inline-block;
  margin-right: 1em;
  vertical-align: top;
  max-width: 12em;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* FORCE VERTICAL: Lists in articles (highlights, descriptions) */
article ul li,
.timeline ul li {
  display: block !important;
  margin-right: 0 !important;
  max-width: 100% !important;
  margin-bottom: 0.15em;
}

/* Single item lists are usually longer content */
ul li:only-child {
  display: block !important;
  margin-right: 0 !important;
  max-width: 100% !important;
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
  margin-bottom: 0.2em;
}

h2 {
  color: var(--color-secondary);
  font-size: var(--scale3);
  margin-bottom: 0.3em;
}

/* PROXIMITY: Section headings closer to content */
h3 {
  color: var(--color-secondary);
  font-size: var(--scale2);
  grid-column: side;
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;
}

h4 {
  font-size: var(--scale1);
  margin-bottom: 0.15em;
}

h5 {
  font-size: var(--scale0);
  margin-bottom: 0.1em;
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

/* ULTRA-COMPACT MASTHEAD */
.masthead {
  background: var(--color-dimmed);
  display: inherit;
  gap: 0.6em;
  grid-column: full;
  grid-template-columns: inherit;
  padding: 1.5em 0;
  text-align: center;
}

.masthead > *,
section {
  grid-column: main;
}

.masthead > img {
  border: 3px solid;
  border-radius: 50%;
  margin: 0 auto 0.3em;
  max-width: 7em;
}

/* MINIMAL VERTICAL SPACING */
article > * + *,
blockquote > * + *,
.timeline > div > * + * {
  margin-top: 0.25em;
}

.meta {
  color: var(--color-secondary);
  font-size: 0.85em;
  margin-top: 0.1em;
}

/* ULTRA-COMPACT SECTIONS */
.stack {
  display: grid;
  gap: 0.6em;
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em 0.6em;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 0.3em;
}

/* AGGRESSIVE HORIZONTAL GRID: More columns, tighter spacing */
.grid-list {
  display: grid;
  gap: 0.4em 0.6em;
  grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
}

/* HORIZONTAL-FIRST TAG LIST */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.15em 0.25em;
  list-style: none;
  padding: 0;
  margin-top: 0.2em;
}

.tag-list > li {
  background: var(--color-dimmed);
  border-radius: 0.2em;
  padding: 0.1em 0.3em;
  font-size: 0.85em;
}

/* ULTRA-COMPACT TIMELINE */
.timeline > div {
  position: relative;
}

.timeline > div:not(:last-child) {
  padding-bottom: 0.4rem;
}

.timeline > div:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 0.6rem;
  left: -12px;
  width: 1px;
  height: calc(100% - 0.1rem);
  background: var(--color-secondary);
}

.timeline > div:not(:only-child)::after {
  content: '';
  position: absolute;
  top: 0.4rem;
  left: -15px;
  width: 6px;
  height: 6px;
  background: var(--color-secondary);
  border: 1px solid var(--color-background);
  border-radius: 50%;
}

/* RESPONSIVE: Maximum horizontal utilization */
@media print, (min-width: 48em) {
  h3 {
    text-align: right;
    margin-bottom: inherit;
    margin-top: 0.3rem;
  }

  .masthead {
    text-align: inherit;
    gap: 0.8em;
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
    justify-content: flex-start;
    gap: 0.15em 0.8em;
  }

  /* MAXIMUM HORIZONTAL USAGE: More aggressive columns */
  .grid-list {
    grid-template-columns: repeat(auto-fit, minmax(6em, 1fr));
    gap: 0.3em 0.5em;
  }

  /* HORIZONTAL LIST LAYOUT FOR LARGER SCREENS */
  ul:not(.tag-list) li:not(article ul li):not(.timeline ul li) {
    max-width: 18em;
    margin-right: 1.5em;
  }

  /* TIGHTER SECTIONS */
  body {
    gap: 0.6em;
    line-height: 1.25;
  }

  .stack {
    gap: 0.5em;
  }
}

/* ULTRA-COMPACT PRINT */
@media print {
  html {
    font-size: 11px;
  }

  body {
    gap: 0.4em;
    margin-bottom: 0.8em;
    line-height: 1.2;
  }

  .masthead {
    padding: 1em 0;
  }

  .stack {
    gap: 0.4em;
  }

  .timeline > div:not(:last-child) {
    padding-bottom: 0.3rem;
  }

  .duration {
    display: none;
  }

  /* PRINT: Even more aggressive horizontal layouts */
  .grid-list {
    grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
    gap: 0.2em 0.3em;
  }

  ul:not(.tag-list) li:not(article ul li):not(.timeline ul li) {
    max-width: 12em;
    margin-right: 1em;
  }
}

/* MINIMAL SECTION SEPARATION */
section + section {
  margin-top: 0.6em;
}

/* ULTRA-TIGHT ARTICLE HEADERS */
article header {
  margin-bottom: 0.2em;
}

article header h4 {
  margin-bottom: 0.05em;
}

article header .meta {
  margin-top: 0.05em;
}

/* HORIZONTAL-FIRST APPROACH FOR WIDE CONTENT */
@media (min-width: 60em) {
  body {
    grid-template-columns:
      [full-start]
      1fr
      [main-start side-start]
      minmax(min-content, 12em)
      [side-end content-start]
      minmax(min-content, 45em)
      [main-end content-end]
      1fr
      [full-end];
  }

  .grid-list {
    grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
  }

  ul:not(.tag-list) li:not(article ul li):not(.timeline ul li) {
    max-width: 20em;
    margin-right: 2em;
  }
}
`
