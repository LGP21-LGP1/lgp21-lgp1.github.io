import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import style from '../styles/home.module.css';
import { GoTriangleRight } from 'react-icons/go';
import { FaEye, FaArchive, FaLongArrowAltDown } from 'react-icons/fa';
import { IoSchoolSharp, IoFlaskSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import EducationIcon from '../public/assets/Education.svg';
import ResearchIcon from '../public/assets/Research.svg';
import PhotographyIcon from '../public/assets/Photography.svg';
import AviationIcon from '../public/assets/Aviation.svg';
import LShape from '../public/assets/Lshape.svg';
import DarkCircle from '../public/assets/very-nice-circle.svg';
import AbstractArt from '../public/assets/abstract-art.svg';
import BackgroundBlob from '../public/assets/home-bg.svg';

export default function Home() {
  const [height, setHeight] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    setHeight(myRef.current.clientHeight);
  });

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
          <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
        </Head>
        <main id={style.home}>
          <section ref={myRef} id={style.hero}>
            <BackgroundBlob id={style.backgroundBlob} />
            <Navbar dark={false} page={'home'} />
            <div id={style.jumbotron}>
              <div id={style.jumbotronContent}>
                <h1>
                  Through innovation, we bridge the gap between people and
                  technology.
                </h1>
              </div>
            </div>
            <button onClick={handleScroll} id={style.scrollDown}>
              <FaLongArrowAltDown size={40} />
            </button>
          </section>
          <span id={style.homeContent}>
            <section id={style.solutions}>
              <h2 id={style.solutionsTitle}>Our Solutions</h2>
              <div id={style.solutionsList}>
                <span>
                  <Link
                    href="/solutions/photography"
                    as={process.env.BACKEND_URL + '/solutions/photography'}
                  >
                    <a className={style.solution}>
                      <span>Photography</span>
                    </a>
                  </Link>
                  <span className={style.dot}></span>
                </span>
                <span>
                  <Link
                    href="/solutions/education"
                    as={process.env.BACKEND_URL + '/solutions/education'}
                  >
                    <a className={style.solution}>
                      <span>Education</span>
                    </a>
                  </Link>
                  <span className={style.dot}></span>
                </span>
                <span>
                  <Link
                    href="/solutions/aviation"
                    as={process.env.BACKEND_URL + '/solutions/aviation'}
                  >
                    <a className={style.solution}>
                      <span>Aviation</span>
                    </a>
                  </Link>
                  <span className={style.dot}></span>
                </span>
                <span>
                  <Link
                    href="/solutions/research"
                    as={process.env.BACKEND_URL + '/solutions/research'}
                  >
                    <a className={style.solution}>
                      <span>Research</span>
                    </a>
                  </Link>
                  <span className={style.dot}></span>
                </span>
              </div>
            </section>
            <section id={style.vision}>
              <h2 id={style.ourVision}>Our Vision</h2>
              <hr id={style.visionLine}></hr>
              <AbstractArt id={style.abstractArt} />
              <span id={style.visionStatements}>
                <span className={style.visionStatement}>
                  <span className={style.visionTitle}>Co-Creative</span>
                  <p className={style.visionText}>
                    Engaging and inspiring the people we work with.
                  </p>
                </span>
                <span className={style.visionStatement}>
                  <span className={style.visionTitle}>Flexible</span>
                  <p className={style.visionText}>
                    We create solutions adapted to your needs.
                  </p>
                </span>
              </span>
            </section>
            <section id={style.about}>
              <span className={style.content}>
                <h2 id={style.aboutTitle}>About us</h2>
                <p id={style.aboutContent}>
                  We are a company that provides top quality software products
                  for businesses and institutions who seek the best solutions
                  for their customer needs through simplicity and quality.
                </p>
              </span>
            </section>

            <section id={style.meetTheTeam}>
              <span className={style.content}>
                <span id={style.textContent}>
                  <h2>Who are we?</h2>
                  <p>
                    The Vortex family is a multidisciplinary team, where the
                    knowledge of different backgrounds allows the company to
                    have complementary know-how, experience, skills and
                    qualifications that will contribute to the achievement of
                    the expected results by the company and each corresponding
                    project.
                  </p>
                  <Link href="/team" as={process.env.BACKEND_URL + '/team'}>
                    <a id={style.meetTheTeamButton}>
                      <GoTriangleRight size={25} />
                      <span id={style.buttonText}>Meet our team members</span>
                    </a>
                  </Link>
                </span>
              </span>
              <span className={style.dots}>
                <span className={style.dot1}></span>
                <span className={style.dot2}></span>
                <span className={style.dot3}></span>
                <span className={style.dot4}></span>
                <span className={style.dot5}></span>
                <span className={style.dot6}></span>
              </span>
            </section>
            <DarkCircle id={style.darkCircle} />
            <LShape id={style.lShape} />
          </span>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
