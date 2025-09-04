import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || 'YOUR_USER_ID');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - you'll need to set these up
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID || 'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "keshavbahoray18@gmail.com",
      link: "mailto:keshavbahoray18@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91-9650856160",
      link: "tel:+919650856160"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Remote, India",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/keshavbahoray",
      link: "https://linkedin.com/in/keshavbahoray"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/Keray18",
      link: "https://github.com/Keray18"
    }
  ];

  return (
    <section className="section" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        style={{
          textAlign: 'center',
          color: '#a8b2d1',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 4rem auto',
          lineHeight: '1.6'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm currently looking for new opportunities. Whether you have a question 
        or just want to say hi, I'll try my best to get back to you!
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 style={{ color: '#64ffda', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Let's talk about everything!
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  borderColor: 'rgba(100, 255, 218, 0.3)',
                  transform: 'translateX(10px)'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: '2rem' }}>{info.icon}</div>
                <div>
                  <h4 style={{ color: '#ffffff', marginBottom: '0.25rem' }}>{info.title}</h4>
                  <a
                    href={info.link}
                    style={{
                      color: '#a8b2d1',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#64ffda'}
                    onMouseLeave={(e) => e.target.style.color = '#a8b2d1'}
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="title" value="Portfolio Inquiry" />
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                required
                placeholder="Your message here..."
                rows="5"
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                style={{
                  color: '#64ffda',
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(100, 255, 218, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(100, 255, 218, 0.3)',
                  marginTop: '1rem'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                style={{
                  color: '#ff6b6b',
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(255, 107, 107, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
                  marginTop: '1rem'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Please try again or contact me directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(100, 255, 218, 0.1)'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 style={{ color: '#64ffda', marginBottom: '1rem' }}>
          Open for Opportunities
        </h3>
        <p style={{ color: '#a8b2d1', marginBottom: '1.5rem' }}>
          I'm currently available for freelance work and full-time positions. 
          Let's discuss how we can work together!
        </p>
        <motion.button
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('mailto:your.email@example.com', '_blank')}
        >
          Let's Connect
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;