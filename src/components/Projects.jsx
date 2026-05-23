import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack / Secure_API',
      description: 'A robust boutique e-commerce solution with integrated payment gateways and advanced stock tracking.',
      tags: ['PHP', 'MySQL', 'Stripe', 'SSL'],
      link: 'https://github.com/Dinuka-Silva/SmartCart-E-commerce-app-',
      github: 'https://github.com/Dinuka-Silva/SmartCart-E-commerce-app-'
    },
    {
      title: 'AI Chatbot System',
      category: 'AI / Node.js',
      description: 'Intelligent natural language processing interface with modern interactive UI and secure data handling.',
      tags: ['Node.js', 'OpenAI', 'React'],
      link: 'https://github.com/Dinuka-Silva/LUMI-AI-chat-bot',
      github: 'https://github.com/Dinuka-Silva/LUMI-AI-chat-bot'
    },
    {
      title: 'Smart Library System',
      category: 'Java / Spring',
      description: 'Enterprise-grade system for managing resources and member records with role-based access control.',
      tags: ['Java', 'Spring Boot', 'MongoDB'],
      link: 'https://github.com/Dinuka-Silva/LIBRARY-MANAGEMENT-SYSTEM',
      github: 'https://github.com/Dinuka-Silva/LIBRARY-MANAGEMENT-SYSTEM'
    },
    {
      title: 'Study Planner AI',
      category: 'SaaS / Automation',
      description: 'AI-powered tool for generating optimized learning schedules and tracking academic progress.',
      tags: ['Next.js', 'AWS', 'Tailwind'],
      link: 'https://partyrock.aws/u/dinuka/zcAC8vA05/Study-Session-Planner-for-Students',
      github: 'https://partyrock.aws/u/dinuka/zcAC8vA05/Study-Session-Planner-for-Students'
    }
  ];

  return (
    <section id="projects" className="section-container bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="section-title text-primary neon-text">FETCH_PROJECTS_LIST</h2>
        <p className="text-xl text-text-dim max-w-2xl font-light">
          A collection of digital artifacts demonstrating software engineering and security principles.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group overflow-hidden border-white/5 hover:border-primary/30"
          >
            {/* Project Header/Visual */}
            <div className="relative h-56 bg-zinc-900 flex items-center justify-center overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0 cyber-grid opacity-20" />
              
              {/* Scanning Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-20 -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
              
              <div className="relative z-10 text-primary/20 group-hover:text-primary transition-all duration-500 transform group-hover:scale-110">
                <Code size={80} />
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-background/80 border border-primary/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] font-bold text-primary uppercase tracking-tighter">SECURE_DEPLOYMENT</span>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[8px] font-bold text-primary uppercase">{tag}</span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Shield size={10} /> {project.category}
                  </p>
                  <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-text-dim hover:text-primary hover:bg-primary/10 transition-all">
                    <Github size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-text-dim hover:text-primary hover:bg-primary/10 transition-all">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-text-dim text-sm leading-relaxed mb-10 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded border border-white/5 group-hover:border-primary/20 group-hover:text-primary/70 transition-all">
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
