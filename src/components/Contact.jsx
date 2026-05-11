import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container relative overflow-hidden">

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* Left: Contact Info & Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-primary neon-text">ESTABLISH_CONNECTION</h2>
          <p className="text-lg text-text-dim max-w-lg mb-12 font-light">
            My communication channels are open for collaboration on secure systems and innovative software solutions.
          </p>

          <div className="space-y-8 mb-12">
            {[
              { icon: Mail, label: 'Secure Email', value: 'dinukaavindra98@gmail.com' },
              { icon: MapPin, label: 'Geographic Location', value: 'Vavuniya, Sri Lanka' }
            ].map((info, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <info.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-white font-bold tracking-tight">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="https://github.com/Dinuka-Silva" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/Dinuka-Silva" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent/50 transition-all">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right: Cyber Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />

          <div className="relative glass-card p-10 md:p-12">
            <div className="flex items-center gap-3 mb-10 text-primary">
              <Terminal size={18} />
              <span className="text-xs font-bold tracking-widest uppercase">Input_Stream: Incoming_Message</span>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Identity</label>
                  <input type="text" placeholder="USER_NAME" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-mono text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Return_Path</label>
                  <input type="email" placeholder="EMAIL_ADDRESS" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-mono text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Payload</label>
                <textarea rows="5" placeholder="MESSAGE_CONTENT" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none font-mono text-sm"></textarea>
              </div>
              <button type="submit" className="cyber-button w-full flex items-center justify-center gap-3 py-4">
                TRANSMIT_DATA <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
