import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Contact() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'contact'} />
        <main>
          <h1 className="title">Contact</h1>
        </main>
        <footer>
          <h5>footer</h5>
        </footer>
      </div>
    </>
  );
}
