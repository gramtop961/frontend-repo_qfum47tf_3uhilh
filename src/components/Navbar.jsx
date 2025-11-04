import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight text-neutral-900">SE Portfolio</a>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
          <li><a href="#home" className="hover:text-neutral-900">Home</a></li>
          <li><a href="#about" className="hover:text-neutral-900">About</a></li>
          <li><a href="#projects" className="hover:text-neutral-900">Projects</a></li>
          <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
        </ul>
        <a href="#contact" className="sm:hidden inline-flex items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
