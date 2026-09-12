import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="section-inner about-hero-grid">
          <div>
            <p className="eyebrow">About me</p>

            <h1>
              My path to the web
              <span> started with a story.</span>
            </h1>
          </div>

          <div className="about-hero-intro">
            <p>
              I&apos;m a web designer and developer who believes creativity,
              technology, and helping people don&apos;t have to live in
              separate worlds.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="section-inner about-story-grid">
          <div className="about-story-marker">
            <span>01</span>
            <p>The beginning</p>
          </div>

          <div className="about-story-content">
            <h2>It didn&apos;t start with code.</h2>

            <p>
              When my son was born, I started a mommy blog where I shared
              recipes, crafts, and some of the different things I was trying
              along the way.
            </p>

            <p>
              What I discovered was how much I enjoyed having a space that was
              completely my own. I could experiment, create, share what
              interested me, and put a little piece of myself out into the
              world.
            </p>

            <p>
              That creative control stuck with me long after the blog itself.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story about-story-alt">
        <div className="section-inner about-story-grid">
          <div className="about-story-marker">
            <span>02</span>
            <p>The turning point</p>
          </div>

          <div className="about-story-content">
            <h2>Creativity became something bigger.</h2>

            <p>
              Over the years, I started thinking about how I could turn that
              love of creating into something more. I wanted a career that
              could combine creativity with another thing that matters deeply
              to me: helping people.
            </p>

            <p>
              I also had a bigger goal in mind. I wanted to build toward
              working for myself, creating something of my own, and helping
              other people bring their ideas to life online.
            </p>

            <p>
              So I decided to learn how to build the things I once could only
              imagine.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="section-inner about-story-grid">
          <div className="about-story-marker">
            <span>03</span>
            <p>Today</p>
          </div>

          <div className="about-story-content">
            <h2>Now I build for the web.</h2>

            <p>
              Earning my degree in Web Development gave me the technical
              foundation to pair with the creative instincts that brought me
              here in the first place.
            </p>

            <p>
              Today, I&apos;m interested in the space where design and
              development meet: taking an idea, understanding the person
              behind it, giving it structure, and turning it into something
              useful and memorable.
            </p>

            <p>
              I care about how a website works, but I also care about what it
              says about the people behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="section-inner">
          <p className="section-label">What matters to me</p>

          <div className="about-philosophy-heading">
            <h2>
              Good work starts with
              <span> paying attention.</span>
            </h2>
          </div>

          <div className="about-values">
            <article>
              <span>01</span>
              <h3>Listen first.</h3>
              <p>
                Everyone has a story. Understanding the person, business, and
                goal behind a project comes before deciding what it should
                look like.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Give ideas structure.</h3>
              <p>
                Creativity works best when there&apos;s a strong foundation.
                Clear organization and thoughtful design make the interesting
                parts more meaningful.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Leave room for personality.</h3>
              <p>
                Functional doesn&apos;t have to mean forgettable. The details
                that make something feel human are often the details people
                remember.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-personal">
        <div className="section-inner about-personal-grid">
          <div className="personal-heading">
            <p className="section-label">Away from the keyboard</p>

            <h2>
              There&apos;s more to me than
              <span> websites.</span>
            </h2>
          </div>

          <div className="personal-content">
            <p>
              I&apos;m a wife, mom to a son and stepdaughter, music lover,
              video game enthusiast, and cat person.
            </p>

            <p>
              I&apos;m naturally curious about people and the stories they
              carry with them. I like discovering the things people care
              about, what makes them laugh, what they create, and what makes
              them different.
            </p>

            <p>
              That curiosity follows me into my work. Behind every website is
              a person, an idea, a business, or a story worth understanding.
            </p>

            <div className="personal-interests">
              <span>Music</span>
              <span>Gaming</span>
              <span>Creativity</span>
              <span>Stories</span>
              <span>Cats</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-next">
        <div className="section-inner about-next-inner">
          <p className="section-label">What&apos;s next</p>

          <h2>
            I&apos;m still building
            <span> my story.</span>
          </h2>

          <p>
            I&apos;m building a career around thoughtful web experiences,
            creative problem-solving, and eventually growing Seal Creative Co.
            into something I can truly call my own.
          </p>

          <div className="about-next-actions">
            <Link href="/projects" className="button button-primary">
              See what I build
            </Link>

            <Link href="/contact" className="button button-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}