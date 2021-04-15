import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../styles/solutions.module.css';
import Image from 'next/image';
import Link from 'next/link';


const education = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solutions: Education</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <main>
          <h1 className={style.solutiontitle}>Solutions: Education</h1>
          <img className={style.solutionimage}
            src="/assets/education.png"
            alt="Education solution"
            width={300}
            height={300}
          />
          <h3 className={style.productname}>E-valuate</h3>
          <p className={style.solutiontext}>E-valuate is a platform adapted to remote classes, helping schools to manage aspects related to the classes, assessment cycle and transparency among students and teachers.</p>
          <p>
          <Link 
            href="/solutions/education-detail"
            as={process.env.BACKEND_URL + '/solutions/education-detail'}>
            <a className={style.solutionlink}>
            Get details about E-valuate
            </a>
          </Link>
          </p>

        </main>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default education;
