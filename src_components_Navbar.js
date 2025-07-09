import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Resume", to: "/resume" },
  { name: "Contact", to: "/contact" },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Ashish Sahu
        </Link>
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`font-medium hover:text-blue-600 transition ${
                location.pathname === item.to ? "text-blue-600 underline" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;