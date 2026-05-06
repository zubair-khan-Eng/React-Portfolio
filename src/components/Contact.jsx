import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ 
          background: 'var(--accent)', 
          borderRadius: '3rem', 
          padding: '4rem', 
          color: 'white', 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr', 
          gap: '4rem',
          alignItems: 'center',
          boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.5)'
        }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Let's build something <span style={{ opacity: 0.8 }}>extraordinary</span> together.</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
              I'm currently available for freelance work and full-time opportunities. If you have a project in mind or just want to say hi, feel free to reach out!
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="mailto:hello@zubair.dev" className="glass" style={{ padding: '0.8rem', borderRadius: '1rem', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/zubair-khan-1a384b2b4/" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.8rem', borderRadius: '1rem', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="glass" style={{ padding: '0.8rem', borderRadius: '1rem', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/zubair-khan-Eng" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.8rem', borderRadius: '1rem', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          <div className="glass" style={{ padding: '3rem', borderRadius: '2rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '1rem' }}><Mail /></div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Email me at</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>hello@zubair.dev</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '1rem' }}><MapPin /></div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Location</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Islamabad, Pakistan</p>
              </div>
            </div>
            <button style={{ 
              width: '100%', 
              background: 'white', 
              color: 'var(--accent)', 
              padding: '1rem', 
              borderRadius: '1rem', 
              fontWeight: 700, 
              fontSize: '1rem',
              marginTop: '1rem'
            }}>
              Send a Message
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1.2fr 1fr"] { grid-template-columns: 1fr !important; padding: 2.5rem !important; gap: 3rem !important; }
          h2[style*="fontSize: 3rem"] { fontSize: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
