import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ onSectionChange, currentSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: scrolled 
          ? 'rgba(15, 15, 35, 0.98)' 
          : 'rgba(15, 15, 35, 0.95)',
        boxShadow: scrolled 
          ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
          : 'none'
      }}
    >
      <div className="nav-container">
        <motion.a
          href="#"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            onSectionChange('home');
            // Scroll to top when logo is clicked
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Keshav Bahoray
        </motion.a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li key={item.id}>
              <motion.a
                href="#"
                className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(item.id);
                  // Scroll to top of the page when navigation item is clicked
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;

