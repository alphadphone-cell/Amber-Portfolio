# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Portfolio (`artifacts/portfolio`)
- **Kind**: React + Vite (static)
- **Preview path**: `/`
- **Port**: 21113
- **Theme**: Void Purple dark theme (`src/index.css`)
- **Fonts**: Space Grotesk (display), DM Sans (body), Fira Code (mono) — loaded from Google Fonts
- **Animation libraries**: Framer Motion (UI/scroll animations), GSAP (magnetic buttons, cursor), Lenis (smooth scroll)
- **Sections**: Hero (typewriter + 3D orb), Bento, Marquee, About, Projects, Experience, Blog, Contact
- **Components**: Preloader, CustomCursor, CursorToggle, MagneticButton, SocialIcon, Navbar, Footer
- **Config**: `src/config/socials.ts` — fill in social links here; only entries with non-empty `href` are shown
- **Context**: `src/context/CursorContext.tsx` — persists custom cursor toggle in localStorage

### API Server (`artifacts/api-server`)
- **Kind**: Express 5 + Drizzle ORM
- **Port**: 8080
- **Path**: `/api`

### Obsidian Ember Portfolio (`artifacts/obsidian-ember`)
- **Kind**: React + Vite (static)
- **Preview path**: `/obsidian-ember/`
- **Theme**: Ember dark theme — amber `#f59e0b`, red `#dc2626`, bg `#060402`
- **Fonts**: Space Grotesk (display/mono), DM Sans (body) — Google Fonts
- **Animation**: Framer Motion, Lenis smooth scroll
- **Sections**: Hero, About, Projects, Experience, Blog, Contact
- **Components**: Preloader, CustomCursor (amber glow), Navbar (αD logo), Footer (SpotifyWidget)
- **All public asset paths** must use `import.meta.env.BASE_URL` prefix — root-relative `/` paths 404 at this sub-path
- **SpotifyWidget** (`src/components/SpotifyWidget.tsx`) — polls `/api/spotify/now-playing` every 30s; gracefully shows nothing when not connected
- **Spotify integration**: connector `ccfg_spotify_01K49R1M6S088SR66BS9A0V4R7` — **not yet authorized**. User chose to keep widget dormant until they connect later. To activate: run `proposeIntegration("connector:ccfg_spotify_01K49R1M6S088SR66BS9A0V4R7")`, then call `addIntegration` with the resulting `connection:...` ID, then set `SPOTIFY_CONNECTION_ID` env var.
- **Project cards** (`src/components/sections/Projects.tsx`): 7-layer 3D hover (tilt, parallax image, specular highlight, foil iridescence, directional shadow, scanline, rim+corners) + magnetic pull within 220px via `useMagneticPull` hook. Respects `prefers-reduced-motion`.

### API Server (`artifacts/api-server`)
- **Kind**: Express 5 + Drizzle ORM
- **Port**: 8080
- **Path**: `/api`
- **Routes**: `GET /api/healthz`, `GET /api/spotify/now-playing`

### Mockup Sandbox (`artifacts/mockup-sandbox`)
- **Kind**: Vite component preview server
- **Port**: 8081
- **Path**: `/__mockup`
