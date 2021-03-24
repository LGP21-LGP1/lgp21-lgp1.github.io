import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './footer.module.css';
import { FaArrowUp } from 'react-icons/fa';
import Facebook from '../public/assets/facebook-icon.svg';
import Github from '../public/assets/github-icon.svg';
import Instagram from '../public/assets/instagram-icon.svg';
import Linkedin from '../public/assets/linkedin-icon.svg';

export const footer = ({ dark }) => {
  const handleScroll = () => {
    window.scroll({
      top: -document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id={style.footer} className={dark ? style.dark : style.clear}>
      <button onClick={handleScroll} id={style.backToTop}>
        <FaArrowUp size={22} /> <span>Back to Top</span>
      </button>
      <div id={style.footerInfo}>
        <span id={style.workWithUs}>Interested in working with us?</span>
        <span id={style.email}>general@vortex.pt</span>
        <span id={style.phone}>+351 222 123 456</span>
      </div>
      <div id={style.socials}>
        <a href="https://www.facebook.com/">
          <Facebook fill="white" height={50} width={50} />
        </a>
        <a href="https://www.github.com/">
          <Github fill="white" height={50} width={50} />
        </a>
        <a href="https://www.instagram.com/">
          <Instagram fill="white" height={50} width={50} />
        </a>
        <a href="https://www.linkedin.com/">
          <Linkedin fill="white" height={50} width={50} />
        </a>
      </div>
    </footer>
  );
};

export default footer;
