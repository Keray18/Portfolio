import React from 'react';
import { motion } from 'framer-motion';
import me from '../img/me.JPG';

const About = () => {
  const skills = [
    'Python', 'Machine Learning', 'React.js', 'Node.js', 'Data Analysis',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'REST APIs', 'NLP'
  ];

  return (
    <section className="section" id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a passionate Full Stack Developer and Data Scientist with a strong foundation in 
            machine learning and modern web technologies. I love creating elegant solutions to 
            complex problems and building applications that make a difference.
          </p>
          
          <p>
            With expertise in Python, React.js, Node.js, and various machine learning libraries, 
            I specialize in developing scalable web applications and implementing AI/ML solutions. 
            I'm always eager to learn new technologies and take on challenging projects.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new datasets, contributing to 
            open-source projects, or sharing knowledge with the developer community. 
            I believe in writing clean, maintainable code and creating user experiences 
            that delight users.
          </p>

          <motion.div
            style={{ marginTop: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#64ffda', marginBottom: '1rem', fontSize: '1.3rem' }}>
              Quick Facts:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', color: '#a8b2d1' }}>
                🎓 Master of Computer Applications - Chandigarh University (2024-2026)
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#a8b2d1' }}>
                🌟 2+ Years of Development Experience
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#a8b2d1' }}>
                🚀 Passionate about AI/ML & Data Science
              </li>
              <li style={{ marginBottom: '0.5rem', color: '#a8b2d1' }}>
                💡 Love Open Source Contribution
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src={me} alt="Keshav Bahoray" style={{ position: 'relative', zIndex: 2 }} />
          
          {/* Floating skill tags */}
          <motion.div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(100, 255, 218, 0.1)',
              padding: '0.4rem 0.9rem',
              borderRadius: '20px',
              border: '1px solid rgba(100, 255, 218, 0.3)',
              fontSize: '0.85rem',
              color: '#64ffda',
              zIndex: 1
            }}
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Python
          </motion.div>
          
          <motion.div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '16px',
              background: 'rgba(100, 255, 218, 0.1)',
              padding: '0.4rem 0.9rem',
              borderRadius: '20px',
              border: '1px solid rgba(100, 255, 218, 0.3)',
              fontSize: '0.85rem',
              color: '#64ffda',
              zIndex: 1
            }}
            animate={{
              y: [5, -5, 5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ML/AI
          </motion.div>
          
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
              background: 'rgba(100, 255, 218, 0.1)',
              padding: '0.4rem 0.9rem',
              borderRadius: '20px',
              border: '1px solid rgba(100, 255, 218, 0.3)',
              fontSize: '0.85rem',
              color: '#64ffda',
              zIndex: 1
            }}
            animate={{
              y: [-3, 3, -3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            React.js
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

