"use client";

export default function About() {
  return (
    <>
      <div className="flex justify-center mt-115">
        <h1 id="propos" className="text-7xl font-codecpro">À MON PROPOS</h1>
      </div>

      <div className="mt-30 ml-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 h-[330px] w-[900px] rounded-lg p-6 flex items-center">
        <p className="text-xl font-codecpro text-center font-sans">
          Passionné d&apos;informatique depuis plusieurs années, je me suis naturellement orienté vers le développement web. J&apos;aime relever des défis, travailler en équipe et créer des solutions utiles. À travers ce portfolio, je vous présente mon parcours et les projets que j&apos;ai réalisés.
        </p>
      </div>

      <div className="mt-15 mr-35 ml-225 bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 h-[330px] w-[900px] rounded-lg p-6 flex items-center">
        <p className="text-xl font-codecpro text-center font-sans">
          Actuellement étudiant à Epitech, je me forme au développement full stack (front + back). J’utilise HTML, CSS, JavaScript, React, PHP, SQL… et je suis toujours prêt à apprendre de nouvelles technologies.
        </p>
      </div>
    </>
  );
}