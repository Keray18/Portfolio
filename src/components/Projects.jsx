import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import imgStu from '../img/stu.jpeg';
import imgGems from '../img/gems.jpg';
import imgDataE from '../img/dataE.png';
import imgSocialM from '../img/socialM.png';
import imgText from '../img/text.png';
import imgBank from '../img/bank.jpeg';
import imgCRM from '../img/crm.png';

const Projects = ({ onSectionChange }) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const repositoryImages = {
    "Student-Performance-Indicator": imgStu,
    "GemStone_Classification_App": imgGems,
    "Data_Engineering_Proj": imgDataE,
    "SocialMedia": imgSocialM,
    "TransformerModels": imgText,
    "Bank_Churn_Prediction": imgBank,
    "CRM_App": imgCRM
  };

  // Title overrides (UI-friendly names)
  const titleOverrides = {
    Data_Engineering_Proj: 'Data Engineering',
    TransformerModels: 'Text Summarizer'
  };

  // Description overrides (professional tone)
  const descriptionOverrides = {
    Bank_Churn_Prediction:
      'End‑to‑end MLOps pipeline to predict customer churn. Versioned data with DVC and experiment tracking via MLflow/DAGsHub; production‑ready model artifacts.',
    TransformerModels:
      'Transformer‑based summarization using modern architectures. Pipelines orchestrated with DVC; notebooks and reproducible experiments included.',
    CRM_App:
      'Full‑stack CRM to manage leads, contacts, and tasks with role‑based access. Built with React, Node.js/Express, and MongoDB.',
    'Student-Performance-Indicator':
      'Predictive analytics on student outcomes using EDA, feature engineering, and supervised learning to provide interpretable insights and performance metrics.',
    GemStone_Classification_App:
      'Computer‑vision application that classifies gemstones from images using a deep learning CNN, paired with a React UI and Python backend.',
    Data_Engineering_Proj:
      'ELT pipeline that ingests, transforms, and analyzes web data. Automates extraction and computes derived features for downstream BI/ML workloads.',
    SocialMedia:
      'Social platform prototype with authentication, posting, and real‑time updates (Socket.io) built on the MERN stack.'
  };

  // Manual must-show projects (fallback only)
  const manualProjects = [
    {
      id: 1002,
      name: "Bank_Churn_Prediction",
      description:
        'End‑to‑end MLOps pipeline to predict customer churn. Versioned data with DVC and experiment tracking via MLflow/DAGsHub; production‑ready model artifacts.',
      html_url: "#",
      topics: ["python", "ml", "pandas", "scikit-learn"]
    },
    {
      id: 1003,
      name: "CRM_App",
      description:
        'Full‑stack CRM to manage leads, contacts, and tasks with role‑based access. Built with React, Node.js/Express, and MongoDB.',
      html_url: "#",
      topics: ["react", "node.js", "express", "mongodb"]
    },
    {
      id: 1004,
      name: "TransformerModels",
      description:
        'Transformer‑based summarization using modern architectures. Pipelines orchestrated with DVC; notebooks and reproducible experiments included.',
      html_url: "https://github.com/Keray18/TransformerModels",
      topics: ["python", "nlp", "transformers"]
    }
  ];

  const ensureMustShowProjects = (list) => {
    const names = new Set(list.map(r => r.name));
    const toAdd = manualProjects.filter(p => !names.has(p.name));
    return [...list, ...toAdd];
  };

  // Enforce custom order: Bank_Churn_Prediction first, TransformerModels second, others keep their relative order
  const orderRepos = (list) => {
    const desiredOrder = ["Bank_Churn_Prediction", "TransformerModels"]; // index = target position order
    const orderMap = new Map(desiredOrder.map((name, idx) => [name, idx]));
    return list
      .map((item, originalIdx) => ({ item, originalIdx }))
      .sort((a, b) => {
        const aOrder = orderMap.has(a.item.name) ? orderMap.get(a.item.name) : Infinity;
        const bOrder = orderMap.has(b.item.name) ? orderMap.get(b.item.name) : Infinity;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.originalIdx - b.originalIdx; // stable for others
      })
      .map(({ item }) => item);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const token = process.env.REACT_APP_TOKEN;
        const username = process.env.REACT_APP_USERNAME;
        const apiUrl = `https://api.github.com/users/${username}/repos`;

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Filter repos that have images
          let filteredRepos = data.filter(repo => repositoryImages[repo.name]);
          // Always include key projects even if not in API (private or different owner)
          filteredRepos = ensureMustShowProjects(filteredRepos);
          // Order with TransformerModels second
          filteredRepos = orderRepos(filteredRepos);
          setRepos(filteredRepos);
        } else {
          console.error("Failed to fetch projects");
          // Fallback to static data if API fails
          const fallback = [
            {
              id: 1,
              name: "Student-Performance-Indicator",
              description:
                'Predictive analytics on student outcomes using EDA, feature engineering, and supervised learning to provide interpretable insights and performance metrics.',
              html_url: "#",
              topics: ["python", "data-analysis", "education", "pandas", "numpy"]
            },
            {
              id: 2,
              name: "GemStone_Classification_App",
              description:
                'Computer‑vision application that classifies gemstones from images using a deep learning CNN, paired with a React UI and Python backend.',
              html_url: "#",
              topics: ["python", "deep-learning", "computer-vision", "react", "tensorflow"]
            },
            {
              id: 3,
              name: "Data_Engineering_Proj",
              description:
                'ELT pipeline that ingests, transforms, and analyzes web data. Automates extraction and computes derived features for downstream BI/ML workloads.',
              html_url: "#",
              topics: ["python", "data-engineering", "etl", "sql", "mongodb"]
            },
            {
              id: 4,
              name: "SocialMedia",
              description:
                'Social platform prototype with authentication, posting, and real‑time updates (Socket.io) built on the MERN stack.',
              html_url: "#",
              topics: ["react", "node.js", "mongodb", "express", "javascript"]
            },
            ...manualProjects
          ];
          setRepos(orderRepos(fallback));
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        // Fallback to static data
        const fallback = [
          {
            id: 1,
            name: "Student-Performance-Indicator",
            description:
              'Predictive analytics on student outcomes using EDA, feature engineering, and supervised learning to provide interpretable insights and performance metrics.',
            html_url: "#",
            topics: ["python", "data-analysis", "education", "pandas", "numpy"]
          },
          {
            id: 2,
            name: "GemStone_Classification_App",
            description:
              'Computer‑vision application that classifies gemstones from images using a deep learning CNN, paired with a React UI and Python backend.',
            html_url: "#",
            topics: ["python", "deep-learning", "computer-vision", "react", "tensorflow"]
          },
          {
            id: 3,
            name: "Data_Engineering_Proj",
            description:
              'ELT pipeline that ingests, transforms, and analyzes web data. Automates extraction and computes derived features for downstream BI/ML workloads.',
            html_url: "#",
            topics: ["python", "data-engineering", "etl", "sql", "mongodb"]
          },
          {
            id: 4,
            name: "SocialMedia",
            description:
              'Social platform prototype with authentication, posting, and real‑time updates (Socket.io) built on the MERN stack.',
            html_url: "#",
            topics: ["react", "node.js", "mongodb", "express", "javascript"]
          },
          ...manualProjects
        ];
        setRepos(orderRepos(fallback));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const goToContact = () => {
    if (onSectionChange) {
      onSectionChange('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getTitle = (name) => titleOverrides[name] || name.replace(/_/g, ' ');
  const getDescription = (name, fallback) => descriptionOverrides[name] || fallback;

  if (isLoading) {
    return (
      <section className="section" id="projects">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <motion.div
            style={{
              width: '50px',
              height: '50px',
              border: '3px solid #64ffda',
              borderTop: '3px solid transparent',
              borderRadius: '50%',
              margin: '0 auto'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img src={repositoryImages[repo.name]} alt={repo.name} />
            </div>
            <h3 className="project-title">{getTitle(repo.name)}</h3>
            <p className="project-description">{getDescription(repo.name, repo.description)}</p>
            <div className="project-links">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        style={{ textAlign: 'center', marginTop: '4rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p style={{ color: '#a8b2d1', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Interested in working together? Let's discuss your project!
        </p>
        <motion.button
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToContact}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Projects;