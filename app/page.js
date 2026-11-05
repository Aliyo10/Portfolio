"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DevMessage from "./components/DevMessage";


export default function Home() {
  const [afficherSuite, setAfficherSuite] = useState(false);

  return (
    <div>
      <AnimatePresence mode="wait">
        {!afficherSuite ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Header />
            <Intro />
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setAfficherSuite(true)}
                className="pt-6 pb-6 pl-9 pr-9 button rounded-[30px] border cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 text-black font-codecpro transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                EN SAVOIR PLUS
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <DevMessage />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
