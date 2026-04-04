import "./App.css";

function App() {
  return (
   <>
      <header className="navbar">
      <h2 className="logo">Gelo</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </header>

      <section id="home" className="hero">
      <div className="hero-text">

        <p>Hello, I am</p>
        <h1>Rob Angelo Catunao</h1>
        <h3>BSIT Student | UI/UX Designer | Frontend Learner</h3>

        <p>
           I create simple and meaningful websites. I enjoy designing clean
           and basic interfaces and building projects that are easy to use and understand.
        </p>

        <div className="buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn outline">Contact Me</a>
        </div>
        </div>

        <div className="hero-img">
        <img src="/profile.jpg" alt="profile" />
        </div>
      </section>



      <section id="about" className="about">
      <div className="about-box">
      <h2>About Me</h2>

        <p>
          I am an IT student who is passionate about UI/UX design and frontend
          development. I like creating simple but presentable projects that
          combine design and functionality.
        </p>

        <p>
          I focus on making clean layouts, organizing content properly, and
          improving user experience in every project I build.
      </p>
      </div>
      </section>



      <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-container">
      <div className="skill-card">HTML</div>
      <div className="skill-card">CSS</div>
      <div className="skill-card">JavaScript</div>
      <div className="skill-card">React</div>
      <div className="skill-card">UI/UX Design</div>
      <div className="skill-card">Figma</div>
      </div>
      </section>



      <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-list">
      <div className="card">
      <h3>Commnect Barangay</h3>

      <p> 
        A group project that focuses on creating a barangay website that helps share announcements, events, and
        services in a simple and accessible way.
      </p>
      </div>

      <div className="card">
      <h3>Portfolio Website</h3>

      <p>
        I created a personal website that showcases my skills, projects, and
        background using a clean and simple design.
      </p>
      </div>

      <div className="card">
      <h3>UI/UX Design</h3>

      <p>
        A collection of interface designs focused on clarity, simplicity,
        and user-friendly layouts.
      </p>
      </div>
     </div>
     </section>



    <section id="contact" className="contact">
    <div className="contact-box">
    <h2>Contact Me</h2>

    <p>You can reach me through the following:</p>

    <div className="contact-links">
    <a href="mailto:robskiegelo@gmail.com">robskiegelo@gmail.com</a>
    <a href="https://github.com/robangelolang">GitHub</a>
    </div>
    </div>
    </section>

    <footer className="footer">
    <p>© 2026 Rob Angelo Catunao</p>
    </footer>
    </>
  );
}

export default App;