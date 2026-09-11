import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-main">
            <p className="eyebrow">Web Design + Development</p>

            <h1>
              Websites with
              <span className="hero-accent"> structure.</span>
              <br />
              Personality included.
            </h1>

            <p className="hero-description">
              I design and build thoughtful, responsive websites that balance
              clean structure with a little something unexpected.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                View my work
              </Link>

              <Link href="/contact" className="button button-secondary">
                Let&apos;s talk
              </Link>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-shape">
              <div className="shape-orbit"></div>
              <div className="shape-core"></div>
            </div>

            <div className="hero-details">
              <div>
                <span>01</span>
                <p>Design</p>
              </div>

              <div>
                <span>02</span>
                <p>Development</p>
              </div>

              <div>
                <span>03</span>
                <p>Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="section-inner statement-grid">
          <p className="section-label">How I work</p>

          <div>
            <h2>
              Clean enough to make sense.
              <br />
              Interesting enough to remember.
            </h2>

            <p className="section-copy">
              Good websites should be easy to use without feeling generic. I
              like clear layouts, purposeful details, strong typography, and
              moments of personality that make a site feel like it belongs to
              the person or business behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="section-inner">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2>Built with intention.</h2>
            </div>

            <Link href="/projects" className="text-link">
              See all projects
            </Link>
          </div>

          <div className="project-grid">
            <article className="project-card project-card-pink">
              <div className="project-visual">
                <span className="project-number">01</span>
                <div className="project-window">
                  <div className="window-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="window-content">
                    <div className="window-line window-line-short"></div>
                    <div className="window-heading"></div>
                    <div className="window-line"></div>
                    <div className="window-line window-line-medium"></div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <p>Demo Concept</p>
                <h3>Creator Platform</h3>
                <span>React · Responsive UI · Front-End Development</span>
              </div>
            </article>

            <article className="project-card project-card-purple">
              <div className="project-visual">
                <span className="project-number">02</span>

                <div className="project-architecture">
                  <div className="architecture-column"></div>
                  <div className="architecture-column"></div>
                  <div className="architecture-column"></div>
                  <div className="architecture-column"></div>
                </div>
              </div>

              <div className="project-info">
                <p>Demo Concept</p>
                <h3>Studio Booking</h3>
                <span>Next.js · UX Design · Application Development</span>
              </div>
            </article>

            <article className="project-card project-card-red">
              <div className="project-visual">
                <span className="project-number">03</span>

                <div className="project-circle">
                  <div></div>
                </div>
              </div>

              <div className="project-info">
                <p>Demo Concept</p>
                <h3>Local Events</h3>
                <span>Full Stack · API Integration · Responsive Design</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-inner">
          <div className="section-heading">
            <div>
              <p className="section-label">What I do</p>
              <h2>From idea to browser.</h2>
            </div>
          </div>

          <div className="services-list">
            <article className="service">
              <span>01</span>
              <h3>Web Design</h3>
              <p>
                Thoughtful layouts and visual systems designed around your
                content, audience, and goals.
              </p>
            </article>

            <article className="service">
              <span>02</span>
              <h3>Front-End Development</h3>
              <p>
                Responsive interfaces built with modern technologies and a
                focus on usability.
              </p>
            </article>

            <article className="service">
              <span>03</span>
              <h3>Full-Stack Development</h3>
              <p>
                Applications that connect polished interfaces with useful,
                functional back-end systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="section-inner about-grid">
          <div className="about-mark">
            <span>S</span>
            <div></div>
          </div>

          <div className="about-content">
            <p className="section-label">A little about me</p>

            <h2>I like things that work well and have something to say.</h2>

            <p>
              I&apos;m a web designer and developer who enjoys bringing
              structure and personality together. My work is grounded in
              usability, but I&apos;m always looking for the detail that makes
              something feel less expected.
            </p>

            <Link href="/about" className="text-link">
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner cta-inner">
          <p className="section-label">Have something in mind?</p>

          <h2>
            Let&apos;s make something
            <span> worth looking at.</span>
          </h2>

          <Link href="/contact" className="button button-primary">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}