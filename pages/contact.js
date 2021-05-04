import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact/ContactForm';
import { useCallback } from 'react';
import PageTitle from '../components/pagetitle';
import styles from '../styles/contact.module.css';

import GeometricFigure from '../public/assets/contactGeometric.svg';

export default function Contact() {

  const submit = useCallback((name, email, message) => {

    const subject = "Contact Us: " + name
    const contactRecipient = "general@vortex-tech.pt"
    window.location.href = "mailto:" + contactRecipient + "?subject=" + subject + "&cc=" + email + "&body=" + message;
  }, [])

  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar dark={false} page={'contact'} />
        <main className={styles.pageContent}>
          <div className={styles.content}>
            <PageTitle
              title="Contact Us"
              description="Write to us here or through smoke signals."
            />
            <ContactForm className={styles.form} submit={submit}></ContactForm>
            <div className={styles.emptySpace}></div>
          </div>
          <div className={styles.decoration}>
            {/* <img src='/assets/contactGeometric.svg' alt='next' />
             */}
            <GeometricFigure className={styles.geometricFigure} width={"100%"} ></GeometricFigure>
          </div>
        </main>
        <Footer dark={true} />
      </div>
    </>
  );
}
