import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon } from "@/app/components/Icons";
import { revealDelay } from "@/app/components/reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { competencyBlocks, learningAnalysis, learningSteps, RNCP_URL } from "@/app/data/progression";
import { projects } from "@/app/data/projects";

// Règle d'affichage : un bloc sans contenu n'est jamais rendu.

const description =
  "Mon parcours d’apprentissage : les étapes de ma progression, les compétences développées et les réalisations qui les prouvent.";

export const metadata: Metadata = {
  title: "Ma progression",
  description,
  alternates: { canonical: "/progression" },
  openGraph: {
    title: "Ma progression",
    description,
    url: "/progression",
    type: "article",
  },
};

export default function ProgressionPage() {
  const analysis = [
    { title: "Ma démarche", text: learningAnalysis.approach },
    { title: "Mes points forts", text: learningAnalysis.strengths },
    { title: "Mes axes d’amélioration", text: learningAnalysis.weaknesses },
    { title: "Mes objectifs", text: learningAnalysis.goals },
  ].filter((item): item is { title: string; text: string } => Boolean(item.text));

  const reviews = projects.filter((project) => project.learnings);

  return (
    <>
      <header className="section pb-0 lg:pb-0">
        <div className="container-page max-w-3xl" data-reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-link">
            Portfolio d’apprentissage
          </p>
          <h1 className="text-5xl font-bold uppercase text-ink sm:text-6xl">Ma progression</h1>
          <p className="mt-5 text-lg text-muted">
            Les étapes de mon apprentissage, ce que j’ai développé et les réalisations qui le prouvent : de mes
            premières bases du web à l’alternance et au pilotage d’un projet en équipe.
          </p>
        </div>
      </header>

      <section aria-labelledby="etapes-titre" className="section">
        <div className="container-page">
          <SectionHeading id="etapes-titre" eyebrow="Mon évolution" title="Les étapes" />
          <ol className="relative space-y-8 border-l-2 border-line pl-6 sm:pl-8">
            {learningSteps.map((step, index) => (
              <li key={step.title} className="relative" data-reveal style={revealDelay(index)}>
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[calc(1.5rem+7px)] h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2rem+7px)]"
                />
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {step.period}
                </p>
                <h3 className="mt-1 text-2xl font-bold uppercase text-ink">{step.title}</h3>
                <p className="mt-1 max-w-[65ch] text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="preuves-titre" className="section bg-surface">
        <div className="container-page">
          <SectionHeading id="preuves-titre" eyebrow="Preuves à l’appui" title="Compétences du titre">
            <p>
              Les 14 compétences du titre{" "}
              <a className="text-link" href={RNCP_URL} target="_blank" rel="noopener noreferrer">
                RNCP42870 Développeur web<span className="sr-only"> (nouvel onglet)</span>
              </a>
              , avec les réalisations qui s’y rattachent.
            </p>
          </SectionHeading>

          <div className="space-y-12">
            {competencyBlocks.map((block) => (
              <section key={block.code} aria-labelledby={`${block.code}-titre`}>
                <h3
                  id={`${block.code}-titre`}
                  className="mb-5 text-3xl font-bold uppercase text-ink"
                  data-reveal
                >
                  <span className="text-link">{block.code}</span> · {block.title}
                </h3>

                <ul className="grid gap-5 md:grid-cols-2">
                  {block.competencies.map((competency, index) => {
                    const details = [
                      { label: "Mon niveau", text: competency.level },
                      { label: "Ressources mobilisées", text: competency.resources },
                      { label: "Prochaine étape", text: competency.nextStep },
                    ].filter((item): item is { label: string; text: string } => Boolean(item.text));

                    return (
                      <li
                        key={competency.id}
                        id={competency.id}
                        className="rounded-[var(--radius-card)] border border-border bg-bg p-6"
                        data-reveal
                        style={revealDelay(index % 2)}
                      >
                        <h4 className="mb-4 font-display text-2xl font-bold uppercase leading-tight text-ink">
                          {competency.title}
                        </h4>

                        <ul className="space-y-3">
                          {competency.proofs.map((proof) => (
                            <li key={`${proof.label}-${proof.description}`}>
                              <Link
                                href={proof.href}
                                className="inline-flex min-h-6 items-center gap-1.5 font-semibold text-link underline underline-offset-4"
                              >
                                {proof.label}
                                <ArrowRightIcon size={15} />
                              </Link>
                              <p className="text-muted">{proof.description}</p>
                            </li>
                          ))}
                        </ul>

                        {details.length > 0 ? (
                          <dl className="mt-5 space-y-3 border-t border-border pt-4">
                            {details.map((item) => (
                              <div key={item.label}>
                                <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                                  {item.label}
                                </dt>
                                <dd>{item.text}</dd>
                              </div>
                            ))}
                          </dl>
                        ) : null}

                        <details className="mt-5 border-t border-border pt-3 text-sm text-muted">
                          <summary className="inline-flex min-h-6 cursor-pointer items-center font-semibold text-navy">
                            Intitulé officiel
                          </summary>
                          <p className="mt-2">{competency.official}</p>
                        </details>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {reviews.length > 0 ? (
        <section aria-labelledby="retours-titre" className="section">
          <div className="container-page">
            <SectionHeading id="retours-titre" eyebrow="Avec du recul" title="Ce que j’en retiens" />
            <ul className="grid gap-5 lg:grid-cols-2">
              {reviews.map((project, index) => (
                <li
                  key={project.slug}
                  className="rounded-[var(--radius-card)] border border-border bg-surface p-6"
                  data-reveal
                  style={revealDelay(index)}
                >
                  <h3 className="mb-3 text-2xl font-bold uppercase text-ink">
                    <Link href={`/projets/${project.slug}`} className="underline-offset-4 hover:underline">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-muted">{project.learnings}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {analysis.length > 0 ? (
        <section aria-labelledby="analyse-titre" className="section bg-parquet/60">
          <div className="container-page">
            <SectionHeading id="analyse-titre" eyebrow="Auto-évaluation" title="Mon analyse" />
            <div className="grid gap-5 md:grid-cols-2">
              {analysis.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-border bg-surface p-6"
                  data-reveal
                  style={revealDelay(index % 2)}
                >
                  <h3 className="mb-3 text-2xl font-bold uppercase text-ink">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
