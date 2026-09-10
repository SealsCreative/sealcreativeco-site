import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <nav>
        <Link href="/">Seal Creative Co.</Link>
        <div>
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