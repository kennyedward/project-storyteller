
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="py-24 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto" style={{ '--column-spacing': '1.5vw' } as React.CSSProperties}>
        <h2 className="font-bricolage text-5xl md:text-7xl font-semibold mb-16 max-w-3xl">
          I'm always happy to connect.
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:kennyedward99@gmail.com" 
            className="flex items-center space-x-3 font-manrope text-lg px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
          >
            <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>kennyedward99@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/kennyedward/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 font-manrope text-lg px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group" 
          >
            <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://www.xing.com/profile/Kehinde_Odewole" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-3 font-manrope text-lg px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:scale-110">
              <path d="M18 3l-5 8 6 10M6 21L9 15 5 11" />
            </svg>
            <span>Xing</span>
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
