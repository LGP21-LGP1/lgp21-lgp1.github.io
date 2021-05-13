import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './footer.module.css';
import { FaArrowUp } from 'react-icons/fa';
import Facebook from '../public/assets/facebook-icon.svg';
import Twitter from '../public/assets/twitter-icon.svg';
import Instagram from '../public/assets/instagram-icon.svg';
import Youtube from '../public/assets/youtube-icon.svg';
import Linkedin from '../public/assets/linkedin-icon.svg';

export const footer = ({ dark }) => {
  const handleScroll = () => {
    window.scroll({
      top: -document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [toggle, setToggle] = useState(false);

  return (
    <footer id={style.footer} className={dark ? style.dark : style.clear}>
      <button onClick={handleScroll} id={style.backToTop}>
        <FaArrowUp size={22} /> <span>Back to Top</span>
      </button>
      <div id={style.footerInfo}>
        <span id={style.workWithUs}>Interested in working with us?</span>
        <span id={style.socials}>
          <a
            href="https://www.facebook.com/Vortex-Tech-101259652137513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fill="white" height={40} width={40} />
          </a>
          <a
            href="https://twitter.com/vortex_tech_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter fill="white" height={40} width={40} />
          </a>
          <a
            href="https://www.instagram.com/vortex_tech_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fill="white" height={40} width={40} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkiX1rw5PSS_p_LagUmdI_A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube fill="white" height={40} width={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/vortex-tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin fill="white" height={40} width={40} />
          </a>
        </span>
        <span id={style.contacts}>
          <span id={style.email}>general@vortex-tech.pt</span>
          <span id={style.phone}>+351 222 123 456</span>
        </span>
      </div>
    </footer>
  );
};

export default footer;
