import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";

function importAll(r) {
  return r.keys().map(r);
}

const todoImages = importAll(
  require.context("./assets/images/todo-screens", false, /\.(png|jpe?g|svg)$/),
);
const ecommerceImages = importAll(
  require.context(
    "./assets/images/e-commerce-screens",
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);
const formImages = importAll(
  require.context(
    "./assets/images/formSubmission-screens",
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        {/* Header */}
        <header className="portfolio-header">
          <div className="logo">
            <Link to="/">
              SANDEEP <span className="highlight">C</span>
            </Link>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          {/* Catch-all route for any path, including /Portfolio */}
          <Route
            path="*"
            element={
              <>
                {/* About Section */}
                <section className="hero-section">
                  <div className="hero-text">
                    <h2>Hello, I'm</h2>
                    <h1>Sandeep C</h1>
                    <h3>Reactjs Developer/ Frontend Developer</h3>
                    <p>React JS | Kony | Advanced JavaScript | Redux</p>
                  </div>
                </section>
                {/* Professional Summary & Skills */}
                <section id="skills" className="skills-section">
                  <h2>Professional Summary</h2>
                  <p>
                    Full Stack Engineer with <b>3+ years</b> of experience in
                    designing and developing{" "}
                    <b>scalable, high-performance web applications</b> using{" "}
                    <b>React.js and Node.js</b>. Strong expertise in building{" "}
                    <b>modular, reusable UI components</b>, integrating{" "}
                    <b>RESTful APIs</b>, and optimizing application performance
                    for <b>real-time user interactions</b>.
                    <br />
                    <br />
                    Experienced in delivering{" "}
                    <b>enterprise-grade banking solutions</b> using{" "}
                    <b>Temenos Infinity (Kony)</b>, with{" "}
                    <b>end-to-end ownership</b> of modules including
                    development, integration, testing, and deployment. Adept at
                    translating{" "}
                    <b>
                      business requirements into scalable technical solutions
                    </b>{" "}
                    and building systems that perform reliably under{" "}
                    <b>concurrent user loads</b>.
                  </p>
                  <h3>Skills</h3>
                  <ul className="skills-list">
                    <h3
                      style={{
                        fontFamily: "Franklin Gothic Medium",
                        color: "green",
                      }}
                    >
                      Primary skills
                    </h3>
                    <li>
                      <b>Frontend:</b> React JS, Advanced JavaScript, Redux,
                      HTML, CSS, Hooks, Responsive UI
                    </li>
                    <li>
                      <b>Enterprise UI:</b> Temenos Infinity, Kony Visualizer,
                      Kony Fabric
                    </li>
                    <h3
                      style={{
                        fontFamily: "Franklin Gothic Medium",
                        color: "green",
                      }}
                    >
                      Secondary skills
                    </h3>
                    <li>
                      <b>Styling:</b> CSS Modules, Styled components
                    </li>
                    <li>
                      <b>Database:</b> MongoDB
                    </li>
                    <li>
                      <b>Backend:</b> Node.js, Express.js, API integration
                    </li>
                    <li>
                      <b>Tools:</b> Git, GitLab, Maven, Temenos Infinity (Kony
                      Framework)
                    </li>
                  </ul>
                  <div className="ctc-section" style={{ marginTop: "24px" }}>
                    <div className="ctc-item">
                      Current CTC:<span className="ctc-value">7.02 LPA</span>
                    </div>
                    <div className="ctc-item">
                      Expected CTC:<span className="ctc-value">9 - 12LPA</span>
                    </div>
                  </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="contact-section">
                  <h2>Contact</h2>
                  <p>
                    Email:{" "}
                    <a href="mailto:sandycdeep@gmail.com">
                      sandycdeep@gmail.com
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href="https://linkedin.com/in/sandeep-c-ba1157160/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      sandeep-c-ba1157160
                    </a>
                  </p>
                  <p>Mobile: +91 7305463983</p>
                </section>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="projects-section projects-route">
                <h2>Sample Projects</h2>
                <div className="projects-list">
                  <div className="project-card">
                    <Link to="/projects/todo">
                      Advanced Todo List Application
                    </Link>
                  </div>
                  <div className="project-card">
                    <Link to="/projects/form">Submission Form</Link>
                  </div>
                  <div className="project-card">
                    <Link to="/projects/ecommerce">
                      E-commerce Application (MegaMart)
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/projects/todo"
            element={
              <ProjectPage
                title="Advanced Todo List Application"
                images={todoImages}
                description="A feature-rich todo list app with advanced filtering, editing, and persistence."
                details={
                  <ul>
                    <li>Task creation, editing, deletion</li>
                    <li>Filtering and search</li>
                    <li>Persistent storage</li>
                    <li>Responsive design</li>
                  </ul>
                }
                repository={"https://github.com/Sandusandeep/todolist-mern"}
              />
            }
          />
          <Route
            path="/projects/form"
            element={
              <ProjectPage
                title="Submission Form"
                images={formImages}
                description="A modern form submission app with validation and API integration."
                details={
                  <ul>
                    <li>Field validation and error handling</li>
                    <li>API integration for data submission</li>
                    <li>Real-time feedback and progress</li>
                    <li>Clean, modern design</li>
                  </ul>
                }
                repository={"https://github.com/Sandusandeep/e-form"}
              />
            }
          />
          <Route
            path="/projects/ecommerce"
            element={
              <ProjectPage
                title="E-commerce Application (MegaMart)"
                images={ecommerceImages}
                description="Full-featured e-commerce platform with product catalog, cart, and secure checkout."
                details={
                  <ul>
                    <li>Product catalog with search and filters</li>
                    <li>Shopping cart and checkout flow</li>
                    <li>User authentication and order history</li>
                    <li>Admin dashboard for product management</li>
                  </ul>
                }
                repository={
                  "https://github.com/Sandusandeep/e-commerce-MegaMart"
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
