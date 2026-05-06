import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              I am a passionate Web Developer with over 3 years of experience in crafting high-quality websites and applications. My journey started with a curiosity for how things work on the internet, and it has evolved into a career where I turn creative ideas into functional digital experiences.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              I specialize in frontend development using React and backend systems with Node.js. My goal is always to create software that is not only robust and scalable but also provides an exceptional user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
