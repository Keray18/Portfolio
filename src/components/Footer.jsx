import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Keray18',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/keshavbahoray',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:keshavbahoray18@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="footer-text">
            © {currentYear} Keshav Bahoray. All rights reserved.
          </p>
          
          <p style={{ color: '#8892b0', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Full‑stack developer and data scientist specializing in ML, data engineering, and modern web apps.
          </p>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ fontSize: '1.6rem' }}
              whileHover={{ 
                scale: 1.15, 
                y: -4,
                color: social.color 
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(100, 255, 218, 0.1)',
            textAlign: 'center'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p style={{ color: '#8892b0', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Core stack: Python • React • Node.js • MongoDB • MLflow • DVC
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

