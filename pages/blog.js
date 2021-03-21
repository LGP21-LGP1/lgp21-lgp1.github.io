import Head from 'next/head';
import Link from 'next/link';
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
        <footer>
          <h5>footer</h5>
        </footer>
      </div>
    </>
  );
}
