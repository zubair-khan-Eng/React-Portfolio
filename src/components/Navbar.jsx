import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="container" style={{ height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}
        >
          <span className="text-gradient">ZK</span>.dev
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontWeight: 500, fontSize: '0.95rem' }}>{link.name}</a>
              </li>
            ))}
          </ul>
          <button 
            onClick={toggleTheme}
            style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex' }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle">
           {/* We'll handle CSS for this via styles or just keep it simple for now */}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
