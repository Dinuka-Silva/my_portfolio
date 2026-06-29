import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, ShoppingCart, Store, BookOpen } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: "LUMI AI Chatbot",
    desc: "AI-powered conversational chatbot built with TypeScript. Features real-time messaging, intelligent response generation, and a clean modern UI.",
    tech: ["TypeScript", "React", "Node.js"],
    link: "https://github.com/Dinuka-Silva/LUMI-AI-chat-bot",
    icon: Bot,
    colorClass: "text-primary bg-primary/10",
  },
  {
    title: "SmartCart E-Commerce",
    desc: "Full-featured e-commerce application with product listings, cart management, user authentication, and order tracking.",
    tech: ["Python", "React", "MySQL"],
    link: "https://github.com/Dinuka-Silva/SmartCart-E-commerce-app-",
    icon: ShoppingCart,
    colorClass: "text-secondary bg-secondary/10",
  },
  {
    title: "Multivendor App",
    desc: "Group project — a multi-vendor e-commerce platform supporting multiple sellers, product management, and customer checkout flows.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
    link: "https://github.com/Dinuka-Silva/Multivendor-App-Group-Project-",
    icon: Store,
    colorClass: "text-tertiary bg-tertiary/10",
  },
  {
    title: "Library Management System",
    desc: "A complete library management system with book cataloging, member management, borrowing records, and search functionality.",
    tech: ["JavaScript", "MySQL"],
    link: "https://github.com/Dinuka-Silva/LIBRARY-MANAGEMENT-SYSTEM",
    icon: BookOpen,
    colorClass: "text-cyan-glow bg-cyan-glow/10",
  },
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="px-6 md:px-8 max-w-6xl mx-auto py-24 relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-label-caps text-primary tracking-[0.2em] text-xs">PORTFOLIO</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-2">
            Featured Work
          </h2>
        </div>
        <a 
          href="https://github.com/Dinuka-Silva" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-label-code text-primary text-sm flex items-center gap-2 hover:underline"
        >
          View all on GitHub
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between h-full"
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl ${project.colorClass} flex items-center justify-center`}>
                  <project.icon size={28} />
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-on-surface-variant hover:text-cyan-glow transition-colors cursor-pointer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-surface-container rounded-full font-label-code text-[11px] text-on-surface-variant"
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
