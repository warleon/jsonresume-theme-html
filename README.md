# jsonresume-theme-compact

[![npm package version](https://img.shields.io/npm/v/@warleon/jsonresume-theme-compact.svg)](https://www.npmjs.com/package/@warleon/jsonresume-theme-compact)

A compact [JSON Resume](https://jsonresume.org/) theme, compatible with the latest [resume schema](https://github.com/jsonresume/resume-schema).
Renders clean, semantic HTML with compact CSS styling using proximity design principles for optimal space utilization and information hierarchy.

- 📄 Compact, space-efficient layout
- 🎯 Proximity design principles for information hierarchy
- 💄 Markdown support
- 🧩 Standalone CLI
- 📦 ESM and CommonJS builds
- 🤖 TypeScript typings
- 📱 Responsive design for all screen sizes
- 🖨️ Print-optimized for PDF generation
- ♿ Semantic and accessible markup

## Installation

```console
npm install @warleon/jsonresume-theme-compact
```

## Usage

### With resume-cli

```console
npm install resume-cli @warleon/jsonresume-theme-compact
npx resume export resume.html --theme @warleon/jsonresume-theme-compact
```

### With Resumed

[Resumed](https://github.com/rbardini/resumed) requires you to install the theme, since it does not come with any by default:

```console
npm install resumed @warleon/jsonresume-theme-compact
npx resumed render --theme @warleon/jsonresume-theme-compact
```

### Standalone usage

This theme comes with a barebones CLI that reads resumes from `stdin` and outputs HTML to `stdout`. This allows usage without any resume builder tools:

```console
npx @warleon/jsonresume-theme-compact < resume.json > resume.html
```

## Features

This theme generates compact, professionally styled HTML that:

### Design Principles

- **Proximity Design**: Related information is grouped closer together to establish clear visual hierarchy
- **Compact Layout**: Optimized spacing and typography for maximum information density
- **No Decorative Styling**: Focuses on layout and spacing without colors or decorative fonts
- **Information Hierarchy**: Uses spacing and positioning to guide the reader's attention

### Technical Features

- Uses semantic HTML5 elements for accessibility
- Responsive grid layout that adapts to different screen sizes
- Compact typography with optimized font sizes and line heights
- Tighter spacing between related elements (list items, job details, skills)
- Reduced gaps between sections while maintaining readability
- Print-optimized CSS for clean PDF generation
- Supports all resume schema fields
- Processes Markdown content in descriptions

### Layout Characteristics

- **Header**: Compact masthead with essential contact information
- **Sections**: Tightly spaced sections with clear visual separation
- **Timeline**: Compact work/education history with minimal visual elements
- **Skills**: Efficiently organized skill tags with reduced spacing
- **Two-column responsive layout** on larger screens for better space utilization

The resulting HTML is perfect for:

- Professional resumes requiring maximum information density
- PDF generation with consistent, compact formatting
- Modern web display with responsive design
- Accessibility-focused document structure
- Clean, readable markup that maintains visual hierarchy

## Output Structure

The theme generates a standard HTML document with:

- Proper DOCTYPE and semantic structure
- Meta tags for SEO and viewport
- Hierarchical content organization using appropriate HTML elements
- Compact CSS styling focused on proximity and spacing
- Clean, readable markup optimized for information density

Perfect for professionals who need a clean, compact resume layout that maximizes information display while maintaining excellent readability and accessibility.
