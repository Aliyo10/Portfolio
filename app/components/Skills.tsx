import Link from "next/link";

import { skillGroups, softSkills } from "@/app/data/skills";
import { ArrowRightIcon } from "./Icons";
import { revealDelay } from "./reveal";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Skills() {
  return (
    <section id="competences" aria-labelledby="competences-titre" className="section">
      <div className="container-page">
        <SectionHeading id="competences-titre" eyebrow="Ma boîte à outils" title="Compétences">
          <p>
            Les technologies que j’utilise en formation et en alternance. Chaque fiche projet
            détaille les compétences qu’elle démontre.
          </p>
        </SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <li
              key={group.title}
              className="rounded-[var(--radius-card)] border border-border bg-surface p-6"
              data-reveal
              style={revealDelay(index)}
            >
              <h3 className="mb-4 text-2xl font-bold uppercase text-ink">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-[var(--radius-card)] border border-border bg-surface p-6" data-reveal>
          <h3 className="mb-4 text-2xl font-bold uppercase text-ink">Savoir-être</h3>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {softSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6" data-reveal>
          <Link
            href="/progression"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-link underline underline-offset-4"
          >
            Voir ma progression et les preuves par compétence
            <ArrowRightIcon size={18} />
          </Link>
        </p>
      </div>
    </section>
  );
}
