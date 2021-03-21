import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Blog() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'blog'} />
        <main>
          <h1 className="title">Blog</h1>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
