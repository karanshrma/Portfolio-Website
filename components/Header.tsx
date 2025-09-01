
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="block sm:inline-block text-slate-300 hover:text-indigo-400 transition-colors duration-300 py-2 sm:py-0 sm:px-4">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300">
            Welcome to My Portfolio
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center space-x-2">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-2">
             {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
