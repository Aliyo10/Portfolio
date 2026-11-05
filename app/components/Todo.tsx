import type { ReactNode } from "react";

type TodoProps = {
  children: ReactNode;
  as?: "span" | "p" | "div";
};

/**
 * Placeholder clairement marqué pour une information manquante.
 * Rien n'est inventé : on affiche ce qu'il reste à fournir.
 */
export default function Todo({ children, as: Tag = "span" }: TodoProps) {
  return (
    <Tag className="inline-flex items-baseline gap-1.5 rounded-md border border-dashed border-cta bg-surface px-2 py-0.5 text-sm text-ink">
      <strong className="font-semibold text-cta">TODO&nbsp;:</strong>
      <span>{children}</span>
    </Tag>
  );
}
