import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-neutral p-10 text-neutral-content">
      <nav>
        <header className="footer-title">Account</header>
        <Link href="/login" className="link-hover link">
          Sign In
        </Link>
        <Link href="/register" className="link-hover link">
          Join Now
        </Link>
      </nav>
      <nav>
        <header className="footer-title">The Club</header>
        <Link href="/about" className="link-hover link">
          About us
        </Link>
        <Link href="/contact" className="link-hover link">
          Contact
        </Link>
        <Link href="/team" className="link-hover link">
          Staff
        </Link>
        <Link href="/curriculum " className="link-hover link">
          Curriculum
        </Link>
        <Link href="/law" className="link-hover link">
          Constitution
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
