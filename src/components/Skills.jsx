import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      technologies: [
        { name: 'Python', level: 92 },
        { name: 'JavaScript', level: 86 },
        { name: 'Core-Java', level: 78 },
        { name: 'HTML/CSS', level: 82 }
      ]
    },
    {
      category: 'Libraries & Frameworks',
      technologies: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 76 },
        { name: 'Pandas', level: 92 },
        { name: 'NumPy', level: 88 },
        { name: 'Scikit-learn', level: 84 },
        { name: 'TensorFlow', level: 75 }
      ]
    },
    {
      category: 'Data & MLOps',
      technologies: [
        { name: 'DVC', level: 82 },
        { name: 'MLflow', level: 80 },
        { name: 'ETL Pipelines', level: 78 },
        { name: 'REST APIs', level: 80 },
        { name: 'Docker', level: 72 }
      ]
    },
    {
      category: 'Databases & Cloud',
      technologies: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Jupyter Notebooks', level: 88 },
        { name: 'Tableau', level: 70 },
        { name: 'Power BI', level: 65 }
      ]
    },
    {
      category: 'Specializations',
      technologies: [
        { name: 'Machine Learning', level: 88 },
        { name: 'Data Analysis', level: 90 },
        { name: 'Deep Learning', level: 80 },
        { name: 'NLP', level: 78 },
        { name: 'Computer Vision', level: 70 },
        { name: 'Statistical Analysis', level: 86 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technical Skills & Expertise
      </motion.h2>

      <motion.p
        className="section-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ML‑focused full‑stack skillset with strengths in data engineering, model lifecycle (MLOps),
        and modern web development.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="skills-grid"
      >
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="skill-category"
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{tech.name}</span>
                    <span className="skill-level">{tech.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + techIndex * 0.1 }}
                      className="skill-progress"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="continuous-learning"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="learning-title">Professional Focus</h3>
        <p className="learning-description">
          Specialized in building reliable ML systems—data ingestion to deployment—with
          robust experiment tracking and reproducible pipelines.
        </p>
        <div className="learning-tags">
          <span className="learning-tag">MLOps</span>
          <span className="learning-tag">Data Engineering</span>
          <span className="learning-tag">Model Deployment</span>
          <span className="learning-tag">Full‑Stack Development</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
