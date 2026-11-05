// Sources : portfolio existant (texte « À mon propos », commit 23e1fbf) et CV.

export const aboutParagraphs: string[] = [
  // Portfolio existant.
  "Passionné d’informatique depuis plusieurs années, je me suis naturellement orienté vers le développement web. J’aime relever des défis, travailler en équipe et créer des solutions utiles.",
  // CV : formation Epitech + alternance.
  "Je prépare le titre RNCP de niveau 5 Développeur web à Epitech Lyon, en alternance comme Software Engineer chez Volvo Group – Renault Trucks.",
];

export type Fact = {
  label: string;
  value: string;
};

export const aboutFacts: Fact[] = [
  { label: "Basé à", value: "Lyon" },
  { label: "Formation", value: "Epitech Lyon · Titre RNCP niveau 5" },
  { label: "Alternance", value: "Volvo Group – Renault Trucks" },
  // CV : « ANGLAIS / NIVEAU B1 ». Français : portfolio existant.
  { label: "Langues", value: "Français courant · Anglais B1" },
];

// CV : centres d'intérêt.
export const interests: string[] = ["Basket-ball (8 ans)", "Musculation", "Manga, films et anime"];
