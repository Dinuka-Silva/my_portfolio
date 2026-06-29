import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? 'py-4 border-b border-glass-stroke shadow-lg bg-glass-bg backdrop-blur-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tighter transition-opacity hover:opacity-90"
        >
          <Terminal size={22} className="text-primary animate-pulse" />
          <span className="text-on-surface">Dinuka<span className="text-primary">.</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-label-code text-sm font-medium px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-glass-stroke/50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="https://github.com/Dinuka-Silva" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary font-label-code font-bold rounded-lg text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] active:scale-95"
          >
            GitHub <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden transition-colors p-2 text-on-surface-variant hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full shadow-lg py-6 px-8 flex flex-col gap-4 md:hidden z-50 border-b border-glass-stroke bg-glass-bg backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-label-code text-base font-semibold py-3 px-4 rounded-xl text-on-surface-variant hover:text-primary hover:bg-glass-stroke/50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="w-full h-[1px] bg-glass-stroke" />
            
            <a 
              href="https://github.com/Dinuka-Silva" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-on-primary text-center font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              <Github size={18} />
              GitHub Profile ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
