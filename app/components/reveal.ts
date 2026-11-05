import type { CSSProperties } from "react";

/** Décalage d'apparition (40 ms par rang), lu par la règle [data-reveal] de globals.css. */
export function revealDelay(index: number): CSSProperties {
  return { "--reveal-index": index } as CSSProperties;
}
