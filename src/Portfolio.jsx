
import { useState } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Portfolio({ onLogout }) {
  // Counter State
  const [count, setCount] = useState(0);

  // Skills Search State
  const [search, setSearch] = useState("");

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    message: "",
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Skills Data
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "Git",
    "REST APIs",
    "Responsive Design",
    "UI/UX Design",
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "VSME",
      category: "AI & Automation",
      description:
        "A virtual sales and marketing platform with AI-powered content generation and social media scheduling.",
      stack: "React · FastAPI · OpenAI",
    },
    {
      id: 2,
      title: "Katalyst",
      category: "Web Application",
      description:
        "A digital platform developed for Kotak Life with a focus on user experience and application workflows.",
      stack: "React · JavaScript · MUI",
    },
    {
      id: 3,
      title: "JobsyFi Campus",
      category: "Recruitment Platform",
      description:
        "A platform designed to connect students, recruiters and campus opportunities.",
      stack: "React · Next.js · APIs",
    },
  ];

  // Filter Skills
  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  // Contact Form Change Handler
  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSubmitted(false);
  };

  // Contact Form Submit Handler
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      department: "",
      message: "",
      subscribe: false,
    });
  };

  // Counter Handlers
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="hero-tag">
              FRONTEND DEVELOPER
            </span>

            <h1>
              Building digital
              <span> experiences </span>
              through code.
            </h1>

            <p className="hero-description">
              I'm Naweed Khan, a frontend developer focused on
              building responsive, accessible and user-friendly
              web applications using modern technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <span>→</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>

              <button
                type="button"
                className="btn btn-outline"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>React</h3>
                <p>Frontend</p>
              </div>

              <div>
                <h3>Next.js</h3>
                <p>Framework</p>
              </div>

              <div>
                <h3>UI/UX</h3>
                <p>Design Focus</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-avatar">NK</div>

              <span className="availability">
                <span className="availability-dot"></span>
                Learning & Building
              </span>

              <h2>Naweed Khan</h2>
              <p>Frontend Developer</p>

              <div className="hero-card-divider"></div>

              <div className="hero-card-info">
                <span>Location</span>
                <strong>Mumbai, India</strong>
              </div>

              <div className="hero-card-info">
                <span>Primary Stack</span>
                <strong>React · JavaScript</strong>
              </div>
            </div>

            <div className="floating-tag tag-one">
              React.js
            </div>

            <div className="floating-tag tag-two">
              TypeScript
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-tag">INTRODUCTION</span>
            <h2>About Me</h2>
            <p>
              A little about my background, interests and
              development journey.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <h3>
                Turning ideas into functional digital products.
              </h3>

              <p>
                I'm a frontend developer interested in building
                modern web applications with clean interfaces
                and maintainable code.
              </p>

              <p>
                My development journey involves working with
                React, JavaScript, TypeScript and Next.js.
                I enjoy learning new technologies, solving
                problems and improving application experiences.
              </p>

              <a href="#contact" className="text-link">
                Let's work together →
              </a>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span>NAME</span>
                <strong>Naweed Khan</strong>
              </div>

              <div className="detail-card">
                <span>ROLE</span>
                <strong>Frontend Developer</strong>
              </div>

              <div className="detail-card">
                <span>LOCATION</span>
                <strong>Mumbai, India</strong>
              </div>

              <div className="detail-card">
                <span>FOCUS</span>
                <strong>Web Development</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-tag">TECHNICAL EXPERTISE</span>
            <h2>Skills & Technologies</h2>
            <p>
              Technologies and tools I use and continue to explore.
            </p>
          </div>

          <div className="skills-container">
            <div className="skills-search">
              <input
                type="text"
                placeholder="Search a technology..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button onClick={() => setSearch("")}>
                  Clear
                </button>
              )}
            </div>

            <div className="skills-list">
              {filteredSkills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-icon">
                    {skill === "React"
                      ? "R"
                      : skill === "JavaScript"
                      ? "JS"
                      : skill === "TypeScript"
                      ? "TS"
                      : skill === "Node.js"
                      ? "N"
                      : "◆"}
                  </span>

                  <span>{skill}</span>
                </div>
              ))}

              {filteredSkills.length === 0 && (
                <p className="empty-state">
                  No matching technologies found.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* DASHBOARD SECTION */}
        <section
          className="section dashboard-section"
          id="dashboard"
        >
          <div className="section-heading">
            <span className="section-tag">PRACTICAL LEARNING</span>
            <h2>React Dashboard</h2>
            <p>
              Interactive components built using React state
              and event handling.
            </p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card counter-card">
              <div className="dashboard-card-top">
                <span className="dashboard-icon">01</span>
                <span className="card-label">USESTATE</span>
              </div>

              <h3>Interactive Counter</h3>
              <p>Update component state with button events.</p>

              <div className="counter-display">
                {count}
              </div>

              <div className="counter-actions">
                <button onClick={handleDecrease}>−</button>
                <button onClick={handleIncrease}>+</button>
                <button
                  className="reset-button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-top">
                <span className="dashboard-icon">02</span>
                <span className="card-label">PROJECTS</span>
              </div>

              <h3>Projects Built</h3>
              <div className="dashboard-number">
                {projects.length.toString().padStart(2, "0")}
              </div>
              <p>
                Practical web applications and development projects.
              </p>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-top">
                <span className="dashboard-icon">03</span>
                <span className="card-label">TECH STACK</span>
              </div>

              <h3>Technologies</h3>
              <div className="dashboard-number">
                {skills.length}
              </div>
              <p>
                Technologies and tools included in my learning stack.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-tag">SELECTED WORK</span>
            <h2>Featured Projects</h2>
            <p>
              Some of the applications and platforms I've worked on.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-number">
                  0{project.id}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="contact-layout">
            <div className="contact-content">
              <span className="section-tag">GET IN TOUCH</span>

              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <p>
                Whether it's an opportunity, collaboration or
                a development project, send me a message.
              </p>

              <div className="contact-note">
                <span className="contact-note-icon">✉</span>

                <div>
                  <strong>Let's connect</strong>
                  <p>I'll be glad to hear from you.</p>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <form
                className="contact-form"
                onSubmit={handleFormSubmit}
              >
                <div className="form-field">
                  <label htmlFor="contact-name">
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="department">
                    Department
                  </label>

                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="" disabled>
                      Select a department
                    </option>
                    <option value="IT">IT</option>
                    <option value="HR">Human Resources</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <label className="subscribe-option">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleFormChange}
                  />

                  <span>
                    Keep me updated with occasional news.
                  </span>
                </label>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send Message <span>→</span>
                </button>

                {submitted && (
                  <p className="success-message" role="status">
                    Your form was submitted successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
