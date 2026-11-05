import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

/** Titre de section : surtitre + h2, avec la couture de ballon en séparateur. */
export default function SectionHeading({ id, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl lg:mb-14" data-reveal>
      <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-link">
        <SeamMark />
        {eyebrow}
      </p>
      <h2 id={id} className="text-4xl font-bold uppercase text-ink sm:text-5xl">
        {title}
      </h2>
      {children ? <div className="mt-4 text-lg text-muted">{children}</div> : null}
    </div>
  );
}

function SeamMark() {
  return (
    <svg width="36" height="12" viewBox="0 0 36 12" aria-hidden="true" focusable="false">
      <path
        d="M1 6c5-6 11-6 17 0s12 6 17 0"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
