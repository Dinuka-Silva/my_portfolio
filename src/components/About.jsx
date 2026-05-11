import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Cpu, Code } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="section-container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: Cyber Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Animated Glitch Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />

          <div className="relative glass-card overflow-hidden">
            <div className="p-1 bg-gradient-to-b from-white/10 to-transparent">
              <img
                src={profileImg}
                alt="Dinuka Avindra Silva"
                className="w-full h-auto object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Status: Active</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-1">DINUKA_AVINDRA_SILVA</h3>
              <p className="text-accent text-xs font-bold tracking-widest uppercase">Class: Software_Eng_Intern</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h2 className="section-title text-primary neon-text">DECRYPT_ABOUT_ME</h2>
          </div>

          <div className="space-y-6 text-text-dim text-lg leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-bold underline decoration-primary/50">Software Engineering Intern</span> with a strong passion for software engineering, problem-solving, and building efficient, user-friendly applications.
            </p>
            <p>
              My journey in tech is driven by the challenge of bridging the gap between <span className="text-accent font-bold">creative development</span> and <span className="text-primary font-bold">offensive security</span>. I build systems that aren't just functional, but inherently resilient.
            </p>
          </div>

          {/* Cyber Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {[
              { icon: ShieldCheck, label: 'Security Focus', value: 'High' },
              { icon: Cpu, label: 'Core Systems', value: 'Optimized' },
              { icon: Code, label: 'Code Quality', value: 'Clean' },
              { icon: User, label: 'Persistence', value: '100%' }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center gap-4 group hover:border-primary/30 transition-all">
                <div className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                  <stat.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-white font-bold text-sm tracking-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="DINUKA-AVINDRA-SILVA-CV.pdf" download className="cyber-button-cyan text-xs">
              DOWNLOAD_CV_PDF
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
