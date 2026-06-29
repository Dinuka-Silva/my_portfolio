import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE_DATA = [
  {
    role: "IT Student",
    company: "University / Higher Education",
    period: "2022 - Present",
    desc: "Studying information technology with a focus on software engineering, databases, cybersecurity, and application development. Consistently working on hands-on projects to bridge theoretical knowledge with industry standards."
  }
];

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="px-6 md:px-8 max-w-6xl mx-auto py-24 relative z-10"
    >
      <span className="font-label-caps text-primary tracking-[0.2em] text-xs">EXPERIENCE</span>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 mb-12">
        Journey So Far
      </h2>
      
      <div className="relative pl-8 border-l border-glass-stroke space-y-12">
        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* Timeline bullet glow */}
            <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-cyan-glow shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="font-display text-xl font-bold text-primary">{item.role}</h3>
                <span className="font-label-code text-xs bg-secondary-container/20 text-secondary-fixed-dim px-4 py-1 rounded-full w-max">
                  {item.period}
                </span>
              </div>
              <p className="font-bold text-on-surface mb-2">{item.company}</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
