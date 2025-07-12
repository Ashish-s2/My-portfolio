import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaDownload, FaRocket } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4"
      >
        Hey, I'm <span className="text-blue-600">Ashish Sahu</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-xl sm:text-2xl mb-6"
      >
        <Typewriter
          words={["Aspiring Data Scientist 💻", "Fullstack Developer 🚀", "ML Enthusiast 🤖"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href="/Ashish-Sahu-Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
        >
          <FaDownload /> Download Resume
        </a>
        <a
          href="/projects"
          className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-6 py-3 rounded-full flex items-center gap-2 transition"
        >
          <FaRocket /> View Projects
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
