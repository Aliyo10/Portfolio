import Link from "next/link";
import type { CSSProperties } from "react";

import type { Project } from "@/app/data/projects";
import { ArrowRightIcon } from "./Icons";
import ProjectVisual from "./ProjectVisual";
import Tag from "./Tag";

type ProjectCardProps = {
  project: Project;
  style?: CSSProperties;
};

export default function ProjectCard({ project, style }: ProjectCardProps) {
  return (
    <article
      className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-surface p-4 transition-shadow duration-200 hover:shadow-[var(--shadow-card)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-navy"
      data-reveal
      style={style}
    >
      <ProjectVisual project={project} sizes="(min-width: 768px) 45vw, 90vw" />

      <div className="flex flex-1 flex-col gap-3 px-1 pt-5 pb-1">
        {project.context ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">{project.context}</p>
        ) : null}

        <h3 className="text-3xl font-bold uppercase text-ink">
          <Link
            href={`/projets/${project.slug}`}
            className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none group-focus-within:underline"
          >
            {project.title}
          </Link>
        </h3>

        {project.summary ? (
          <p className="text-muted">{project.summary}</p>
        ) : null}

        {project.stack.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-auto inline-flex items-center gap-2 pt-2 font-semibold text-link">
          Voir la fiche
          <ArrowRightIcon
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </p>
      </div>
    </article>
  );
}
