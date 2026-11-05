import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsPreview from "./components/ProjectsPreview";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { profile, SITE_URL } from "./data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo.src}`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: profile.location, addressCountry: "FR" },
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <ProjectsPreview />
      <Contact />
    </>
  );
}
