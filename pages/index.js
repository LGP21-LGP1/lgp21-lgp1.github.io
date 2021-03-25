import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import style from '../styles/home.module.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FaEye, FaArchive } from 'react-icons/fa';
import { IoSchoolSharp, IoFlaskSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import vortex from '../components/vortex/vortex';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [height, setHeight] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    setHeight(myRef.current.clientHeight);
  });

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        vortex({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleScroll = () => {
    window.scroll({
      top: height,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"></script>
        </Head>
        <main id={style.home}>
          <section ref={myRef} id={style.hero}>
            <Navbar dark={false} page={'home'} />
            <div id={style.jumbotron}>
              <div id={style.jumbotronContent}>
                <h1>
                  Through innovation, we bridge the gap between people and
                  technology.
                </h1>
                <p>
                  We provide technological solutions with the goal of allowing products to be more effective,<br></br> efficient and ultimately more successful.
                </p>
              </div>
            </div>
            <button onClick={handleScroll} id={style.scrollDown}>
              <IoIosArrowDown size={30} />
              <span>scroll down</span>
              <IoIosArrowDown size={30} />
            </button>
          </section>
          <section id={style.solutions}>
            <h2 id={style.solutionsTitle}>Our Solutions</h2>
            <div id={style.solutionsList}>
              <span>
                <Link
                  href="/solutions/archival"
                  as={process.env.BACKEND_URL + '/solutions/archival'}
                >
                  <a className={style.solution}>
                    <FaArchive size={55} />
                    <span>Archival</span>
                  </a>
                </Link>
              </span>
              <span>
                <Link
                  href="/solutions/schools"
                  as={process.env.BACKEND_URL + '/solutions/schools'}
                >
                  <a className={style.solution}>
                    <IoSchoolSharp size={55} />
                    <span>Schools</span>
                  </a>
                </Link>
              </span>
              <span>
                <Link
                  href="/solutions/labs"
                  as={process.env.BACKEND_URL + '/solutions/labs'}
                >
                  <a className={style.solution}>
                    <IoFlaskSharp size={55} />
                    <span>Lab</span>
                  </a>
                </Link>
              </span>
            </div>
          </section>
          <section id={style.about}>
            <span className={style.content}>
              <h2 id={style.aboutTitle}>About us</h2>
              <p id={style.aboutContent}>
              We are a company that provides top quality software products for businesses and institutions who seek the best solutions for their customer needs through simplicity and quality.
              </p>
              <img
                id={style.aboutImg}
                src="/assets/feup.png"
                width={960}
                height={641}
              />
            </span>
          </section>
          <section id={style.vision}>
            <h2 id={style.ourVision}>
              <span id={style.ourVisionContent}>
                <FaEye size={50} />
                <span>Our Vision</span>
              </span>
            </h2>
            <span className={style.visionStatement}>
              <span className={style.visionNo}>01</span>
              <span className={style.separator} />
              <span className={style.visionContent}>
                <span className={style.visionTitle}>Co-Creative</span>
                <p className={style.visionText}>Engaging and inspiring the people we work with.</p>
              </span>
            </span>
            <span className={style.visionStatement}>
              <span className={style.visionNo}>02</span>
              <span className={style.separator} />
              <span className={style.visionContent}>
                <span className={style.visionTitle}>Flexible</span>
                <p className={style.visionText}>We create solutions adapted to your needs.</p>
              </span>
            </span>
          </section>
          <section id={style.meetTheTeam}>
            <span className={style.content}>
              <span id={style.textContent}>
                <h2>Meet the team</h2>
                <p>
                The Vortex family is a multidisciplinary team, where the knowledge of different backgrounds allows the company to have complementary know-how, experience, skills and qualifications that will contribute to the achievement of the expected results by the company and each corresponding project.
                </p>
                <Link href="/team" as={process.env.BACKEND_URL + '/team'}>
                  <a id={style.meetTheTeamButton}>
                    <FiArrowRightCircle size={25} />
                    <span id={style.buttonText}>Get to know us.</span>
                  </a>
                </Link>
              </span>
              <img id={style.meetTheTeamImg} src="/assets/meet-the-team.png" />
            </span>
          </section>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
