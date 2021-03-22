import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Press() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Press</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={false} page={'press'} />
        <main>
          <h1 className="title">Press</h1>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
