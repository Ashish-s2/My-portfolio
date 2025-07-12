import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, github, demo, tech, image }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover border-b"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
