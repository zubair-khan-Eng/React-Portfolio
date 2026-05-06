import React from 'react';
import { motion } from 'framer-motion';
import zubairPic from '../assets/zubair-pic.png';

const Hero = () => {
  return (
    <section className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}
          >
            Welcome to my portfolio
          </motion.p>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
            Hi, I'm <span className="text-gradient">Zubair Khan</span>
          </h1>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 500 }}>
            Full-Stack Web Developer & UI Designer
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '540px' }}>
            I build high-performance, beautiful, and user-centric web applications with modern technologies. Turning complex problems into simple, elegant solutions.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" style={{ display: 'flex', alignItems: 'center', fontWeight: 600, borderBottom: '2px solid var(--accent)' }}>Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ 
            position: 'absolute', 
            width: '400px', 
            height: '400px', 
            background: 'var(--accent)', 
            filter: 'blur(100px)', 
            opacity: 0.15,
            borderRadius: '50%',
            zIndex: -1
          }}></div>
          <img 
            src={zubairPic} 
            alt="Zubair Khan" 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: '2rem',
              boxShadow: 'var(--card-shadow)'
            }} 
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .container { grid-template-columns: 1fr !important; text-align: center; gap: 4rem; }
          h1 { fontSize: 3rem !important; }
          div[style*="justify-content: center"] { order: -1; }
          p { margin-left: auto; margin-right: auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
