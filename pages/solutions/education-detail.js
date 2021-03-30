import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../styles/solutions.module.css';
import Image from 'next/image';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import Link from 'next/link';

const changeAppearance = event => {
  event.preventDefault()
}

const educationDetail = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution: e-Valuate</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <Link 
          href="/solutions/education"
          as={process.env.BACKEND_URL + '/solutions/education'}>
          <h3 className={style.solutionback}>
            <IoArrowBackCircleOutline size={30} />        
            <a className={style.marginleft}>Back to Product List</a>
          </h3>
        </Link>
        <div className={style.container}>
          <img className={style.solutionimagedetail}
            src="/assets/education.png"
            alt="Education solution"
            width={300}
            height={300}
          />
          <h1 className={style.productnamedetail}>e-Valuate</h1>
          <p className={style.solutiontextdetail}>Our aim is to provide a platform that allows schools to define their courses, along with their evaluation criteria, and domains their and respective descriptors freely and according to their organization of periods of the school year, capable of storing and presenting evaluation data for the various grades and courses of a school, capitalizing on the use of Microsoft Teams to simplify the setup phase for each course of a class and using intuitive and appealing interfaces to help teachers determine the needs of their classes, as well as exchange feedback with their students to help them improve.</p>
          <h3 className={style.learnmore}>Learn more:</h3>
          <p className={style.solutiontextbelowdetail}>The COVID-19 pandemic motivated a new paradigm in the way educational systems work around the world. <br></br><br></br>
        
          Microsoft Teams is one of the tools that saw the most use growth during this period, being used by an increasing number of educational institutions. The workflow used by many schools is for lecturers to create a Team inside the platform for each class they teach in each of their subjects, and then add all the students to it. <br></br><br></br>
          
          This makes it very useful to be able to import this information to an external student assessment registration App, in order to avoid the tedious repetitive task of manually adding each student of each class in each subject. <br></br><br></br>
          
          The portuguese educational system is also evolving, so a new innovative App that supports the latest conceptual changes in the assessment system defended by specialists and academics alike is very necessary.    <br></br><br></br>
          
          This product helps evolve the evaluation process used in schools, not only adapting it to work well on remote situations but also improving the feedback between students and teachers overall and establishing an evaluation method better suited to assess a student's learning.</p>
        </div>
        <div className={style.updates}>
          <h3 className={style.solutionforward}>
            <IoArrowForwardCircleOutline size={30} />        
            <a className={style.marginleft2}>Want updates on this project?</a>

          </h3>

        <form className={style.rcorners} onSubmit={changeAppearance}>
          <input className={style.input} type="email" placeholder="Your email..." name="email"/>
          <button type="submit" className= {style.button}>subscribe</button>
        </form>
         
        </div>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default educationDetail;
