import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
    const navigate = useNavigate();
    const handleTurfBookingClick = () => {
        navigate('/home');
      };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${e.target.name.value}! We will get back to you soon.`);
    e.target.reset();
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 style={{ color: 'black' }}>Welcome to My Portfolio</h1>
          <p style={{ color: 'black' }}>Hello! I'm Barathan S, a passionate web developer.</p>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGaKtWF6gjD4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693849203351?e=1730332800&v=beta&t=zBptue5ACZjBUmBIwUDamKW-dcmlaSFyYITJ4uI6dX0"
                alt="Profile"
              />
            </div>
            <div className="about-text">
              <p>Hello! I'm <strong>Barathan S</strong>, a web developer driven by a passion for creating exceptional digital experiences. I specialize in front-end development, using technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong> to build interactive and responsive websites.</p>
              <p>My journey in web development started with a fascination for how websites work behind the scenes. Over the years, I’ve honed my skills through continuous learning and hands-on experience. I take pride in writing clean, efficient code and designing user interfaces that are both beautiful and intuitive.</p>
              <p>When I'm not coding, you can find me exploring new technologies, solving complex problems, or brainstorming innovative ideas. My goal is to bridge the gap between design and technology, ensuring that every project I work on not only meets but exceeds expectations.</p>
              <p>Let’s collaborate to create something amazing!</p>
              <div className="skills-icons">
                <i className="fab fa-html5 fa-3x" style={{ color: '#e34c26' }}></i>
                <i className="fab fa-css3-alt fa-3x" style={{ color: '#1572b6' }}></i>
                <i className="fab fa-js-square fa-3x" style={{ color: '#f7df1e' }}></i>
                <i className="fab fa-react fa-3x" style={{ color: '#61dbfb' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card"><span>HTML</span></div>
            <div className="skill-card"><span>CSS</span></div>
            <div className="skill-card"><span>JavaScript</span></div>
            <div className="skill-card"><span>React</span></div>
          </div>
        </div>
      </section>


      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-grid">
            <div onClick={handleTurfBookingClick} className="project-card" style={{ cursor: 'pointer' }}>
              <h3>Turf Booking System</h3>
              <p>The Turf Booking System is an intuitive web application designed to simplify the process of booking and managing sports turf reservations.</p>
            </div>
            <a href="https://crypto-lab-2024.web.app/" className="project-card" target="_blank" rel="noopener noreferrer">
              <h3>CryptoLabs</h3>
              <p>Explore cutting-edge crypto algorithms designed to secure and optimize digital transactions.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Barathan S. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/barathans" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
