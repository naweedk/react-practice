
import { useState } from "react";
import "./App.css";

import UserCard from "./UserCard";
import Card from "./Card";
import ActionButton from "./ActionButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // Skills Search State
  const [search, setSearch] = useState("");

  // Live Name Input State
  const [userName, setUserName] = useState("");

  // Profile Toggle State
  const [showDetails, setShowDetails] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    department: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Skills Data
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "Git",
    "RESTful APIs",
    "Responsive Design",
    "UI/UX Design",
  ];

  // Team Data
  const teamMembers = [
    {
      id: 1,
      name: "Naweed Khan",
      role: "Frontend Developer",
      experience: 3,
      city: "Mumbai",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Backend Developer",
      experience: 3,
      city: "Pune",
    },
    {
      id: 3,
      name: "Aman Verma",
      role: "Full Stack Developer",
      experience: 2,
      city: "Bangalore",
    },
  ];

  // About Data
  const name = "Naweed Khan";
  const role = "Front-End Developer";

  // Skills Functions
  const filterSkills = (skill) =>
    skill.toLowerCase().includes(search.toLowerCase());

  const uppercaseSkill = (skill) => skill.toUpperCase();

  const filteredSkills = skills.filter(filterSkills);

  const handleResetSearch = () => {
    setSearch("");
  };

  // Task 1: Counter Event Handlers
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleCounterReset = () => {
    setCount(0);
  };

  // Task 2: Live Name Input
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  // Task 3: Toggle Profile Details
  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  // Task 4: Contact Form Input Handler
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  // Task 4: Contact Form Submit Handler
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Form Submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
      department: "",
    });
  };

  // Task 5: Reusable Button Handlers
  const handleSave = () => {
    alert("Profile Saved Successfully!");
  };

  const handleDelete = () => {
    alert("Profile Deleted!");
  };

  return (
    <div className="App" id="home">
      <Navbar />

      {/* Hero Section */}
      <main>
        <h1>Welcome to React Practice</h1>
        <p>Learning React through practical projects.</p>
      </main>

      {/* Task 1: Counter */}
      <section className="counter-section">
        <h2>Counter Application</h2>

        <h1>{count}</h1>

        <div className="button-group">
          <button onClick={handleIncrease}>
            Increase
          </button>

          <button onClick={handleDecrease}>
            Decrease
          </button>

          <button onClick={handleCounterReset}>
            Reset
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p className="about-intro">
          I'm Naweed Khan, a Front-End Developer passionate
          about building modern web applications.
        </p>

        <div className="about-details">
          <p>
            <strong>Name:</strong>
            {name}
          </p>

          <p>
            <strong>Role:</strong>
            {role}
          </p>
        </div>

        <h3>My Skills</h3>

        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>
              {uppercaseSkill(skill)}
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Explorer */}
      <section className="skills-explorer" id="skills">
        <h2>Skills Explorer</h2>

        <p>Search the technologies I'm learning.</p>

        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button onClick={handleResetSearch}>
          Reset Search
        </button>

        <ul className="skills-list">
          {filteredSkills.map((skill) => (
            <li key={skill}>
              {uppercaseSkill(skill)}
            </li>
          ))}
        </ul>

        {filteredSkills.length === 0 && (
          <p>No matching skills found.</p>
        )}
      </section>

      {/* Task 2: Live Name Input */}
      <section className="name-section">
        <h2>Live Name Preview</h2>

        <input
          type="text"
          placeholder="Enter your name..."
          value={userName}
          onChange={handleNameChange}
        />

        <h3>Hello, {userName.trim() || "Guest"}!</h3>
      </section>

      {/* Task 3: Toggle Profile Details */}
      <section className="profile-section">
        <h2>My Profile</h2>

        <button onClick={handleToggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="profile-details">
            <p>Name: Naweed Khan</p>
            <p>Role: Frontend Developer</p>
            <p>Location: Mumbai</p>
            <p>Skills: React, JavaScript, Next.js</p>
          </div>
        )}
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>

        {teamMembers.map((member) => (
          <UserCard
            key={member.id}
            {...member}
          />
        ))}
      </section>

      {/* Dashboard Cards */}
      <section className="cards-section">
        <h2>My Dashboard</h2>

        <div className="cards-container">
          <Card title="About Me">
            <p>Name: Naweed Khan</p>
            <p>Role: Frontend Developer</p>
            <p>Location: Mumbai</p>
          </Card>

          <Card title="My Skills">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </Card>

          <Card title="My Projects">
            <p>VSME - Virtual Sales & Marketing</p>
            <p>Katalyst - Kotak Life Management</p>
            <p>JobsyFi Campus</p>
          </Card>
        </div>
      </section>

      
{/* Contact Form */}
<section className="contact-section" id="contact">
  <div className="contact-header">
    <span className="contact-tag">GET IN TOUCH</span>
    <h2>Contact Me</h2>
    <p>
      Have a project or opportunity in mind?
      Feel free to send me a message.
    </p>
  </div>

  <form className="contact-form" onSubmit={handleFormSubmit}>
    {/* Name */}
    <div className="form-field">
      <label htmlFor="contact-name">Full Name</label>
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

    {/* Email */}
    <div className="form-field">
      <label htmlFor="contact-email">Email Address</label>
      <input
        id="contact-email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleFormChange}
        required
      />
    </div>

    {/* Department Select */}
    <div className="form-field">
      <label htmlFor="department">Department</label>
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
      </select>
    </div>

    {/* Message */}
    <div className="form-field">
      <label htmlFor="contact-message">Your Message</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleFormChange}
        rows={5}
        required
      />
    </div>

    {/* Submit */}
    <button type="submit" className="contact-submit">
      Submit Message
      <span aria-hidden="true"> →</span>
    </button>
  </form>

  {submitted && (
    <p className="success-message" role="status">
      Your message has been submitted successfully!
    </p>
  )}
</section>


      {/* Task 5: Reusable Action Buttons */}
      <section className="actions-section">
        <h2>Profile Actions</h2>

        <ActionButton
          label="Save Profile"
          onClick={handleSave}
        />

        <ActionButton
          label="Delete Profile"
          onClick={handleDelete}
        />
      </section>

      <Footer />
    </div>
  );
}

export default App;
