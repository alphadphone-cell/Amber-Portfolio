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

### Mockup Sandbox (`artifacts/mockup-sandbox`)
- **Kind**: Vite component preview server
- **Port**: 8081
- **Path**: `/__mockup`
