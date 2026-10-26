
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  const name = "Naweed Khan";
  const role = "Front-End Developer";
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Next.js", "TypeScript", "Git", "RESTful APIs", "Responsive Design", "UI/UX Design"];

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
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>


      <Footer />
    </div>
  );
}

export default App;
