import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} SE Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" aria-label="Email">
            <Mail size={18} /> Email
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" aria-label="GitHub">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
