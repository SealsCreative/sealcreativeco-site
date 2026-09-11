export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Seal Creative Co.</p>

        <p>
          © {new Date().getFullYear()} Seal Creative Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}