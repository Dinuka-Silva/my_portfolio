import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './About';

const SKILLS_DATA = {
  "Languages": {
    color: '#38bdf8',   /* Sky Blue  */
    bar:   'linear-gradient(90deg,#1e3a8a,#3b82f6)',
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Java",       level: 78 },
      { name: "Python",     level: 72 },
      { name: "C / C#",     level: 70 },
      { name: "PHP",        level: 65 },
    ],
  },
  "Frameworks & Libraries": {
    color: '#60a5fa',  /* Electric Blue */
    bar:   'linear-gradient(90deg,#2563eb,#60a5fa)',
    skills: [
      { name: "React",       level: 88 },
      { name: "Node.js",     level: 82 },
      { name: "React Native",level: 74 },
      { name: "Next.js",     level: 70 },
      { name: "Express.js",  level: 78 },
      { name: "Tailwind CSS",level: 85 },
    ],
  },
  "Databases & Tools": {
    color: '#93c5fd',  /* Cornflower */
    bar:   'linear-gradient(90deg,#0369a1,#38bdf8)',
    skills: [
      { name: "MySQL",       level: 80 },
      { name: "MongoDB",     level: 76 },
      { name: "Firebase",    level: 68 },
      { name: "Git & GitHub",level: 88 },
      { name: "Docker",      level: 55 },
      { name: "Postman",     level: 80 },
    ],
  },
};

const SkillBar = ({ name, level, barGradient }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-semibold" style={{ color: '#e0f2fe' }}>{name}</span>
      <span className="text-xs font-bold" style={{ color: '#60a5fa' }}>{level}%</span>
    </div>
    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(30, 58, 138, 0.5)' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
        className="h-full rounded-full"
        style={{ background: barGradient }}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="section-container relative"
           style={{ background: 'linear-gradient(180deg, #050d1a 0%, #0a1628 50%, #081225 100%)' }}>
    {/* Blue decorative ring */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"
         style={{ background: 'radial-gradient(circle,rgba(56,189,248,0.06) 0%,transparent 70%)' }} />

    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} className="mb-14">
      <SectionLabel color="#38bdf8">Skills</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color:'#e0f2fe' }}>
        Tech Stack
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.entries(SKILLS_DATA).map(([category, { color, bar, skills }], index) => (
        <motion.div key={category}
          initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay: index * 0.15, duration: 0.5 }}
          className="p-8 rounded-2xl transition-all duration-300 hover:shadow-blue-md"
          style={{
            background: 'rgba(15, 30, 60, 0.6)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            borderTop: `3px solid ${color}`,
          }}>
          <h3 className="text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b"
              style={{ color, borderColor: 'rgba(59, 130, 246, 0.1)' }}>
            {category}
          </h3>
          {skills.map(s => <SkillBar key={s.name} {...s} barGradient={bar} />)}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
