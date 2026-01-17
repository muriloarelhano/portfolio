# Copilot Instructions - Personal Portfolio

This project is a personal portfolio built with **SvelteKit 2** using **Svelte 5**, **Tailwind CSS 4**, and a custom **Internationalization (i18n)** system.

## Tech Stack
- **Framework**: SvelteKit 2 + Svelte 5 (Runes).
- **Styling**: Tailwind CSS 4 + DaisyUI.
- **Icons**: `lucide-svelte`.
- **Utilities**: `ts-pattern` for complex conditional logic.

## Core Architecture & Systems

### 1. Internationalization (i18n) - CRITICAL
The project uses a custom i18n solution located in [src/lib/i18n/index.ts](src/lib/i18n/index.ts).
- **Text MUST be localized**. Do not hardcode text in components.
- **Translation Files**: Located in `src/locales/{langCode}/*.json`. Keys are merged/flattened (e.g., `banner.hello`).
- **Usage**:
  ```svelte
  <script lang="ts">
      import { t } from '$lib/i18n';
  </script>
  <h1>{$t('banner.hello')}</h1>
  <p>{$t('greeting', { name: 'Visitor' })}</p>
  ```

### 2. Data Management
- **Static Data**: Business logic/content is separated from UI in `src/data/*.ts`.
- **Pattern**: Components import data directly (e.g., `import { projects } from '$data/projects'`).

## Svelte 5 & Coding Standards
- **Runes**: Always use `$props()`, `$state()`, `$derived()`, `$effect()`. Prefer runes over legacy syntax.
- **Tailwind & DaisyUI**: Use utility classes. Use DaisyUI components (e.g., `btn`, `btn-outline`). Avoid custom CSS.
- **Aesthetic**: Maintain the "hacker/portfolio" look (standardized headers with `/` prefix, nav links with `#` or `/`).
- **Type Safety**: Use TypeScript. Define interfaces in component files or [src/lib/types.ts](src/lib/types.ts).

## Common Workflows

### Adding New Content
1.  **Update Data**: Add entry to [src/data/](src/data/).
2.  **Add Translations**: Add keys to `src/locales/en-US/*.json` AND `src/locales/pt-BR/*.json`.
3.  **Update Component**: Use `$t('key')` to display.

### Adding Images
- Place in `src/lib/assets/`.
- Import explicitly in the component/data file: `import myImg from '$lib/assets/my-img.png'`.

## Important Paths
- **I18n**: [src/lib/i18n/index.ts](src/lib/i18n/index.ts) & [src/locales/](src/locales/)
- **Data**: [src/data/](src/data/)
- **Sections**: [src/lib/components/sections/](src/lib/components/sections/)
- **Layouts**: [src/routes/](src/routes/)

## Commands
- `npm run dev`: Start dev server.
- `npm run check`: Type check (Svelte + TS).
- `npm run format`: Prettier formatting.
