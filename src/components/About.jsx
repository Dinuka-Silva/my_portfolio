import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profileImg from '../assets/profile.png';

/* ─── Shared Section Label ─────────────────────────────── */
export const SectionLabel = ({ children, color = '#60a5fa', center = false }) => (
  <div className={`flex items-center gap-2.5 mb-4 ${center ? 'justify-center' : ''}`}>
    <div className="w-[3px] h-[18px] rounded-full" style={{ background: color }} />
    <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color }}>
      {children}
    </span>
  </div>
);

const About = () => {
  const values = [
    { icon: "🎯", title: "Goal-Oriented",   desc: "Focused on building software that solves real problems" },
    { icon: "📚", title: "Always Learning", desc: "Continuously expanding skills in new technologies" },
    { icon: "🤝", title: "Team Player",     desc: "Collaboration and communication are core to how I work" },
    { icon: "🔒", title: "Security-Minded", desc: "Building with secure architectures from the ground up" },
  ];

  /* Four distinct blues for value cards */
  const cardBorders = ['#1e3a8a', '#2563eb', '#38bdf8', '#60a5fa'];

  return (
    <section id="about" className="section-container relative"
             style={{ background: '#081225' }}>
      {/* Blue glow blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full pointer-events-none -translate-x-1/2"
           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left: biography ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          {/* Section label */}
          <SectionLabel color="#38bdf8">About Me</SectionLabel>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
              style={{ color: '#e0f2fe' }}>
            Passionate about technology &amp; innovation
          </h2>

          <div className="space-y-4 text-base sm:text-[17px] leading-relaxed" style={{ color: '#93c5fd' }}>
            <p>
              I'm an aspiring IT professional from Sri Lanka with a strong passion for both technology and sports —
              I'm also a basketball player with{" "}
              <span className="font-semibold" style={{ color: '#60a5fa' }}>D-EFENCE CLUB</span>.
              I believe the same discipline and teamwork that goes into sports translates directly into building great software.
            </p>
            <p>
              My work spans full-stack web development, mobile apps, and secure system design. I'm particularly
              interested in building resilient applications that are both performant and user-friendly.
            </p>
          </div>

          {/* Skill badges — varieties of blue */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "Full-Stack Dev",    bg: 'rgba(30, 58, 138, 0.4)', color: '#93c5fd' },
              { label: "Security Research", bg: 'rgba(37, 99, 235, 0.3)', color: '#60a5fa' },
              { label: "Mobile Apps",       bg: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8' },
              { label: "Basketball 🏀",     bg: 'rgba(56, 189, 248, 0.15)', color: '#7dd3fc' },
            ].map(t => (
              <span key={t.label}
                    className="px-4 py-1.5 text-xs font-bold rounded-full cursor-default transition-all duration-200"
                    style={{ background: t.bg, color: t.color }}>
                {t.label}
              </span>
            ))}
          </div>

          {/* Download CV — Blue gradient button */}
          <div className="pt-2">
            <a href="/DINUKA-AVINDRA-SILVA-CV.pdf"
               download="Dinuka_Avindra_CV_Resume.pdf"
               className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-all duration-200 active:scale-95 shadow-blue-md"
               style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
              Download CV <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>

        {/* ── Right: profile photo + value cards ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 items-center lg:items-start"
        >
          {/* Profile photo card */}
          <div className="relative group w-60 sm:w-72 mx-auto lg:mx-0">
            <div className="absolute -inset-1 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-700"
                 style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb,#38bdf8)' }} />
            <div className="relative rounded-3xl overflow-hidden border-2"
                 style={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}>
              <img src={profileImg}
                   alt="Dinuka Avindra Silva"
                   className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              {/* Overlay badge */}
              <div className="absolute bottom-0 left-0 w-full px-5 py-4"
                   style={{ background: 'linear-gradient(to top, rgba(5,13,26,0.9), transparent)' }}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'rgba(147,197,253,0.8)' }}>Available</span>
                </div>
                <p className="text-white font-extrabold text-sm">Dinuka Avindra Silva</p>
                <p className="text-[11px] font-semibold" style={{ color: '#93c5fd' }}>Software Eng. Intern</p>
              </div>
            </div>
          </div>

          {/* Value cards — each with a different blue border-top, dark glass bg */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {values.map((item, idx) => (
              <div key={idx}
                   className="p-5 rounded-2xl transition-all duration-300 hover:shadow-blue-md hover:-translate-y-1 group"
                   style={{
                     background: 'rgba(15, 30, 60, 0.6)',
                     border: '1px solid rgba(59, 130, 246, 0.15)',
                     borderTop: `3px solid ${cardBorders[idx]}`,
                   }}>
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#e0f2fe' }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#93c5fd' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
