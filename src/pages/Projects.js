import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectList = [
  {
    title: "Instagram Clone",
    description: "A full-stack photo sharing app inspired by Instagram, with authentication, feed, and image uploads.",
    github: "https://github.com/Ashish-s2/instagram-clone",
    demo: "",
    tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
  },
  {
    title: "Biomedical Signal Analyzer",
    description: "A Python tool for analyzing and visualizing biomedical signals (ECG, EEG, etc).",
    github: "https://github.com/Ashish-s2/biomedical-signal-analyzer",
    demo: "",
    tech: ["Python", "Matplotlib", "NumPy"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built using React and Tailwind CSS.",
    github: "https://github.com/Ashish-s2/portfolio",
    demo: "",
    tech: ["React", "Tailwind CSS"],
  },
  // Add more projects as you build them!
];

function Projects() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      {projectList.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}

export default Projects;
