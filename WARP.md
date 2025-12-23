# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

### Install dependencies
This repo contains a `package-lock.json` and the existing `README.md` uses npm.

```sh
npm install
```

### Dev server
```sh
npm run dev
```

### Production build
`build` runs typechecking first (`vue-tsc --noEmit`) and then builds via Vite.

```sh
npm run build
```

### Preview the production build
`preview` serves the Vite build output and is configured to use port 5050.

```sh
npm run preview
```

### Lint
Note: `lint` runs ESLint with `--fix` enabled.

```sh
npm run lint
```

### Typecheck (standalone)
```sh
npm run typecheck
```

### Unit tests (Vitest)
```sh
npm run test:unit
```

Run a single test file:
```sh
npm run test:unit -- path/to/test-file.test.ts
```

Run a single test by name:
```sh
npm run test:unit -- -t "test name"
```

### E2E tests (Cypress)
Interactive runner (starts `npm run preview` first):
```sh
npm run test:e2e
```

Headless run (starts `npm run preview` first):
```sh
npm run test:e2e:ci
```

Run a single Cypress spec (requires the app to be running at the configured baseUrl, see `cypress.json`):
```sh
npx cypress run --spec cypress/integration/example.spec.ts
```

## Architecture overview (big picture)

### Runtime entrypoints
- `index.html` mounts the app at `#app`.
- `src/main.ts` is the JS entry:
  - Creates the Vue app and installs Pinia + Vue Router.
  - Registers several “bootstrap Card” components globally (e.g. `Card`, `CardHeader`, `CardBody`, …) so views can use them without local imports.
  - Creates a global `mitt` event bus and exposes it as `app.config.globalProperties.emitter`.
  - Imports Bootstrap JS, icon packs, and the theme SCSS entry (`src/scss/styles.scss`).

### Root layout and navigation flow
- `src/App.vue` is the root layout shell.
  - Reads UI/layout state from the Pinia store `src/stores/app-option.ts` and maps it to CSS classes on the `.app` wrapper (sidebar toggles, top-nav mode, boxed layout, etc.).
  - Attaches router hooks to drive the top progress bar (`@marcoschulte/vue3-progress`) and to reset sidebar state on navigation.
  - Renders the main layout components from `src/components/app/`:
    `Header.vue`, `TopNav.vue`, `Sidebar.vue`, `Footer.vue`, `ThemePanel.vue`.

### Routing and pages
- `src/router/index.ts` defines route->view mapping and lazy-loads route components from `src/views/*.vue`.
  - Most new pages are added as new routes here.
  - There is a catch-all `/:pathMatch(.*)*` that routes to `src/views/PageError.vue`.

### UI state and menus (Pinia stores)
- `src/stores/app-option.ts`: central “UI flags” store (sidebar collapsed/toggled/mobile toggled, top-nav enabled, theme panel toggled, etc.).
- `src/stores/app-sidebar-menu.ts` and `src/stores/app-top-nav-menu.ts`: the sidebar/top-nav menu definitions as plain arrays of menu item objects (url/icon/text/children).
  - If you add/remove routes, you often need to update these menus too.
- `src/stores/app-variable.ts`: derives a large set of values by reading CSS variables from `document.body` (used by theme/UI pieces).

### Layout components
- `src/components/app/Sidebar.vue` and `src/components/app/TopNav.vue`:
  - Render menus using `SidebarNav.vue` / `TopNavNav.vue` (recursive components).
  - Include significant direct DOM manipulation for submenu expand/collapse behavior.
- `src/components/app/ThemePanel.vue`:
  - Manages dark/light mode (`data-bs-theme`), theme class on `<body>`, cover classes on `<html>`, and RTL mode (`dir`).
  - Uses the global event bus to emit `theme-reload` events when theme settings change.

### Shared composables/utilities
- `src/composables/useEmitter.js` returns the global `mitt` emitter via `getCurrentInstance()`.
  - This must be called from within a component setup context (it relies on the current instance).
- `src/composables/slideToggle.js` (and `slideUp.js` / `slideDown.js`) are used for basic height toggle animations.

### Styling
- `src/scss/styles.scss` is the main style entry for the HUD theme.
  - It imports Bootstrap SCSS plus a large set of theme partials.
  - Theme mode is controlled via `data-bs-theme` (set by `ThemePanel.vue`).

## Repo-specific gotchas
- `src/views/untitled folder/` exists (note the space in the directory name). Be careful when grepping/importing/moving files on the CLI, and confirm you’re editing the intended view file.
- `playwright.config.ts` and `e2e/vue.spec.ts` exist, but `@playwright/test` is not listed in `package.json`. E2E scripts currently use Cypress.
- `npm run test:e2e` / `test:e2e:ci` use a placeholder host in `package.json` (`http://*********:5050/`). If these scripts fail, compare with `cypress.json` (baseUrl) and update the host accordingly.