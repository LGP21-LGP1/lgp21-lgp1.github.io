import Head from 'next/head';
import Link from 'next/link';
import DownloadFileButton from '../components/downloadFileButton';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PageTitle from '../components/pagetitle';
import style from '../styles/press.module.css';

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
          <PageTitle
            title="Press"
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam voluptua.'
            titleContact='press@vortex-tech.pt'
          />
          <section className={style.pressContent}>
            <div className={style.downloadButtons}>
              <DownloadFileButton fileName="media_kit.pdf">Media Kit</DownloadFileButton>
              <DownloadFileButton fileName="brand_guidelines.pdf">Brand Guidelines</DownloadFileButton>
              <DownloadFileButton fileName="media_assets.pdf">Media Assets</DownloadFileButton>
            </div>
            <div className={style.interactiveManualDiv}>
              boas
            </div>
          </section>

        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
