import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Server, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Frontend Dev', icon: <Layout />, items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { name: 'Backend Dev', icon: <Server />, items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { name: 'App Design', icon: <Smartphone />, items: ['Figma', 'UI/UX', 'Responsive Design', 'Animations'] },
    { name: 'Clean Code', icon: <Code2 />, items: ['Architecture', 'Testing', 'Git', 'CI/CD'] },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Technical <span className="text-gradient">Skills</span></h2>
          <p>The tools and technologies I use to bring projects to life.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass"
              style={{ padding: '2.5rem', borderRadius: '1.5rem', boxShadow: 'var(--card-shadow)' }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                {React.cloneElement(skill.icon, { size: 40 })}
              </div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{skill.name}</h3>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {skill.items.map(item => (
                  <li key={item} style={{ 
                    background: 'var(--bg-secondary)', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid var(--border)'
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
