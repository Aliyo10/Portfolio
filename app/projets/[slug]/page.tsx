import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import ButtonLink from "@/app/components/ButtonLink";
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from "@/app/components/Icons";
import ProjectVisual from "@/app/components/ProjectVisual";
import Tag from "@/app/components/Tag";
import { getProject, projects } from "@/app/data/projects";

// Règle d'affichage : un bloc sans contenu n'est jamais rendu.
// Les informations manquantes restent en TODO dans app/data/projects.ts.

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = project.summary ?? `Fiche du projet ${project.title}.`;

  return {
    title: `Projet ${project.title}`,
    description,
    alternates: { canonical: `/projets/${project.slug}` },
    openGraph: {
      title: `Projet ${project.title}`,
      description,
      url: `/projets/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Contexte", value: project.context },
    { label: "Période", value: project.period },
    { label: "Mon rôle", value: project.role },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  const rncp = project.rncp ?? [];
  const hasLinks = Boolean(project.links.demo || project.links.repo);
  const hasAside = project.stack.length > 0 || hasLinks;
  const hasMain =
    project.features.length > 0 ||
    project.contributions.length > 0 ||
    project.competences.length > 0 ||
    Boolean(project.learnings);

  return (
    <article className="section">
      <div className="container-page">
        <nav aria-label="Fil d’Ariane" className="mb-8 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-muted">
            <li>
              <Link className="text-link" href="/">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="text-link" href="/#projets">
                Projets
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-ink">
              {project.title}
            </li>
          </ol>
        </nav>

        <header
          className={`mb-10 grid gap-8 ${meta.length > 0 ? "lg:grid-cols-2 lg:items-end" : ""}`}
          data-reveal
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-link">
              Fiche projet
            </p>
            <h1 className="text-5xl font-bold uppercase text-ink sm:text-6xl">{project.title}</h1>
            {project.summary ? (
              <p className="mt-5 text-lg text-muted">{project.summary}</p>
            ) : null}
          </div>

          {meta.length > 0 ? (
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {meta.map((item) => (
                <div key={item.label} className="border-l-2 border-accent pl-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {item.label}
                  </dt>
                  <dd className="font-medium text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </header>

        {project.image ? (
          <div data-reveal>
            <ProjectVisual project={project} sizes="(min-width: 1120px) 1024px, 92vw" priority />
          </div>
        ) : null}

        {hasMain || hasAside ? (
          <div
            className={`mt-12 grid gap-10 ${hasMain && hasAside ? "lg:grid-cols-[1.4fr_1fr] lg:gap-16" : ""}`}
          >
            {hasMain ? (
              <div className="space-y-10">
                {project.features.length > 0 ? (
                  <Block title="Le projet">
                    <BulletList items={project.features} />
                  </Block>
                ) : null}

                {project.contributions.length > 0 ? (
                  <Block title="Ce que j’ai fait">
                    <BulletList items={project.contributions} />
                  </Block>
                ) : null}

                {project.competences.length > 0 ? (
                  <Block title="Compétences démontrées">
                    <BulletList items={project.competences} />
                    {rncp.length > 0 ? (
                      <div className="mt-5 rounded-[var(--radius-card)] border border-border bg-surface p-4">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
                          Titre RNCP Développeur web · niveau 5
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {rncp.map((item) => (
                            <li key={item}>
                              <Tag>{item}</Tag>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </Block>
                ) : null}

                {project.learnings ? (
                  <Block title="Ce que j’en retiens">
                    <p>{project.learnings}</p>
                  </Block>
                ) : null}
              </div>
            ) : null}

            {hasAside ? (
              <aside
                className="space-y-8 lg:sticky lg:top-24 lg:self-start"
                aria-label="Stack et liens"
              >
                {project.stack.length > 0 ? (
                  <Block title="Stack">
                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li key={tech}>
                          <Tag>{tech}</Tag>
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}

                {hasLinks ? (
                  <Block title="Liens">
                    <div className="flex flex-wrap gap-3">
                      {project.links.demo ? (
                        <ButtonLink href={project.links.demo} external>
                          Démo <ExternalLinkIcon size={18} />
                        </ButtonLink>
                      ) : null}
                      {project.links.repo ? (
                        <ButtonLink href={project.links.repo} variant="secondary" external>
                          Code source <ExternalLinkIcon size={18} />
                        </ButtonLink>
                      ) : null}
                    </div>
                  </Block>
                ) : null}
              </aside>
            ) : null}
          </div>
        ) : null}

        {previous && next ? (
          <nav
            aria-label="Autres projets"
            className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between"
          >
            <Link
              href={`/projets/${previous.slug}`}
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-link"
            >
              <ArrowLeftIcon size={18} />
              <span>
                <span className="sr-only">Projet précédent : </span>
                {previous.title}
              </span>
            </Link>
            <Link
              href="/#projets"
              className="inline-flex min-h-11 items-center font-semibold text-navy underline-offset-4 hover:underline"
            >
              Tous les projets
            </Link>
            <Link
              href={`/projets/${next.slug}`}
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-link"
            >
              <span>
                <span className="sr-only">Projet suivant : </span>
                {next.title}
              </span>
              <ArrowRightIcon size={18} />
            </Link>
          </nav>
        ) : null}
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section data-reveal>
      <h2 className="mb-4 text-3xl font-bold uppercase text-ink">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
