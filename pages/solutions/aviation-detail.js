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

const aviationDetail = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution: AIR Med Digital</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <Link 
          href="/solutions/aviation"
          as={process.env.BACKEND_URL + '/solutions/aviation'}>
          <h3 className={style.solutionback}>
            <IoArrowBackCircleOutline size={30} />        
            <a className={style.marginleft}>Back to Product List</a>
          </h3>
        </Link>
        <div className={style.container}>
          <img className={style.solutionimagedetail}
            src="/assets/aviation.png"
            alt="Aviation solution"
            width={300}
            height={300}
          />
          <h1 className={style.productnamedetail}>AIR Med Digital</h1>
          <p className={style.solutiontextdetail}>As the world moves forward and technology evolves, so should the services we have become used to. It's increasingly important to update and optimize what is now outdated. This is true of medical data for European aeronautical agencies, that still hold paper records. As such, there is a need for an online platform to centralize and manage these medical documents that come from recurrent consulations, with the principle concern in making the consultation process faster, more sustainable by using digital documents and less prone to fraud.
          With AIR Med Digital, flight personnel and aeronautical medics will be able to easily access and update medical information in a digital format. By being available across Europe, it will help the sharing of information between authorities and thus help monitor suspicious activity along with avoiding excessive burocracy.</p>
          <h3 className={style.learnmore}>Learn more:</h3>
          <p className={style.solutiontextbelowdetail}>Our product is a platform for medical consultations in the aviation field, that allows adding, examining and updating medical records of flight professionals, keep logs of changes made to a professionals profille and filling common medical forms directly in the application. <br></br><br></br>
          It stands out from similar platforms by targeting specificallly the European Union aviation sector, which enables it to tailor its features to this particular market, for example, by providing the most common forms used to be downloaded and filled directly in the application. <br></br> It has a great focus on transparency width the addition of change logs and access to pass medical records for medical personnel. <br></br><br></br>Lastly, close attention to the consultation process grants the possibility for features that enhance it, such as the ability to take notes on a flight professional's profile thus improving communication between doctors. <br></br><br></br>
          A product like ours can suffer from excessive burocracies, issues with security and data privacy that on an initial entrance in the market can damage its reputation or even cause its failure all together. We hope that by keeping this in mind from the start of the development combined with the already achieved proof of concept results in a successful product.</p>
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

export default aviationDetail;
