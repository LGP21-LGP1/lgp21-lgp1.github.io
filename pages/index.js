import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import style from '../styles/home.module.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FaEye, FaArchive } from 'react-icons/fa';
import { IoSchoolSharp, IoFlaskSharp } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'home'} />
        <main>
          <section id={style.solutions}>
            <h2 id={style.solutionsTitle}>Our Solutions</h2>
            <div id={style.solutionsList}>
              <span>
                <Link
                  href="/solutions/archival"
                  as={process.env.BACKEND_URL + '/solutions/archival'}
                >
                  <a className={style.solution}>
                    <FaArchive size={35} />
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
                    <IoSchoolSharp size={35} />
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
                    <IoFlaskSharp size={35} />
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
                We strive to always maintain a close relationship with clients
                coming from various fields and provide technological solutions
                and improvements to their specific challenges and needs, with
                the goal of allowing them and their products to be more
                effective, efficient and ultimately more successful.
              </p>
              <Image src="/assets/feup.png" width={555} height={370} />
            </span>
          </section>
          <section id={style.vision}>
            <h2 id={style.ourVision}>
              <FaEye size={50} />
              <span>Our Vision</span>
            </h2>
            <span className={style.visionStatement}>
              <span className={style.visionNo}>01</span>
              <span className={style.separator} />
              <span className={style.visionContent}>
                <span className={style.visionTitle}>Lorem Ipsum</span>
                <p className={style.visionText}>Lorem ipsum dolor sit amet.</p>
              </span>
            </span>
            <span className={style.visionStatement}>
              <span className={style.visionNo}>02</span>
              <span className={style.separator} />
              <span className={style.visionContent}>
                <span className={style.visionTitle}>Lorem Ipsum</span>
                <p className={style.visionText}>Lorem ipsum dolor sit amet.</p>
              </span>
            </span>
          </section>
          <section id={style.meetTheTeam}>
            <span className={style.content}>
              <span id={style.textContent}>
                <h2>Meet the team</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  culpa modi corporis. Hic sequi possimus dolorum commodi
                  dolorem blanditiis, accusantium atque nulla, quibusdam
                  reiciendis voluptate maxime corrupti, delectus eos odit.
                </p>
                <Link href="/team" as={process.env.BACKEND_URL + '/team'}>
                  <a id={style.meetTheTeamButton}>
                    <FiArrowRightCircle size={20} />
                    <span id={style.buttonText}>Meet our team members</span>
                  </a>
                </Link>
              </span>
              <img
                id={style.meetTheTeamImg}
                src="/assets/meet-the-team.png"
                width={590}
                height={385}
              />
            </span>
          </section>
        </main>
        <Footer dark={false} />
      </div>
    </>
  );
}
