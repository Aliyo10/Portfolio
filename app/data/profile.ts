// Source : CV « MOUSSA ALIYO CV.pdf » et portfolio existant (commit 23e1fbf).
// Règle : ni téléphone, ni date de naissance, ni adresse précise sur le site.

// TODO : confirmer l'URL de production (reprise de l'ancien app/head.js).
export const SITE_URL = "https://portfolio-aliyo-deploy.vercel.app";

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  formspreeEndpoint: string;
  /** CV PDF sans données personnelles (sujet : lien de téléchargement obligatoire). Bouton masqué si null. */
  cvUrl: string | null;
  photo: Photo;
};

export const profile: Profile = {
  firstName: "Aliyo",
  lastName: "Moussa",
  fullName: "Aliyo Moussa",
  role: "Alternant développeur web",
  tagline:
    "Passionné par l’informatique depuis plusieurs années, je souhaite aujourd’hui en faire mon métier.",
  location: "Lyon",
  email: "aliyomoussa@gmail.com",
  linkedin: "https://fr.linkedin.com/in/aliyo-moussa-18b3602a1",
  github: "https://github.com/Aliyo10",
  formspreeEndpoint: "https://formspree.io/f/xjkyepna",
  cvUrl: "/cv-aliyo-moussa.pdf",
  photo: {
    src: "/photoToile.jpg",
    width: 4371,
    height: 5464,
    alt: "Portrait d’Aliyo Moussa",
  },
};

export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "parcours", label: "Parcours" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];
