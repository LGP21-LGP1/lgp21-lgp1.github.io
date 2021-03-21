import React from 'react';
import Link from 'next/link';
import style from './navbar.module.css';

const navbar = () => {
  return (
    <navbar id={style.navbar}>
      <ul>
        <li className={style.navItem}>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>Home</a>
          </Link>
        </li>
        <li className={style.navItem}>
          <Link href="/solutions" as={process.env.BACKEND_URL + '/solutions'}>
            <a>Solutions</a>
          </Link>
        </li>
        <li className={style.navItem}>
          <Link href="/team">
            <a>Team</a>
          </Link>
        </li>
        <li className={style.navItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className={style.navItem}>
          <Link href="/press">
            <a>Press</a>
          </Link>
        </li>
        <li className={style.navItem}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </navbar>
  );
};

export default navbar;
