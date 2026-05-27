import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/#how-it-works', label: 'How It Works', hash: true },
  { to: '/#specialties', label: 'Specialties', hash: true },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/#match-form', label: 'Find a Surgeon', hash: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove('nav-menu-open');
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', open);
    return () => document.body.classList.remove('nav-menu-open');
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e) => {
      if (!open) return;
      const nav = document.getElementById('site-nav');
      if (nav && !nav.contains(e.target)) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  const isCurrent = (path) => {
    if (path === '/about') return location.pathname === '/about';
    if (path === '/faq') return location.pathname === '/faq';
    return false;
  };

  return (
    <nav id="site-nav" className={open ? 'is-open' : ''} aria-label="Main">
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        <img className="logo-img" src="/SurgiMatchLogo.png" alt="SurgiMatch" width="540" height="150" />
      </Link>
      <div className="nav-links" id="nav-menu" role="navigation" aria-label="Primary">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            aria-current={isCurrent(to) ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="nav-end">
        <Link to="/#match-form" className="btn-primary nav-cta" onClick={() => setOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          Find a Surgeon
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path className="nav-toggle-path nav-toggle-path--top" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 8h14" />
            <path className="nav-toggle-path nav-toggle-path--mid" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 12h14" />
            <path className="nav-toggle-path nav-toggle-path--bot" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 16h14" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
