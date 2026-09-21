
import Link from "next/link";

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
              A home for the websites and applications I build, rebuild, and
              refine. This collection is taking shape as I develop projects
              that demonstrate both the finished experience and the thinking
              behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-intro">
        <div className="section-inner projects-intro-grid">
          <p className="section-label">Work in progress</p>

          <div>
            <h2>
              The work is
              <span> taking shape.</span>
            </h2>

            <p>
              I&apos;m choosing which projects to feature and preparing them
              for a closer look. Some will be new ideas, and others may be
              existing applications that I revisit and improve.
            </p>

            <p>
              As each project is ready, I&apos;ll add the finished work along
              with the decisions, challenges, and development process behind
              it.
            </p>

            <div className="projects-coming-soon-actions">
              <Link href="/about" className="button button-primary">
                Get to know me
              </Link>

              <Link href="/resume" className="projects-link">
                Explore my experience
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
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