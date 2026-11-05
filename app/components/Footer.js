"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
        <p className="text-center text-sm font-codecpro mb-3 md:mb-0">
          © 2025 Moussa Aliyo. Tous droits réservés.
        </p>

        <div className="flex gap-6">
          <a
            href="https://fr.linkedin.com/in/aliyo-moussa-18b3602a1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aliyomoussa@gmail.com"
            className="hover:text-orange-500 transition duration-300"
          >
            Me contacter
          </a>
        </div>
      </div>
    </footer>
  );
}