import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '//_home', id: 'home' },
    { name: '//_about', id: 'about' },
    { name: '//_skills', id: 'skills' },
    { name: '//_portfolio', id: 'projects' },
    { name: '//_contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-primary/20' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
            <Shield size={20} />
          </div>
          <span className="text-lg font-black tracking-tighter text-white font-serif">
            DINUKA<span className="text-primary font-mono tracking-normal">_ROOT</span><span className="animate-pulse text-primary">{'>'}</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[11px] font-bold uppercase tracking-widest text-text-dim hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <a href="#contact" className="cyber-button text-[10px] tracking-widest">
            INITIALIZE_CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Terminal size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[80px] bg-background lg:hidden z-50 p-8 border-l border-primary/20"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors flex items-center gap-4"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary opacity-50">#</span>
                  {link.name.replace('//_', '')}
                </a>
              ))}
              <a 
                href="#contact" 
                className="cyber-button text-center mt-4" 
                onClick={() => setIsOpen(false)}
              >
                ACCESS_DENIED
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
