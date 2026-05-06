import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const projects = [
    {
      title: 'Social Media App',
      description: 'A full-featured social platform with real-time updates, user profiles, and post interactions.',
      image: project1,
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: 'https://social-media-app-mu-rose.vercel.app/login',
      github: 'https://github.com/zubair-khan-Eng/social-media-app'
    },
    {
      title: 'GreenCart E-Commerce',
      description: 'A modern e-commerce platform focused on sustainable products with a sleek UI and cart system.',
      image: project2,
      tags: ['React', 'Context API', 'Vite'],
      link: '#',
      github: 'https://github.com/zubair-khan-Eng/GREENCART'
    },
    {
      title: 'Rock Paper Scissors',
      description: 'A fun, interactive game with smooth animations and score tracking.',
      image: project3,
      tags: ['JavaScript', 'CSS3', 'Animations'],
      link: 'https://rock-paper-scissor-flame-eight.vercel.app/',
      github: 'https://github.com/zubair-khan-Eng/ROCK-PAPER-SCISSOR'
    },
    {
      title: 'Responsive Login Form',
      description: 'A clean, modern, and fully responsive login/signup interface.',
      image: project1,
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://responsive-login-form-nine.vercel.app/',
      github: 'https://github.com/zubair-khan-Eng/responsive-login-form'
    },
    {
      title: 'Task Manager (ToDo)',
      description: 'A efficient task management app with persistent storage and priority tracking.',
      image: project2,
      tags: ['React', 'LocalStorage', 'CSS Grid'],
      link: 'https://todo-app-rho-one-78.vercel.app/',
      github: 'https://github.com/zubair-khan-Eng/todo-app'
    },
    {
      title: 'Premium Corporate Website',
      description: 'A high-end, fully responsive multi-page website for businesses.',
      image: project3,
      tags: ['HTML5', 'Sass', 'JavaScript'],
      link: 'https://responsive-website-xi-one.vercel.app/',
      github: 'https://github.com/zubair-khan-Eng/Responsive-Website'
    }
  ];

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Projects</span></h2>
          <p>A selection of my recent work and personal experiments.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                background: 'var(--bg-primary)', 
                borderRadius: '2rem', 
                overflow: 'hidden', 
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border)'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{project.title}</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.8rem', 
                      background: 'rgba(99, 102, 241, 0.1)', 
                      color: 'var(--accent)', 
                      padding: '0.3rem 0.7rem', 
                      borderRadius: '0.5rem',
                      fontWeight: 600
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--accent)' }}>
                    <ExternalLink size={18} /> Demo
                  </a>
                  <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <FaGithub size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
