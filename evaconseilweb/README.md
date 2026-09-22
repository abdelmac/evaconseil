# EVA Conseil Europe

A static, multilingual corporate website for EVA Conseil Europe, an independent holding company based in Romania.

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

All translated copy is kept in `src/content/site.ts`. Contact requests open an email to `eva.conseil.eu@gmail.com`. The site does not submit or store messages on a server.

## Custom domain: eva-europe-conseil.com

1. In [repository Settings → Pages](https://github.com/abdelmac/evaconseil/settings/pages), keep **GitHub Actions** as the source. Save `eva-europe-conseil.com` under **Custom domain** before changing DNS.
2. In Namecheap, open **Domain List → Manage → Advanced DNS**. Replace the parking records for `@` and `www` with the following records (TTL: Automatic). Keep unrelated MX/TXT records.

| Type | Host | Value |
| --- | --- | --- |
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | abdelmac.github.io |

3. Run **Actions → Deploy to GitHub Pages → Run workflow** after saving the GitHub domain. The workflow gets both the asset base path and full public URL from GitHub, so it works on the project URL and the custom domain.
4. Wait for the DNS check and certificate to succeed, then enable **Enforce HTTPS** in Pages settings. Check `/`, `/fr/`, `/ro/`, `/robots.txt`, `/sitemap.xml` and the redirect from `www`.

The custom-domain workflow uses the actual Pages setting; a `CNAME` file alone does not configure a domain for Actions deployments.

For local production builds, `NEXT_PUBLIC_SITE_URL` sets the complete public URL, including any project path. It defaults to `https://eva-europe-conseil.com/`. When simulating the GitHub project URL, set `PAGES_BASE_PATH=/evaconseil` and `NEXT_PUBLIC_SITE_URL=https://abdelmac.github.io/evaconseil/` together. Canonical links, language alternatives and the sitemap share this setting.

Official instructions: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Namecheap setup](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/).
