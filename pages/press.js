import Head from 'next/head';
import Link from 'next/link';
import {useEffect, useCallback, useState} from "react"
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PageTitle from '../components/pagetitle';
import DownloadFileButton from '../components/downloadFileButton';
import style from '../styles/press.module.css';
import PressGeometric from '../public/assets/pressGeometric.svg'

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

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
          <div className={style.title}>
            <PageTitle
              title="Press"
              description=''
            />
          </div>
          <PressGeometric width={!useMediaQuery(1024) ? '85%' : "95%"} className={style.geometric}></PressGeometric>
          <section className={style.pressContent}>
            <div className={style.downloadButtons}>
              <DownloadFileButton fileName='VORTEX_COMPANY_MEDIA_PRESS_KIT.pdf' title="Media Kit" type="top">
                Learn more about our company and solutions.
              </DownloadFileButton>
              <DownloadFileButton fileName="Company_Handbook.pdf" title="Company Handbook">
                Learn more about our organization and policies.
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
