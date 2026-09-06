export const locales = ["en", "fr", "ro"] as const;

export type Locale = (typeof locales)[number];

type SiteCopy = {
  languageName: string;
  nav: {
    about: string;
    focus: string;
    approach: string;
    contact: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
  };
  signals: Array<{ label: string; value: string }>;
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    quote: string;
    stamp: string;
  };
  focus: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string; note: string }>;
    criteriaLabel: string;
    criteria: string[];
  };
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; body: string }>;
  };
  romania: {
    eyebrow: string;
    title: string;
    body: string;
    label: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    location: string;
    languages: string;
  };
  footer: {
    descriptor: string;
    rights: string;
    backToTop: string;
    geography: string;
  };
  meta: { title: string; description: string };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    languageName: "English",
    nav: {
      about: "About",
      focus: "Focus",
      approach: "Approach",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Independent holding company · Romania",
      titleLead: "Built for",
      titleAccent: "the long view.",
      body: "EVA Conseil Europe is an independent Romanian holding company partnering with remarkable businesses, real assets and ideas with the potential to endure.",
      primaryCta: "Discover our approach",
      secondaryCta: "Start a conversation",
      scroll: "Explore",
    },
    signals: [
      { label: "Horizon", value: "Generational" },
      { label: "Partnership", value: "Hands-on" },
      { label: "Perspective", value: "Romania → Europe" },
    ],
    about: {
      eyebrow: "Our philosophy",
      title: "Capital is only the beginning.",
      lead: "Strong companies are built through clarity, trust and the freedom to think beyond the next quarter.",
      body: "We bring patient ownership, strategic perspective and practical support to every partnership. Our role is to protect what already works, unlock what comes next and create the conditions for durable growth.",
      quote: "We measure progress in stronger companies, not faster exits.",
      stamp: "Independent by design",
    },
    focus: {
      eyebrow: "Where we engage",
      title: "Backing enduring potential.",
      intro: "We remain deliberately selective, looking for sound fundamentals and meaningful opportunities where thoughtful ownership can make a difference.",
      cards: [
        {
          title: "Operating companies",
          body: "Established businesses ready for their next chapter of disciplined growth, professionalisation or succession.",
          note: "Build on strength",
        },
        {
          title: "Real assets",
          body: "Distinctive assets with resilient fundamentals, clear utility and the potential to create long-term value.",
          note: "Invest with purpose",
        },
        {
          title: "Strategic ventures",
          body: "Select opportunities where patient capital and an entrepreneurial mindset can shape an ambitious idea.",
          note: "Create what is next",
        },
      ],
      criteriaLabel: "What we value",
      criteria: [
        "Strong fundamentals",
        "Ambitious, principled teams",
        "A clear path to value creation",
        "A genuinely shared horizon",
      ],
    },
    approach: {
      eyebrow: "How we work",
      title: "Conviction, followed by action.",
      intro: "Every partnership is different. Our way of working is consistent: listen closely, align early and stay involved for the journey.",
      steps: [
        {
          title: "Understand deeply",
          body: "We begin with the business, its people and its context—asking the questions that reveal both resilience and possibility.",
        },
        {
          title: "Build together",
          body: "We agree on a focused plan, contribute where we can be useful and give leadership the space to lead.",
        },
        {
          title: "Compound patiently",
          body: "We prioritise durable decisions, reinvest behind progress and let time become a competitive advantage.",
        },
      ],
    },
    romania: {
      eyebrow: "Our point of view",
      title: "Rooted in Romania. Open to Europe.",
      body: "Romania combines exceptional talent, industrial depth and entrepreneurial energy. We see a market with room to build regional leaders—and a natural bridge to the wider European economy.",
      label: "Romania · European Union",
    },
    contact: {
      eyebrow: "Start a conversation",
      title: "Let’s build what lasts.",
      body: "If you are leading a business, considering its next chapter or exploring a thoughtful partnership, we would be glad to hear from you.",
      cta: "contact@evaconseil.ro",
      location: "Romania · European Union",
      languages: "Conversations in EN · FR · RO",
    },
    footer: {
      descriptor: "Independent holding company",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      geography: "Romania · Europe",
    },
    meta: {
      title: "EVA Conseil Europe | Independent Holding Company in Romania",
      description: "EVA Conseil Europe is an independent Romanian holding company focused on patient ownership, active partnership and enduring value.",
    },
  },
  fr: {
    languageName: "Français",
    nav: {
      about: "À propos",
      focus: "Priorités",
      approach: "Approche",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Société holding indépendante · Roumanie",
      titleLead: "Pensé pour",
      titleAccent: "le temps long.",
      body: "EVA Conseil Europe est une société holding roumaine indépendante. Nous nouons des partenariats avec des entreprises remarquables, investissons dans des actifs réels et soutenons des idées à fort potentiel de long terme.",
      primaryCta: "Découvrir notre approche",
      secondaryCta: "Échanger avec nous",
      scroll: "Découvrir",
    },
    signals: [
      { label: "Horizon", value: "Générationnel" },
      { label: "Partenariat", value: "Engagé" },
      { label: "Perspective", value: "Roumanie → Europe" },
    ],
    about: {
      eyebrow: "Notre philosophie",
      title: "Le capital n’est qu’un point de départ.",
      lead: "Les entreprises solides se construisent avec de la clarté, de la confiance et la liberté de voir au-delà du prochain trimestre.",
      body: "À chaque partenariat, nous apportons un actionnariat patient, une vision stratégique et un soutien concret. Notre rôle est de préserver ce qui fonctionne déjà, de révéler le potentiel à venir et de créer les conditions d’une croissance durable.",
      quote: "Nous mesurons nos progrès à la solidité croissante des entreprises, et non à la rapidité des cessions.",
      stamp: "Indépendants par choix",
    },
    focus: {
      eyebrow: "Nos terrains d’engagement",
      title: "Soutenir un potentiel durable.",
      intro: "Nous restons volontairement sélectifs, à la recherche de fondamentaux solides et d’opportunités où un actionnariat attentif peut faire la différence.",
      cards: [
        {
          title: "Entreprises opérationnelles",
          body: "Des entreprises établies prêtes à ouvrir un nouveau chapitre de croissance disciplinée, de professionnalisation ou de transmission.",
          note: "S’appuyer sur les forces",
        },
        {
          title: "Actifs réels",
          body: "Des actifs distinctifs dotés de fondamentaux résilients, d’une utilité claire et d’un potentiel de création de valeur à long terme.",
          note: "Investir avec intention",
        },
        {
          title: "Projets stratégiques",
          body: "Des opportunités choisies où un capital patient et un esprit entrepreneurial peuvent donner forme à une idée ambitieuse.",
          note: "Créer la suite",
        },
      ],
      criteriaLabel: "Ce qui compte pour nous",
      criteria: [
        "Des fondamentaux solides",
        "Des équipes ambitieuses et intègres",
        "Une voie claire vers la création de valeur",
        "Un horizon véritablement partagé",
      ],
    },
    approach: {
      eyebrow: "Notre manière d’agir",
      title: "La conviction, puis l’action.",
      intro: "Chaque partenariat est unique. Notre méthode reste la même : écouter avec attention, s’aligner dès le départ et rester engagés dans la durée.",
      steps: [
        {
          title: "Comprendre en profondeur",
          body: "Nous commençons par l’entreprise, ses équipes et son contexte, en posant les questions qui révèlent à la fois sa résilience et son potentiel.",
        },
        {
          title: "Construire ensemble",
          body: "Nous définissons un plan ciblé, contribuons là où nous sommes utiles et laissons aux dirigeants l’espace pour diriger.",
        },
        {
          title: "Faire grandir avec patience",
          body: "Nous privilégions les décisions durables, réinvestissons pour soutenir les progrès accomplis et faisons du temps un avantage concurrentiel.",
        },
      ],
    },
    romania: {
      eyebrow: "Notre point de vue",
      title: "Ancrés en Roumanie. Ouverts sur l’Europe.",
      body: "La Roumanie réunit des talents remarquables, une base industrielle solide et une grande énergie entrepreneuriale. Nous y voyons un marché où peuvent émerger des leaders régionaux, ainsi qu’un pont naturel vers l’économie européenne dans son ensemble.",
      label: "Roumanie · Union européenne",
    },
    contact: {
      eyebrow: "Ouvrir le dialogue",
      title: "Construisons ce qui dure.",
      body: "Vous dirigez une entreprise, préparez son prochain chapitre ou envisagez un partenariat réfléchi ? Nous serons heureux d’échanger avec vous.",
      cta: "contact@evaconseil.ro",
      location: "Roumanie · Union européenne",
      languages: "Échanges en EN · FR · RO",
    },
    footer: {
      descriptor: "Société holding indépendante",
      rights: "Tous droits réservés.",
      backToTop: "Retour en haut",
      geography: "Roumanie · Europe",
    },
    meta: {
      title: "EVA Conseil Europe | Société holding indépendante en Roumanie",
      description: "EVA Conseil Europe est une société holding roumaine indépendante fondée sur un actionnariat patient, un partenariat actif et la création de valeur durable.",
    },
  },
  ro: {
    languageName: "Română",
    nav: {
      about: "Despre noi",
      focus: "Direcții",
      approach: "Abordare",
      contact: "Contact",
      menu: "Meniu",
    },
    hero: {
      eyebrow: "Holding independent · România",
      titleLead: "Construim cu",
      titleAccent: "o viziune pe termen lung.",
      body: "EVA Conseil Europe este un holding românesc independent care colaborează cu companii remarcabile și investește în active reale și idei cu potențial pe termen lung.",
      primaryCta: "Descoperă abordarea noastră",
      secondaryCta: "Să discutăm",
      scroll: "Descoperă",
    },
    signals: [
      { label: "Orizont", value: "Generațional" },
      { label: "Parteneriat", value: "Activ" },
      { label: "Perspectivă", value: "România → Europa" },
    ],
    about: {
      eyebrow: "Filosofia noastră",
      title: "Capitalul este doar începutul.",
      lead: "Companiile solide se construiesc cu claritate, încredere și libertatea de a privi dincolo de următorul trimestru.",
      body: "Aducem în fiecare parteneriat capital răbdător, perspectivă strategică și sprijin practic. Rolul nostru este să protejăm ceea ce funcționează, să valorificăm următoarele oportunități și să creăm condițiile unei creșteri durabile.",
      quote: "Măsurăm progresul prin companii mai puternice, nu prin ieșiri mai rapide din investiții.",
      stamp: "Independenți prin alegere",
    },
    focus: {
      eyebrow: "Unde ne implicăm",
      title: "Susținem potențialul durabil.",
      intro: "Suntem selectivi în mod deliberat și căutăm fundamente solide, precum și oportunități semnificative în care o abordare atentă a rolului de acționar poate face diferența.",
      cards: [
        {
          title: "Companii operaționale",
          body: "Afaceri consacrate, pregătite pentru un nou capitol de creștere disciplinată, profesionalizare sau succesiune la conducere.",
          note: "Construim pe punctele forte",
        },
        {
          title: "Active reale",
          body: "Active cu caracteristici aparte, fundamente reziliente, o utilitate clară și potențialul de a crea valoare pe termen lung.",
          note: "Investim cu sens",
        },
        {
          title: "Inițiative strategice",
          body: "Oportunități atent alese, în care capitalul răbdător și spiritul antreprenorial pot da formă unei idei ambițioase.",
          note: "Creăm următorul capitol",
        },
      ],
      criteriaLabel: "Ce apreciem",
      criteria: [
        "Fundamente solide",
        "Echipe ambițioase și integre",
        "O cale clară către crearea de valoare",
        "Un orizont cu adevărat comun",
      ],
    },
    approach: {
      eyebrow: "Cum lucrăm",
      title: "Convingere, urmată de acțiune.",
      intro: "Fiecare parteneriat este diferit. Modul nostru de lucru rămâne constant: ascultăm cu atenție, ne aliniem de la început și rămânem implicați pe parcurs.",
      steps: [
        {
          title: "Înțelegem în profunzime",
          body: "Începem prin a înțelege afacerea, oamenii săi și contextul în care operează, punând întrebările care scot la iveală atât reziliența, cât și potențialul.",
        },
        {
          title: "Construim împreună",
          body: "Stabilim un plan clar, contribuim acolo unde putem fi de folos și le oferim liderilor libertatea de a conduce.",
        },
        {
          title: "Creștem cu răbdare",
          body: "Punem pe primul plan deciziile durabile, reinvestim pentru a susține progresul și transformăm timpul într-un avantaj competitiv.",
        },
      ],
    },
    romania: {
      eyebrow: "Perspectiva noastră",
      title: "Înrădăcinați în România. Deschiși spre Europa.",
      body: "România reunește talente excepționale, o bază industrială solidă și energie antreprenorială. Vedem aici atât spațiul necesar construirii unor lideri regionali, cât și o punte firească spre economia europeană în ansamblu.",
      label: "România · Uniunea Europeană",
    },
    contact: {
      eyebrow: "Să discutăm",
      title: "Să construim ceva durabil.",
      body: "Dacă ești la conducerea unei companii, îi pregătești următorul capitol sau iei în calcul un parteneriat bine gândit, ne-ar face plăcere să discutăm.",
      cta: "contact@evaconseil.ro",
      location: "România · Uniunea Europeană",
      languages: "Discuții în EN · FR · RO",
    },
    footer: {
      descriptor: "Holding independent",
      rights: "Toate drepturile rezervate.",
      backToTop: "Înapoi la începutul paginii",
      geography: "România · Europa",
    },
    meta: {
      title: "EVA Conseil Europe | Holding independent în România",
      description: "EVA Conseil Europe este un holding românesc independent, axat pe un acționariat pe termen lung, parteneriate active și crearea de valoare durabilă.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
