# jsonresume-theme-html

[![npm package version](https://img.shields.io/npm/v/@warleon/jsonresume-theme-html.svg)](https://www.npmjs.com/package/@warleon/jsonresume-theme-html)

An unstyled [JSON Resume](https://jsonresume.org/) theme, compatible with the latest [resume schema](https://github.com/jsonresume/resume-schema).
Renders clean, semantic HTML with no CSS styling for maximum compatibility and customization.

- 📄 Clean, unstyled HTML output
- 💄 Markdown support
- 🧩 Standalone CLI
- 📦 ESM and CommonJS builds
- 🤖 TypeScript typings
- 🎯 Browser default styling only
- ♿ Semantic and accessible markup

## Installation

```console
npm install @warleon/jsonresume-theme-html
```

## Usage

### With resume-cli

```console
npm install resume-cli @warleon/jsonresume-theme-html
npx resume export resume.html --theme @warleon/jsonresume-theme-html
```

### With Resumed

[Resumed](https://github.com/rbardini/resumed) requires you to install the theme, since it does not come with any by default:

```console
npm install resumed @warleon/jsonresume-theme-html
npx resumed render --theme @warleon/jsonresume-theme-html
```

### Standalone usage

This theme comes with a barebones CLI that reads resumes from `stdin` and outputs HTML to `stdout`. This allows usage without any resume builder tools:

```console
npx @warleon/jsonresume-theme-html < resume.json > resume.html
```

## Features

This theme generates completely unstyled HTML that:

- Uses semantic HTML5 elements for accessibility
- Contains no CSS styling (no external stylesheets, no inline styles)
- Loads no external fonts or resources
- Renders with browser default styling only
- Produces clean, minimal HTML markup
- Supports all resume schema fields
- Processes Markdown content in descriptions

The resulting HTML can be:

- Styled with your own CSS
- Used as a base for custom themes
- Integrated into existing websites
- Printed with consistent results across browsers
- Displayed reliably in any environment

## Output Structure

The theme generates a standard HTML document with:

- Proper DOCTYPE and semantic structure
- Meta tags for SEO and viewport
- Hierarchical content organization using appropriate HTML elements
- CSS classes present but with no styling applied
- Clean, readable markup

Perfect for developers who want full control over styling or need unstyled HTML for integration purposes.
