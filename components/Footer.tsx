import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/">Seal Creative Co.</Link>

            <p>
              Thoughtful websites with
              <br />
              structure <span>+</span> personality.
            </p>
          </div>

          <div className="footer-navigation">
            <div>
              <p className="footer-label">Explore</p>

              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div>
              <p className="footer-label">Connect</p>

              <a href="mailto:todayisme@gmail.com">Email</a>

              <a
                href="https://www.linkedin.com/in/tiffany-seals-55b04449/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/SealsCreative"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Seal Creative Co. All rights reserved.
          </p>

          <p>Designed + developed by Tiffany Seals</p>
        </div>
      </div>
    </footer>
  );
}