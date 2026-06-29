import React from 'react';
import { motion } from 'framer-motion';
import { Download, Target, GraduationCap, Users, Lock } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Target, title: "Goal-Oriented", desc: "Focused on building software that solves real problems.", colorClass: "text-primary" },
    { icon: GraduationCap, title: "Always Learning", desc: "Continually expanding skills in new technologies.", colorClass: "text-secondary" },
    { icon: Users, title: "Team Player", desc: "Collaboration and communication are core to how I work.", colorClass: "text-tertiary" },
    { icon: Lock, title: "Security-Minded", desc: "Building with secure architectures from the ground up.", colorClass: "text-cyan-glow" },
  ];

  return (
    <section
      id="about"
      className="px-6 md:px-8 max-w-6xl mx-auto py-24 border-t border-glass-stroke/30 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Biography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-6"
        >
          <span className="font-label-caps text-primary tracking-[0.2em] text-xs">ABOUT ME</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight text-on-surface">
            Passionate about technology &amp; innovation
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            I'm an aspiring IT professional from Sri Lanka with a strong passion for both technology and sports — I'm also a basketball player with <span className="text-primary font-bold">D-EFENCE CLUB</span>. I believe the same discipline and teamwork that goes into sports translates directly into building great software.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 bg-surface-container rounded-full font-label-code text-xs text-on-surface-variant">Software Engineer Intern</span>

          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="/DINUKA-AVINDRA-SILVA-CV.pdf"
              download="Dinuka_Avindra_Silva_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-lg active:scale-95 transition-all duration-200"
              style={{
                background: '#adc6ff',
                color: '#002e6a',
                boxShadow: '0 0 20px rgba(173,198,255,0.25)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="/DINUKA-AVINDRA-SILVA-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-lg active:scale-95 transition-all duration-200"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#dae3f6',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              View PDF
            </a>
          </div>
        </motion.div>

        {/* Right Column: Values Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
          {values.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl space-y-3">
              <item.icon className={`${item.colorClass} w-8 h-8`} />
              <h3 className="font-bold text-base text-on-surface">{item.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
