import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Cpu } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      id: 'VERIFIED_ID: 9482-AI-2026',
      icon: Cpu,
      color: 'text-primary',
      link: 'AWS-AI-Certificate.pdf'
    },
    {
      title: 'Python Programming',
      issuer: 'University of Moratuwa',
      id: 'VERIFIED_ID: UOM-PY-2023',
      icon: Award,
      color: 'text-accent',
      link: 'Python-Certificate.pdf'
    },
    {
      title: 'Generative AI Foundation',
      issuer: 'Google Cloud',
      id: 'VERIFIED_ID: GCL-AI-2026',
      icon: ShieldCheck,
      color: 'text-primary',
      link: 'Generative-AI-Certificate.pdf'
    }
  ];

  return (
    <section id="certifications" className="section-container relative bg-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="section-title text-primary neon-text">VALIDATE_CREDENTIALS</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group h-full"
          >
            {/* Hexagon-ish Background Shape */}
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,255,159,0.1)]" />
            
            <div className="relative p-10 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center ${cert.color} mb-8 border border-white/10 group-hover:scale-110 transition-transform`}>
                <cert.icon size={40} className="neon-text" />
              </div>
              
              <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-text-dim text-[10px] font-bold tracking-[0.2em] uppercase mb-6">{cert.issuer}</p>
              
              <div className="w-full h-[1px] bg-white/5 mb-6" />
              
              <p className="text-[9px] font-mono text-white/30 tracking-tighter uppercase mb-4 group-hover:text-primary transition-colors">
                {cert.id}
              </p>
              
              <a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                VIEW_CREDENTIAL 
                <span className="text-xs">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
