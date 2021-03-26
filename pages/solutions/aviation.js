import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../styles/solutions.module.css';
import Image from 'next/image';
import Link from 'next/link';


const aviation = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solutions: Aviation</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <main>
          <h1 className={style.solutiontitle}>Solutions: Aviation</h1>
          <img className={style.solutionimage}
            src="/assets/logo4.png"
            alt="Aviation solution"
            width={300}
            height={300}
          />
          <h3 className={style.productname}>Product Name</h3>
          <p className={style.solutiontext}>Short Project Description</p>
          <p>
          <Link 
            href="/solutions/aviation-detail"
            as={process.env.BACKEND_URL + '/solutions/aviation-detail'}>
          <a className={style.solutionlink}>
              Read More...
            </a>
          </Link>
          </p>

        </main>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default aviation;
