// Facette « apprentissage » du portfolio (sujet Epitech, partie Hybride).
//
// Sources : CV, ancien portfolio (commit 23e1fbf), fiches projet et historiques git.
// Rien n'est inventé. Ce qui relève de l'auto-évaluation d'Aliyo vaut null et
// n'est pas affiché tant qu'il n'est pas rempli.
//
// Référentiel : fiche RNCP42870 « Développeur web » (France Compétences).
// TODO : pour chaque compétence : « level », « resources », « nextStep ».
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

export type Competency = {
  /** Identifiant interne, dans l'ordre de la fiche RNCP. */
  id: string;
  /** Titre court, rédigé pour le portfolio. */
  title: string;
  /** Intitulé officiel exact (fiche RNCP42870). */
  official: string;
  proofs: Proof[];
  /** Auto-évaluation : niveau atteint, formulé par Aliyo. Non affiché tant que null. */
  level: string | null;
  /** Ressources mobilisées (documentation, cours, pairs...). */
  resources: string | null;
  /** Ce qu'il reste à apprendre pour passer au niveau supérieur. */
  nextStep: string | null;
};

export type CompetencyBlock = {
  code: string;
  title: string;
  competencies: Competency[];
};

export type LearningAnalysis = {
  approach: string | null;
  strengths: string | null;
  weaknesses: string | null;
  goals: string | null;
};

export const RNCP_URL = "https://www.francecompetences.fr/recherche/rncp/42870/";

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

const SPORTLY = "/projets/sportly";
const RPG = "/projets/rpg";
const GUESSWHAT = "/projets/guesswhat";
const MY_BOT = "/projets/my-bot";
const PORTFOLIO = "/";

const toFill = { level: null, resources: null, nextStep: null };

// Les preuves viennent du CV, des fiches projet et des repos (lecture seule).
// Les manques connus sont signalés par un TODO sur la compétence concernée.
export const competencyBlocks: CompetencyBlock[] = [
  {
    code: "BC01",
    title: "Conceptualiser une solution web",
    competencies: [
      {
        id: "bc01-1",
        title: "Analyser le besoin métier",
        official:
          "Analyser un besoin métier en intégrant les contraintes techniques du système d’information de l’entreprise, les exigences réglementaires, les exigences de sécurité, les impacts environnementaux et les contraintes organisationnelles afin de rédiger un cahier des charges fonctionnel en adéquation avec la commande.",
        // TODO : cahier des charges fonctionnel ; exigences réglementaires et environnementales.
        proofs: [
          {
            label: "Sportly",
            description: "Plan de production : audit de l’existant, écrans à rendre dynamiques et périmètre retenu.",
            href: SPORTLY,
          },
          {
            label: "Alternance",
            description: "Nouvelle application pour suivre le statut des applications d’usine.",
            href: ALTERNANCE,
          },
        ],
        ...toFill,
      },
      {
        id: "bc01-2",
        title: "Définir les spécifications techniques",
        official:
          "Identifier les spécifications techniques attendues sur la base du cahier des charges fonctionnel, dans le respect des contraintes données par sa hiérarchie et en tenant compte de l’environnement technique et technologique du client, afin de cadrer techniquement un projet de développement de solution web.",
        proofs: [
          {
            label: "Sportly",
            description: "Décisions techniques documentées : API, base de données, authentification, rôles, tests.",
            href: SPORTLY,
          },
          {
            label: "Alternance",
            description: "Modernisation d’une application de Java 8 / JSF vers Spring Boot / Angular.",
            href: ALTERNANCE,
          },
        ],
        ...toFill,
      },
      {
        id: "bc01-3",
        title: "Exploiter l’IA de manière encadrée",
        official:
          "Exploiter de manière encadrée des outils d’intelligence artificielle dans le cadre du développement d’une solution web, en évaluant la fiabilité des résultats produits, en identifiant les risques techniques et sécuritaires associés, et en garantissant la conformité aux exigences du projet et aux réglementations applicables.",
        // TODO : témoignage d'Aliyo sur son usage des outils d'IA pour développer (exigé à l'oral).
        proofs: [
          {
            label: "my_bot",
            description: "Réponses d’un modèle encadrées par le prompt, et fiches inconnues ignorées par l’interface.",
            href: MY_BOT,
          },
        ],
        ...toFill,
      },
      {
        id: "bc01-4",
        title: "Modéliser l’architecture et la base de données",
        official:
          "Identifier les fonctionnalités à développer, en modélisant les divers éléments et leurs interconnexions et en tenant compte des enjeux de cybersécurité, d’accessibilité et d’écoconception de premier niveau, afin de structurer l’architecture de la solution web et de Base De Données (BDD).",
        proofs: [
          {
            label: "Sportly",
            description: "Modèle de données documenté de tous les domaines : comptes, prestataires, entraînement, social.",
            href: SPORTLY,
          },
          {
            label: "RPG",
            description: "Modèle de jeu et logique métier organisée en services.",
            href: RPG,
          },
        ],
        ...toFill,
      },
      {
        id: "bc01-5",
        title: "Mettre en place l’environnement de travail",
        official:
          "Déployer un environnement numérique de travail en mettant en place les outils de versionnage, de partage et de collaboration/communication nécessaires, afin d’assurer le développement de la solution web.",
        proofs: [
          {
            label: "Sportly",
            description: "Conventions Git, modèle de pull request et bases PostgreSQL de dev et de test sous Docker.",
            href: SPORTLY,
          },
        ],
        ...toFill,
      },
      {
        id: "bc01-6",
        title: "Développer des prototypes",
        official:
          "Développer des prototypes permettant de valider les usages et les choix technologiques envisagés en s’appuyant sur les hypothèses de conception des différentes briques fonctionnelles.",
        // TODO : prototype fonctionnel réalisé par Aliyo (les maquettes ne valident pas les choix techniques).
        proofs: [
          {
            label: "Alternance",
            description: "Maquettes UI sur Figma pour définir les interfaces avant le développement.",
            href: ALTERNANCE,
          },
        ],
        ...toFill,
      },
    ],
  },
  {
    code: "BC02",
    title: "Développer une solution web",
    competencies: [
      {
        id: "bc02-1",
        title: "Développer le front-end",
        official:
          "Rédiger le code de la solution web en transcrivant les fonctionnalités du cahier des charges dans un langage de programmation adapté, dans le respect des normes de développement, de sécurité et de la réglementation en vigueur, afin d’obtenir une base de développement du front-end.",
        proofs: [
          {
            label: "RPG",
            description: "Interface Next.js et TypeScript connectée à l’API.",
            href: RPG,
          },
          {
            label: "my_bot",
            description: "Interface de chat Next.js avec plusieurs discussions.",
            href: MY_BOT,
          },
          {
            label: "Alternance",
            description: "Développement en Angular.",
            href: ALTERNANCE,
          },
        ],
        ...toFill,
      },
      {
        id: "bc02-2",
        title: "Accessibilité, ergonomie, éco-conception et référencement",
        official:
          "Intégrer les exigences d’accessibilité, d’ergonomie, d’éco-conception et de référencement dans le développement du front-end, en respectant la réglementation en vigueur et les standards techniques, afin de garantir une solution inclusive, performante et optimisée pour les utilisateurs et les moteurs de recherche.",
        proofs: [
          {
            label: "Ce portfolio",
            description: "Contrastes AA, navigation au clavier, animations réduites sur demande, images optimisées et SEO.",
            href: PORTFOLIO,
          },
        ],
        ...toFill,
      },
      {
        id: "bc02-3",
        title: "Implémenter un back-end sécurisé",
        official:
          "Implémenter une architecture back-end sécurisée en intégrant la logique et la base de données assurant la persistance des données côté serveur sur la base des spécifications techniques attendues, dans le respect des bonnes pratiques en matière de sécurité et en veillant à mettre en place une gestion des vulnérabilités et des dépendances (authentification, flux réseau, chiffrement des données persistantes, ...).",
        proofs: [
          {
            label: "Sportly",
            description: "Mots de passe argon2id, jetons de rafraîchissement, validation Zod, limitation de débit et PostgreSQL.",
            href: SPORTLY,
          },
          {
            label: "RPG",
            description: "API Rails avec PostgreSQL, authentification Devise JWT et contrôle d’accès Pundit.",
            href: RPG,
          },
          {
            label: "Alternance",
            description: "Développement en Spring Boot.",
            href: ALTERNANCE,
          },
        ],
        ...toFill,
      },
      {
        id: "bc02-4",
        title: "Orchestrer les échanges entre services",
        official:
          "Orchestrer les échanges entre les composants du back-end et les services tiers (API, bases de données, services externes) en garantissant la performance, la fiabilité et la scalabilité de la solution, afin d’assurer un fonctionnement fluide et sécurisé du système dans différents contextes d’usage.",
        proofs: [
          {
            label: "GuessWhat",
            description: "Serveur Go : échanges WebSocket et HTTP, parties dans des rooms isolées.",
            href: GUESSWHAT,
          },
          {
            label: "my_bot",
            description: "Route API qui échange avec un modèle local via une API compatible OpenAI.",
            href: MY_BOT,
          },
          {
            label: "Sportly",
            description: "Client API de l’application mobile et gestion de la session.",
            href: SPORTLY,
          },
        ],
        ...toFill,
      },
      {
        id: "bc02-5",
        title: "Tester et observer",
        official:
          "Implémenter les tests unitaires, tests fonctionnels et tests de performances sur la base du plan de tests et du système d’observabilité (les logs, les métriques et les alertes) afin de vérifier que l’ensemble des fonctionnalités développées fonctionne bien séparément et à l’unisson.",
        // TODO : tests de performances, métriques et alertes.
        proofs: [
          {
            label: "RPG",
            description: "Tests RSpec des modèles, des services et des requêtes.",
            href: RPG,
          },
          {
            label: "Sportly",
            description: "Tests d’API avec Vitest et Supertest sur une base dédiée, journaux structurés avec pino.",
            href: SPORTLY,
          },
          {
            label: "GuessWhat",
            description: "Tests Go de la logique de partie.",
            href: GUESSWHAT,
          },
        ],
        ...toFill,
      },
    ],
  },
  {
    code: "BC03",
    title: "Déployer une solution web",
    competencies: [
      {
        id: "bc03-1",
        title: "Déployer en continu",
        official:
          "Déployer de manière sécurisée et en continu une solution web en transférant le code dans un environnement de production ou de pré-production en interaction avec les parties prenantes (client, bêta-testeurs) et en veillant à l’intégration dans l’environnement existant afin de la rendre publiquement accessible aux utilisateurs.",
        // TODO : interaction avec des parties prenantes (client, bêta-testeurs).
        proofs: [
          {
            label: "Ce portfolio",
            description: "Déployé sur Vercel depuis GitHub : chaque push sur main met le site en production.",
            href: PORTFOLIO,
          },
        ],
        ...toFill,
      },
      {
        id: "bc03-2",
        title: "Rédiger la documentation technique",
        official:
          "Formaliser un texte technique destiné à alimenter la documentation technique d’une solution web à destination des parties prenantes, en s’appuyant sur ses capacités d’expression, en veillant à la clarté des informations apportées et en adaptant le vocabulaire utilisé aux interlocuteurs, afin de garantir la compréhension et d’assurer la pérennité de la solution et son évolution future.",
        proofs: [
          {
            label: "Alternance",
            description: "Documentation technique pour préparer la migration.",
            href: ALTERNANCE,
          },
          {
            label: "Sportly",
            description: "Documentation du modèle de données et conventions Git de l’équipe.",
            href: SPORTLY,
          },
          {
            label: "GuessWhat",
            description: "Documentation du protocole WebSocket et HTTP.",
            href: GUESSWHAT,
          },
          {
            label: "my_bot",
            description: "Guide d’installation et explication de l’architecture.",
            href: MY_BOT,
          },
        ],
        ...toFill,
      },
      {
        id: "bc03-3",
        title: "Interpréter les audits et les retours",
        official:
          "Interpréter les résultats d’évaluation de son travail de développement en s’appuyant sur des outils d’audit de code adaptés et reconnus et les retours utilisateurs afin d’améliorer ses pratiques et de réaliser des correctifs.",
        // TODO : retours utilisateurs recueillis et correctifs associés.
        proofs: [
          {
            label: "Ce portfolio",
            description: "Audit Lighthouse sur 3 pages : 98 à 100 en performance, 100 en accessibilité, bonnes pratiques et SEO. Failles signalées par npm audit corrigées en mettant Next.js à jour.",
            href: PORTFOLIO,
          },
        ],
        ...toFill,
      },
    ],
  },
];

/** Compétences du titre démontrées par un projet (d'après ses preuves). */
export function getProjectCompetencies(slug: string): string[] {
  const href = `/projets/${slug}`;
  return competencyBlocks.flatMap((block) =>
    block.competencies
      .filter((competency) => competency.proofs.some((proof) => proof.href === href))
      .map((competency) => `${block.code} · ${competency.title}`),
  );
}

export const learningAnalysis: LearningAnalysis = {
  approach: null,
  strengths: null,
  weaknesses: null,
  goals: null,
};
