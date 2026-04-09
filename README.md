# Zod Docs

Official documentation site for the Zod AI agent platform.

## Structure

```
zod-docs/
├── src/
│   ├── content/docs/    # Documentation pages (MDX)
│   ├── layouts/         # Docs layout
│   ├── pages/
│   │   ├── index.astro      # Docs index
│   │   └── [...slug].astro  # Dynamic doc pages
│   ├── components/    # Navbar, Footer, Sidebar, TOC
│   ├── styles/        # Global CSS
│   └── utils/         # Doc utilities
├── public/            # Static assets
└── package.json
```

## Development

### Install dependencies
```bash
bun install
```

### Start dev server
```bash
bun run dev
```

### Build for production
```bash
bun run build
```

### Preview production build
```bash
bun run preview
```

## Content

Add new documentation pages to `src/content/docs/`. Each file should include frontmatter:

```mdx
---
title: Page Title
description: Brief description of the page
category: CATEGORY NAME
order: 1
---
```

## Documentation Categories

1. **GETTING STARTED** - Introduction, installation, quick start
2. **CORE CONCEPTS** - Agents, skills, tools, prompts, harness
3. **AGENTS** - Creating and managing agents, multi-agent systems
4. **SKILLS & TOOLS** - Extending agent capabilities
5. **HARNESS** - Orchestration layer and configuration
6. **PLUGINS** - Custom plugins and integrations
7. **STUDIO** - Visual development environment

## Technologies

- **Astro 5** - Static site generation
- **MDX** - Markdown with JSX components
- **Tailwind CSS v4** - Utility-first styling
- **DaisyUI 5** - Component classes
- **Lucide Static** - SVG icons
