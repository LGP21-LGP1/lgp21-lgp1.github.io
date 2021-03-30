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

const photographyDetail = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution: APP</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <Link 
          href="/solutions/photography"
          as={process.env.BACKEND_URL + '/solutions/photography'}>
          <h3 className={style.solutionback}>
            <IoArrowBackCircleOutline size={30} />        
            <a className={style.marginleft}>Back to Product List</a>
          </h3>
        </Link>
        <div className={style.container}>
          <img className={style.solutionimagedetail}
            src="/assets/photography.png"
            alt="Photography solution"
            width={300}
            height={300}
          />
          <h1 className={style.productnamedetail}>APP</h1>
          <p className={style.solutiontextdetail}>Existing software solutions related to art pieces' conservation leave much to be desired as they are only centered in building condition reports, and fail to have processes to automate the management of the pieces' lifecycles, historical paths, light exposure calculations and loan requests. Having a fully integrated information system to address these gaps, where users only need to input the information they collect, will save a lot of time and provide more accurate and reliable information that is crucial in what concerns the cultural heritage management.	</p>
          <h3 className={style.learnmore}>Learn more:</h3>
          <p className={style.solutiontextbelowdetail}>This product is essentially an information system designed to assist cultural institutions in what concerns the preservation of the cultural heritage of their responsibility. <br></br><br></br>
          It covers the major workflows that an institution of this nature may use, from the light exposure recording and artwork state assement, to loan requests management, and even features a decision-making system to speed up the process. <br></br><br></br>
          All this is complemented with the possibility of creating custom condition reports templates according to the institutions' needs, which can then be instantiated and filled in an assisted way, with all the piece details being automatically retrieved from data previously stored in the app. These reports can later be converted to PDF and saved in the users' devices. </p>
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

export default photographyDetail;
