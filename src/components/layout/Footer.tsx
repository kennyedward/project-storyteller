
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 px-8 md:px-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto" style={{ '--column-spacing': '1.5vw' } as React.CSSProperties}>
        <h2 className="font-bricolage text-4xl md:text-6xl font-semibold mb-16 max-w-3xl">
          I'm always happy to talk.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="mailto:hello@example.com" 
            className="flex items-center space-x-3 font-manrope text-lg text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group"
          >
            <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>hello@example.com</span>
          </a>
          
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-3 font-manrope text-lg text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group"
          >
            <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 font-manrope text-lg text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group" 
          >
            <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-16 pt-8">
          <p className="font-manrope text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
