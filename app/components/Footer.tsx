import { profile } from "@/app/data/profile";
import BallMark from "./BallMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bg">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <BallMark size={28} />
          <div>
            <p className="font-display text-xl font-bold uppercase tracking-wide">
              {profile.fullName}
            </p>
            <p className="text-sm text-bg/85">{profile.role}</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Liens de contact">
          <li>
            <a
              className="inline-flex min-h-11 items-center text-link-on-dark underline-offset-4 hover:underline"
              href={`mailto:${profile.email}`}
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="inline-flex min-h-11 items-center text-link-on-dark underline-offset-4 hover:underline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn<span className="sr-only"> (nouvel onglet)</span>
            </a>
          </li>
          <li>
            <a
              className="inline-flex min-h-11 items-center text-link-on-dark underline-offset-4 hover:underline"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub<span className="sr-only"> (nouvel onglet)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-bg/15">
        <p className="container-page py-4 text-sm text-bg/85">
          © {year} {profile.fullName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
