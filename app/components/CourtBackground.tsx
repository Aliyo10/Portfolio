/**
 * Lignes de terrain en fond de page : touche d'ambiance purement décorative.
 * Proportions génériques d'un terrain (aucun logo, aucune marque).
 */
export default function CourtBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="h-full w-full opacity-70"
        viewBox="0 0 940 500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <g
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        >
          <rect x="20" y="20" width="900" height="460" vectorEffect="non-scaling-stroke" />
          <path d="M470 20v460" vectorEffect="non-scaling-stroke" />
          <circle cx="470" cy="250" r="60" vectorEffect="non-scaling-stroke" />
          <circle cx="470" cy="250" r="20" vectorEffect="non-scaling-stroke" />
          <HalfCourt />
          <g transform="translate(940 0) scale(-1 1)">
            <HalfCourt />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HalfCourt() {
  return (
    <>
      <rect x="20" y="170" width="170" height="160" vectorEffect="non-scaling-stroke" />
      <circle cx="190" cy="250" r="60" vectorEffect="non-scaling-stroke" />
      <path d="M60 220v60" vectorEffect="non-scaling-stroke" />
      <circle cx="72" cy="250" r="8" vectorEffect="non-scaling-stroke" />
      <path d="M20 50h130a222 222 0 0 1 0 400H20" vectorEffect="non-scaling-stroke" />
    </>
  );
}
