import React from 'react';
import style from './downloadFileButton.module.css'
import { IoMdDownload } from 'react-icons/io';
// import DownloadIcon from '../public/assets/download-icon.svg';

const downloadFileButton = ({ fileName, children, title, type }) => {

  const border_radius_size = 40;
  let border_radius_style = {
    "border-radius": 0
  }
  if (type == 'top')
    border_radius_style['border-radius'] = `0px ${border_radius_size}px 0px 0px`
  else if (type == "bottom")
    border_radius_style['border-radius'] = `0px 0px ${border_radius_size}px 0px `

  return (
    <div className={style.downloadButtonContainer}>
      <a href={process.env.BACKEND_URL + '/files/' + fileName} download>
        <div className={style.downloadButton} style={border_radius_style}>
          <div className={style.textDiv}>
            <div>
              {title}
            </div>
            <div>
              {children}
            </div>
          </div>
          <div className={style.iconDiv}>
            <IoMdDownload size={50} fill={"#f5f5f5"} style={{ stroke: 'black', strokeWidth: '10'}}></IoMdDownload>
          </div>          
        </div>
      </a>
    </div>
  );
};

export default downloadFileButton;
