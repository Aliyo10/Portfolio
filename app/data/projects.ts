// Sources :
// - RPG : CV + repo W-WEB-401-LYN-4-1-ruby-6 (lecture seule).
// - GuessWhat : message d'Aliyo (« Pictionary multijoueur, Go + WebSockets + Next.js »).
// - Sportly : message d'Aliyo + repo W-PJL-400-LYN-4-1-projetlibre-1 (lu en lecture
//   seule : package.json, docs, historique des commits d'Aliyo).
// - my_bot : message d'Aliyo + repo W-WEB-405-LYN-4-1-mybot-1 (lecture seule).
//
// « competences » : compétences démontrées, déduites strictement des
// fonctionnalités et contributions décrites. Le rattachement aux compétences du
// titre RNCP se trouve dans app/data/progression.ts (preuves de chaque compétence).
//
// Rien n'est inventé : toute information manquante vaut null (ou []) et n'est
// pas affichée sur le site. Chaque projet liste ses TODO ci-dessous.

// Liens vers le code : volontairement absents (repos privés, accès non partagé).
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
  /** Analyse : ce que le projet m'a appris, difficultés, progression. */
  learnings: string | null;
  links: ProjectLinks;
  image: ProjectImage | null;
};

export const projects: Project[] = [
  // Source : CV + repo W-WEB-401-LYN-4-1-ruby-6 (lecture seule : README, Gemfile,
  // package.json, structure). Un seul commit, d'Aliyo, daté du 06/06/2026 : d'où
  // « Projet individuel » (à confirmer). Capture : page d'accueil du front (sans API).
  // TODO (RPG) : période, analyse « ce que j'en retiens », lien de démo.
  {
    slug: "rpg",
    title: "RPG · L’Ère des Ombres",
    summary:
      "Jeu de rôle full stack dans le Japon médiéval : personnages, inventaire, équipement, quêtes, énigmes et combats.",
    context: "Projet Epitech · Titre RNCP Développeur web",
    period: null,
    role: "Projet individuel",
    stack: [
      "Ruby on Rails (API)",
      "PostgreSQL",
      "Devise JWT",
      "Pundit",
      "Blueprinter",
      "RSpec",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
    ],
    features: [
      "Authentification",
      "Création et gestion de personnages",
      "Inventaire et équipement",
      "Quêtes, énigmes et combats",
      "Espace d’administration : quêtes, objets, PNJ, récompenses et énigmes",
    ],
    contributions: [
      "API JSON versionnée sous /api/v1, avec des contrôleurs minces qui délèguent les règles métier à des services (personnages, combat, équipement, inventaire, quêtes, énigmes, récompenses).",
      "Authentification par Devise JWT, contrôle d’accès aux ressources avec Pundit et sérialisation des réponses avec Blueprinter.",
      "Tests de l’API avec RSpec.",
      "Interface Next.js (App Router) : appels API centralisés et gestion des données avec TanStack Query.",
    ],
    competences: [
      "Concevoir une API REST versionnée avec Ruby on Rails",
      "Sécuriser l’accès : authentification JWT et autorisations par rôle",
      "Organiser la logique métier en services : combat, quêtes, équipement",
      "Tester une API avec RSpec",
      "Développer une interface Next.js qui consomme l’API",
    ],
    learnings: null,
    links: { demo: null, repo: null },
    image: {
      src: "/projects/rpg.jpg",
      width: 1920,
      height: 1080,
      alt: "Page d’accueil du RPG « L’Ère des Ombres » avec les boutons Entrer et S’inscrire",
    },
  },
  // TODO (GuessWhat) : contexte, période, rôle, ce que j'ai fait, analyse,
  // lien de démo.
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
    learnings: null,
    links: { demo: null, repo: null },
    // Capture réelle du front (repo W-WEB-404-LYN-4-1-mygo-2, commit 6d899fa).
    image: {
      src: "/projects/guesswhat.jpg",
      width: 1920,
      height: 1080,
      alt: "Page d’accueil de GuessWhat : choix du pseudo, création d’une room ou saisie d’un code",
    },
  },
  // Source : repo W-WEB-405-LYN-4-1-mybot-1 (lecture seule : README, package.json,
  // structure, commits — 5 commits, tous d'Aliyo, du 26/10 au 01/11/2026).
  // « learnings » : proposition rédigée à partir des choix techniques du repo, à valider.
  // TODO (my_bot) : lien de démo.
  {
    slug: "my-bot",
    title: "my_bot · Generative Pets",
    summary: "Chatbot d’IA générative qui conseille sur l’adoption d’animaux de refuge.",
    context: "Projet Epitech",
    period: "Octobre 2026",
    role: "Projet individuel",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "LM Studio (API compatible OpenAI)",
      "react-markdown",
      "Web Speech API",
    ],
    features: [
      "Conseil à l’adoption par un modèle d’IA local, servi par LM Studio",
      "Catalogue de 20 animaux du refuge, avec une page dédiée",
      "Fiches animaux affichées directement dans la conversation",
      "Analyse de photos avec un modèle multimodal",
      "Plusieurs discussions sauvegardées dans le navigateur",
      "Prompt système modifiable dans les réglages",
      "Dictée vocale",
    ],
    contributions: [
      "Route POST /api/chat sans état : le navigateur renvoie l’historique, limité aux 20 derniers messages.",
      "Prompt système qui contient le catalogue : le modèle ne peut proposer que ces animaux, via un tag que l’interface transforme en fiche (un identifiant inconnu est ignoré).",
      "Envoi de photos : redimensionnement dans le navigateur, refus au-delà de 10 Mo, seule la dernière image part vers le modèle.",
      "Interface multi-discussions sauvegardée dans le localStorage, avec retrait des images les plus anciennes si le quota est dépassé.",
      "Réglages du prompt système et dictée vocale en français.",
      "Option pour les modèles qui refusent le rôle système, et guide d’installation.",
    ],
    competences: [
      "Intégrer un modèle d’IA générative via une API compatible OpenAI",
      "Encadrer les réponses d’un modèle par le prompt système",
      "Développer une route API Next.js sans état",
      "Traiter des images côté client avant l’envoi",
      "Persister des données dans le navigateur et gérer ses limites",
      "Utiliser une API du navigateur : Web Speech API",
    ],
    learnings:
      "Brancher un modèle local m’a appris à encadrer ses réponses plutôt qu’à lui faire confiance : le catalogue est fourni dans le prompt, et l’interface n’affiche que les fiches dont l’identifiant existe. J’ai aussi dû composer avec les limites du navigateur, de la taille des images au quota du stockage local.",
    links: { demo: null, repo: null },
    // Capture réelle de l'interface (sans modèle chargé).
    image: {
      src: "/projects/my-bot.jpg",
      width: 1920,
      height: 1080,
      alt: "Interface de my_bot : liste des discussions et écran d’accueil du conseiller avec des suggestions de questions",
    },
  },
  // Période : projet de fin d'année, commencé en début d'année (premier commit le 28/07/2026).
  // TODO (Sportly) : lien de démo.
  {
    slug: "sportly",
    title: "Sportly",
    summary:
      "Application mobile sportive tout-en-un : trouver des coachs et des clubs, réserver des séances, suivre son entraînement et sa progression, échanger avec la communauté.",
    context: "Projet de fin d’année Epitech · équipe de 3",
    period: "Depuis juillet 2026",
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
    learnings:
      "Tenir le rôle de tech lead m’a appris qu’un socle commun posé tôt (modèle de données, authentification, routage par module, client API) permet à chacun d’avancer sur son lot sans bloquer les autres. Modéliser un domaine complet, des prestataires aux créneaux, réservations et avis, m’a obligé à fixer les règles métier avant d’écrire le code. Enfin, brancher moi-même les écrans sur l’API m’a montré l’importance d’un contrat clair entre le front et le back.",
    links: { demo: null, repo: null },
    // Captures réelles de l'app (Expo web + backend local, compte de démo des seeds) :
    // accueil, communauté (annuaire des clubs) et statistiques.
    image: {
      src: "/projects/sportly.jpg",
      width: 1920,
      height: 1080,
      alt: "Trois écrans de l’application Sportly : l’accueil avec l’objectif de la semaine, l’annuaire des clubs à proximité et les statistiques de progression",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
