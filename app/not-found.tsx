import type { Metadata } from "next";

import ButtonLink from "./components/ButtonLink";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-link">Erreur 404</p>
        <h1 className="text-5xl font-bold uppercase text-ink">Hors du terrain</h1>
        <p className="mt-4 text-lg text-muted">Cette page n’existe pas ou a été déplacée.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
        </div>
      </div>
    </section>
  );
}
