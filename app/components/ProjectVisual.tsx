import Image from "next/image";

import type { Project } from "@/app/data/projects";

type ProjectVisualProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
};

/**
 * Capture du projet. Sans capture (TODO dans app/data/projects.ts), on affiche
 * un aplat décoratif portant le nom du projet, sans placeholder visible.
 */
export default function ProjectVisual({ project, sizes, priority = false }: ProjectVisualProps) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        priority={priority}
        className="aspect-video w-full rounded-[var(--radius-card)] object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[var(--radius-card)] bg-parquet"
    >
      <svg
        focusable="false"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--color-line)" strokeWidth="2">
          <circle cx="160" cy="90" r="38" />
          <path d="M160 0v180" />
        </g>
      </svg>
      <span className="relative font-display text-4xl font-bold uppercase tracking-wide text-navy/80">
        {project.title}
      </span>
    </div>
  );
}
