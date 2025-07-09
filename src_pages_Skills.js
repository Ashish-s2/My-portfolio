import React from "react";

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "C/C++",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Git & GitHub",
  "Data Structures & Algorithms",
];

function Skills() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded shadow text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;