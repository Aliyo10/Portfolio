import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";
import { revealDelay } from "./reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectsPreview() {
  return (
    <section id="projets" aria-labelledby="projets-titre" className="section">
      <div className="container-page">
        <SectionHeading id="projets-titre" eyebrow="Mes réalisations" title="Projets">
          <p>
            Une sélection de projets. Chaque fiche présente le contexte, la stack et les
            compétences démontrées.
          </p>
        </SectionHeading>

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} style={revealDelay(index)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
