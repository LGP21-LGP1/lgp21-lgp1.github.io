import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vortex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <h1 className="title">Nice Content</h1>
      </main>

      <footer>
        <h5>footer</h5>
      </footer>
    </div>
  );
}
