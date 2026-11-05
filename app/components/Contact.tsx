import { profile } from "@/app/data/profile";
import ContactForm from "./ContactForm";
import { ExternalLinkIcon, MailIcon, MapPinIcon } from "./Icons";
import { revealDelay } from "./reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-titre" className="section bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading id="contact-titre" eyebrow="Travaillons ensemble" title="Contact">
            <p>Une question, une opportunité ou un projet ? Écrivez-moi.</p>
          </SectionHeading>

          <ul className="space-y-4" data-reveal>
            <li className="flex items-center gap-3">
              <MailIcon className="shrink-0 text-accent" />
              <a className="text-link break-all" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ExternalLinkIcon className="shrink-0 text-accent" />
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ExternalLinkIcon className="shrink-0 text-accent" />
              <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub · Aliyo10<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <MapPinIcon className="shrink-0 text-accent" />
              {profile.location}
            </li>
          </ul>
        </div>

        <div data-reveal style={revealDelay(1)}>
          <ContactForm endpoint={profile.formspreeEndpoint} />
        </div>
      </div>
    </section>
  );
}
