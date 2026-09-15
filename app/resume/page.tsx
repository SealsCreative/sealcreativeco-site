const skills = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Git / GitHub",
  "Responsive Web Design",
  "Full-Stack MERN",
  "CRUD Development",
  "Component-Based UI",
  "API Integration",
  "JSON",
  "Debugging + Testing",
  "VS Code",
  "NPM",
];

export default function Resume() {
  return (
    <>
      <section className="resume-hero">
        <div className="section-inner resume-hero-grid">
          <div>
            <p className="eyebrow">Resume</p>

            <h1>
              Developer.
              <br />
              Problem solver.
              <br />
              <span>People person.</span>
            </h1>
          </div>

          <div className="resume-hero-copy">
            <p>
              I bring together web development, creative problem-solving, and
              professional experience built around organization, communication,
              and helping people.
            </p>

            <a href="#resume-download" className="button button-primary">
              Download resume
            </a>
          </div>
        </div>
      </section>

      <section className="resume-overview">
        <div className="section-inner resume-overview-grid">
          <p className="section-label">Professional profile</p>

          <div>
            <h2>
              Technical skills backed by
              <span> real-world experience.</span>
            </h2>

            <p>
              I&apos;m a Web Development graduate with experience building
              full-stack web applications using modern JavaScript technologies,
              responsive interfaces, REST APIs, and back-end services.
            </p>

            <p>
              My professional background in administration and healthcare has
              also given me experience working with detailed information,
              documentation, communication, and systems where accuracy matters.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-experience">
        <div className="section-inner">
          <div className="resume-section-heading">
            <p className="section-label">Experience</p>

            <h2>A career built around people and information.</h2>
          </div>

          <div className="resume-timeline">
            <article className="resume-timeline-item">
              <div className="resume-timeline-date">
                <span>2025</span>
                <p>Present</p>
              </div>

              <div className="resume-timeline-content">
                <p className="resume-type">Professional Experience</p>
                <h3>Administrative Assistant</h3>
                <p className="resume-organization">
                  Troup County School System · LaGrange, GA
                </p>

                <p>
                  Maintain confidential datasets supporting more than 1,400
                  students and 100 staff members while coordinating records,
                  scheduling information, policy communication, and daily
                  administrative workflows.
                </p>
              </div>
            </article>

            <article className="resume-timeline-item">
              <div className="resume-timeline-date">
                <span>2020</span>
                <p>2023</p>
              </div>

              <div className="resume-timeline-content">
                <p className="resume-type">Professional Experience</p>
                <h3>Registered Medical Assistant</h3>
                <p className="resume-organization">Multiple States</p>

                <p>
                  Managed patient information and electronic medical records
                  while coordinating communication and follow-up workflows
                  between patients and healthcare providers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="resume-development">
        <div className="section-inner resume-development-grid">
          <div className="resume-development-heading">
            <p className="section-label">Development experience</p>

            <h2>
              From coursework
              <span> to working applications.</span>
            </h2>
          </div>

          <div className="resume-project">
            <div className="resume-project-meta">
              <span>2025 — 2026</span>
              <p>Full-Stack Development</p>
            </div>

            <h3>Full-Stack Band Website</h3>

            <p>
              Built a MERN web application for managing band media galleries,
              events, and booking requests.
            </p>

            <div className="resume-project-details">
              <div>
                <span>01</span>
                <p>Developed responsive React front-end components.</p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Created RESTful API endpoints using Node.js and Express.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Used MongoDB to support application data and CRUD
                  functionality.
                </p>
              </div>

              <div>
                <span>04</span>
                <p>
                  Used Git version control and modular project architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-skills">
        <div className="section-inner">
          <div className="resume-skills-heading">
            <p className="section-label">Technical toolkit</p>

            <h2>
              Things I know.
              <span> Things I use.</span>
            </h2>
          </div>

          <div className="resume-skills-grid">
            {skills.map((skill, index) => (
              <div key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-education">
        <div className="section-inner resume-education-grid">
          <div>
            <p className="section-label">Education</p>

            <h2>
              Learning how to
              <span> build the ideas.</span>
            </h2>
          </div>

          <div className="resume-education-list">
            <article>
              <span>2026</span>
              <div>
                <h3>Bachelor of Science in Web Development</h3>
                <p>Full Sail University · Winter Park, FL</p>
                <p>April 2026</p>
              </div>
            </article>

            <article>
              <span>2020</span>
              <div>
                <h3>Medical Assistant Program</h3>
                <p>Wichita Technical Institute · Wichita, KS</p>
                <p>
                  Honor Roll ×3 · Letter of Excellence ×3
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="resume-download" id="resume-download">
        <div className="section-inner resume-download-inner">
          <p className="section-label">The traditional version</p>

          <h2>
            Need the
            <span> one-page version?</span>
          </h2>

          <p>
            Download a copy of my resume for the complete professional
            overview.
          </p>

          <button className="button button-primary" type="button">
            Download resume
          </button>
        </div>
      </section>
    </>
  );
}