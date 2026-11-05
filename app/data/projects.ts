// Sources :
// - RPG : CV (« RPG – Ruby on Rails / Next.js : Application avec API REST,
//   authentification, quêtes, combats et inventaire »).
// - GuessWhat : message d'Aliyo (« Pictionary multijoueur, Go + WebSockets + Next.js »).
// - my_bot, Sportly : seul le nom est connu, tout le reste est en TODO.
//
// « competences » : compétences démontrées, déduites strictement des
// fonctionnalités décrites ci-dessus. Le rattachement aux blocs officiels du
// titre RNCP reste à faire (le référentiel n'a pas été fourni) : « rncp: null ».
//
// Rien n'est inventé : toute information manquante vaut null (ou []) et n'est
// pas affichée sur le site. Chaque projet liste ses TODO ci-dessous.

export type ProjectLinks = {
  demo: string | null;
  repo: string | null;
};

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string | null;
  context: string | null;
  period: string | null;
  role: string | null;
  stack: string[];
  features: string[];
  competences: string[];
  /** Blocs / compétences RNCP officiels démontrés. Non affiché tant que null. */
  rncp: string[] | null;
  /** Analyse : ce que le projet m'a appris, difficultés, progression. */
  learnings: string | null;
  links: ProjectLinks;
  image: ProjectImage | null;
};

export const projects: Project[] = [
  // TODO (RPG) : période, rôle, analyse « ce que j'en retiens », rattachement RNCP,
  // capture, lien de démo, lien GitHub.
  {
    slug: "rpg",
    title: "RPG",
    summary: "Application avec API REST, authentification, quêtes, combats et inventaire.",
    context: "Projet Epitech · Titre RNCP Développeur web",
    period: null,
    role: null,
    stack: ["Ruby on Rails", "Next.js"],
    features: ["API REST", "Authentification", "Quêtes", "Combats", "Inventaire"],
    competences: [
      "Concevoir et développer une API REST avec Ruby on Rails",
      "Mettre en place l’authentification des utilisateurs",
      "Modéliser les données métier : quêtes, combats, inventaire",
      "Développer une interface Next.js qui consomme l’API",
    ],
    rncp: null,
    learnings: null,
    links: { demo: null, repo: null },
    image: null,
  },
  // TODO (GuessWhat) : contexte, période, rôle, analyse, rattachement RNCP, capture,
  // lien de démo, lien GitHub.
  {
    slug: "guesswhat",
    title: "GuessWhat",
    summary: "Pictionary multijoueur.",
    context: null,
    period: null,
    role: null,
    stack: ["Go", "WebSockets", "Next.js"],
    features: ["Multijoueur", "Pictionary"],
    competences: [
      "Développer un back-end en Go",
      "Gérer la communication temps réel avec les WebSockets",
      "Synchroniser une partie entre plusieurs joueurs",
      "Développer l’interface de jeu en Next.js",
    ],
    rncp: null,
    learnings: null,
    links: { demo: null, repo: null },
    image: null,
  },
  // TODO (my_bot) : tout le contenu sauf le nom (description, contexte, période, rôle,
  // stack, fonctionnalités, compétences, analyse, RNCP, capture, liens).
  {
    slug: "my-bot",
    title: "my_bot",
    summary: null,
    context: null,
    period: null,
    role: null,
    stack: [],
    features: [],
    competences: [],
    rncp: null,
    learnings: null,
    links: { demo: null, repo: null },
    image: null,
  },
  // TODO (Sportly) : tout le contenu sauf le nom (description, contexte, période, rôle,
  // stack, fonctionnalités, compétences, analyse, RNCP, capture, liens).
  {
    slug: "sportly",
    title: "Sportly",
    summary: null,
    context: null,
    period: null,
    role: null,
    stack: [],
    features: [],
    competences: [],
    rncp: null,
    learnings: null,
    links: { demo: null, repo: null },
    image: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
