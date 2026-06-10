import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './About';

const EXPERIENCE_DATA = [

  {
    role: "IT Student",
    company: "University",
    period: "2022 – Present",
    desc: "Studying information technology with focus on software engineering, databases, cybersecurity, and application development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container relative"
             style={{ background: '#050d1a', borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
      <div className="absolute top-1/3 right-0 w-72 h-72 blur-[90px] rounded-full pointer-events-none"
           style={{ background: 'rgba(59, 130, 246, 0.08)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <SectionLabel color="#38bdf8">Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#e0f2fe' }}>Journey So Far</h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto pl-8 sm:pl-12">
        {/* Vertical Line */}
        <div className="absolute left-[15px] sm:left-[23px] top-2 bottom-2 w-[2px]"
             style={{ background: 'rgba(59, 130, 246, 0.2)' }} />

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative flex flex-col gap-2"
            >
              {/* Bullet Node */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-sm"
                   style={{
                     background: 'rgba(30, 58, 138, 0.5)',
                     border: '2px solid #3b82f6',
                   }}>
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#38bdf8' }} />
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-blue-md transition-all duration-300"
                   style={{
                     background: 'rgba(15, 30, 60, 0.6)',
                     border: '1px solid rgba(59, 130, 246, 0.15)',
                   }}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#e0f2fe' }}>{item.role}</h3>
                    <span className="text-sm font-semibold" style={{ color: '#60a5fa' }}>{item.company}</span>
                  </div>
                  <span className="inline-block self-start sm:self-center px-3 py-1 text-xs font-bold rounded-full"
                        style={{
                          background: 'rgba(59, 130, 246, 0.15)',
                          color: '#60a5fa',
                        }}>
                    {item.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#93c5fd' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
