import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';

// 3D Background Component
const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Floating spheres */}
      <Sphere args={[1, 16, 16]} position={[-5, 2, -5]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.3} />
      </Sphere>
      
      <Sphere args={[0.8, 16, 16]} position={[5, -2, -3]}>
        <meshStandardMaterial color="#00b4d8" transparent opacity={0.3} />
      </Sphere>
      
      <Sphere args={[0.6, 16, 16]} position={[0, 4, -8]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.2} />
      </Sphere>
      
      {/* Floating cubes */}
      <Box args={[0.5, 0.5, 0.5]} position={[-3, -3, -4]} rotation={[0.5, 0.5, 0]}>
        <meshStandardMaterial color="#64ffda" transparent opacity={0.4} />
      </Box>
      
      <Box args={[0.3, 0.3, 0.3]} position={[4, 3, -6]} rotation={[0.3, 0.7, 0.2]}>
        <meshStandardMaterial color="#00b4d8" transparent opacity={0.4} />
      </Box>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Hero = ({ onSectionChange }) => {
  const handleViewWork = () => {
    onSectionChange('projects');
    // Scroll to top of the page when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* 3D Background */}
      <div className="hero-3d-bg">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Keshav Bahoray
        </motion.h1>
        
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Software Engineer | FullStack & Machine Learning 
        </motion.h2>
        
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Passionate about creating innovative solutions and turning complex problems into elegant, 
          user-friendly applications. Specialized in machine learning, data science, and modern web technologies.
        </motion.p>
        
        <motion.button
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewWork}
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#64ffda',
          fontSize: '0.9rem'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span>Scroll Down</span>
        <motion.div
          style={{
            width: '2px',
            height: '30px',
            background: '#64ffda',
            marginTop: '0.5rem',
            borderRadius: '1px'
          }}
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

