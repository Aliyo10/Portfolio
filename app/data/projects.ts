// Sources :
// - RPG : CV (« RPG – Ruby on Rails / Next.js : Application avec API REST,
//   authentification, quêtes, combats et inventaire »).
// - GuessWhat : message d'Aliyo (« Pictionary multijoueur, Go + WebSockets + Next.js »).
// - Sportly : message d'Aliyo + repo W-PJL-400-LYN-4-1-projetlibre-1 (lu en lecture
//   seule : package.json, docs, historique des commits d'Aliyo).
// - my_bot : message d'Aliyo uniquement (repo introuvable sur la machine).
//
// « competences » : compétences démontrées, déduites strictement des
// fonctionnalités et contributions décrites. Le rattachement aux blocs officiels
// du titre RNCP reste à faire (le référentiel n'a pas été fourni) : « rncp: null ».
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
  /** Fonctionnalités du produit (bloc « Le projet »). */
  features: string[];
  /** Ce que j'ai fait personnellement (bloc « Ce que j'ai fait »). */
  contributions: string[];
  competences: string[];
  /** Blocs / compétences RNCP officiels démontrés. Non affiché tant que null. */
  rncp: string[] | null;
  /** Analyse : ce que le projet m'a appris, difficultés, progression. */
  learnings: string | null;
  links: ProjectLinks;
  image: ProjectImage | null;
};

export const projects: Project[] = [
  // TODO (RPG) : période, rôle, ce que j'ai fait, analyse « ce que j'en retiens »,
  // rattachement RNCP, capture, lien de démo, lien GitHub.
  {
    slug: "rpg",
    title: "RPG",
    summary: "Application avec API REST, authentification, quêtes, combats et inventaire.",
    context: "Projet Epitech · Titre RNCP Développeur web",
    period: null,
    role: null,
    stack: ["Ruby on Rails", "Next.js"],
    features: ["API REST", "Authentification", "Quêtes", "Combats", "Inventaire"],
    contributions: [],
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
  // TODO (GuessWhat) : contexte, période, rôle, ce que j'ai fait, analyse,
  // rattachement RNCP, capture, lien de démo, lien GitHub.
  {
    slug: "guesswhat",
    title: "GuessWhat",
    summary: "Pictionary multijoueur.",
    context: null,
    period: null,
    role: null,
    stack: ["Go", "WebSockets", "Next.js"],
    features: ["Multijoueur", "Pictionary"],
    contributions: [],
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
  // TODO (my_bot) : repo introuvable sur la machine. Rôle, stack, fonctionnalités,
  // ce que j'ai fait, compétences, analyse « ce que j'en retiens », rattachement
  // RNCP, capture, liens.
  {
    slug: "my-bot",
    title: "my_bot · Generative Pets",
    summary: "Chatbot d’IA générative qui conseille sur l’adoption d’animaux.",
    context: "Projet Epitech",
    period: "Octobre 2026",
    role: null,
    stack: [],
    features: [],
    contributions: [],
    competences: [],
    rncp: null,
    learnings: null,
    links: { demo: null, repo: null },
    image: null,
  },
  // TODO (Sportly) : rattachement RNCP, capture, lien de démo, lien public du code
  // (le repo de l'organisation Epitech n'est pas public).
  {
    slug: "sportly",
    title: "Sportly",
    summary:
      "Application mobile sportive tout-en-un : trouver des coachs et des clubs, réserver des séances, suivre son entraînement et sa progression, échanger avec la communauté.",
    context: "Projet Epitech · équipe de 3",
    period: "Octobre – novembre 2026",
    role: "Tech lead / project owner",
    // Repo : pg + migrations SQL. Prisma (indiqué par Aliyo) n'est pas utilisé
    // dans le code actuel, il n'est donc pas listé.
    stack: [
      "Expo (React Native)",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Zod",
    ],
    features: [
      "Trouver des coachs et des clubs",
      "Réserver des séances",
      "Suivre son entraînement et sa progression",
      "Communauté",
    ],
    contributions: [
      "Cadrage de l’architecture et du modèle de données, découpage du travail en lots et coordination de l’équipe.",
      "Socle commun du backend : schéma de données de tous les domaines, authentification (mots de passe argon2id, jetons de rafraîchissement), routage par module.",
      "Client API de l’application mobile et gestion de la session.",
      "Annuaire et fiches des coachs et des clubs, avec tri par distance.",
      "Réservation de créneaux, annulation et historique des séances avec les clubs et les coachs.",
      "Avis sur un prestataire après une séance, et favoris.",
      "Administration : vérification des prestataires.",
      "Branchement de ces écrans de l’application sur l’API (le front a été réalisé par un coéquipier).",
    ],
    competences: [
      "Piloter une équipe : architecture, découpage en lots, coordination",
      "Modéliser un domaine métier complet dans PostgreSQL",
      "Concevoir une API REST modulaire avec Node.js, Express et TypeScript",
      "Sécuriser l’authentification et valider les entrées avec Zod",
      "Intégrer une application mobile et une API via un client partagé",
    ],
    rncp: null,
    learnings:
      "Tenir le rôle de tech lead m’a appris qu’un socle commun posé tôt (modèle de données, authentification, routage par module, client API) permet à chacun d’avancer sur son lot sans bloquer les autres. Modéliser un domaine complet, des prestataires aux créneaux, réservations et avis, m’a obligé à fixer les règles métier avant d’écrire le code. Enfin, brancher moi-même les écrans sur l’API m’a montré l’importance d’un contrat clair entre le front et le back.",
    links: { demo: null, repo: null },
    image: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
