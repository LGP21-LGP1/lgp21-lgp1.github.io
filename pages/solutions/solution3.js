import Head from 'next/head';
import Navbar from '../../components/navbar';
import styles from '../../styles/solutions.module.css';

const solution3 = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution 3</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'contact'} />
        <main>
          <h1 className="title">Solution 3</h1>
        </main>
        <footer>
          <h5>footer</h5>
        </footer>
      </div>
    </>
  );
};

export default solution3;
