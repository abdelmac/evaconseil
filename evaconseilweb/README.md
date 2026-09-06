# EVA Conseil

A static, multilingual corporate website for EVA Conseil, an independent holding company based in Romania.

## Languages

- English: `/`
- French: `/fr/`
- Romanian: `/ro/`

Every language is rendered to static HTML during the build, so the site works on GitHub Pages without a server.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run all project checks with:

```bash
npm run lint
npm run typecheck
npm run build
```

The static site is generated in `out/`.

## GitHub Pages deployment

The deployment workflow lives at the repository root in `.github/workflows/deploy-pages.yml`. It:

- gets the correct Pages base path from GitHub;
- builds the app from `evaconseilweb/`;
- uploads `evaconseilweb/out/`;
- deploys the static artifact to GitHub Pages.

In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Then push to `main` or run the workflow manually from the Actions tab.

For this repository, the project URL is:

`https://abdelmac.github.io/evaconseil/`

## Content

All translated copy is kept in `src/content/site.ts`. Before publication, confirm the contact email and replace or expand the generic investment focus with the company’s approved legal and portfolio information.
