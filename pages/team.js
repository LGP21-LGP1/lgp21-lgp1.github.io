import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Team() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Team</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={true} page={'team'} />
        <main>
          <h1 className="title">Team</h1>
        </main>
        <footer>
          <h5>footer</h5>
        </footer>
      </div>
    </>
  );
}
