import Link from "next/link";

import { navItems, profile } from "@/app/data/profile";
import BallMark from "./BallMark";
import SiteNav from "./SiteNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm supports-[backdrop-filter]:bg-bg/80">
      <div className="container-page relative flex h-16 items-center justify-between gap-4 md:h-18">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2.5 font-display text-xl font-bold uppercase tracking-wide text-ink"
        >
          <BallMark size={30} />
          <span>{profile.fullName}</span>
        </Link>
        <SiteNav items={navItems} />
      </div>
    </header>
  );
}
