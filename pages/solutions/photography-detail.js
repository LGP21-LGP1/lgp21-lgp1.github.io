import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from '../../styles/solutions.module.css';
import Image from 'next/image';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import Link from 'next/link';

const changeAppearance = event => {
  event.preventDefault()
}

const photographyDetail = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Vortex - Solution: Photography - Product Detail</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ajk2viw.css" />
        </Head>
        <Navbar dark={false} page={'solutions'} />
        <Link 
          href="/solutions/photography"
          as={process.env.BACKEND_URL + '/solutions/photography'}>
          <h3 className={style.solutionback}>
            <IoArrowBackCircleOutline size={30} />        
            <a className={style.marginleft}>Back to Product List</a>
          </h3>
        </Link>
        <div className={style.container}>
          <img className={style.solutionimagedetail}
            src="/assets/logo1.png"
            alt="Photography solution"
            width={300}
            height={300}
          />
          <h1 className={style.productnamedetail}>Product Name</h1>
          <p className={style.solutiontextdetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id urna tempus, dapibus nisl vel, malesuada ligula. Ut consectetur enim commodo, tincidunt ligula in, volutpat lacus. Proin interdum libero eget enim iaculis, ac hendrerit erat iaculis. Aliquam feugiat est neque, et consectetur risus vulputate id. Maecenas at dolor non augue cursus tempus. Suspendisse sagittis facilisis maximus.</p>
          <h3 className={style.learnmore}>Learn more:</h3>
          <p className={style.solutiontextbelowdetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id urna tempus, dapibus nisl vel, malesuada ligula. Ut consectetur enim commodo, tincidunt ligula in, volutpat lacus. Proin interdum libero eget enim iaculis, ac hendrerit erat iaculis. Aliquam feugiat est neque, et consectetur risus vulputate id. Maecenas at dolor non augue cursus tempus. Suspendisse sagittis facilisis maximus. Quisque egestas nunc turpis. Mauris orci ex, efficitur id interdum ac, faucibus ut nibh. Vivamus tempus bibendum turpis, sit amet pharetra eros aliquet quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div className={style.updates}>
          <h3 className={style.solutionforward}>
            <IoArrowForwardCircleOutline size={30} />        
            <a className={style.marginleft2}>Want updates on this project?</a>

          </h3>

        <form className={style.rcorners} onSubmit={changeAppearance}>
          <input className={style.input} type="email" placeholder="Your email..." name="email"/>
          <button type="submit" className= {style.button}>subscribe</button>
        </form>
         
        </div>
        <Footer dark={true} />
      </div>
    </>
  );
};

export default photographyDetail;
