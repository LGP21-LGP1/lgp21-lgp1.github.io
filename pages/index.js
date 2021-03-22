import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import style from '../styles/home.module.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';

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
            <span id={style.content}>
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
