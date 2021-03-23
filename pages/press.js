import Head from 'next/head';
import Link from 'next/link';
import DownloadFileButton from '../components/downloadFileButton';
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
          <DownloadFileButton fileName="media_kit.pdf">Media Kit</DownloadFileButton>
          <DownloadFileButton fileName="brand_guidelines.pdf">Brand Guidelines</DownloadFileButton>
          <DownloadFileButton fileName="media_assets.pdf">Media Assets</DownloadFileButton>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
