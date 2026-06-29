import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Link2, Send, Terminal } from 'lucide-react';

const Contact = () => {
  const socials = [
    { 
      label: "LinkedIn", 
      username: "Dinuka Silva",
      href: "https://www.linkedin.com/in/dinuka-silva-8748b5362/", 
      icon: Link2, 
      colorBg: "bg-blue-600/20", 
      iconColor: "text-blue-400" 
    },
    { 
      label: "GitHub", 
      username: "@DinukaSilva",
      href: "https://github.com/Dinuka-Silva", 
      icon: Terminal, 
      colorBg: "bg-surface-variant", 
      iconColor: "text-on-surface" 
    },
    { 
      label: "Instagram", 
      username: "@dinuka_10_",
      href: "https://www.instagram.com/dinuka_10_/", 
      icon: Instagram, 
      colorBg: "bg-pink-600/20", 
      iconColor: "text-pink-400" 
    }
  ];

  return (
    <section 
      id="contact" 
      className="px-6 md:px-8 max-w-6xl mx-auto py-24 relative z-10"
    >
      <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative border border-glass-stroke">
        <div className="relative z-10 max-w-2xl">
          <span className="font-label-caps text-primary tracking-[0.2em] text-xs">CONTACT</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mt-2 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-on-surface-variant mb-12">
            I'm currently looking for new opportunities and interesting collaborations. Feel free to reach out — I'd love to connect!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socials.map((s) => (
              <a 
                key={s.label}
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-6 bg-surface-container/50 rounded-2xl hover:bg-surface-container transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${s.colorBg} flex items-center justify-center`}>
                  <s.icon className={s.iconColor} size={22} />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">{s.label}</p>
                  <p className="text-xs text-on-surface-variant">{s.username}</p>
                </div>
              </a>
            ))}
          </div>

          <a 
            href="https://www.facebook.com/dinukaavindra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full mt-8 bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold py-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 duration-200"
          >
            Say Hello on Facebook
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
