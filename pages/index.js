import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'home'} />
        <main>
          <h1 className="title">Nice Content</h1>
        </main>
        <Footer dark={false} />
      </div>
    </>
  );
}
