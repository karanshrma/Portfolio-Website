import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick} 
    className="block sm:inline-block text-slate-300 hover:text-indigo-400 font-medium text-sm transition-colors duration-300 py-2.5 sm:py-0 sm:px-4"
  >
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
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/[0.05] shadow-lg' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-2.5 text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 group">
            <div className="p-1.5 bg-indigo-600/10 group-hover:bg-indigo-600/20 text-indigo-400 rounded-lg transition-colors">
              <Terminal className="h-5 w-5" />
            </div>
            <span>Karan Sharma</span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen pb-6 border-b border-white/[0.05]' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-1 pt-2">
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
