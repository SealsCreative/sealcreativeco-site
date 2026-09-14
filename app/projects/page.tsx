import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Creator Platform",
    category: "Front-End Development",
    description:
      "A polished platform concept built for creators to showcase content, connect with their audience, and organize their online presence.",
    technologies: ["React", "TypeScript", "Responsive UI"],
    className: "projects-card-red",
  },
  {
    number: "02",
    title: "Studio Booking",
    category: "Application Development",
    description:
      "A scheduling experience designed to make browsing services, choosing availability, and managing bookings straightforward.",
    technologies: ["Next.js", "Forms", "UX Design"],
    className: "projects-card-teal",
  },
  {
    number: "03",
    title: "Local Events",
    category: "Full-Stack Development",
    description:
      "An event-discovery application focused on helping users find interesting things happening around them without unnecessary clutter.",
    technologies: ["REST API", "Node.js", "Database"],
    className: "projects-card-pink",
  },
  {
    number: "04",
    title: "Small Business Website",
    category: "Web Design + Development",
    description:
      "A complete small-business website concept balancing strong branding, clear information, responsive design, and useful calls to action.",
    technologies: ["Next.js", "Responsive Design", "SEO"],
    className: "projects-card-cream",
  },
  {
    number: "05",
    title: "Productivity Dashboard",
    category: "Interactive Web Application",
    description:
      "A personal dashboard for organizing tasks, priorities, and useful information through a clean interface built around everyday usability.",
    technologies: ["React", "Application State", "Data UI"],
    className: "projects-card-charcoal",
  },
];

export default function Projects() {
  return (
    <>
      <section className="projects-hero">
        <div className="section-inner projects-hero-grid">
          <div>
            <p className="eyebrow">Projects</p>

            <h1>
              Ideas made
              <span> usable.</span>
            </h1>
          </div>

          <div className="projects-hero-copy">
            <p>
              A collection of projects exploring thoughtful design, modern web
              development, and the details that turn an idea into an experience.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-intro">
        <div className="section-inner projects-intro-grid">
          <p className="section-label">Selected work</p>

          <div>
            <h2>Five projects. Five different problems to solve.</h2>

            <p>
              Each project is an opportunity to explore a different part of web
              design and development, from polished interfaces and responsive
              layouts to application logic, APIs, and full-stack functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-list">
        <div className="section-inner">
          {projects.map((project) => (
            <article className="projects-item" key={project.number}>
              <div className={`projects-visual ${project.className}`}>
                <span className="projects-number">{project.number}</span>

                <div className="projects-visual-frame">
                  <div className="projects-frame-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="projects-frame-body">
                    <div className="projects-frame-label"></div>
                    <div className="projects-frame-title"></div>
                    <div className="projects-frame-line"></div>
                    <div className="projects-frame-line projects-frame-line-short"></div>

                    <div className="projects-frame-grid">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="projects-content">
                <div className="projects-meta">
                  <span>{project.number}</span>
                  <p>{project.category}</p>
                </div>

                <h2>{project.title}</h2>

                <p className="projects-description">{project.description}</p>

                <div className="projects-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <Link href="#" className="projects-link">
                  View case study
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-philosophy">
        <div className="section-inner projects-philosophy-grid">
          <div>
            <p className="section-label">The point of the work</p>

            <h2>
              Not just something to look at.
              <span> Something to understand.</span>
            </h2>
          </div>

          <div>
            <p>
              My goal with each project is to show more than a finished screen.
              The work should demonstrate the decisions behind it: what problem
              needed solving, how the experience was structured, and how design
              and development worked together.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="section-inner projects-cta-inner">
          <p className="section-label">Have an idea of your own?</p>

          <h2>
            Let&apos;s turn it into
            <span> something real.</span>
          </h2>

          <Link href="/contact" className="button button-primary">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}