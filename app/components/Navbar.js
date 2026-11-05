"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex bg-black h-20">
      <div className="flex justify-center items-center">
        <Image
          className="h-16 w-16 animate-bounce"
          alt="ballon de basket-ball"
          src="/ballon.png"
          width={64}
          height={64}
        />
        <p className="m-[6px] font-codecpro text-xl">Portfolio</p>
      </div>
      <div className="ml-45 flex justify-center items-center" id="navFixed">
        <p className="font-codecpro"><a href="#propos">À MON PROPOS</a></p>
        <p className="font-codecpro"><a href="#competence">MES COMPÉTENCES</a></p>
        <p className="font-codecpro"><a href="#projet">PROJETS</a></p>
        <p className="font-codecpro"><a href="#parcours">PARCOURS</a></p>
        <p className="font-codecpro"><a href="#form">CONTACTER</a></p>
      </div>
    </div>
  );
}
