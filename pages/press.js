import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PageTitle from '../components/pagetitle';
import DownloadFileButton from '../components/downloadFileButton';
import style from '../styles/press.module.css';
import PressGeometric from '../public/assets/pressGeometric.svg'

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
          <PressGeometric width={'85%'} className={style.geometric}></PressGeometric>
          <section className={style.pressContent}>
            <div className={style.downloadButtons}>
              <DownloadFileButton fileName="media_kit.pdf" title="Media Kit" type="top">
                Learn more about our company and solutions.
              </DownloadFileButton>
              <DownloadFileButton fileName="brand_guidelines.pdf" title="Brand Guidelines">
                Find out the best practices in order to use our image.
              </DownloadFileButton>
              <DownloadFileButton fileName="media_assets.pdf" title="Media Assets" type="bottom">
                Download our company's visual identity elements.
              </DownloadFileButton>
            </div>
            <div className={style.interactiveManualDiv}>
              <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=hiabmm3xu3" width="100%" height="100%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
