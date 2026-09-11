import Link from "next/link";

export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href="/" className="site-brand">
          Seal Creative Co.
        </Link>
        
        <div className="site-nave-links">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}