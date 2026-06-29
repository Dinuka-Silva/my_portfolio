import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Cpu, ArrowUpRight } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'AMAZON WEB SERVICES',
      icon: Cpu,
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
      link: 'AWS-AI-Certificate.pdf'
    },
    {
      title: 'Python Programming',
      issuer: 'UNIVERSITY OF MORATUWA',
      icon: Award,
      iconColor: 'text-secondary',
      iconBg: 'bg-secondary/10',
      link: 'Python-Certificate.pdf'
    },
    {
      title: 'Generative AI Foundation',
      issuer: 'GOOGLE CLOUD',
      icon: ShieldCheck,
      iconColor: 'text-tertiary',
      iconBg: 'bg-tertiary/10',
      link: 'Generative-AI-Certificate.pdf'
    }
  ];

  return (
    <section 
      id="certifications" 
      className="px-6 md:px-8 max-w-6xl mx-auto py-24 border-t border-glass-stroke/30 relative z-10"
    >
      <span className="font-label-caps text-primary tracking-[0.2em] text-xs">CERTIFICATIONS</span>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 mb-12">
        Credentials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card p-8 rounded-2xl text-center space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className={`w-16 h-16 ${cert.iconBg} ${cert.iconColor} rounded-2xl flex items-center justify-center mx-auto`}>
                <cert.icon size={30} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-on-surface leading-snug">{cert.title}</h3>
                <p className="font-label-code text-xs text-on-surface-variant mt-2 tracking-wider">{cert.issuer}</p>
              </div>
            </div>
            <div className="pt-4">
              <a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-label-code text-primary text-xs font-bold hover:underline"
              >
                VIEW CREDENTIAL
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
