import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import styles from '../styles/solutions.module.css';

export default function solutions() {
  return (
    <div className="container">
      <Head>
        <title>Vortex - Solutions</title>
      </Head>
      <Navbar />
      <main>
        <h1 className="title">Nice Solutions</h1>
        <ul>
          <li>
            <Link
              href="/solutions/airmeddigital"
              as={process.env.BACKEND_URL + '/solutions/airmeddigital'}
            >
              <a>AIR MED DIGITAL</a>
            </Link>
          </li>
          <li>
            <Link
              href="/solutions/project2"
              as={process.env.BACKEND_URL + '/solutions/project2'}
            >
              <a>Project 2</a>
            </Link>
          </li>
        </ul>
      </main>

      <footer>
        <h5>footer</h5>
      </footer>
    </div>
  );
}
