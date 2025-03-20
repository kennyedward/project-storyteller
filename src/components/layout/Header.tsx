
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely access the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-6 px-8 md:px-16 flex items-center justify-between w-full">
      <div className="logo">
        <Link to="/" className="font-bricolage text-2xl md:text-3xl font-semibold">eko.</Link>
      </div>
      
      <div className="hidden md:block text-center absolute left-1/2 transform -translate-x-1/2">
        <span className="font-manrope text-sm tracking-wider">Product Design & Design Systems</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="font-manrope text-sm hover:underline">Projects</Link>
        <Link to="/about" className="font-manrope text-sm hover:underline">About</Link>
        <Link to="/resume" className="font-manrope text-sm hover:underline">Resume</Link>
        <a href="#footer" onClick={scrollToFooter} className="font-manrope text-sm hover:underline">Get in touch</a>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {mounted && (
            theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )
          )}
        </Button>
      </nav>
      
      <div className="md:hidden flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {mounted && (
            theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )
          )}
        </Button>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
