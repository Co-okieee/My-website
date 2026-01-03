import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 不再创建粒子效果
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Creating stunning, user-friendly interfaces that captivate and engage your audience with modern design principles.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building robust, scalable web applications using cutting-edge technologies like React, Node.js, and more.'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Ensuring your website looks perfect on all devices, from smartphones to desktop computers.'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Optimizing your website for lightning-fast load times and superior user experience.'
    },
    {
      icon: '🔍',
      title: 'SEO Services',
      description: 'Improving your online visibility and search engine rankings to drive more organic traffic.'
    },
    {
      icon: '🛡️',
      title: 'Security & Maintenance',
      description: 'Providing ongoing support, updates, and security measures to keep your site safe and current.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Lead Developer',
      emoji: '👨‍💼',
      description: 'Full-stack developer with 8+ years of experience in building scalable web applications.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      emoji: '👩‍🎨',
      description: 'Award-winning designer specializing in UI/UX and brand identity with a passion for innovation.'
    },
    {
      name: 'Michael Wong',
      role: 'Tech Lead',
      emoji: '👨‍💻',
      description: 'Expert in React, Node.js, and cloud architecture with a focus on performance optimization.'
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      emoji: '👩‍💼',
      description: 'Experienced PM ensuring smooth project delivery and client satisfaction through agile methodologies.'
    }
  ];

  // 渲染不同页面内容
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <section className="hero">
            <div className="hero-content">
              <h1>
                Crafting <span style={{background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Digital Excellence</span>
              </h1>
              <p>
                We transform ideas into stunning web experiences that drive results. 
                Your vision, our expertise, limitless possibilities.
              </p>
              <div className="cta-buttons">
                <button onClick={() => setCurrentPage('contact')} className="btn btn-primary">Get Started</button>
                <button onClick={() => setCurrentPage('services')} className="btn btn-secondary">Our Services</button>
              </div>
            </div>
          </section>
        );

      case 'services':
        return (
          <section style={{minHeight: '100vh', paddingTop: '150px'}}>
            <div className="section-header">
              <h2>Our Services</h2>
              <p>Comprehensive web solutions tailored to your business needs</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>

            {/* Technologies Section */}
            <div style={{marginTop: '6rem'}}>
              <div className="section-header">
                <h2>Technologies We Use</h2>
                <p>Tools and frameworks powering our solutions</p>
              </div>
              <ul className="tech-list">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Vercel Deployment</li>
              </ul>
            </div>
          </section>
        );

      case 'about':
        return (
          <section style={{minHeight: '100vh', paddingTop: '150px'}}>
            <div className="section-header">
              <h2>About TechVision</h2>
              <p>Pioneering the future of web design and development</p>
            </div>
            
            {/* Company Description */}
            <div className="about-description">
              <p>
                TechVision is a web design company formed by computer science students. 
                We focus on creating modern, user-friendly, and responsive websites using 
                current web technologies. Our goal is to deliver practical and effective 
                digital solutions for businesses and organizations.
              </p>
            </div>

            <div className="mission-vision">
              <div className="mv-card">
                <h3>🎯 Our Mission</h3>
                <p>
                  To empower businesses with innovative web solutions that not only meet but exceed 
                  expectations. We believe in creating digital experiences that are beautiful, 
                  functional, and accessible to everyone. Our commitment is to deliver excellence 
                  in every project, fostering long-term partnerships built on trust and results.
                </p>
              </div>
              <div className="mv-card">
                <h3>🌟 Our Vision</h3>
                <p>
                  To be the leading web design company recognized for pushing the boundaries of 
                  creativity and technology. We envision a digital landscape where every business, 
                  regardless of size, has access to world-class web solutions that help them thrive 
                  in an increasingly connected world.
                </p>
              </div>
            </div>
          </section>
        );

      case 'team':
        return (
          <section style={{minHeight: '100vh', paddingTop: '150px'}}>
            <div className="section-header">
              <h2>Meet Our Team</h2>
              <p>Talented professionals dedicated to your success</p>
            </div>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="team-image">
                    <span style={{fontSize: '6rem'}}>{member.emoji}</span>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p>{member.description}</p>
                    <p className="skills"><strong>Skills:</strong> {member.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'contact':
        return (
          <section style={{minHeight: '100vh', paddingTop: '150px'}}>
            <div className="section-header">
              <h2>Get In Touch</h2>
              <p>Let's discuss how we can help bring your vision to life</p>
            </div>
            <div className="contact-content">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="contact-info">
                <p><strong>Email:</strong> contact@techvision.com</p>
                <p><strong>Location:</strong> Malaysia</p>
                <p>We usually respond within 24 hours.</p>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>TechVision</div>
        <ul className="nav-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }} className={currentPage === 'services' ? 'active' : ''}>Services</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('team'); }} className={currentPage === 'team' ? 'active' : ''}>Team</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      {/* 动态渲染当前页面 */}
      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo" style={{marginBottom: '1rem', fontSize: '2rem'}}>TechVision</div>
          <p>© 2025 TechVision Web Design Company. All rights reserved.</p>
          <p>Crafting digital excellence, one project at a time.</p>
          <div className="social-links">
            <a href="#facebook">📘</a>
            <a href="#twitter">🐦</a>
            <a href="#linkedin">💼</a>
            <a href="#instagram">📷</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;