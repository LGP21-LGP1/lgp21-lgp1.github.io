import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import style from '../styles/solutions_revamp.module.css';
import OrangeShape from '../public/assets/orange-shape.svg';

export default function Solutions() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solutions</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <main className={style.main}>
          <h1 className={style.pageTitle}>Solutions</h1>
            <div className={style.solution} id="app">
              <div className={style.imageSolution}>
                <img 
                  src="/assets/photography.png"
                  alt="Archival solution"      
                />
                <div className={style.squareRight}></div>
              </div>

              <div className={`${style.solutionDescription} ${style.boxRight}`}>
                  <h2 className={style.solutionTitle}>APP</h2>
                  <p className={style.solutionText}>APP is an information system designed to assist cultural institutions on art pieces' conservation, allowing them to manage all the necessary procedures in an automatic way.	</p>
              </div>  
            </div>
            <div className={style.solution} id="evaluate">
              <div className={`${style.solutionDescription} ${style.boxLeft}`}>
                  <h2 className={style.solutionTitle}>e-Valuate</h2>
                  <p className={style.solutionText}>e-Valuate is a platform adapted to remote classes, helping schools to manage aspects related to the classes, assessment cycle and transparency among students and teachers.</p>
              </div>
              <div className={style.imageSolution}>
                <img 
                  src="/assets/education.png"
                  alt="Education solution"      
                />
                <div className={style.squareLeft}></div>
              </div>
            </div>
            <div className={style.solution} id="airmeddigital">
            <div className={style.imageSolution}>
                <img 
                  src="/assets/aviation.png"
                  alt="Aviation solution"      
                />
                <div className={style.squareRight}></div>
              </div>
              <div className={`${style.solutionDescription} ${style.boxRight}`}>
                  <h2 className={style.solutionTitle}>AIR Med Digital</h2>
                  <p className={style.solutionText}>AIR Med Digital is a platform that centralizes medical information in the aviation field, aiming to be more sustainable, straightforward, and reduce bureaucracy on the current processes.</p>
              </div>
            </div>
            <div className={style.solution} id="labcentric">
              <div className={`${style.solutionDescription} ${style.boxLeft}`}>
                  <br></br>
                  <h2 className={style.solutionTitle}>Labcentric</h2>
                  <p className={style.solutionText}>Labcentric is an information system focused on digitizing and monitoring laboratory activities, allowing a decrease in errors, resulting in a cost reduction.</p>
              </div>
              <div className={style.imageSolution}>
                <img 
                  src="/assets/research.png"
                  alt="Research solution"      
                />
                <div className={style.squareLeft}></div>
              </div>
            </div>
          
        </main>

        <Footer dark={true} />
      </div>
    </>
  );
}