import { timeline } from "@/app/data/timeline";
import { revealDelay } from "./reveal";
import SectionHeading from "./SectionHeading";

const kindLabel = {
  experience: "Expérience",
  formation: "Formation",
} as const;

export default function Timeline() {
  return (
    <section id="parcours" aria-labelledby="parcours-titre" className="section bg-parquet/60">
      <div className="container-page">
        <SectionHeading id="parcours-titre" eyebrow="D’où je viens" title="Parcours" />

        <ol className="relative space-y-8 border-l-2 border-line pl-6 sm:pl-8 lg:ml-[13rem]">
          {timeline.map((entry, index) => (
            <li key={`${entry.title}-${entry.period}`} className="relative" data-reveal style={revealDelay(index)}>
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[calc(1.5rem+7px)] h-3 w-3 rounded-full ring-4 ring-bg sm:-left-[calc(2rem+7px)] ${
                  entry.kind === "experience" ? "bg-accent" : "bg-navy"
                }`}
              />
              <p className="text-sm font-semibold uppercase tracking-wide text-muted lg:absolute lg:-left-[15rem] lg:top-1 lg:w-[12rem] lg:text-right">
                {entry.period}
              </p>
              <div className="mt-1 rounded-[var(--radius-card)] border border-border bg-surface p-5 lg:mt-0">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-link">
                  {kindLabel[entry.kind]}
                </p>
                <h3 className="text-2xl font-bold uppercase text-ink">{entry.title}</h3>
                <p className="font-medium text-navy">
                  {entry.organization}
                  {entry.place ? <span className="text-muted"> · {entry.place}</span> : null}
                </p>
                {entry.details.length > 0 ? (
                  <ul className="mt-3 space-y-1.5 text-muted">
                    {entry.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
