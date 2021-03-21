import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Press() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Press</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'press'} />
        <main>
          <h1 className="title">Press</h1>
        </main>
        <footer>
          <h5>footer</h5>
        </footer>
      </div>
    </>
  );
}
