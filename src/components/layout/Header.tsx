
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-6 px-8 md:px-16 flex items-center justify-between w-full">
      <div className="logo">
        <Link to="/" className="font-bricolage text-xl font-semibold">eko.</Link>
      </div>
      
      <div className="hidden md:block text-center absolute left-1/2 transform -translate-x-1/2">
        <span className="font-manrope text-sm tracking-wider">Product Design & Design Systems</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="font-manrope text-sm hover:underline">Projects</Link>
        <Link to="/about" className="font-manrope text-sm hover:underline">About</Link>
        <Link to="/resume" className="font-manrope text-sm hover:underline">Resume</Link>
        <Link to="/contact" className="font-manrope text-sm hover:underline">Get in touch</Link>
      </nav>
      
      <button className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
