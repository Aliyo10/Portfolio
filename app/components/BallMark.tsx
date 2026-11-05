type BallMarkProps = {
  size?: number;
  className?: string;
};

/** Marque personnelle : un ballon stylisé (cercle + coutures), sans aucun logo officiel. */
export default function BallMark({ size = 32, className }: BallMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="16" cy="16" r="14" fill="var(--color-accent)" />
      <g fill="none" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="16" cy="16" r="14" />
        <path d="M16 2v28" />
        <path d="M2 16h28" />
        <path d="M7 5.8c4.2 3.4 4.2 17 0 20.4" />
        <path d="M25 5.8c-4.2 3.4-4.2 17 0 20.4" />
      </g>
    </svg>
  );
}
