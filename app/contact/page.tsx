
"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Your inquiry could not be sent.");
      }

      setStatus(result.message || "Your inquiry has been sent successfully!");
      setStatusType("success");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="contact-hero">
        <div className="section-inner contact-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>

            <h1>
              Let&apos;s talk about
              <span> what you&apos;re building.</span>
            </h1>
          </div>

          <div className="contact-hero-copy">
            <p>
              Have a project, an opportunity, or even the beginning of an idea?
              Tell me about it. You don&apos;t need to have everything figured
              out before reaching out.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main" id="contact-form">
        <div className="section-inner contact-main-grid">
          <div className="contact-intro">
            <p className="section-label">Start a conversation</p>

            <h2>
              A few details are
              <span> plenty to start.</span>
            </h2>

            <p>
              Whether you&apos;re looking for someone to build a website,
              collaborate on an idea, or join your team, I&apos;d love to hear
              what you have in mind.
            </p>

            <div className="contact-details">
              <div>
                <span>01</span>
                <div>
                  <p>Project inquiries</p>
                  <strong>Web design + development</strong>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <p>Career opportunities</p>
                  <strong>Let&apos;s talk</strong>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <p>Something else?</p>
                  <strong>That works too.</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div
              className="contact-honeypot"
              aria-hidden="true"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="What should I call you?"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="inquiry">What can I help with?</label>
              <select id="inquiry" name="inquiry" defaultValue="" required>
                <option value="" disabled>
                  Choose one
                </option>
                <option value="web-design">Web design</option>
                <option value="development">Web development</option>
                <option value="full-stack">Full-stack project</option>
                <option value="career">Career opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="stage">Where are you in the process?</label>
              <select id="stage" name="stage" defaultValue="" required>
                <option value="" disabled>
                  Choose one
                </option>
                <option value="idea">I have an idea</option>
                <option value="planning">I&apos;m planning the project</option>
                <option value="ready">I&apos;m ready to get started</option>
                <option value="existing">
                  I already have something that needs work
                </option>
                <option value="not-applicable">Not applicable</option>
              </select>
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="message">Tell me about it</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                minLength={10}
                maxLength={5000}
                required
                placeholder="What are you working on? What do you need help with?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="button button-primary"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send inquiry"}
            </button>

            {status && (
              <p
                className={`contact-status contact-status-${statusType}`}
                role={statusType === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-next">
        <div className="section-inner">
          <div className="contact-next-heading">
            <p className="section-label">What happens next?</p>

            <h2>
              No mystery.
              <span> Just a conversation.</span>
            </h2>
          </div>

          <div className="contact-next-grid">
            <article>
              <span>01</span>
              <h3>You reach out.</h3>
              <p>
                Send over whatever you know about your project, opportunity, or
                idea. It doesn&apos;t need to be perfectly organized.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>I read the details.</h3>
              <p>
                I&apos;ll take a look at what you&apos;re trying to accomplish
                and what kind of help might make sense.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>We talk.</h3>
              <p>
                If it looks like a good fit, we can continue the conversation
                and figure out what the next step should be.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-personality">
        <div className="section-inner contact-personality-grid">
          <div className="contact-personality-mark">
            <span>?</span>
            <div></div>
          </div>

          <div>
            <p className="section-label">Not sure what to say?</p>

            <h2>
              Start with
              <span> hello.</span>
            </h2>

            <p>
              Seriously. You don&apos;t need a project brief, technical
              vocabulary, or a perfectly formed plan. Tell me what you&apos;re
              thinking about and we&apos;ll go from there.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <div className="section-inner contact-closing-inner">
          <p className="section-label">Seal Creative Co.</p>

          <h2>
            Good things usually start
            <span> with a conversation.</span>
          </h2>

          <a href="#contact-form" className="button button-primary">
            Start a conversation
          </a>
        </div>
      </section>
    </>
  );
}