import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, Key } from 'lucide-react';

const SecurityLabs = () => {
  const labs = [
    {
      title: 'SQL Injection Demo',
      status: 'Secured',
      icon: Database,
      description: 'Demonstrating parameterized queries and input sanitization to prevent unauthorized database access.',
      tools: ['SQLMap', 'Burp Suite']
    },
    {
      title: 'XSS Prevention Lab',
      status: 'Active',
      icon: EyeOff,
      description: 'Implementing Content Security Policy (CSP) and escaping mechanisms to block cross-site scripting attacks.',
      tools: ['JS-Purify', 'OWASP ZAP']
    },
    {
      title: 'Secure Auth System',
      status: 'Encrypted',
      icon: Lock,
      description: 'Multi-factor authentication (MFA) implementation with JWT session handling and rate limiting.',
      tools: ['BCrypt', 'JSONWebToken']
    },
    {
      title: 'Password Hashing Demo',
      status: 'Hashed',
      icon: Key,
      description: 'Comparison of hashing algorithms (Argon2 vs BCrypt) with salting and pepper implementation.',
      tools: ['Argon2', 'Crypto-JS']
    }
  ];

  return (
    <section id="labs" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="section-title text-accent neon-border-cyan px-4">SECURITY_LABS</h2>
        <p className="text-xl text-text-dim max-w-2xl font-light">
          Deep dive into experimental security implementations and vulnerability research modules.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {labs.map((lab, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-surface border border-white/5 rounded-2xl group hover:border-accent/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 bg-accent/10 rounded-bl-xl text-[8px] font-bold text-accent uppercase tracking-tighter">
              Status: {lab.status}
            </div>
            
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-background transition-all">
              <lab.icon size={28} />
            </div>

            <h3 className="text-xl font-black text-white mb-4 leading-tight">{lab.title}</h3>
            <p className="text-text-dim text-xs leading-relaxed mb-8 h-12 overflow-hidden opacity-70">
              {lab.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {lab.tools.map((tool, i) => (
                <span key={i} className="text-[8px] font-bold text-accent/50 border border-accent/20 px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import { Database } from 'lucide-react';
export default SecurityLabs;
