import React from "react";

function Home() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Ashish Sahu 👋</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl">
        Final-year Biomedical Engineering student at NIT Rourkela, aspiring Software Development Engineer (SDE). Passionate about solving real-world problems with code and building impactful digital solutions.
      </p>
      <a
        href="/resume"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700 font-medium text-lg transition"
      >
        View Resume
      </a>
    </section>
  );
}

export default Home;
