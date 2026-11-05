"use client";

export default function Skills() {
  return (
    <>
      <div className="flex justify-center mt-50">
        <h1 id="competence" className="text-7xl font-codecpro">MES COMPÉTENCES</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mt-16">
        {/* Bloc 1 : Langages */}
        <div className="bg-white border rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-black font-codecpro mb-4">Langages & Web</h2>
          <ul className="text-lg text-black list-disc list-inside font-codecpro">
            <li>HTML / CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>React / Next.js</li>
          </ul>
        </div>

        {/* Bloc 2 : Outils */}
        <div className="bg-white border rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-black font-codecpro mb-4">Outils & Environnements</h2>
          <ul className="text-lg text-black list-disc list-inside font-codecpro">
            <li>Git / GitHub</li>
            <li>VS Code / Terminal</li>
            <li>MySQL / phpMyAdmin</li>
            <li>TailwindCSS / SCSS</li>
          </ul>
        </div>

        {/* Bloc 3 : Soft Skills */}
        <div className="bg-white border rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-black font-codecpro mb-4">Qualités personnelles</h2>
          <ul className="text-lg text-black list-disc list-inside font-codecpro">
            <li>Curiosité</li>
            <li>Esprit d’équipe</li>
            <li>Réactivité</li>
            <li>Résilience</li>
            <li>Flexibilité</li>
          </ul>
        </div>

        {/* Bloc 4 : Langues */}
        <div className="bg-white border rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-black font-codecpro mb-4">Langues</h2>
          <ul className="text-lg text-black list-disc list-inside font-codecpro">
            <li>Français (C1 - Courant)</li>
            <li>Anglais (A2 - Débutant)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
