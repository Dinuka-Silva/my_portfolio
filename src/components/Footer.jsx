import React from 'react';

const Footer = () => (
  <footer className="py-20 border-t border-primary/10 bg-background relative overflow-hidden">
    <div className="section-container flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-4">
        <h2 className="text-2xl font-black font-serif tracking-tight text-white">
          DINUKA<span className="text-primary font-mono tracking-normal">_ROOT</span><span className="animate-pulse text-primary">{'>'}</span>
        </h2>
        <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Cybersecurity Enthusiast & Full-Stack Developer</p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex items-center gap-8">
           <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-primary transition-colors">//HOME</a>
           <a href="#about" className="text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-primary transition-colors">//ABOUT</a>
           <a href="#projects" className="text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-primary transition-colors">//PORTFOLIO</a>
           <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-primary transition-colors">//CONTACT</a>
        </div>
        <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
          © 2026 DINUKA AVINDRA SILVA. [ENCRYPTED_SIGNATURE].
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
