import Head from 'next/head';
import Navbar from '../../components/navbar';
import styles from '../../styles/solutions.module.css';

const airmeddigital = () => {
  return (
    <div className="container">
      <Head>
        <title>Vortex - AIR MED DIGITAL</title>
      </Head>
      <Navbar />
      <main>
        <h1 className="title">AIR MED DIGITAL</h1>
        <h2>This is our best project 🔥</h2>
        <div id={styles.projectDescription}>
          <p>
            Our project intends to modernize the way medical evaluations for the
            European Aviation Safety Agency (EASA) are done. Currently, these
            are still done by paper and every so often need to be redone. This
            process creates a lot of tedious and repetitive labour, since most
            information doesn't change from evaluation to evaluation, but also
            creates securities flaws as a pilot that didn't pass their
            evaluation can retry on a different country and be aproved.
          </p>
          <p>
            Our project tries to address these issues by creating a unified
            platform where each aviation professional's medical condition is
            stored, can be viewed and modified by approved medical staff as well
            as provide tools to ease future evaluations (auto-completed forms,
            etc.).
          </p>
        </div>
      </main>

      <footer>
        <h5>footer</h5>
      </footer>
    </div>
  );
};

export default airmeddigital;
