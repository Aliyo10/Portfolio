import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import ButtonLink from "@/app/components/ButtonLink";
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from "@/app/components/Icons";
import ProjectVisual from "@/app/components/ProjectVisual";
import Tag from "@/app/components/Tag";
import Todo from "@/app/components/Todo";
import { getProject, projects } from "@/app/data/projects";

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

  const description =
    project.summary ??
    `Fiche du projet ${project.title} : contexte, stack technique et compétences démontrées.`;

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

        <header className="mb-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end" data-reveal>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-link">
              Fiche projet
            </p>
            <h1 className="text-5xl font-bold uppercase text-ink sm:text-6xl">{project.title}</h1>
            <div className="mt-5 text-lg text-muted">
              {project.summary ? <p>{project.summary}</p> : <Todo as="p">description du projet</Todo>}
            </div>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <Meta label="Contexte">{project.context ?? <Todo>contexte</Todo>}</Meta>
            <Meta label="Période">{project.period ?? <Todo>dates</Todo>}</Meta>
            <Meta label="Mon rôle">{project.role ?? <Todo>rôle, équipe</Todo>}</Meta>
          </dl>
        </header>

        <div data-reveal>
          <ProjectVisual project={project} sizes="(min-width: 1120px) 1024px, 92vw" priority />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-10">
            <Block title="Le projet">
              {project.features.length > 0 ? (
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <Bullet key={feature}>{feature}</Bullet>
                  ))}
                </ul>
              ) : (
                <Todo as="p">fonctionnalités principales</Todo>
              )}
            </Block>

            <Block title="Compétences démontrées">
              {project.competences.length > 0 ? (
                <ul className="space-y-2">
                  {project.competences.map((competence) => (
                    <Bullet key={competence}>{competence}</Bullet>
                  ))}
                </ul>
              ) : (
                <Todo as="p">compétences démontrées par ce projet</Todo>
              )}
              <div className="mt-5 rounded-[var(--radius-card)] border border-border bg-surface p-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
                  Titre RNCP Développeur web · niveau 5
                </p>
                {project.rncp && project.rncp.length > 0 ? (
                  <ul className="flex flex-wrap gap-2">
                    {project.rncp.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Todo as="p">rattacher ces compétences aux blocs officiels du référentiel</Todo>
                )}
              </div>
            </Block>

            <Block title="Ce que j’en retiens">
              {project.learnings ? (
                <p>{project.learnings}</p>
              ) : (
                <Todo as="p">analyse : apprentissages, difficultés rencontrées, progression</Todo>
              )}
            </Block>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start" aria-label="Stack et liens">
            <Block title="Stack">
              {project.stack.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              ) : (
                <Todo as="p">technologies utilisées</Todo>
              )}
            </Block>

            <Block title="Liens">
              <div className="flex flex-wrap gap-3">
                {project.links.demo ? (
                  <ButtonLink href={project.links.demo} external>
                    Démo <ExternalLinkIcon size={18} />
                  </ButtonLink>
                ) : (
                  <Todo>lien de démo</Todo>
                )}
                {project.links.repo ? (
                  <ButtonLink href={project.links.repo} variant="secondary" external>
                    Code source <ExternalLinkIcon size={18} />
                  </ButtonLink>
                ) : (
                  <Todo>lien GitHub</Todo>
                )}
              </div>
            </Block>
          </aside>
        </div>

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

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <dt className="text-sm font-semibold uppercase tracking-wide text-muted">{label}</dt>
      <dd className="font-medium text-ink">{children}</dd>
    </div>
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

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  );
}
