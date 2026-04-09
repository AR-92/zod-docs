# Zod Docs

Official documentation site for the Zod AI agent platform.

## Structure

```
zod-docs/
├── src/
│   ├── content/
│   │   ├── docs/      # Documentation pages (MDX)
│   │   └── blog/      # Blog posts (Markdown)
│   ├── layouts/       # Astro layouts
│   ├── pages/         # Astro pages
│   ├── components/    # Reusable components
│   ├── styles/        # Global CSS
│   └── utils/         # Utility functions
├── public/            # Static assets
└── package.json
```

## Development

### Install dependencies
```bash
npm install
# or
bun install
```

### Start dev server
```bash
npm run dev
# or
bun run dev
```

### Build for production
```bash
npm run build
# or
bun run build
```

### Preview production build
```bash
npm run preview
# or
bun run preview
```

## Content

### Documentation
Add new documentation pages to `src/content/docs/`. Each file should include frontmatter:

```mdx
---
title: Page Title
description: Brief description of the page
category: CATEGORY NAME
order: 1
---
```

### Blog Posts
Add new blog posts to `src/content/blog/`. Each file should include frontmatter:

```md
---
title: Post Title
excerpt: Brief summary of the post
date: 2026-04-09
author: Author Name
tags: ['tag1', 'tag2']
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
