import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  X,
  Braces,
  Terminal,
  Layers3,
  ExternalLink,
  Phone,
  GraduationCap,
  Award,
  Cpu
} from "lucide-react";

import profile from "./assets/profile.jpg";

const GITHUB = "https://github.com/prathmesh235";

const LINKEDIN =
  "https://www.linkedin.com/in/prathmesh-panmand-aa696b316/";

const EMAIL = "prathmeshpanmand23@gmail.com";

const PHONE = "+91 8378895047";

const projects = [
  {
    title: "AI-Powered Smart Hospital",
    category: "FULL-STACK • AI",
    description:
      "A role-based hospital management system with patient, doctor and admin workflows, REST APIs, MySQL integration and an AI health assistant.",
    stack: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
      "Ollama"
    ],
    link:
      "https://github.com/AI-Hospital-Team/Ai-Powered-Smart-Hospital-Management-System",
    icon: <Server size={24} />
  },

  {
    title: "Quiz App",
    category: "WEB APPLICATION",
    description:
      "A responsive quiz application with dynamic questions, answer validation, score calculation and result display.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    link:
      "https://github.com/prathmesh235/Quiz-app-",
    icon: <Code2 size={24} />
  },

  {
    title: "Spotify Clone",
    category: "FRONTEND",
    description:
      "A frontend practice project recreating the core visual experience of a music streaming interface.",
    stack: [
      "HTML",
      "CSS"
    ],
    link:
      "https://github.com/prathmesh235/Spotify_Clone",
    icon: <Globe2 size={24} />
  },

  {
    title: "Profile Project",
    category: "WEB PROJECT",
    description:
      "A personal profile website project focused on clean presentation and responsive web design.",
    stack: [
      "HTML",
      "CSS"
    ],
    link:
      "https://github.com/prathmesh235/Profile_project",
    icon: <Layers3 size={24} />
  },

  {
    title: "Java Practice",
    category: "JAVA • PROBLEM SOLVING",
    description:
      "A collection of solved Java practice programs used to strengthen programming fundamentals and problem-solving skills.",
    stack: [
      "Java",
      "OOP",
      "Problem Solving"
    ],
    link:
      "https://github.com/prathmesh235/JAVA",
    icon: <Braces size={24} />
  }
];

const skillGroups = [
  {
    label: "LANGUAGES & CORE",

    items: [
      ["Java", "Core programming & OOP"],
      ["JavaScript", "Web fundamentals"],
      ["HTML / CSS", "Responsive UI"],
      ["DSA", "Problem solving"]
    ]
  },

  {
    label: "BACKEND & DATABASE",

    items: [
      ["Spring Boot", "Backend development"],
      ["REST APIs", "API development"],
      ["JDBC", "Database connectivity"],
      ["MySQL", "Relational database"]
    ]
  },

  {
    label: "TOOLS & AI",

    items: [
      ["Git & GitHub", "Version control"],
      ["Postman", "API testing"],
      ["Ollama / Llama", "AI integration"],
      ["VS Code", "Development"]
    ]
  }
];

const certifications = [
  {
    title:
      "Advanced Software Engineering Job Simulation",
    issuer: "Walmart USA • Forage",
    date: "Jul 2026",
    icon: <Award size={22} />
  },

  {
    title: "Agentic AI Starter",
    issuer: "AI Learning Program",
    date: "May 2026",
    icon: <Cpu size={22} />
  },

  {
    title: "Full Stack Developer Workshop",
    issuer: "GUVI — HCL",
    date: "Aug 2025",
    icon: <Code2 size={22} />
  }
];

function App() {
  // false = Light mode by default, true = Dark mode
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme =
      dark ? "dark" : "light";
  }, [dark]);

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setMenuOpen(false);
  };

  return (
    <div className="site">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* ================= NAVBAR ================= */}

      <header className="nav">

        <button
          className="brand"
          onClick={() => go("home")}
        >
          Prathmesh<span>.dev</span>
        </button>

        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >
          {[
            "about",
            "experience",
            "skills",
            "projects",
            "certifications",
            "contact"
          ].map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
            >
              {item[0].toUpperCase() +
                item.slice(1)}
            </button>
          ))}
        </nav>

        <div className="nav-actions">

          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <a
            className="nav-cta"
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            Let's connect
            <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Menu"
          >
            {menuOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

        </div>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-copy">

            <div className="availability">
              <Sparkles size={16} />
              Open to opportunities
            </div>

            <p className="eyebrow">
              BCA-SCIENCE • JAVA • SPRING BOOT
            </p>

            <h1>
              Hi, I'm{" "}
              <span>
                Prathmesh Gavram
                <br />
                Panmand
              </span>
            </h1>

            <h2>
              Java Backend Developer{" "}
              <i>|</i>{" "}
              Full Stack Enthusiast
            </h2>

            <p className="hero-text">
              I build practical web applications
              using Java, Spring Boot and modern
              technologies, with a focus on backend
              development and problem solving.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => go("projects")}
              >
                View Projects
                <ArrowDown size={18} />
              </button>

              <a
                className="secondary-btn"
                href="/Prathmesh_Panmand_Resume.pdf"
                download="Prathmesh_Panmand_Resume.pdf"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

            <div className="social-row">

              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} />
                GitHub
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} />
                LinkedIn
              </a>

              <a href={`mailto:${EMAIL}`}>
                <Mail size={19} />
                Email
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />

            <div className="photo-card">

              <div className="photo-glow" />

              <img
                src={profile}
                alt="Prathmesh Gavram Panmand"
              />

              <div className="floating-card top-card">

                <span>
                  FOCUS
                </span>

                <strong>
                  Java Backend + AI
                </strong>

              </div>

              <div className="floating-card bottom-card">

                <span>
                  BUILDING
                </span>

                <strong>
                  Real-world projects
                </strong>

              </div>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="stats">

          <div>
            <strong>5+</strong>

            <span>
              Featured Projects
            </span>
          </div>

          <div>
            <strong>Java</strong>

            <span>
              Backend Focus
            </span>
          </div>

          <div>
            <strong>2024–27</strong>

            <span>
              BCA Journey
            </span>
          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-heading">

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Curious mind.
              <br />

              <span>
                Backend-focused builder.
              </span>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-copy">

              <p>
                I'm a BCA-Science student at
                Samarth College of Computer
                Science, Belhe, focused on
                Java development and backend
                engineering.
              </p>

              <p>
                I enjoy turning ideas into
                working applications and
                learning by building. My
                current toolkit combines Core
                Java, Spring Boot, MySQL,
                REST APIs and frontend
                fundamentals.
              </p>

              <p>
                I'm continuously improving
                my DSA and exploring practical
                AI integration alongside
                full-stack development.
              </p>

            </div>

            <div className="about-cards">

              <div className="info-card">

                <div className="card-icon">
                  <GraduationCap />
                </div>

                <h3>
                  BCA — Science
                </h3>

                <p>
                  Samarth College of Computer
                  Science, Belhe
                </p>

                <span>
                  2024 — 2027 • SPPU
                </span>

              </div>

              <div className="info-card">

                <div className="card-icon">
                  <Terminal />
                </div>

                <h3>
                  Current Focus
                </h3>

                <p>
                  Java, Spring Boot, MySQL,
                  REST APIs & DSA
                </p>

                <span>
                  Learning by building
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section experience"
        >
          <div className="section-heading">
            <p className="eyebrow">
              EXPERIENCE
            </p>

            <h2>
              Where I'm{" "}
              <span>
                growing.
              </span>
            </h2>

            <p>
              My current professional learning journey in Java Full Stack development.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-card">
              <div className="experience-marker">
                <div className="experience-icon">
                  <Code2 size={24} />
                </div>
              </div>

              <div className="experience-content">
                <div className="experience-meta">
                  <span className="experience-type">
                    INTERNSHIP
                  </span>
                  <span className="experience-date">
                    Oct 2026 – Present · 3 months
                  </span>
                </div>

                <h3>
                  Java Full Stack Intern
                </h3>

                <p className="experience-company">
                  TechnoSignia Software Training Institute
                  <span> · Pune, Maharashtra</span>
                </p>

                <ul>
                  <li>
                    Selected through an interview process; selection confirmed on 8 October 2026.
                  </li>
                  <li>
                    Participating in a three-month Java Full Stack internship.
                  </li>
                  <li>
                    Focus area: Java, backend development, frontend fundamentals and database integration.
                  </li>
                </ul>

                <div className="tags experience-tags">
                  <span>Java</span>
                  <span>Full Stack Development</span>
                  <span>Backend</span>
                  <span>SQL</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              SKILLS
            </p>

            <h2>
              Tools I{" "}
              <span>
                build with.
              </span>
            </h2>

            <p>
              A growing toolkit grounded in
              fundamentals, backend engineering
              and practical application
              development.
            </p>

          </div>

          <div className="skill-grid">

            {skillGroups.map((group) => (

              <div
                className="skill-group"
                key={group.label}
              >

                <h3>
                  {group.label}
                </h3>

                <div className="skill-list">

                  {group.items.map(
                    ([name, desc]) => (

                      <div
                        className="skill-pill"
                        key={name}
                      >

                        <div className="skill-mark">

                          {name === "Java"
                            ? "J"
                            : name
                                .slice(0, 2)
                                .toUpperCase()}

                        </div>

                        <div>

                          <strong>
                            {name}
                          </strong>

                          <small>
                            {desc}
                          </small>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects"
        >

          <div className="section-heading">

            <p className="eyebrow">
              PROJECTS
            </p>

            <h2>
              Things I've{" "}
              <span>
                built.
              </span>
            </h2>

            <p>
              Selected projects from my GitHub,
              with the strongest focus on Java,
              backend development and practical
              web applications.
            </p>

          </div>

          <div className="project-grid">

            {projects.map(
              (project, index) => (

                <article
                  className={`project-card ${
                    index === 0
                      ? "featured"
                      : ""
                  }`}
                  key={project.title}
                >

                  <div className="project-top">

                    <div className="project-icon">
                      {project.icon}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>

                  </div>

                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="tags">

                    {project.stack.map(
                      (tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      )
                    )}

                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                    <ArrowUpRight size={16} />
                  </a>

                </article>

              )
            )}

          </div>

        </section>

        {/* ================= CERTIFICATIONS ================= */}

        <section
          id="certifications"
          className="section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              CERTIFICATIONS
            </p>

            <h2>
              Learning that{" "}
              <span>
                keeps moving.
              </span>
            </h2>

          </div>

          <div className="cert-list">

            {certifications.map(
              (cert) => (

                <div
                  className="cert-card"
                  key={cert.title}
                >

                  <div className="cert-icon">
                    {cert.icon}
                  </div>

                  <div>

                    <h3>
                      {cert.title}
                    </h3>

                    <p>
                      {cert.issuer}
                    </p>

                  </div>

                  <span>
                    {cert.date}
                  </span>

                </div>

              )
            )}

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact"
        >

          <div className="contact-heading">

            <p className="eyebrow">
              CONTACT
            </p>

            <h2>
              Let's build{" "}
              <span>
                something
              </span>
            </h2>

            <p className="contact-intro">
              Got a role, a project, or just want
              to chat tech? My inbox is always open.
            </p>

          </div>

          <div className="contact-links">

            {/* EMAIL */}

            <a
              className="contact-link-card"
              href={`mailto:${EMAIL}`}
            >

              <div className="contact-icon">
                <Mail size={32} />
              </div>

              <div className="contact-card-content">

                <span>
                  EMAIL
                </span>

                <strong>
                  {EMAIL}
                </strong>

              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={25}
              />

            </a>

            {/* LINKEDIN */}

            <a
              className="contact-link-card"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon">
                <Linkedin size={32} />
              </div>

              <div className="contact-card-content">

                <span>
                  LINKEDIN
                </span>

                <strong>
                  linkedin.com/in/
                  prathmesh-panmand-aa696b316
                </strong>

              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={25}
              />

            </a>

            {/* GITHUB */}

            <a
              className="contact-link-card"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >

              <div className="contact-icon">
                <Github size={32} />
              </div>

              <div className="contact-card-content">

                <span>
                  GITHUB
                </span>

                <strong>
                  github.com/prathmesh235
                </strong>

              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={25}
              />

            </a>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © {new Date().getFullYear()}{" "}
         Built by Prathmesh Panmand • Java-minded developer
        </span>

      </footer>

      {/* ================= BACK TO TOP ================= */}

      <button
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

    </div>
  );
}

export default App;