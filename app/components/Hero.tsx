import Image from "next/image";

import { profile } from "@/app/data/profile";
import ButtonLink from "./ButtonLink";
import { ArrowRightIcon, DownloadIcon } from "./Icons";
import { revealDelay } from "./reveal";
import Todo from "./Todo";

export default function Hero() {
  return (
    <section aria-labelledby="titre-accueil" className="section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div data-reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-link">
            Portfolio · {profile.role}
          </p>
          <h1
            id="titre-accueil"
            className="text-5xl font-bold uppercase text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.firstName} <span className="text-navy">{profile.lastName}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#projets">
              Voir mes projets
              <ArrowRightIcon size={18} />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Me contacter
            </ButtonLink>
            {profile.cvUrl ? (
              <ButtonLink href={profile.cvUrl} variant="secondary" download>
                <DownloadIcon size={18} />
                Télécharger mon CV
              </ButtonLink>
            ) : null}
          </div>
          {profile.cvUrl ? null : (
            <p className="mt-4">
              <Todo>
                lien « Télécharger mon CV » : fournir un PDF sans téléphone, date de naissance ni
                adresse
              </Todo>
            </p>
          )}
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none" data-reveal style={revealDelay(2)}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border-2 border-accent sm:-inset-4"
            />
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={profile.photo.width}
              height={profile.photo.height}
              priority
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
              className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
