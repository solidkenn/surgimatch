import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        Surgi<span>Match</span>
      </div>
      <p style={{ marginBottom: 10 }}>Connecting patients with the right surgical expertise.</p>
      <p>
        © 2026 SurgiMatch. All rights reserved. &nbsp;·&nbsp;{' '}
        <Link to="/about">About Us</Link> &nbsp;·&nbsp; <Link to="/faq">FAQ</Link> &nbsp;·&nbsp;{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> &nbsp;·&nbsp; <a href="#">Terms of Service</a>
      </p>
    </footer>
  );
}
