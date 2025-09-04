import React from 'react';
import { motion } from 'framer-motion';
import logo from '../img/logo.png';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.img
        src={logo}
        alt="Portfolio Logo"
        className="loading-logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        LOADING PORTFOLIO...
      </motion.div>
      
      {/* Animated dots */}
      <motion.div
        style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#64ffda'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

