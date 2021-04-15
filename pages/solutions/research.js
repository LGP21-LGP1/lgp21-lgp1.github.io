import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../styles/solutions.module.css';
import Image from 'next/image';
import Link from 'next/link';


const research = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solutions: Research</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <main>
          <h1 className={style.solutiontitle}>Solutions: Research</h1> 
          <img className={style.solutionimage}
            src="/assets/research.png"
            alt="Research solution"
            width={300}
            height={300}
          />
          <h3 className={style.productname}>Labcentric</h3>
          <p className={style.solutiontext}>Labcentric is an information system focused on digitizing and monitoring laboratory activities, allowing a decrease in errors, resulting in a cost reduction.</p>
          <p>
          <Link 
            href="/solutions/research-detail"
            as={process.env.BACKEND_URL + '/solutions/research-detail'}>
            <a className={style.solutionlink}>
            Get details about Labcentric
            </a>
          </Link>
          </p>

        </main>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default research;
