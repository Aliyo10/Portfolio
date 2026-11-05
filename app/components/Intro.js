"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex justify-center items-center mt-40">
      <div>
        <h1 className="font-bold text-7xl animate-typewriter">
          BONJOUR, JE SUIS ALIYO MOUSSA
        </h1>
        <p className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 mt-3 text-xl">
          Je suis passionné par le développement, le sport, et j&apos;adore me lancer dans de nouveaux projets.
        </p>
      </div>

      <div className="ml-15 items-center">
        <div className="rounded-full h-80 w-80 custom-shadow overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/photoToile.jpg"
            alt="Photo de profil"
            width={320}
            height={320}
          />
        </div>
        <p className="mt-3 text-center animate-typewriter">
          DEVELOPPEUR WEB - FULL STACK
        </p>
      </div>
    </div>
  );
}