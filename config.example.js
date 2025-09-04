// Configuration file for your portfolio
// Copy this file to config.js and update with your information

export const config = {
  // Personal Information
  personal: {
    name: "Your Name",
    title: "Full Stack Developer & Data Scientist",
    description: "Passionate about creating innovative solutions and turning complex problems into elegant, user-friendly applications. Specialized in modern web technologies and machine learning.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername"
  },

  // GitHub Configuration
  github: {
    token: process.env.REACT_APP_TOKEN || "your_github_token_here",
    username: process.env.REACT_APP_USERNAME || "your_github_username_here"
  },

  // EmailJS Configuration (for contact form)
  emailjs: {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
    userId: process.env.REACT_APP_EMAILJS_USER_ID || "YOUR_USER_ID"
  },

  // About Section
  about: {
    story: [
      "I'm a passionate Full Stack Developer and Data Scientist with a strong foundation in modern web technologies and machine learning. I love creating elegant solutions to complex problems and building applications that make a difference.",
      "With expertise in React, Node.js, Python, and various data science libraries, I specialize in developing scalable web applications and implementing machine learning solutions. I'm always eager to learn new technologies and take on challenging projects.",
      "When I'm not coding, you can find me exploring new datasets, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating user experiences that delight users."
    ],
    facts: [
      "🎓 Computer Science Graduate",
      "🌟 3+ Years of Development Experience",
      "🚀 Passionate about AI/ML",
      "💡 Love Open Source Contribution"
    ]
  },

  // Skills Configuration
  skills: {
    categories: [
      {
        title: "Frontend Development",
        icon: "💻",
        skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript", "Redux", "Next.js"]
      },
      {
        title: "Backend Development",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "REST APIs", "GraphQL"]
      },
      {
        title: "Data Science & ML",
        icon: "🤖",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter"]
      },
      {
        title: "Databases",
        icon: "🗄️",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQLite"]
      },
      {
        title: "DevOps & Tools",
        icon: "🚀",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Nginx", "PM2"]
      },
      {
        title: "Other Technologies",
        icon: "🔧",
        skills: ["GraphQL", "WebSocket", "OAuth", "JWT", "Testing", "Agile"]
      }
    ],
    experience: {
      advanced: ["React.js", "JavaScript", "Python", "Machine Learning"],
      intermediate: ["Node.js", "MongoDB", "AWS", "Docker"],
      learning: ["GraphQL", "Kubernetes", "Microservices"]
    }
  },

  // Contact Section
  contact: {
    message: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    availability: "I'm currently available for freelance work and full-time positions. Let's discuss how we can work together!"
  }
};

export default config;

