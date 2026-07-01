import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code } from 'lucide-react';
import profileImg from '../assets/profile.png';

const ROLES = ["Software Engineer", "React & Node.js Dev"];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
        else setCharIdx(c => c + 1);
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        }
        else setCharIdx(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="px-6 md:px-8 max-w-6xl mx-auto pt-32 pb-24 md:pt-40 md:pb-32 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Bio & Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary-container/10 px-4 py-1.5 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse"></span>
            <span className="font-label-code text-primary text-xs uppercase tracking-widest">
              Open to opportunities
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight text-on-surface">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dinuka Silva</span>
          </h1>

          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-primary" />
            <p className="font-label-code text-primary-fixed-dim text-lg tracking-wide border-r-2 border-primary pr-2 animate-pulse min-h-[28px]">
              {role}
            </p>
          </div>

          <p className="font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Aspiring IT professional with a passion for building secure, scalable software. I enjoy working across the full stack — from clean UIs to robust backends.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-primary text-on-primary font-label-code font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(173,198,255,0.2)] hover:shadow-[0_0_30px_rgba(173,198,255,0.4)] transition-all flex items-center gap-2 active:scale-95 duration-200"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="bg-glass-bg text-on-surface font-label-code font-bold px-8 py-4 rounded-lg border border-glass-stroke hover:border-cyan-glow/50 transition-all active:scale-95 duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex gap-12 pt-8 border-t border-glass-stroke">
            <div>
              <span className="block font-display text-3xl font-bold text-primary">7</span>
              <span className="font-label-caps text-xs text-on-surface-variant">REPOSITORIES</span>
            </div>
            <div>
              <span className="block font-display text-3xl font-bold text-primary">4</span>
              <span className="font-label-caps text-xs text-on-surface-variant">PROJECTS BUILT</span>
            </div>
            <div>
              <span className="block font-display text-3xl font-bold text-primary">3+</span>
              <span className="font-label-caps text-xs text-on-surface-variant">YEARS LEARNING</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Card */}
        <div className="relative group max-w-md mx-auto w-full">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden border border-glass-stroke glass-card aspect-[4/5] hover:scale-[1.02] transition-transform duration-300">
            <img
              alt="Dinuka Silva Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-750"
              src={profileImg}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
              <p className="font-label-code text-cyan-glow text-sm mb-1"># Software Engineering</p>
              <p className="font-display text-2xl font-bold text-on-surface">Dinuka Silva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
