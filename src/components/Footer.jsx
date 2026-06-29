import React from 'react';

const Footer = () => (
  <footer className="w-full py-12 px-8 border-t border-glass-stroke bg-surface-container-lowest relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
      <p className="font-label-code text-xs text-on-surface-variant">
        © 2026 Dinuka Silva. Built with Precision.
      </p>
      <div className="flex gap-8 text-sm">
        <a 
          href="https://github.com/Dinuka-Silva" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-on-surface-variant hover:text-cyan-glow transition-colors font-medium"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/dinuka-silva-8748b5362/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-on-surface-variant hover:text-cyan-glow transition-colors font-medium"
        >
          LinkedIn
        </a>
        <a 
          href="https://www.instagram.com/dinuka_10_/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-on-surface-variant hover:text-cyan-glow transition-colors font-medium"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
