
import { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Next.js", "TypeScript", "Git", "RESTful APIs", "Responsive Design", "UI/UX Design"];
  const filterSkills = (skill) =>
    skill.toLowerCase().includes(search.toLowerCase());
  const uppercaseSkill = (skill) => skill.toUpperCase();

  const filteredSkills = skills.filter(filterSkills);

  const handleReset = () => setSearch("");

  const name = "Naweed Khan";
  const role = "Front-End Developer";

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

  let experience = 1;
  experience = experience + 1;

  return (
    <div className="App" id="home">
      <Navbar />

      <main>
        <h1>Welcome to React Practice</h1>
        <p>My first React practical project.</p>

        <h2>Button clicked: {count} times</h2>

        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>

        <button onClick={() => setCount(0)}>
          Reset Count
        </button>
      </main>

      
      <section id="about" className="about">
        <h2>About Me</h2>

        <p className="about-intro">
          I'm Naweed Khan, a Front-End Developer passionate
          about building modern web applications.
        </p>

        <div className="about-details">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>Experience:</strong> {experience} years
          </p>
        </div>

        <h3>My Skills</h3>

        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{uppercaseSkill(skill)}</li>
          ))}
        </ul>
      </section>


      <section className="skills-explorer" id="skills">
        <h1>Skills Explorer</h1>
        <p>Search the technologies I'm learning.</p>

        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button onClick={handleReset}>Reset Search</button>

        <ul className="skills-list">
          {filteredSkills.map((skill) => (
            <li key={skill}>{uppercaseSkill(skill)}</li>
          ))}
        </ul>

        {filteredSkills.length === 0 && (
          <p>No matching skills found.</p>
        )}
      </section>

      <section className="team-section">
        <h2>Our Team</h2>

        {teamMembers.map((member) => (
          <UserCard
            key={member.id}
            {...member}
          />
        ))}
      </section>

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

      <Footer />
    </div>
  );
}

export default App;
