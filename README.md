# aiNOW product landing

Next.js 16 (App Router) + Tailwind v4 + next-intl. One page, three locales, one lead form.

This repo was scaffolded from `landing-template/` in the AGENT repo. Most of it is shared with
the other aiNOW product landings and is kept in step by a script. Read the seam below before you
change anything, because editing a shared file here means the next sync overwrites you.

## The seam

**Per-site. Yours to edit. Never synced.**

| Path | What it is |
| --- | --- |
| `src/config/site.ts` | domain, wordmark, brand hex, shader hexes, default locale. The whole identity. |
| `src/app/brand.css` | the CSS tokens, generated from `brandHex`. Change `site.ts`, re-run the scaffold. |
| `src/messages/{ka,en,ru}.json` | all the copy. ~190 keys under `product.*` plus the shared shell namespaces. |
| `src/features/showcase/**` | this product's bespoke demo widgets. |
| `src/features/home/components/LandingShowcase.tsx` | the slot that imports them. |
| `.impeccable/config.json` | whitelists the brand hue so the design gate does not call it AI slop. |
| `public/**` | og-image, icons, search-console verification. |

**Shared. Do not edit here.** Everything else: the hero, nav, footer, work, faq, cta, wordmark,
the UI primitives, the i18n plumbing, the API routes, `next.config.ts`, the `Dockerfile`.
Change it in `landing-template/` and run the sync, or your edit gets reverted.

**Generated.** `src/config/family.ts` comes from `landings/family.json`. Never hand-edit it, and
never hardcode a cross-link list in a component: that is how the old `FAMILY` array ended up
three-way wrong across only three repos.

## Commands

```bash
npm ci            # NEVER `npm install` on Windows: it prunes the 51 os:["linux"] optional
                  # deps from the lockfile and CI `npm ci` on node:20-alpine then fails.
npm run dev
npm run build
```

From the AGENT repo root:

```bash
python scripts/landings.py check          # has this landing drifted from the template?
python scripts/landings.py sync           # dry run, shows what would change
python scripts/landings.py sync --apply   # write
```

## Rules that are not negotiable

- **No long dash and no middle dash anywhere**, in any locale, in any file. Not in the copy, not
  in a comment. A hyphen is fine.
- **Every number on the page traces to a source, or it is our own measured number, or it is
  deleted.** No borrowed US statistics, no vendor-blog figures.
- **Prices only where the offer IS a fixed price** (aiapp, vibecoding). The Georgian landings are
  lead capture; prices live on ainow.ge.
- Every page must set `alternates: buildAlternates(path, locale)`. The root layout deliberately
  does not, so a page that forgets it ships with no canonical and no hreflang.
- The design gate (`.claude/hooks/frontend_design_gate.py`) fires on every edit under `src/`.
  No AI-purple gradient, no three-equal-card row, no `transition: all`.

## Deploy

GitHub `blessandsoul/<NAME>.GE` -> Coolify on the VPS. Dockerfile build, `base_directory=/`,
port 3000, health check `/api/health`. A `git push` does NOT deploy: the deploy is a manual API
trigger. Env needed at runtime: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `NEXT_PUBLIC_SITE_URL`.
Without the Telegram pair the lead form 500s.
