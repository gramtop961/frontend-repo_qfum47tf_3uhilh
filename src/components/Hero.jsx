import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0" aria-hidden="true">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Software Engineer crafting reliable web and AI solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
            I design and build fast, accessible, and scalable products. Minimal interfaces, meaningful outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
