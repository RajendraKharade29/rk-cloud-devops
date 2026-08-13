import "./App.css";

function App() {
  
  const whatsappNumber = "918380885940";

const handleEnquiry = (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const service = form.service.value;
  const requirement = form.requirement.value;

  const message = `Hello RK Cloud & DevOps Solutions,

I would like to enquire about your IT services.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Requirement:
${requirement}

Please contact me regarding this requirement.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <div>
      {/* Navbar */}
      {/* Navbar */}
<nav className="navbar">

  <div className="logo">
    RK Cloud & DevOps
  </div>

  <button
    className="menu-btn"
    onClick={() => {
      document
        .querySelector(".nav-links")
        .classList.toggle("mobile-open");
    }}
  >
    ☰
  </button>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#projects">Projects</a>
    <a href="#pricing">Pricing</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>

</nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">Linux • DevOps • Cloud • Websites</p>

          <h1>
            Reliable IT Solutions
            <br />
            for Your Business
          </h1>

          <p className="hero-description">
            Professional Linux Administration, DevOps, AWS Cloud,
            Docker and Website Development services.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Get Free Consultation
            </a>

            <a href="#services" className="btn secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
<section id="services" className="services-section">
  <div className="section-heading">
    <p className="section-tag">WHAT WE DO</p>

    <h2>Our IT Services</h2>

    <p>
      Reliable technology solutions to help your business
      run smoothly and grow faster.
    </p>
  </div>

  <div className="services-grid">

    {/* Linux */}
    <div className="service-card">
      <div className="service-icon">🐧</div>

      <h3>Linux Administration</h3>

      <p>
        Linux server setup, monitoring, troubleshooting,
        security and daily server management.
      </p>

      <a href="#contact">Get Quote →</a>
    </div>

    {/* DevOps */}
    <div className="service-card">
      <div className="service-icon">⚙️</div>

      <h3>DevOps & Docker</h3>

      <p>
        Docker containerization, Git, GitHub Actions,
        CI/CD pipelines and application deployment.
      </p>

      <a href="#contact">Get Quote →</a>
    </div>

    {/* AWS */}
    <div className="service-card">
      <div className="service-icon">☁️</div>

      <h3>AWS Cloud</h3>

      <p>
        AWS EC2 setup, cloud deployment, server configuration
        and basic cloud infrastructure support.
      </p>

      <a href="#contact">Get Quote →</a>
    </div>

    {/* Website */}
    <div className="service-card">
      <div className="service-icon">🌐</div>

      <h3>Website Development</h3>

      <p>
        Professional business websites with responsive design,
        WhatsApp integration and deployment.
      </p>

      <a href="#contact">Get Quote →</a>
    </div>

  </div>
</section>

{/* Why Choose Us */}
<section className="why-section">
  <div className="why-content">

    <div className="why-text">
      <p className="section-tag">WHY CHOOSE US</p>

      <h2>Technology Solutions You Can Rely On</h2>

      <p>
        We help small businesses and startups with reliable
        Linux, DevOps, Cloud and Website solutions.
      </p>

      <div className="why-points">
        <div>
          <span>✓</span>
          <strong>Reliable Support</strong>
          <p>Quick and practical technical assistance.</p>
        </div>

        <div>
          <span>✓</span>
          <strong>Cost Effective</strong>
          <p>Professional solutions at reasonable prices.</p>
        </div>

        <div>
          <span>✓</span>
          <strong>Business Focused</strong>
          <p>Solutions designed around your business needs.</p>
        </div>

        <div>
          <span>✓</span>
          <strong>Modern Technology</strong>
          <p>Using modern Cloud, DevOps and web technologies.</p>
        </div>
      </div>
    </div>

    <div className="stats-box">

      <div className="stat">
        <h3>4+</h3>
        <p>Core IT Services</p>
      </div>

      <div className="stat">
        <h3>24/7</h3>
        <p>Support Availability</p>
      </div>

      <div className="stat">
        <h3>100%</h3>
        <p>Client Focused</p>
      </div>

      <div className="stat">
        <h3>₹</h3>
        <p>Affordable Solutions</p>
      </div>

    </div>

  </div>
</section>
{/* Projects */}
<section id="projects" className="projects-section">

  <div className="section-heading">
    <p className="section-tag">OUR PROJECTS</p>

    <h2>Projects & Practical Work</h2>

    <p>
      Hands-on projects demonstrating our Cloud, DevOps,
      Linux and deployment capabilities.
    </p>
  </div>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">

      <div className="project-icon">🐳</div>

      <div className="project-content">
        <span className="project-label">DEVOPS PROJECT</span>

        <h3>Dockerized Web Application</h3>

        <p>
          Containerized a web application using Docker
          with application deployment and configuration.
        </p>

        <div className="tech-tags">
          <span>Docker</span>
          <span>Node.js</span>
          <span>Linux</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>
      </div>

    </div>

    {/* Project 2 */}
    <div className="project-card">

      <div className="project-icon">☁️</div>

      <div className="project-content">
        <span className="project-label">CLOUD PROJECT</span>

        <h3>AWS EC2 Deployment</h3>

        <p>
          Deployed a web application on AWS EC2 with
          Linux server configuration and application setup.
        </p>

        <div className="tech-tags">
          <span>AWS</span>
          <span>EC2</span>
          <span>Linux</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>
      </div>

    </div>

    {/* Project 3 */}
    <div className="project-card">

      <div className="project-icon">⚙️</div>

      <div className="project-content">
        <span className="project-label">CI/CD PROJECT</span>

        <h3>GitHub Actions CI/CD</h3>

        <p>
          Created a basic CI/CD pipeline using GitHub Actions
          for automated application deployment.
        </p>

        <div className="tech-tags">
          <span>GitHub</span>
          <span>Actions</span>
          <span>CI/CD</span>
        </div>

        <a href="#" className="project-link">
          View Project →
        </a>
      </div>

    </div>

  </div>

</section>
{/* Pricing */}
<section id="pricing" className="pricing-section">

  <div className="section-heading">
    <p className="section-tag">SIMPLE PRICING</p>

    <h2>Choose the Right Service</h2>

    <p>
      Affordable IT solutions for small businesses,
      startups and individual requirements.
    </p>
  </div>

  <div className="pricing-grid">

    {/* Website */}
    <div className="pricing-card">
      <div className="pricing-icon">🌐</div>

      <h3>Business Website</h3>

      <p className="price">
        ₹2,999<span>+</span>
      </p>

      <p className="price-description">
        Professional website for your business.
      </p>

      <ul>
        <li>✓ 4–5 Website Pages</li>
        <li>✓ Mobile Responsive</li>
        <li>✓ WhatsApp Integration</li>
        <li>✓ Call Button</li>
        <li>✓ Basic Deployment</li>
      </ul>

      <a href="#contact" className="pricing-btn">
        Get Started
      </a>
    </div>


    {/* Linux */}
    <div className="pricing-card featured">

      <div className="popular-badge">
        POPULAR
      </div>

      <div className="pricing-icon">🐧</div>

      <h3>Linux Server Support</h3>

      <p className="price">
        ₹1,999<span>+</span>
      </p>

      <p className="price-description">
        Linux server setup and troubleshooting.
      </p>

      <ul>
        <li>✓ Linux Configuration</li>
        <li>✓ Server Health Check</li>
        <li>✓ User & Permission Setup</li>
        <li>✓ Basic Troubleshooting</li>
        <li>✓ Server Support</li>
      </ul>

      <a href="#contact" className="pricing-btn">
        Get Started
      </a>
    </div>


    {/* DevOps */}
    <div className="pricing-card">

      <div className="pricing-icon">⚙️</div>

      <h3>DevOps Deployment</h3>

      <p className="price">
        ₹2,499<span>+</span>
      </p>

      <p className="price-description">
        Application deployment using modern DevOps tools.
      </p>

      <ul>
        <li>✓ Docker Setup</li>
        <li>✓ Git & GitHub</li>
        <li>✓ CI/CD Setup</li>
        <li>✓ Application Deployment</li>
        <li>✓ Basic Documentation</li>
      </ul>

      <a href="#contact" className="pricing-btn">
        Get Started
      </a>
    </div>

  </div>

  <p className="pricing-note">
    * Final pricing depends on project requirements and scope.
  </p>

</section>
{/* About */}
<section id="about" className="about-section">

  <div className="about-content">

    <div className="about-text">
      <p className="section-tag">ABOUT US</p>

      <h2>Practical IT Solutions for Growing Businesses</h2>

      <p>
        RK Cloud & DevOps Solutions provides practical and
        affordable technology services for small businesses,
        startups and individuals.
      </p>

      <p>
        Our focus is on Linux Administration, DevOps, Docker,
        AWS Cloud and professional Website Development.
      </p>

      <div className="about-highlights">
        <div>✓ Professional Support</div>
        <div>✓ Affordable Solutions</div>
        <div>✓ Modern Technologies</div>
        <div>✓ Business Focused Approach</div>
      </div>
    </div>

    <div className="about-card">

      <div className="about-card-icon">💻</div>

      <h3>Need IT Support?</h3>

      <p>
        Tell us about your requirement and
        let's find the right solution for you.
      </p>

      <a href="#contact" className="btn primary">
        Get Free Consultation
      </a>

    </div>

  </div>

</section>


{/* Contact */}
<section id="contact" className="contact-section">

  <div className="section-heading">

    <p className="section-tag">GET IN TOUCH</p>

    <h2>Let's Work Together</h2>

    <p>
      Have a project or technical requirement?
      Contact us for a free consultation.
    </p>

  </div>

  <div className="contact-container">

    <div className="contact-info">

      <h3>Contact Information</h3>

      <div className="contact-item">
        <span>📱</span>
        <div>
          <strong>Phone / WhatsApp</strong>
          <p>+91 XXXXXXXXXX</p>
        </div>
      </div>

      <div className="contact-item">
        <span>📧</span>
        <div>
          <strong>Email</strong>
          <p>yourmail@example.com</p>
        </div>
      </div>

      <div className="contact-item">
        <span>📍</span>
        <div>
          <strong>Location</strong>
          <p>Pune, Maharashtra, India</p>
        </div>
      </div>

    </div>


    <div className="contact-form">

      <form onSubmit={handleEnquiry}>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
  />

  <select name="service" required>
    <option value="">Select a Service</option>

    <option value="Linux Administration">
      Linux Administration
    </option>

    <option value="DevOps & Docker">
      DevOps & Docker
    </option>

    <option value="AWS Cloud">
      AWS Cloud
    </option>

    <option value="Website Development">
      Website Development
    </option>
  </select>

  <textarea
    name="requirement"
    rows="5"
    placeholder="Tell us about your requirement..."
    required
  ></textarea>

  <button type="submit" className="contact-btn">
    Send Enquiry on WhatsApp
  </button>

</form>

    </div>

  </div>

</section>

{/* Quick Contact Buttons */}
<section className="quick-contact">

  <div className="quick-contact-content">

    <div>
      <p className="section-tag">READY TO START?</p>

      <h2>Let's Discuss Your Requirement</h2>

      <p>
        Contact us today for a free consultation.
      </p>
    </div>

    <div className="quick-buttons">

      <a
        href="tel:+91XXXXXXXXXX"
        className="quick-btn call-btn"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="quick-btn whatsapp-btn"
      >
        💬 WhatsApp Us
      </a>

    </div>

  </div>

</section>


{/* Footer */}
<footer className="footer">

  <div className="footer-container">

    <div className="footer-brand">

      <h3>RK Cloud & DevOps</h3>

      <p>
        Linux • DevOps • Cloud • Websites
      </p>

      <p>
        Reliable IT solutions for small businesses,
        startups and individuals.
      </p>

    </div>


    <div className="footer-links">

      <h4>Quick Links</h4>

      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

    </div>


    <div className="footer-services">

      <h4>Services</h4>

      <p>Linux Administration</p>
      <p>DevOps & Docker</p>
      <p>AWS Cloud</p>
      <p>Website Development</p>

    </div>


    <div className="footer-contact">

      <h4>Contact</h4>

      <p>📞 +91 XXXXXXXXXX</p>
      <p>📧 yourmail@example.com</p>
      <p>📍 Pune, Maharashtra, India</p>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 RK Cloud & DevOps Solutions. All rights reserved.
    </p>

  </div>

</footer>

{/* Floating Contact Buttons */}

<div className="floating-buttons">

  <a
    href="tel:+918380885940"
    className="floating-call"
    aria-label="Call us"
  >
    📞
  </a>

  <a
    href="https://wa.me/918380885940"
    target="_blank"
    rel="noreferrer"
    className="floating-whatsapp"
    aria-label="WhatsApp us"
  >
    💬
  </a>

</div>

    </div>
  );
}

export default App;