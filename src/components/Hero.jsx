import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaDownload, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-bold mb-4"
      >
        Hey, I'm <span className="text-pink-400">Ashish Sahu</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mb-6"
      >
        <Typewriter
          words={['Aspiring Data Scientist 💻', 'Fullstack Developer 🚀', 'AI/ML Enthusiast 🤖']}
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
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-4"
      >
        <a
          href="/Ashish_Sahu_Resume.pdf"
          download
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2"
        >
          <FaDownload /> Resume
        </a>
        <a
          href="#projects"
          className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2"
        >
          <FaRocket /> View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
