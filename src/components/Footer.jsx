import React from 'react';

const Footer = () => (
  <footer className="py-8 text-center"
          style={{
            background: '#050d1a',
            borderTop: '1px solid rgba(59, 130, 246, 0.1)',
          }}>
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-xs sm:text-sm font-semibold" style={{ color: 'rgba(96, 165, 250, 0.5)' }}>
        © 2026 Dinuka Silva · Built with React & Tailwind ·{" "}
        <a 
          href="https://github.com/Dinuka-Silva" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold transition-colors ml-1"
          style={{ color: '#60a5fa' }}
          onMouseEnter={e => e.currentTarget.style.color = '#93c5fd'}
          onMouseLeave={e => e.currentTarget.style.color = '#60a5fa'}
        >
          GitHub
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
