import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Database } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: "LANGUAGES",
    icon: Terminal,
    colorClass: "text-primary",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 }
    ]
  },
  {
    category: "FRAMEWORKS & LIBS",
    icon: Layers,
    colorClass: "text-secondary",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js / Express", level: 82 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Native", level: 75 }
    ]
  },
  {
    category: "DATABASES & TOOLS",
    icon: Database,
    colorClass: "text-tertiary",
    skills: [
      { name: "MySQL / MongoDB", level: 80 },
      { name: "Firebase", level: 88 },
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 65 }
    ]
  }
];

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="flex justify-between font-label-code text-sm mb-2">
      <span className="text-on-surface">{name}</span>
      <span className="text-cyan-glow">{level}%</span>
    </div>
    <div className="skill-track">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="skill-progress"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="px-6 md:px-8 max-w-6xl mx-auto py-24 relative z-10"
    >
      <div className="mb-12">
        <span className="font-label-caps text-primary tracking-[0.2em] text-xs">SKILLS</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-2">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS_DATA.map((cat, index) => (
          <motion.div 
            key={cat.category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="glass-card p-8 rounded-2xl space-y-8"
          >
            <div className="flex items-center gap-3 border-b border-glass-stroke pb-4">
              <cat.icon className={cat.colorClass} size={20} />
              <h3 className={`font-label-caps text-sm tracking-widest ${cat.colorClass}`}>
                {cat.category}
              </h3>
            </div>
            <div className="space-y-6">
              {cat.skills.map(s => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
