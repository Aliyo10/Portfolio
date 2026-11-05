// Facette « apprentissage » du portfolio (sujet Epitech, partie Hybride).
//
// Sources : CV, ancien portfolio (commit 23e1fbf), fiches projet et historiques git.
// Rien n'est inventé. Ce qui relève de l'auto-évaluation d'Aliyo vaut null et
// n'est pas affiché tant qu'il n'est pas rempli.
//
// TODO : liste officielle des compétences du titre RNCP (non fournie par le sujet) :
//        remplir « rncp » sur chaque domaine, et ajouter les compétences non couvertes.
// TODO : pour chaque domaine : « level », « resources », « nextStep ».
// TODO : « analysis » : démarche, forces, faiblesses, objectifs.

export type LearningStep = {
  period: string;
  title: string;
  description: string;
};

export type Proof = {
  label: string;
  description: string;
  /** Lien interne vers la preuve. */
  href: string;
};

export type CompetencyArea = {
  title: string;
  proofs: Proof[];
  /** Compétences officielles du titre RNCP couvertes. Non affiché tant que null. */
  rncp: string[] | null;
  /** Auto-évaluation : niveau atteint, formulé par Aliyo. */
  level: string | null;
  /** Ressources mobilisées (documentation, cours, pairs...). */
  resources: string | null;
  /** Ce qu'il reste à apprendre pour passer au niveau supérieur. */
  nextStep: string | null;
};

export type LearningAnalysis = {
  approach: string | null;
  strengths: string | null;
  weaknesses: string | null;
  goals: string | null;
};

const ALTERNANCE = "/#parcours";

export const learningSteps: LearningStep[] = [
  {
    period: "2019 – 2022",
    title: "Découverte des systèmes d’information",
    description: "Baccalauréat STMG, option SIO, au lycée Martinière Duchère.",
  },
  {
    period: "Octobre 2023 – février 2024",
    title: "Premières bases du web",
    description:
      "Certificat Conception et Développement Web à emlyon business school : HTML, CSS, JavaScript et notions clés de la gestion de projets.",
  },
  {
    period: "Depuis novembre 2024",
    title: "Formation à Epitech",
    description:
      "Premiers projets : Puissance 4 en JavaScript, My_Cinema en PHP et SQL, My_Spotify avec une API.",
  },
  {
    period: "Depuis septembre 2025",
    title: "Alternance en entreprise",
    description:
      "Chez Volvo Group – Renault Trucks : modernisation d’une application industrielle et développement d’une nouvelle application en Spring Boot et Angular.",
  },
  {
    period: "Projets Epitech",
    title: "Applications complètes",
    description:
      "RPG (API Ruby on Rails et interface Next.js), GuessWhat (serveur Go temps réel) et my_bot (intégration d’un modèle d’IA local).",
  },
  {
    period: "Depuis juillet 2026",
    title: "Pilotage d’un projet en équipe",
    description:
      "Sportly, projet de fin d’année en équipe de 3, comme tech lead et project owner.",
  },
];

export const competencyAreas: CompetencyArea[] = [
  {
    title: "Concevoir et développer des interfaces",
    proofs: [
      {
        label: "Alternance",
        description: "Maquettes UI sur Figma et développement en Angular.",
        href: ALTERNANCE,
      },
      {
        label: "RPG",
        description: "Interface Next.js connectée à une API.",
        href: "/projets/rpg",
      },
      {
        label: "my_bot",
        description: "Interface de chat avec plusieurs discussions.",
        href: "/projets/my-bot",
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
  {
    title: "Développer le back-end et des API",
    proofs: [
      {
        label: "Alternance",
        description: "Développement d’une application en Spring Boot.",
        href: ALTERNANCE,
      },
      {
        label: "RPG",
        description: "API JSON versionnée avec Ruby on Rails.",
        href: "/projets/rpg",
      },
      {
        label: "Sportly",
        description: "API modulaire avec Node.js, Express et TypeScript.",
        href: "/projets/sportly",
      },
      {
        label: "GuessWhat",
        description: "Serveur Go découpé en packages et protocole WebSocket documenté.",
        href: "/projets/guesswhat",
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
  {
    title: "Modéliser et exploiter les données",
    proofs: [
      {
        label: "Sportly",
        description: "Schéma PostgreSQL de tous les domaines de l’application.",
        href: "/projets/sportly",
      },
      {
        label: "RPG",
        description: "Modèle de jeu : personnages, inventaire, quêtes et combats.",
        href: "/projets/rpg",
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
  {
    title: "Sécuriser une application",
    proofs: [
      {
        label: "Sportly",
        description: "Mots de passe argon2id, jetons de rafraîchissement et validation avec Zod.",
        href: "/projets/sportly",
      },
      {
        label: "RPG",
        description: "Authentification Devise JWT et contrôle d’accès avec Pundit.",
        href: "/projets/rpg",
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
  {
    title: "Tester et documenter",
    proofs: [
      {
        label: "RPG",
        description: "Tests de l’API avec RSpec.",
        href: "/projets/rpg",
      },
      {
        label: "Alternance",
        description: "Documentation technique pour préparer une migration.",
        href: ALTERNANCE,
      },
      {
        label: "my_bot",
        description: "Guide d’installation et de configuration.",
        href: "/projets/my-bot",
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
  {
    title: "Faire évoluer une application existante",
    proofs: [
      {
        label: "Alternance",
        description: "Modernisation d’une application industrielle de Java 8 / JSF vers Spring Boot / Angular.",
        href: ALTERNANCE,
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
  {
    title: "Gérer un projet et travailler en équipe",
    proofs: [
      {
        label: "Sportly",
        description: "Cadrage de l’architecture, découpage en lots et coordination de l’équipe.",
        href: "/projets/sportly",
      },
    ],
    rncp: null,
    level: null,
    resources: null,
    nextStep: null,
  },
];

export const learningAnalysis: LearningAnalysis = {
  approach: null,
  strengths: null,
  weaknesses: null,
  goals: null,
};
