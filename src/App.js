import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <Navigation onSectionChange={handleSectionChange} currentSection={currentSection} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentSection === 'home' && <Hero onSectionChange={handleSectionChange} />}
          {currentSection === 'about' && <About />}
          {currentSection === 'projects' && <Projects onSectionChange={handleSectionChange} />}
          {currentSection === 'skills' && <Skills />}
          {currentSection === 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
