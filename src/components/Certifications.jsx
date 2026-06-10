import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Cpu } from 'lucide-react';
import { SectionLabel } from './About';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      id: 'VERIFIED_ID: 9482-AI-2026',
      icon: Cpu,
      iconColor: '#38bdf8',
      link: 'AWS-AI-Certificate.pdf'
    },
    {
      title: 'Python Programming',
      issuer: 'University of Moratuwa',
      id: 'VERIFIED_ID: UOM-PY-2023',
      icon: Award,
      iconColor: '#60a5fa',
      link: 'Python-Certificate.pdf'
    },
    {
      title: 'Generative AI Foundation',
      issuer: 'Google Cloud',
      id: 'VERIFIED_ID: GCL-AI-2026',
      icon: ShieldCheck,
      iconColor: '#93c5fd',
      link: 'Generative-AI-Certificate.pdf'
    }
  ];

  return (
    <section id="certifications" className="section-container relative"
             style={{ background: '#081225' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <SectionLabel color="#93c5fd">Certifications</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#e0f2fe' }}>Credentials</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="relative flex flex-col h-full rounded-2xl overflow-hidden hover:shadow-blue-md transition-all duration-300"
            style={{
              background: 'rgba(15, 30, 60, 0.6)',
              border: '1px solid rgba(59, 130, 246, 0.15)',
            }}
          >
            <div className="p-8 flex flex-col items-center text-center justify-between h-full">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform"
                     style={{
                       background: 'rgba(59, 130, 246, 0.12)',
                       border: '1px solid rgba(59, 130, 246, 0.15)',
                       color: cert.iconColor,
                     }}>
                  <cert.icon size={30} />
                </div>
                
                <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: '#e0f2fe' }}>{cert.title}</h3>
                <p className="text-[11px] font-bold tracking-wider uppercase mb-5" style={{ color: '#60a5fa' }}>{cert.issuer}</p>
              </div>
              
              <div className="w-full">
                <div className="w-full h-[1px] mb-5" style={{ background: 'rgba(59, 130, 246, 0.12)' }} />
                
                <p className="text-[10px] font-mono tracking-normal uppercase mb-5" style={{ color: 'rgba(96, 165, 250, 0.5)' }}>
                  {cert.id}
                </p>
                
                <a 
                  href={cert.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
                  style={{ color: '#60a5fa' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#93c5fd'}
                  onMouseLeave={e => e.currentTarget.style.color = '#60a5fa'}
                >
                  View Credential 
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
