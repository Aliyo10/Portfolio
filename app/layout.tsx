import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import type { ReactNode } from "react";

import CourtBackground from "./components/CourtBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RevealObserver from "./components/RevealObserver";
import { profile, SITE_URL } from "./data/profile";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const description = `${profile.fullName}, ${profile.role.toLowerCase()} à ${profile.location}. ${profile.tagline} Projets, compétences, parcours et contact.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.fullName} · ${profile.role}`,
    template: `%s · ${profile.fullName}`,
  },
  description,
  authors: [{ name: profile.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: `Portfolio de ${profile.fullName}`,
    title: `${profile.fullName} · ${profile.role}`,
    description,
    images: [{ url: profile.photo.src, alt: profile.photo.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} · ${profile.role}`,
    description,
    images: [profile.photo.src],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6eee3",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Active l'état « caché avant apparition » uniquement si le JS tourne. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#contenu"
          className="sr-only z-50 rounded-[var(--radius-button)] bg-ink px-4 py-3 font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Aller au contenu
        </a>
        <CourtBackground />
        <Header />
        <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
