"use client";
import { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { title: "Puissance 4", desc: "Jeu multijoueur en JavaScript" },
    { title: "My_Spotify", desc: "Clonage de Spotify avec API" },
    { title: "My_Cinema", desc: "Gestion de films et clients en PHP/SQL" },
    { title: "My_Twitter", desc: "Clone minimal de Twitter" },
    { title: "CSS Generator", desc: "Générateur de styles CSS dynamiques" },
    { title: "My_Meetic", desc: "Plateforme de rencontre" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="mt-40 px-10">
      <h1 id="projet" className="text-7xl text-center font-codecpro mb-10">PROJETS</h1>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative h-80 rounded-3xl bg-white text-black flex items-center justify-center shadow-xl transition-all duration-700 ease-in-out overflow-hidden">
          <div className="text-center px-8">
            <h3 className="text-2xl font-bold mb-4">{projects[activeIndex].title}</h3>
            <p>{projects[activeIndex].desc}</p>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black rounded-full p-2 shadow hover:bg-orange-200"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black rounded-full p-2 shadow hover:bg-orange-200"
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-white" : "bg-white/30"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
