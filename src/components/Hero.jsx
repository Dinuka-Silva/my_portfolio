import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const ROLES = ["Full-Stack Developer", "Security Researcher", "Software Engineer", "React & Node.js Dev"];

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
        if (charIdx - 1 === 0) { setDeleting(false); setWordIdx(w => (w + 1) % words.length); setCharIdx(0); }
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
      className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden cyber-grid"
      style={{ background: 'linear-gradient(160deg, #050d1a 30%, #0a1e3d 60%, #0f2a52 100%)' }}
    >
      {/* Decorative blobs – Blue glow on dark */}
      <div className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)' }} />
      {/* Extra accent glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Badge — Dark glass style */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-9 border"
               style={{ background: 'rgba(30, 58, 138, 0.35)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#38bdf8' }} />
            <span className="text-xs font-bold tracking-wide" style={{ color: '#93c5fd' }}>
              Open to opportunities
            </span>
          </div>

          {/* Heading — Bright blue gradient on dark */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
              style={{ color: '#e0f2fe' }}>
            Hi, I'm{" "}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 35%, #3b82f6 65%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Dinuka Silva
            </span>
          </h1>

          {/* Typewriter — Electric Blue */}
          <div className="flex items-center gap-2 h-10 mb-8">
            <Terminal size={20} style={{ color: '#38bdf8' }} />
            <span className="text-xl sm:text-2xl font-bold" style={{ color: '#60a5fa' }}>
              {role}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-[3px] h-7 rounded"
              style={{ background: '#3b82f6' }}
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg max-w-xl mb-11 leading-relaxed" style={{ color: '#93c5fd' }}>
            Aspiring IT professional with a passion for building secure, scalable software. I enjoy working
            across the full stack — from clean UIs to robust backends — and I'm always learning something new.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#projects"
               className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-white transition-all duration-200 active:scale-95 shadow-blue-md hover:shadow-blue-lg"
               style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}>
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact"
               className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl border-2 transition-all duration-200 active:scale-95"
               style={{ borderColor: 'rgba(59, 130, 246, 0.35)', color: '#60a5fa', background: 'transparent' }}
               onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)'; e.currentTarget.style.background = 'transparent'; }}>
              Get In Touch
            </a>
          </div>

          {/* Stats — blue separators */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 border-t pt-8 max-w-md"
               style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}>
            {[
              { num: "7",   label: "Repositories",   color: '#38bdf8' },
              { num: "4",   label: "Projects Built",  color: '#60a5fa' },
              { num: "3+",  label: "Years Learning",  color: '#93c5fd' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-extrabold" style={{ color: s.color }}>{s.num}</span>
                <span className="text-xs sm:text-sm font-semibold mt-1" style={{ color: 'rgba(147, 197, 253, 0.6)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
