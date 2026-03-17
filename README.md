# Population Matters — New Website

Next.js 16 + Sanity v5 rebuild of [populationmatters.org](https://populationmatters.org).

**Status:** Phase 1 — Foundation (in progress)

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Sanity v5](https://www.sanity.io) — headless CMS, Studio at `/admin`
- [Tailwind CSS 4](https://tailwindcss.com) — CSS-native `@theme` configuration
- [TypeScript](https://www.typescriptlang.org)
- pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

Copy `.env.local.example` to `.env.local` and fill in the Sanity credentials.

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | Full site URL (e.g. `https://populationmatters.org`) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default: `production`) |
| `SANITY_API_READ_TOKEN` | Viewer token for ISR + draft mode |
| `SANITY_REVALIDATE_SECRET` | Random string for on-demand revalidation webhook |

## Structure

```
src/
  app/          Next.js App Router pages
  sanity/       Sanity client, schema types, GROQ queries
    schemaTypes/
      documents/  pm.article, pm.campaignPage, pm.issuePage, pm.resource, pm.projectShowcase, pm.landingPage
      misc/       pm.teamMember, pm.boardMember, pm.patron
  styles/       Tailwind CSS (app.css, fonts.css)
  lib/          Shared utilities
```

## Sanity content types

| Type | Description |
|---|---|
| `pm.article` | News articles (298 to migrate) |
| `pm.resource` | Reports, magazines, briefings (60 to migrate) |
| `pm.issuePage` | Why Population Matters topic pages |
| `pm.campaignPage` | Campaign landing pages |
| `pm.projectShowcase` | E2P partner project profiles |
| `pm.landingPage` | Appeal and event landing pages |
| `pm.teamMember` | Staff profiles |
| `pm.boardMember` | Trustee profiles |
| `pm.patron` | Patrons and Choice Ambassadors |

## Implementation plan

See [`../IMPLEMENTATION-PLAN.md`](../IMPLEMENTATION-PLAN.md) for the full phased plan.

---

Built by Dan + Claude. Based on [nuotsu/sanitypress](https://github.com/nuotsu/sanitypress).
