import { type Locale, locales, siteCopy } from "@/content/site";

const basePath =
  process.env.PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(path: string) {
  return `${basePath}${path}`;
}

const localeRoutes: Record<Locale, string> = {
  en: "/",
  fr: "/fr/",
  ro: "/ro/",
};

const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ro: "RO",
};

const skipLabels: Record<Locale, string> = {
  en: "Skip to content",
  fr: "Aller au contenu",
  ro: "Sari la conținut",
};

const accessibilityLabels: Record<
  Locale,
  { home: string; primaryNav: string; mobileNav: string; overview: string }
> = {
  en: {
    home: "EVA Conseil — home",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    overview: "EVA Conseil at a glance",
  },
  fr: {
    home: "EVA Conseil — accueil",
    primaryNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    overview: "EVA Conseil en bref",
  },
  ro: {
    home: "EVA Conseil — pagina principală",
    primaryNav: "Navigare principală",
    mobileNav: "Navigare mobilă",
    overview: "EVA Conseil pe scurt",
  },
};

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="46" height="46" rx="23" />
      <path d="M15 14.5h18M15 24h13M15 33.5h18" />
      <path className="brand-mark-accent" d="M33 14.5 24 33.5" />
    </svg>
  );
}

function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up" }) {
  const rotation = direction === "down" ? 90 : direction === "up" ? -90 : 0;

  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 20 20"
      aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

function FocusGlyph({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <rect x="14" y="14" width="56" height="56" rx="2" />
        <path d="M14 37h56M37 14v56M26 26h22v22H26z" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <circle cx="42" cy="42" r="28" />
        <circle cx="42" cy="42" r="13" />
        <path d="M42 14v56M14 42h56" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 84 84" aria-hidden="true">
      <path d="m42 11 31 54H11L42 11Z" />
      <circle cx="42" cy="44" r="14" />
      <path d="M42 30v28" />
    </svg>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <nav className="language-switcher" aria-label="Language / Langue / Limbă">
      {locales.map((item) => (
        <a
          key={item}
          href={withBasePath(localeRoutes[item])}
          hrefLang={item}
          lang={item}
          title={siteCopy[item].languageName}
          aria-current={locale === item ? "page" : undefined}
          className={locale === item ? "is-active" : undefined}
        >
          {localeLabels[item]}
        </a>
      ))}
    </nav>
  );
}

export function HoldingSite({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const a11y = accessibilityLabels[locale];
  const navItems = [
    { href: "#about", label: copy.nav.about },
    { href: "#focus", label: copy.nav.focus },
    { href: "#approach", label: copy.nav.approach },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <div className="site" lang={locale}>
      <a className="skip-link" href="#main-content">
        {skipLabels[locale]}
      </a>

      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="brand" href={withBasePath("/")} aria-label={a11y.home}>
            <BrandMark />
            <span className="brand-wordmark">
              <strong>EVA</strong>
              <span>CONSEIL</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label={a11y.primaryNav}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher locale={locale} />
            <details className="mobile-navigation">
              <summary>
                <span>{copy.nav.menu}</span>
                <MenuIcon />
              </summary>
              <nav aria-label={a11y.mobileNav}>
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href}>
                    <span>0{index + 1}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span />
                {copy.hero.eyebrow}
              </p>
              <h1 id="hero-title">
                <span>{copy.hero.titleLead}</span>
                <em>{copy.hero.titleAccent}</em>
              </h1>
              <p className="hero-intro">{copy.hero.body}</p>
              <div className="hero-actions">
                <a className="button button-light" href="#approach">
                  {copy.hero.primaryCta}
                  <Arrow />
                </a>
                <a className="text-link text-link-light" href="#contact">
                  {copy.hero.secondaryCta}
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-outer" />
              <div className="orbit orbit-inner" />
              <div className="orbit-axis orbit-axis-horizontal" />
              <div className="orbit-axis orbit-axis-vertical" />
              <div className="orbit-node orbit-node-one" />
              <div className="orbit-node orbit-node-two" />
              <div className="orbit-node orbit-node-three" />
              <div className="hero-monogram">
                <span>E</span>
                <i />
                <span>V</span>
                <i />
                <span>A</span>
              </div>
              <div className="art-label art-label-top">HOLDING / RO</div>
              <div className="art-label art-label-bottom">45° N / 25° E</div>
              <div className="art-coordinate">RO — EU</div>
            </div>

            <a className="scroll-cue" href="#about">
              <span>{copy.hero.scroll}</span>
              <span className="scroll-line" />
              <Arrow direction="down" />
            </a>
          </div>
        </section>

        <section className="signals" aria-label={a11y.overview}>
          <div className="container signals-grid">
            {copy.signals.map((signal, index) => (
              <div className="signal" key={signal.label}>
                <span className="signal-number">0{index + 1}</span>
                <div>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">{copy.about.eyebrow}</p>
              <h2 id="about-title">{copy.about.title}</h2>
            </div>

            <div className="about-content">
              <p className="about-lead">{copy.about.lead}</p>
              <p className="body-copy">{copy.about.body}</p>
            </div>

            <div className="about-quote">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{copy.about.quote}</blockquote>
              <div className="independent-stamp">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r="56" />
                  <path d="M31 61h58M60 32v57" />
                  <circle cx="60" cy="60" r="15" />
                </svg>
                <span>{copy.about.stamp}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section focus" id="focus" aria-labelledby="focus-title">
          <div className="container">
            <div className="focus-header">
              <div className="section-heading section-heading-light">
                <p className="eyebrow">{copy.focus.eyebrow}</p>
                <h2 id="focus-title">{copy.focus.title}</h2>
              </div>
              <p className="focus-intro">{copy.focus.intro}</p>
            </div>

            <div className="focus-cards">
              {copy.focus.cards.map((card, index) => (
                <article className="focus-card" key={card.title}>
                  <div className="focus-card-topline">
                    <span>0{index + 1}</span>
                    <FocusGlyph index={index} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <span className="card-note">
                    {card.note}
                    <Arrow />
                  </span>
                </article>
              ))}
            </div>

            <div className="criteria">
              <p>{copy.focus.criteriaLabel}</p>
              <ul>
                {copy.focus.criteria.map((criterion) => (
                  <li key={criterion}>
                    <span aria-hidden="true" />
                    {criterion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section approach" id="approach" aria-labelledby="approach-title">
          <div className="container approach-grid">
            <div className="approach-intro">
              <p className="eyebrow eyebrow-dark">{copy.approach.eyebrow}</p>
              <h2 id="approach-title">{copy.approach.title}</h2>
              <p>{copy.approach.intro}</p>
            </div>

            <ol className="approach-steps">
              {copy.approach.steps.map((step, index) => (
                <li key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <div className="step-copy">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  <div className="step-marker" aria-hidden="true">
                    <span />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="romania" aria-labelledby="romania-title">
          <div className="container romania-panel">
            <div className="romania-copy">
              <p className="eyebrow">{copy.romania.eyebrow}</p>
              <h2 id="romania-title">{copy.romania.title}</h2>
              <p>{copy.romania.body}</p>
              <span>{copy.romania.label}</span>
            </div>
            <div className="europe-art" aria-hidden="true">
              <div className="europe-ring europe-ring-one" />
              <div className="europe-ring europe-ring-two" />
              <div className="europe-cross europe-cross-one" />
              <div className="europe-cross europe-cross-two" />
              <span className="ro-dot" />
              <strong>RO</strong>
              <em>EU</em>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow eyebrow-dark">{copy.contact.eyebrow}</p>
              <h2 id="contact-title">{copy.contact.title}</h2>
            </div>
            <div className="contact-content">
              <p>{copy.contact.body}</p>
              <a className="email-link" href={`mailto:${copy.contact.cta}`}>
                <span>{copy.contact.cta}</span>
                <span className="email-arrow">
                  <Arrow />
                </span>
              </a>
              <div className="contact-meta">
                <span>{copy.contact.location}</span>
                <span>{copy.contact.languages}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a
            className="brand brand-footer"
            href={withBasePath("/")}
            aria-label={a11y.home}
          >
            <BrandMark />
            <span className="brand-wordmark">
              <strong>EVA</strong>
              <span>CONSEIL</span>
            </span>
          </a>
          <p>{copy.footer.descriptor}</p>
          <a className="back-to-top" href="#top">
            {copy.footer.backToTop}
            <Arrow direction="up" />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} EVA Conseil</span>
          <span>{copy.footer.rights}</span>
          <span>{copy.footer.geography}</span>
        </div>
      </footer>
    </div>
  );
}
