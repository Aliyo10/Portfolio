import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-2.5 font-semibold transition-[background-color,color,transform] duration-200 active:scale-[0.98]";

const variants = {
  primary: "bg-cta text-white hover:bg-cta-hover",
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
} as const;

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
        {external ? <span className="sr-only"> (nouvel onglet)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
