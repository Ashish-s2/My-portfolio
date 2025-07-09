import React from "react";

function Contact() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-4">
        Let's connect! Feel free to reach out for opportunities or collaboration.
      </p>
      <div className="space-y-3">
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-blue-600 hover:underline"
          >
            your.email@example.com
          </a>
        </div>
        <div>
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/yourusername
          </a>
        </div>
        <div>
          <span className="font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/Ashish-s2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/Ashish-s2
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;