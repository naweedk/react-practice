
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div className="footer-brand">
            React<span>Practice.</span>
          </div>

          <p>
            Built with React, curiosity and continuous learning.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "30px" }}>
        © {new Date().getFullYear()} Naweed Khan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
