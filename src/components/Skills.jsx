import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Java / Spring Boot', level: 85 },
        { name: 'Node.js / Express', level: 80 },
        { name: 'PHP / Laravel', level: 75 },
        { name: 'SQL / NoSQL', level: 80 }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'GitHub / Git', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Linux / Bash', level: 75 },
        { name: 'Docker', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container relative bg-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="section-title text-primary neon-text">LOAD_CORE_SKILLS</h2>
        <p className="text-xl text-text-dim max-w-2xl font-light">
          Analyzing technical proficiencies across modern full-stack development and database ecosystems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 group hover:border-primary/30"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-black text-white">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-dim">{skill.name}</p>
                    <p className="text-[10px] font-bold text-primary">{skill.level}%</p>
                  </div>
                  <div className="skill-bar-container h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="skill-bar-fill h-full bg-primary shadow-[0_0_10px_rgba(0,255,159,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
