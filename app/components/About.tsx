import { aboutFacts, aboutParagraphs, interests } from "@/app/data/about";
import { revealDelay } from "./reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="a-propos" aria-labelledby="a-propos-titre" className="section bg-surface">
      <div className="container-page">
        <SectionHeading id="a-propos-titre" eyebrow="Qui suis-je" title="À propos" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5 text-lg" data-reveal>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-[65ch]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-8" data-reveal style={revealDelay(1)}>
            <dl className="grid gap-4">
              {aboutFacts.map((fact) => (
                <div key={fact.label} className="border-l-2 border-accent pl-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-lg font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="mb-3 text-2xl font-bold uppercase text-ink">Hors du code</h3>
              <ul className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-sm font-medium text-navy"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
