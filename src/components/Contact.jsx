import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './About';
import { Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dinuka-silva-8748b5362/", icon: Linkedin, hoverBorder: '#0a66c2', hoverBg: 'rgba(10,102,194,0.1)' },
    { label: "GitHub", href: "https://github.com/Dinuka-Silva", icon: Github, hoverBorder: '#93c5fd', hoverBg: 'rgba(147,197,253,0.1)' },
    { label: "Instagram", href: "https://www.instagram.com/dinuka_10_", icon: Instagram, hoverBorder: '#e1306c', hoverBg: 'rgba(225,48,108,0.1)' },
  ];

  return (
    <section id="contact" className="section-container relative"
             style={{ background: '#050d1a', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
      {/* Decorative Blur Spheres */}
      <div className="absolute bottom-0 right-10 w-80 h-80 blur-[100px] rounded-full pointer-events-none"
           style={{ background: 'rgba(59, 130, 246, 0.08)' }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <SectionLabel center color="#38bdf8">Contact</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight" style={{ color: '#e0f2fe' }}>Let's Work Together</h2>
          <p className="text-base sm:text-lg mb-10 max-w-xl leading-relaxed" style={{ color: '#93c5fd' }}>
            I'm currently open to internship opportunities, freelance projects, and collaborations. Feel free to reach out — I'd love to connect!
          </p>
        </motion.div>

        {/* 3-Column Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {socials.map((s) => (
            <motion.a 
              key={s.label} 
              href={s.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:shadow-blue-md group"
              style={{
                background: 'rgba(15, 30, 60, 0.6)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = s.hoverBorder; e.currentTarget.style.background = s.hoverBg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)'; e.currentTarget.style.background = 'rgba(15, 30, 60, 0.6)'; }}
            >
              <span className="group-hover:scale-110 transition-transform duration-200" style={{ color: '#60a5fa' }}>
                <s.icon size={26} />
              </span>
              <span className="font-bold text-sm" style={{ color: '#e0f2fe' }}>{s.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Facebook CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://www.facebook.com/dinukaavindra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl shadow-blue-lg transition-all duration-200 active:scale-95 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
          >
            Say Hello on Facebook <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
