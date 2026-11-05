"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import type { NavItem } from "@/app/data/profile";
import { CloseIcon, MenuIcon } from "./Icons";

type SiteNavProps = {
  items: NavItem[];
};

export default function SiteNav({ items }: SiteNavProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Section active (accueil) : la section qui traverse le milieu de l'écran.
  useEffect(() => {
    if (!isHome || !("IntersectionObserver" in window)) return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, items]);

  const close = useCallback(() => setOpen(false), []);

  // Échap ferme le menu mobile et rend le focus au bouton.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Fermer le menu lors d'un changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (id: string) =>
    isHome ? activeId === id : pathname.startsWith(id === "projets" ? "/projets" : `/${id}`);

  const hrefOf = (item: NavItem) => item.href ?? `/#${item.id}`;

  const linkClass = (id: string) =>
    [
      "relative inline-flex min-h-11 items-center px-1 font-display text-lg font-semibold uppercase tracking-wide transition-colors duration-200",
      "after:absolute after:inset-x-1 after:bottom-1.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-200",
      isActive(id)
        ? "text-ink after:scale-x-100"
        : "text-muted hover:text-ink after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");

  return (
    <nav aria-label="Navigation principale">
      {/* Desktop */}
      <ul className="hidden items-center gap-5 lg:flex">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={hrefOf(item)}
              className={linkClass(item.id)}
              aria-current={isActive(item.id) ? "true" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[var(--radius-button)] text-ink transition-colors hover:bg-parquet lg:hidden"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-[var(--shadow-card)] lg:hidden"
      >
        <ul className="container-page flex flex-col py-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={hrefOf(item)}
                onClick={close}
                className={`${linkClass(item.id)} w-full`}
                aria-current={isActive(item.id) ? "true" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
