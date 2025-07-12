import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiCplusplus, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C/C++", icon: <SiCplusplus /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

function Skills() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="text-4xl text-blue-600 mb-2">{skill.icon}</div>
            <span className="text-sm font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
