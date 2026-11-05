"use client";

export default function Timeline() {
  return (
    <>
      <div className="flex justify-center mt-50">
        <h1 id="parcours" className="text-7xl font-codecpro">PARCOURS</h1>
      </div>

      <div className="relative mt-30 mb-40">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0"></div>

        {/* Élément 1 */}
        <div className="flex justify-between items-center w-full mb-16 relative z-10">
          <div className="w-1/2 flex justify-end pr-10">
            <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
              <h2 className="font-bold">2021 - Bac STMG</h2>
              <p>Lycée Martinière Duchère - Système d&apos;information & gestion</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Élément 2 */}
        <div className="flex justify-between items-center w-full mb-16 relative z-10">
          <div className="w-1/2"></div>
          <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
              <h2 className="font-bold">2022 - 2023</h2>
              <p>Certificat Développement Web (Emploi Du Temps)</p>
            </div>
          </div>
        </div>

        {/* Élément 3 */}
        <div className="flex justify-between items-center w-full mb-16 relative z-10">
          <div className="w-1/2 flex justify-end pr-10">
            <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
              <h2 className="font-bold">Depuis Nov. 2024</h2>
              <p>Epitech - Développement Web</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Puissance 4</li>
                <li>My-Spotify</li>
                <li>My-Cinema</li>
              </ul>
            </div>
          </div>
          <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
          <div className="w-1/2"></div>
        </div>

        {/* Élément 4 */}
        <div className="flex justify-between items-center w-full mb-16 relative z-10">
          <div className="w-1/2"></div>
          <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
              <h2 className="font-bold">Exp. pro</h2>
              <p>GI EVENT (Manutentionnaire)</p>
              <p className="text-sm mt-1">Installation & gestion des buvettes</p>
            </div>
          </div>
        </div>

        {/* Élément 5 */}
        <div className="flex justify-between items-center w-full relative z-10">
          <div className="w-1/2 flex justify-end pr-10">
            <div className="bg-white rounded-xl p-5 w-[300px] shadow-md text-black font-codecpro">
              <h2 className="font-bold">Autres jobs</h2>
              <p>Vendeur prêt-à-porter & serveur pizzéria</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-white rounded-full z-10 border-4 border-black"></div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}
