import React from 'react';
import style from './downloadFileButton.module.css'
import { IoMdDownload } from 'react-icons/io';
// import DownloadIcon from '../public/assets/download-icon.svg';

const downloadFileButton = ({ fileName, children, title }) => {
  return (
    <div className={style.downloadButtonContainer}>
      <a href={process.env.BACKEND_URL + '/files/' + fileName} download>
        <div className={style.downloadButton}>
          <div className={style.iconDiv}>
            <IoMdDownload size={70}></IoMdDownload>
          </div>
          <div className={style.textDiv}>
            <div>
              {title}
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default downloadFileButton;
