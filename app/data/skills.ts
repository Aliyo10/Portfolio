// Source : CV (Hard skills, Soft skills). Le CV fait foi.
// Figma : mentionné dans l'expérience Volvo Group – Renault Trucks.

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    items: [
      "Angular",
      "React JS / Next.js",
      "JavaScript / TypeScript",
      "HTML",
      "CSS / SCSS",
      "Tailwind / Bootstrap",
    ],
  },
  {
    title: "Back-end",
    items: ["Java Spring Boot", "Laravel"],
  },
  {
    title: "Bases de données",
    items: ["PostgreSQL / MySQL", "MongoDB"],
  },
  {
    title: "Environnement & outils",
    items: ["Linux", "Windows", "Git", "Azure", "Figma"],
  },
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Flexibilité",
  "Optimisme",
  "Polyvalence",
  "Curiosité & veille informatique",
];
