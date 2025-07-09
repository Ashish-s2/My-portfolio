import React from "react";

function ProjectCard({ title, description, github, demo, tech }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="mb-4">
        {tech.map((t) => (
          <span key={t} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2">{t}</span>
        ))}
      </div>
      <div className="space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
