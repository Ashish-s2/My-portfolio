import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Ashish Sahu. All rights reserved.</span>
        <span>
          <a href="https://github.com/Ashish-s2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          {" | "}
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          {" | "}
          <a href="mailto:your.email@example.com" className="hover:text-blue-600">Email</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
