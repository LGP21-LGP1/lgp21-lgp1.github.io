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
          <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=vh5ecucbdc" width="100%" height="586" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
