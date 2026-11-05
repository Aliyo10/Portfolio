// Source : CV. Le CV fait foi pour les dates.
// Volvo Group – Renault Trucks : uniquement les formulations du CV.

export type TimelineEntry = {
  kind: "experience" | "formation";
  period: string;
  title: string;
  organization: string;
  place?: string;
  details: string[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: "experience",
    period: "Septembre 2025 – aujourd’hui",
    title: "Alternant Software Engineer",
    organization: "Volvo Group – Renault Trucks",
    place: "Lyon",
    details: [
      "Modernisation d’une application industrielle de Java 8 / JSF vers Spring Boot / Angular.",
      "Développement d’une nouvelle application en Spring Boot et Angular pour suivre le statut des applications d’usine.",
      "Création de maquettes UI sur Figma pour définir les interfaces avant le développement.",
      "Documentation technique pour préparer la migration.",
    ],
  },
  {
    kind: "formation",
    period: "Novembre 2024 – aujourd’hui",
    title: "Titre RNCP de niveau 5 Développeur web",
    organization: "Epitech",
    place: "Lyon",
    details: ["Projets : RPG, GuessWhat, my_bot, Sportly (voir la section Projets)."],
  },
  {
    kind: "formation",
    period: "Octobre 2023 – février 2024",
    title: "Certificat Conception et Développement Web",
    organization: "emlyon business school",
    place: "Écully",
    details: ["Développement front-end : HTML, CSS, JavaScript.", "Notions clés de la gestion de projets."],
  },
  {
    kind: "experience",
    period: "Novembre 2022 – août 2024",
    title: "Manutentionnaire",
    organization: "GL Event",
    place: "Lyon",
    details: ["Gestion des approvisionnements et installation des buvettes."],
  },
  {
    kind: "formation",
    period: "2019 – 2022",
    title: "Baccalauréat STMG, option SIO",
    organization: "Lycée Martinière Duchère",
    details: [],
  },
];
