import React from 'react';
import style from './downloadFileButton.module.css'
// import DownloadIcon from '../public/assets/download-icon.svg';

const downloadFileButton = ({ fileName, children, title, description }) => {
  return (
    <a href={process.env.BACKEND_URL + '/files/' + fileName} download>
      {/* <DownloadIcon fill="white" height={500} width={500}></DownloadIcon> */}
      {/* <DownloadIcon fill="white" height={50} width={50} /> */}
      <div className={style.button}>
        <div className={style.icon}>
          ICONiiiiiiiiii
        </div>
        <div className={style.text}>
          <div>
            Title asddddddddddddddddddddddddddddddd 
          </div>
          <div>
            Description oiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
          </div>
        </div>
      </div>
    </a>
  );
};

export default downloadFileButton;
