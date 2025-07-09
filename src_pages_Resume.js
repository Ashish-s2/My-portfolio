import React from "react";

function Resume() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="mb-4">You can view or download my resume below:</p>
      <a
        href="/Ashish-Sahu-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700 font-medium transition"
        download
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;