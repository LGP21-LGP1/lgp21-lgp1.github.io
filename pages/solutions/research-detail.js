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

const researchDetail = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution: Labcentric</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <Link 
          href="/solutions/research"
          as={process.env.BACKEND_URL + '/solutions/research'}>
          <h3 className={style.solutionback}>
            <IoArrowBackCircleOutline size={30} />        
            <a className={style.marginleft}>Back to Product List</a>
          </h3>
        </Link>
        <div className={style.container}>
          <img className={style.solutionimagedetail}
            src="/assets/research.png"
            alt="Research solution"
            width={300}
            height={300}
          />
          <h1 className={style.productnamedetail}>Labcentric</h1>
          <p className={style.solutiontextdetail}>Labcentric is an information system focused on digitizing and monitoring laboratory activities, allowing a decrease in errors, resulting in a cost reduction.</p>
          <h3 className={style.learnmore}>Learn more:</h3>
          <p className={style.solutiontextbelowdetail}>Our product is an information system focused on digitalizing and monitoring all processes, workflows and activities of a laboratory. It is designed with adaptability and extensibility in mind, which means it can easily expand to encompass new fields inside the laboratory. <br></br><br></br>The product combines different knowledge areas, good practices and already existing tools, which make it a good and feasible solution for our customers. <br></br><br></br>Finally, it offers a simple and intuitive interface for good user experience, with many ways of interacting with the product that are configurable by the user. </p>
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

export default researchDetail;
