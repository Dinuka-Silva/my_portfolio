import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Zap, Lock } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Software Engineering Intern & Full-Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden bg-background cyber-grid">
      
      {/* Animated Matrix Rain Effect (Simplified) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="matrix-line" 
            style={{ 
              left: `${i * 5}%`, 
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }} 
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6">
            <Terminal size={14} />
            <span>SYSTEM_READY: SESSION_INITIATED</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] text-white">
            <span className="text-primary neon-text">DINUKA</span><br />
            AVINDRA
          </h1>
          
          <div className="flex items-center gap-2 h-8 mb-10">
             <span className="text-lg md:text-2xl text-accent font-bold tracking-tight">
               {text}
             </span>
             <motion.span 
               animate={{ opacity: [1, 0] }}
               transition={{ duration: 0.5, repeat: Infinity }}
               className="w-1 h-6 bg-primary"
             />
          </div>

          <p className="text-text-dim text-lg max-w-lg mb-12 leading-relaxed font-light">
            Specializing in secure system architectures, penetration testing concepts, and high-performance full-stack engineering.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="cyber-button">
              VIEW_PROJECTS
            </a>
            <a href="DINUKA-AVINDRA-SILVA-CV.pdf" download className="cyber-button-cyan">
              DOWNLOAD_CV
            </a>
            <a href="#contact" className="text-accent hover:text-primary transition-colors font-bold text-xs tracking-widest uppercase ml-4">
              CONTACT_ME_
            </a>
          </div>
        </motion.div>

        {/* Right Content: Cyber Hexagon/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[500px] h-[500px]">
            {/* Rotating Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/20 rounded-[40%] border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border border-accent/20 rounded-[45%] border-dashed"
            />
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="w-48 h-48 bg-primary/5 backdrop-blur-3xl border border-primary/30 rounded-3xl flex items-center justify-center relative overflow-hidden"
               >
                 <Shield size={80} className="text-primary neon-text" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
               </motion.div>
            </div>

            {/* Floating Tags */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-20 right-0 bg-surface px-4 py-2 border border-primary/30 rounded-lg backdrop-blur-md flex items-center gap-2"
            >
              <Lock size={14} className="text-primary" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Encryption_ON</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-20 left-0 bg-surface px-4 py-2 border border-accent/30 rounded-lg backdrop-blur-md flex items-center gap-2"
            >
              <Zap size={14} className="text-accent" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Firewall_ACTIVE</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
