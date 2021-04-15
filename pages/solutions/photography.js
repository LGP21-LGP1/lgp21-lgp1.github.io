import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../styles/solutions.module.css';
import Image from 'next/image';
import Link from 'next/link';


const photography = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solutions: Photography</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <main>
          <h1 className={style.solutiontitle}>Solutions: Photography</h1>
          <img className={style.solutionimage}
            src="/assets/photography.png"
            alt="Photography solution"
            width={300}
            height={300}
          />
          <h3 className={style.productname}>APP</h3>
          <p className={style.solutiontext}>APP is an information system designed to assist cultural institutions on art pieces' conservation, allowing them to manage all the necessary procedures in an automatic way.</p>
          <p>
          <Link 
            href="/solutions/photography-detail"
            as={process.env.BACKEND_URL + '/solutions/photography-detail'}>
            <a className={style.solutionlink}>
            Get details about APP
            </a>
          </Link>
          </p>

        </main>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default photography;
