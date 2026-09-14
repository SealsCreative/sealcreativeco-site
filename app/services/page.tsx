import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Thoughtful website design built around your content, audience, and goals. The focus is on creating something that feels like you without making visitors work to understand it.",
    features: [
      "Responsive page layouts",
      "Visual direction",
      "Typography and color systems",
      "User-focused organization",
    ],
  },
  {
    number: "02",
    title: "Front-End Development",
    description:
      "Modern, responsive interfaces that turn a design into a polished experience across desktop, tablet, and mobile.",
    features: [
      "Responsive development",
      "Interactive interfaces",
      "Reusable components",
      "Accessibility-minded development",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Web applications that go beyond presentation by connecting the interface to the systems, data, and functionality behind it.",
    features: [
      "REST API integration",
      "Database functionality",
      "Forms and data handling",
      "Custom application features",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Listen",
    description:
      "We start with the idea, the people behind it, and what the website actually needs to accomplish.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "I organize the content and experience so there is a clear foundation before the details start competing for attention.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Design and development come together as the project begins taking its visual and functional shape.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "The final details are tested and adjusted so the finished experience feels intentional across different screen sizes.",
  },
];

export default function Services() {
  return (
    <>
      <section className="services-page-hero">
        <div className="section-inner services-page-hero-grid">
          <div>
            <p className="eyebrow">Services</p>

            <h1>
              Your idea.
              <br />
              <span>Built with intention.</span>
            </h1>
          </div>

          <div className="services-page-hero-copy">
            <p>
              Whether you need a thoughtful website or something with more
              functionality behind it, I bring design and development together
              to create experiences that feel clear, useful, and distinctly
              yours.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page-intro">
        <div className="section-inner services-page-intro-grid">
          <p className="section-label">What I can help with</p>

          <div>
            <h2>
              Different projects.
              <br />
              Same thoughtful approach.
            </h2>

            <p>
              Every project has different needs. Some begin with a visual idea.
              Others need functionality, organization, or a complete digital
              presence. My job is to figure out what belongs there and build
              around it.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page-list">
        <div className="section-inner">
          {services.map((service) => (
            <article className="services-page-item" key={service.number}>
              <div className="services-page-number">
                <span>{service.number}</span>
              </div>

              <div className="services-page-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              <div className="services-page-features">
                {service.features.map((feature) => (
                  <div key={feature}>
                    <span>+</span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="section-inner">
          <div className="services-process-heading">
            <p className="section-label">How I work</p>

            <h2>
              A process with room
              <span> for people.</span>
            </h2>

            <p>
              Good projects need structure, but they also need conversation.
              The process stays organized without losing sight of the person
              behind the project.
            </p>
          </div>

          <div className="services-process-grid">
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-fit">
        <div className="section-inner services-fit-grid">
          <div className="services-fit-heading">
            <p className="section-label">Who I work with</p>

            <h2>
              Built for people with
              <span> something to share.</span>
            </h2>
          </div>

          <div className="services-fit-content">
            <p>
              I&apos;m especially interested in working with small businesses,
              creators, artists, and people building something they care about.
            </p>

            <p>
              You don&apos;t need to arrive with every detail figured out.
              Sometimes the starting point is a complete plan. Sometimes
              it&apos;s simply, &quot;I know what I want this to become, but I
              don&apos;t know how to build it.&quot;
            </p>

            <div className="services-fit-tags">
              <span>Small Businesses</span>
              <span>Creators</span>
              <span>Artists</span>
              <span>Personal Brands</span>
              <span>Growing Ideas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-why">
        <div className="section-inner services-why-grid">
          <div className="services-why-mark">
            <span>S</span>
            <div></div>
          </div>

          <div>
            <p className="section-label">Why Seal Creative Co.</p>

            <h2>
              Your website should feel like
              <span> it belongs to you.</span>
            </h2>

            <p>
              Templates and trends can be useful starting points, but they
              shouldn&apos;t be the personality of the finished product. I
              want to understand what makes a project different and create
              something that supports that identity instead of covering it up.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page-cta">
        <div className="section-inner services-page-cta-inner">
          <p className="section-label">Have something in mind?</p>

          <h2>
            Tell me what you&apos;re
            <span> thinking about.</span>
          </h2>

          <p>
            You don&apos;t need a finished plan. A conversation is a perfectly
            good place to start.
          </p>

          <div className="services-page-cta-actions">
            <Link href="/contact" className="button button-primary">
              Start a conversation
            </Link>

            <Link href="/projects" className="button button-secondary">
              See my work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}