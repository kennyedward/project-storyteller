
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 px-8 md:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="font-bricolage text-2xl font-medium mb-4">Let's connect</h3>
            <p className="font-manrope text-neutral-600 mb-8 max-w-md">
              I'm currently available for new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss a project.
            </p>
            <Link 
              to="/contact" 
              className="inline-block font-manrope bg-black text-white py-3 px-8 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Get in touch
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bricolage text-lg font-medium mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="font-manrope text-neutral-600 hover:text-black transition-colors">Projects</Link></li>
                <li><Link to="/about" className="font-manrope text-neutral-600 hover:text-black transition-colors">About</Link></li>
                <li><Link to="/resume" className="font-manrope text-neutral-600 hover:text-black transition-colors">Resume</Link></li>
                <li><Link to="/contact" className="font-manrope text-neutral-600 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bricolage text-lg font-medium mb-4">Social</h4>
              <ul className="space-y-3">
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="font-manrope text-neutral-600 hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="font-manrope text-neutral-600 hover:text-black transition-colors">Twitter</a></li>
                <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="font-manrope text-neutral-600 hover:text-black transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 mt-16 pt-8">
          <p className="font-manrope text-sm text-neutral-500">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
