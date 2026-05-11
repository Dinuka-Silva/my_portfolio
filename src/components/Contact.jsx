import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container relative overflow-hidden">

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="flex justify-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-4xl"
        >
          <h2 className="section-title text-primary neon-text">ESTABLISH_CONNECTION</h2>
          <p className="text-lg text-text-dim mb-16 font-light max-w-2xl">
            My communication channels are open for collaboration on secure systems and innovative software solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Mail, label: 'Secure Email', value: 'dinukaavindra98@gmail.com', link: 'mailto:dinukaavindra98@gmail.com' },
              { icon: MapPin, label: 'Geographic Location', value: 'Vavuniya, Sri Lanka', link: null },
              { icon: Github, label: 'Source Control', value: 'github.com/Dinuka-Silva', link: 'https://github.com/Dinuka-Silva' },
              { icon: Linkedin, label: 'Professional Network', value: 'linkedin.com/in/Dinuka-Silva', link: 'https://linkedin.com/in/Dinuka-Silva' }
            ].map((info, i) => (
              <a 
                key={i} 
                href={info.link} 
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                className={`p-8 glass-card group hover:border-primary/30 transition-all ${!info.link && 'cursor-default'} flex items-center gap-8`}
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-white font-bold tracking-tight">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
