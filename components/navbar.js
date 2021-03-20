import React from 'react';
import Link from 'next/link';

const navbar = () => {
  return (
    <navbar id="navbar">
      <ul>
        <li className="nav-item">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/solutions" as={process.env.BACKEND_URL + '/solutions'}>
            <a>Solutions</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/team">
            <a>Team</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/press">
            <a>Press</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </navbar>
  );
};

export default navbar;
