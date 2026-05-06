# NXT Docs

Documentation hub for the NXT open-source software suite.

The goal of this repository is to provide one consistent documentation home across NXT projects: suite context, repository-level pages, and component-level structure where needed (for example, monorepos like `nxt-backend`).

## Live site

- [docs.nxtgrid.co](http://docs.nxtgrid.co/)
- [nxtgrid.github.io/nxt-docs](https://nxtgrid.github.io/nxt-docs/)

## Deployment targets

- Netlify remains the primary deployment target for `https://docs.nxtgrid.co`.
- GitHub Pages is configured as a secondary deployment target at `https://nxtgrid.github.io/nxt-docs/`.
- GitHub Pages deploys are handled by `.github/workflows/deploy-pages.yml`.
- The Docusaurus config uses `DOCS_DEPLOY_TARGET` to switch site URL/base path:
  - `netlify` -> `url=https://docs.nxtgrid.co`, `baseUrl=/`
  - `gh-pages` -> `url=https://nxtgrid.github.io`, `baseUrl=/nxt-docs/`

## Project scope

- Explain the NXT suite at system level.
- Provide baseline docs pages for all public repositories.
- Expand documentation incrementally with practical, architecture-first content.

## Repository structure

- `docs/intro.mdx` — suite overview and documentation approach.
- `docs/repositories/index.mdx` — repositories overview and navigation entry point.
- `docs/repositories/` — one page per repository (plus nested subpages for monorepos).
- `docs/templates/repository-template.mdx` — reusable template for new repository pages.
- `AGENTS.md` — tool-agnostic collaboration contract for AI agents/models.

## Local development

```bash
npm install
npm start
```

The development server runs with hot reload for docs and config changes.

To simulate GitHub Pages locally:

```bash
DOCS_DEPLOY_TARGET=gh-pages npm start
```

## Production build

```bash
npm run build
```

To produce a GitHub Pages-compatible build locally:

```bash
DOCS_DEPLOY_TARGET=gh-pages npm run build
```

## How to add or update repository docs

1. Copy the template from `docs/templates/repository-template.mdx`.
2. Create a new page under `docs/repositories/<repo-name>.mdx`.
3. Add the page to `docs/repositories/index.mdx`.
4. Add the page to the `Repositories` section in `sidebars.ts`.
5. Keep ordering consistent:
   - `nxt-*` first, alphabetical
   - `lorawan-*` second, alphabetical

## Collaboration model

- Work is planned and executed in small, reviewable increments.
- The human user is the sole committer.
- AI agents should follow the collaboration contract in `AGENTS.md`.
