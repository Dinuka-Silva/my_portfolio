import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled 
        ? 'py-4 border-b shadow-lg' 
        : 'bg-transparent py-6'
    }`}
    style={scrolled ? {
      background: 'rgba(5, 13, 26, 0.85)',
      backdropFilter: 'blur(16px)',
      borderColor: 'rgba(59, 130, 246, 0.15)',
    } : {}}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-extrabold tracking-tight transition-opacity hover:opacity-95"
          style={{ color: '#60a5fa' }}
        >
          Dinuka<span style={{ color: '#38bdf8' }}>.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
              style={{ color: '#93c5fd' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#93c5fd'; e.currentTarget.style.background = 'transparent'; }}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:shadow-md active:scale-95"
            style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
          >
            GitHub <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden transition-colors p-2"
          style={{ color: '#93c5fd' }}
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
            className="absolute top-full left-0 w-full shadow-lg py-6 px-8 flex flex-col gap-4 md:hidden z-50"
            style={{
              background: 'rgba(5, 13, 26, 0.95)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(59, 130, 246, 0.15)',
            }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-base font-semibold py-3 px-4 rounded-xl transition-all"
                  style={{ color: '#93c5fd' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#93c5fd'; e.currentTarget.style.background = 'transparent'; }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="w-full h-[1px] my-2" style={{ background: 'rgba(59, 130, 246, 0.15)' }} />
            
            <a 
              href="https://github.com/Dinuka-Silva" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-white text-center font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
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
