# Portfolio · Aliyo Moussa

Portfolio d'Aliyo Moussa, alternant développeur web (Epitech Lyon, titre RNCP niveau 5 Développeur web).

## Stack

- Next.js 15 (App Router), React 19, TypeScript strict
- Tailwind CSS v4 (tokens dans `app/globals.css`)
- Polices Barlow et Barlow Condensed via `next/font`
- Animations en CSS et `IntersectionObserver` (`app/components/RevealObserver.tsx`), désactivées avec `prefers-reduced-motion`
- Formulaire de contact : Formspree

## Structure

```
app/
  layout.tsx            Layout commun : header, footer, fond terrain, metadata
  page.tsx              Accueil : hero, à propos, compétences, parcours, projets, contact
  progression/          Portfolio d'apprentissage : étapes, preuves par compétence, analyse
  projets/[slug]/       Fiche détaillée de chaque projet
  components/           Composants (PascalCase)
  data/                 Contenu typé : profil, à propos, compétences, parcours, projets, progression
  sitemap.ts, robots.ts SEO
```

Le contenu se modifie dans `app/data/`. Une valeur `null` n'est pas affichée sur le site : le bloc correspondant reste masqué.

## Scripts

```bash
npm run dev     # serveur de développement
npm run build   # build de production
npm run lint    # ESLint
```
