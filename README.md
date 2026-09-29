# FieldIn - Round 1 Frontend Assignment

FieldIn is a responsive, frontend-only prototype for discovering local sports venues, building squads, entering community tournaments, and earning rewards for sustainable play. It uses in-browser dummy data and requires no API, database, account, or environment variables.

## Run locally

Prerequisite: Node.js 20 or newer.

```powershell
npm run dev
```

Open `http://localhost:3000`. The canonical Round 1 submission is the Next.js App Router project in `frontend/`; it uses local fixtures only and makes no API calls.

## Included UI modules

1. **Sports venues** - sport, budget, and distance filters; live-cam indicators; a booking drawer with time-slot selection and split-cost breakdown.
2. **Tournaments** - capacity progress, team registration modal, and a route into player discovery.
3. **Matchmaking** - squad requests, solo-player profiles with athlete-resume drawers, open-pickup map treatment, and post-availability modal.
4. **Rewards** - shared Field Coin wallet, RVM-2026 redemption, voucher validation, and activity history.

Every visible control produces an interaction, state update, modal, drawer, or toast. Demo sign-in uses `arjun@fieldin.local` / `demo1234`; account data stays in the current browser session only.

## Design system

- Background: `#0F172A`
- Cards: `#1E293B`
- Emerald actions: `#10B981`
- Coin/reward accent: `#F59E0B`
- Borders: `#334155`
- Radius: 16px
- Responsive single-column layout below 760px

## Validation completed

- `node --check app.js`
- Manual browser smoke test of venue rendering, matchmaking tabs, solo-player resume drawer, and console error state.
- No network API is used by the UI; all fixture data lives in `app.js`.

## Project structure

```text
index.html   App shell and tab layouts
style.css    Responsive design system and component styling
app.js       Dummy data, UI state, and interactions
server.js    Minimal static-file development server
```

Round 2 can replace the in-browser fixture adapter with authenticated APIs, PostgreSQL/PostGIS, Redis booking holds, and real-time updates without changing the user-facing flows.
