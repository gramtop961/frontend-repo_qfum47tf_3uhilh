import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Navbar />
      <main>
        <Hero />

        <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="about-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <p className="text-neutral-700 leading-relaxed md:col-span-2">
                I’m a software engineer focused on building reliable web platforms and pragmatic AI features. I value
                clarity, accessibility, and maintainability — favoring simple solutions that scale. My work spans
                end‑to‑end product development: ideation, design systems, APIs, infrastructure, and performance.
              </p>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• Web development (React, TypeScript)</li>
                <li>• Backend APIs (FastAPI, Node)</li>
                <li>• Databases (Postgres, MongoDB)</li>
                <li>• AI features (embedding search, inference)</li>
                <li>• DX & tooling (testing, CI/CD)</li>
              </ul>
            </div>
          </div>
        </section>

        <Projects />

        <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 max-w-2xl text-neutral-700">
              Interested in collaborating or have a project in mind? I’m open to select freelance engagements and full‑time roles.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@example.com?subject=Project%20Inquiry%20—%20Portfolio"
                className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              >
                Email me
              </a>
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              This site is built with React and Tailwind, optimized for performance and accessibility.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
