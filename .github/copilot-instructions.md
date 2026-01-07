# Copilot Instructions - Personal Portfolio

This project is a personal portfolio built with **SvelteKit 2** using **Svelte 5** and **Tailwind CSS 4**.

## Tech Stack & Architecture
- **Framework**: SvelteKit 2 (using Svelte 5 Runes like `$props`, `$state`).
- **Styling**: Tailwind CSS 4 with DaisyUI. Configured in `tailwind.config.js` and `src/app.css`.
- **Data Flow**: Purely static, data-driven architecture. Data resides in `src/data/*.ts` and is imported directly by components/pages.
- **Project Structure**:
    - `src/routes/`: Page layouts and views.
    - `src/lib/components/`: Reusable UI components.
    - `src/lib/components/sections/`: High-level page sections (Banner, Projects, Contact, etc.).
    - `src/data/`: Centralized content management (Skills, Projects, Socials).

## Coding Patterns
- **Svelte 5 Runes**: Always use `$props()` for component inputs. Prefer runes over traditional Svelte 4 syntax.
- **Type Safety**: Use TypeScript for all components and data files. Interfaces should be defined within the component file or in a dedicated `types` file if shared.
    - *Example*: `interface Props { name: string; link: string; }` in components.
- **Tailwind & DaisyUI**: Use DaisyUI classes (e.g., `btn`, `btn-outline`) for buttons and standard components. Avoid custom CSS when utility classes suffice.
- **Asset Imports**: Import images from `src/lib/assets/` directly in data files and pass them to components.
- **Pattern Matching**: `ts-pattern` is available for complex conditional logic (see [src/lib/components/sections/Header.svelte](src/lib/components/sections/Header.svelte)).

## Development Workflows
- **Running Locally**: `npm run dev`
- **Formatting**: `npm run format` (uses Prettier). Run this before committing.
- **Type Checking**: `npm run check` to ensure Svelte and TypeScript validity.

## Important Locations
- **Adding a Project**: Edit [src/data/projects.ts](src/data/projects.ts).
- **Updating Skills**: Edit [src/data/skills.ts](src/data/skills.ts).
- **Modifying Global Styles**: Check [src/app.css](src/app.css).
- **Navigation/Header**: Located in [src/lib/components/sections/Header.svelte](src/lib/components/sections/Header.svelte).

## Guidelines
- Avoid using external UI libraries beyond DaisyUI unless necessary.
- Maintain the "hacker/portfolio" aesthetic (standardized headers with `/` prefix, nav links with `#` or `/`).
- Prioritize responsiveness using Tailwind grid/flex utilities.
