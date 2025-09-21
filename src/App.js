import React, { useState, useRef, useEffect } from 'react';
import './App.css';

// Counting animation component
const CountUp = ({ end, duration = 2000, start = 0 }) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Add pulse animation when counting completes
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return (
    <span
      ref={countRef}
      className={`stat-number ${isAnimating ? 'animate' : ''}`}
    >
      {count}
    </span>
  );
};

// Terminal-style prompt component
const Prompt = () => (
  <span className="prompt-text">
    <span className="user">root@Balaram</span>:
    <span className="path">~/portfolio</span>
    <span className="symbol"> └─$ </span>
  </span>
);

function WebPane({ section }) {
  switch (section) {
    case 'skills':
      return (
        <div className="web-section">
          <div className="section-header">
            <h2>💻 Technical Skills</h2>
            <div className="skill-categories">
              <div className="skill-category">
                <h3>IoT Security Specializations</h3>
                <div className="skill-tags">
                  <span className="skill-tag advanced">IoT Penetration Testing</span>
                  <span className="skill-tag advanced">Embedded Systems Security</span>
                  <span className="skill-tag advanced">Hardware Hacking</span>
                  <span className="skill-tag advanced">Wireless Security</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag advanced">Python</span>
                  <span className="skill-tag advanced">C/C++</span>
                  <span className="skill-tag intermediate">Assembly</span>
                  <span className="skill-tag intermediate">JavaScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Security Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag advanced">Nmap</span>
                  <span className="skill-tag advanced">Wireshark</span>
                  <span className="skill-tag advanced">Burp Suite</span>
                  <span className="skill-tag advanced">Metasploit</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Hardware & Systems</h3>
                <div className="skill-tags">
                  <span className="skill-tag advanced">Arduino</span>
                  <span className="skill-tag advanced">Linux</span>
                  <span className="skill-tag advanced">Firmware Analysis</span>
                  <span className="skill-tag intermediate">Reverse Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'about':
      return (
        <div className="web-section">
          <div className="about-hero">
            <div className="hero-content">
              <div className="profile-section">
                <div className="profile-image">
                  <img src="/thumbnails/balaram2.png" alt="Balaram" className="profile-img" />
                  <div className="profile-status">Online</div>
                </div>
                <div className="profile-info">
                  <h1>Hello, I'm <span className="highlight">Chillagundla Balaram</span></h1>
                  <p className="hero-subtitle">IoT Penetration Tester</p>
                  <p className="hero-description">
                    Passionate about securing the connected world. Currently pursuing 2nd year BTech at KL University,
                    I specialize in identifying vulnerabilities in IoT devices and embedded systems.
                  </p>
                </div>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <CountUp end={2} duration={1500} />
                  <span className="stat-label">Years of Study in KL University</span>
                </div>
                <div className="stat-item">
                  <CountUp end={4} duration={2000} />
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <CountUp end={5} duration={1800} />
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sections">
            <div className="section-card">
              <div className="card-header">
                <div className="card-icon">
                  <span className="material-icons">school</span>
                </div>
                <h3>Education & Background</h3>
              </div>
              <div className="card-content">
                <div className="education-item">
                  <div className="education-dot"></div>
                  <div className="education-content">
                    <h4>Bachelor of Technology (BTech) - 2nd Year</h4>
                    <p>KL University, Vijayawada, Andhra Pradesh</p>
                    <span className="education-year">2024 - 2028</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-card">
              <div className="card-header">
                <div className="card-icon">
                  <span className="material-icons">emoji_events</span>
                </div>
                <h3>Achievements & Competitions</h3>
              </div>
              <div className="card-content">
                <div className="achievement-grid">
                  <div className="achievement-item">
                    <div className="achievement-icon">🏆</div>
                    <div className="achievement-content">
                      <h4>CTF Participant</h4>
                      <p>Osmania University</p>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">💻</div>
                    <div className="achievement-content">
                      <h4>SIH Developer</h4>
                      <p>Smart Education Project</p>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">📜</div>
                    <div className="achievement-content">
                      <h4>Security Certifications</h4>
                      <p>Multiple Certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-card">
              <div className="card-header">
                <div className="card-icon">
                  <span className="material-icons">build</span>
                </div>
                <h3>Core Specializations</h3>
              </div>
              <div className="card-content">
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">security</span>
                    </div>
                    <span>IoT Security</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">bug_report</span>
                    </div>
                    <span>Penetration Testing</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">search</span>
                    </div>
                    <span>Vulnerability Research</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">precision_manufacturing</span>
                    </div>
                    <span>Industrial Control Systems</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">wifi</span>
                    </div>
                    <span>Wireless Security</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">build</span>
                    </div>
                    <span>Hardware Hacking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'projects':
      return (
        <div className="web-section">
          <div className="section-header">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-icon">
                    <span className="material-icons">{project.icon}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">{project.technologies}</div>
                  <div className="project-links">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 'contact':
      return (
        <div className="web-section">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-card">
                <h3>Let's Connect!</h3>
                <p>I'm always interested in new opportunities and collaborations.</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">
                      <span className="material-icons">email</span>
                    </div>
                    <div className="contact-info">
                      <h4>Email</h4>
                      <a href="mailto:balaram753.ch@gmail.com">balaram753.ch@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <span className="material-icons">work</span>
                    </div>
                    <div className="contact-info">
                      <h4>LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/chillagundla-balaram-277708314/" target="_blank" rel="noopener noreferrer">Connect with me</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <span className="material-icons">code</span>
                    </div>
                    <div className="contact-info">
                      <h4>GitHub</h4>
                      <a href="https://github.com/balaram753" target="_blank" rel="noopener noreferrer">View my work</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <span className="material-icons">play_circle</span>
                    </div>
                    <div className="contact-info">
                      <h4>YouTube</h4>
                      <a href="https://www.youtube.com/@Tech-Cipher-789/videos" target="_blank" rel="noopener noreferrer">Tech Cipher 789</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <span className="material-icons">photo_camera</span>
                    </div>
                    <div className="contact-info">
                      <h4>Instagram</h4>
                      <a href="https://www.instagram.com/tech_cipher789/?igsh=ZnAzbnZsdGw2N2J0#" target="_blank" rel="noopener noreferrer">@tech_cipher789</a>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <span className="material-icons">phone</span>
                    </div>
                    <div className="contact-info">
                      <h4>Phone</h4>
                      <span>+91 78971237897</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="web-section">
          <div className="welcome-section">
            <h2>🌟 Welcome to My Portfolio</h2>
            <p>Use the terminal on the left to navigate through different sections:</p>
            <div className="command-hints">
              <div className="command-hint">
                <code>help</code>
                <span>Show available commands</span>
              </div>
              <div className="command-hint">
                <code>skills</code>
                <span>View technical skills</span>
              </div>
              <div className="command-hint">
                <code>about</code>
                <span>Learn about me</span>
              </div>
              <div className="command-hint">
                <code>projects</code>
                <span>See my projects</span>
              </div>
              <div className="command-hint">
                <code>contact</code>
                <span>Get in touch</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

// Projects data - Easy to edit and add new projects
const projects = [
  {
    icon: "school",
    title: "SIH Smart Education Project",
    description: "Developer role in Smart India Hackathon - Built innovative Smart Education platform for educational institutions with real-time collaboration features.",
    technologies: "Smart Education • Web Development • SIH • Team Project",
    links: [
      { label: "View Project", url: "https://github.com/balaram753/sih-smart-education" },
      { label: "Certificate", url: "https://certificates.sih.gov.in/balaram" }
    ]
  },
  {
    icon: "security",
    title: "CTF Solutions & Writeups",
    description: "Collection of cybersecurity challenges and penetration testing solutions from various CTF competitions including Osmania University events.",
    technologies: "Cybersecurity • CTF • Penetration Testing • Osmania University",
    links: [
      { label: "View Solutions", url: "https://github.com/balaram753/ctf-solutions" },
      { label: "Read Writeups", url: "https://balaram-tech.medium.com/ctf-writeups" }
    ]
  },
  {
    icon: "code",
    title: "Portfolio Terminal UI",
    description: "Interactive portfolio website with CLI interface built using React. Features 3D effects, terminal commands, and responsive design.",
    technologies: "React • CSS3 • JavaScript • Terminal UI • 3D Effects",
    links: [
      { label: "View Live", url: "https://balaram-portfolio.netlify.app" },
      { label: "Source Code", url: "https://github.com/balaram753/portfolio-terminal" }
    ]
  },
  {
    icon: "build",
    title: "IoT Security Tools",
    description: "Custom penetration testing utilities and security scanners for IoT devices and embedded systems. Includes vulnerability assessment tools.",
    technologies: "Python • IoT • Security • Hardware • Embedded Systems",
    links: [
      { label: "View Tools", url: "https://github.com/balaram753/iot-security-tools" },
      { label: "Documentation", url: "https://iot-tools.balaram-tech.com" }
    ]
  },
  {
    icon: "search",
    title: "Vulnerability Research",
    description: "Independent security research on IoT devices and embedded systems. Discovered and reported multiple vulnerabilities in smart home devices.",
    technologies: "Vulnerability Research • IoT Security • CVE • Responsible Disclosure",
    links: [
      { label: "Research Blog", url: "https://balaram-tech.medium.com/vulnerability-research" },
      { label: "CVE Reports", url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=balaram" }
    ]
  },
  {
    icon: "engineering",
    title: "Industrial Control Systems Security",
    description: "Security assessment and penetration testing of SCADA systems and industrial control networks. Specialized in OT security protocols.",
    technologies: "SCADA • ICS Security • Modbus • DNP3 • OT Security",
    links: [
      { label: "Case Studies", url: "https://balaram-tech.com/ics-security" },
      { label: "Research Paper", url: "https://research.balaram-tech.com/ics-vulnerabilities" }
    ]
  }
];

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { command: '', response: 'Welcome to Balaram\'s Portfolio Terminal! 🚀\n\nType "help" to see available commands.\nType "skills", "about", "projects", or "contact" to explore.\n\nReady to dive in? Let\'s go! 💻' }
  ]);
  const [section, setSection] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [output]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      let response;
      switch (command) {
        case 'skills':
          setSection(command);
          response = `Opening ${command} section in web view...\n\nTechnical Skills:\n• IoT Penetration Testing - Expert\n• Python - Advanced\n• C/C++ - Advanced\n• Assembly Language - Intermediate\n• Nmap, Wireshark, Burp Suite - Expert\n• Hardware Hacking Tools - Advanced\n• Wireless Security Testing - Expert\n• Embedded Systems Security - Advanced`;
          break;
        case 'about':
          setSection(command);
          response = `Opening ${command} section in web view...\n\nAbout Chillagundla Balaram:\nI'm an IoT penetration tester.\nCurrently pursuing 2nd year BTech at KL University, Vijayawada, AP.\n\nAchievements:\n• CTF Participant at Osmania University\n• Developer in Smart India Hackathon (SIH)\n• Multiple Security Certifications\n• Specialized in IoT security and embedded systems.`;
          break;
        case 'projects':
          setSection(command);
          response = `Opening ${command} section in web view...\n\nFeatured Projects:\n• SIH Smart Education Project - Smart India Hackathon\n• CTF Solutions & Writeups - Cybersecurity challenges\n• Portfolio Terminal UI - Interactive React portfolio\n• IoT Security Tools - Custom penetration testing utilities\n• Vulnerability Research - IoT security research\n• ICS Security - Industrial control systems security\n\nTotal Projects: ${projects.length}`;
          break;
        case 'contact':
          setSection(command);
          response = `Opening ${command} section in web view...\n\nContact Information:\n📧 Email: balaram753.ch@gmail.com\n💼 LinkedIn: linkedin.com/in/chillagundla-balaram-277708314\n🐙 GitHub: github.com/balaram753\n📺 YouTube: youtube.com/@Tech-Cipher-789/videos\n📸 Instagram: instagram.com/tech_cipher789\n📱 Phone: +91 78971237897`;
          break;
        case 'help':
          response = `Available commands:\n• skills - View technical skills\n• about - Learn about me\n• projects - See my projects\n• contact - Get in touch\n• clear - Clear terminal\n• help - Show this help message`;
          break;
        case 'clear':
          setOutput([]);
          setInput('');
          return;
        case 'whoami':
          response = `root`;
          break;
        case 'pwd':
          response = `/home/balar/portfolio`;
          break;
        case 'ls':
          response = `about.txt  contact.txt  projects.txt  skills.txt  README.md`;
          break;
        case 'date':
          response = new Date().toString();
          break;
        default:
          response = `Command not found: ${command}\nType 'help' for available commands.`;
      }
      setOutput([...output, { command, response }]);
      setInput('');
    }
  };

  return (
    <div className="split-container">
      <div className="cli-pane" onClick={() => inputRef.current.focus()}>
        <div className="terminal-output">
          {output.map(({ command, response }, idx) => (
            <div key={idx}>
              <div><Prompt />{command}</div>
              <pre className="response">{response}</pre>
            </div>
          ))}
        </div>
        <div className="terminal-input-line">
          <Prompt />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleCommand}
            spellCheck="false"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            className="terminal-input"
          />
        </div>
      </div>
      <div className="web-pane">
        <WebPane section={section} />
      </div>
    </div>
  );
}

export default App;
