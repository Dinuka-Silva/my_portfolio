import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SectionLabel } from './About';

const PROJECTS_DATA = [
  {
    title: "LUMI AI Chatbot",
    desc: "AI-powered conversational chatbot built with TypeScript. Features real-time messaging, intelligent response generation, and a clean modern UI.",
    tech: ["TypeScript", "React", "Node.js"],
    link: "https://github.com/Dinuka-Silva/LUMI-AI-chat-bot",
    color: "#3b82f6",
  },
  {
    title: "SmartCart E-Commerce",
    desc: "Full-featured e-commerce application with product listings, cart management, user authentication, and order tracking.",
    tech: ["Python", "React", "MySQL"],
    link: "https://github.com/Dinuka-Silva/SmartCart-E-commerce-app-",
    color: "#38bdf8",
  },
  {
    title: "Multivendor App",
    desc: "Group project — a multi-vendor e-commerce platform supporting multiple sellers, product management, and customer checkout flows.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
    link: "https://github.com/Dinuka-Silva/Multivendor-App-Group-Project-",
    color: "#2563eb",
  },
  {
    title: "Library Management System",
    desc: "A complete library management system with book cataloguing, member management, borrowing records, and search functionality.",
    tech: ["JavaScript", "MySQL"],
    link: "https://github.com/Dinuka-Silva/LIBRARY-MANAGEMENT-SYSTEM",
    color: "#0ea5e9",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative"
             style={{ background: '#081225' }}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel color="#60a5fa">Projects</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#e0f2fe' }}>Featured Work</h2>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href="https://github.com/Dinuka-Silva" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
          style={{ color: '#60a5fa' }}
          onMouseEnter={e => e.currentTarget.style.color = '#93c5fd'}
          onMouseLeave={e => e.currentTarget.style.color = '#60a5fa'}
        >
          View all on GitHub <ExternalLink size={14} />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="flex flex-col h-full rounded-2xl overflow-hidden hover:shadow-blue-md transition-all duration-300 relative"
            style={{
              background: 'rgba(15, 30, 60, 0.6)',
              border: '1px solid rgba(59, 130, 246, 0.15)',
              borderTop: `4px solid ${project.color}`,
            }}
          >
            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold transition-colors" style={{ color: '#e0f2fe' }}>
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-2.5">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl transition-all duration-200"
                      style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#60a5fa',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'; e.currentTarget.style.color = '#93c5fd'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.color = '#60a5fa'; }}
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: '#93c5fd' }}>
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-bold rounded-lg"
                    style={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      color: '#60a5fa',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
