import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Team() {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Team</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={false} page={'team'} />
        <main>
          <h1 className="title">Team</h1>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
