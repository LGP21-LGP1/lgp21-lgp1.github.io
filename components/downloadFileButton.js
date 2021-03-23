import React from 'react';
import DownloadIcon from '../public/assets/download-icon.svg';

const downloadFileButton = ({ fileName, children }) => {
  return (
    <a href={process.env.BACKEND_URL + '/files/' + fileName} download>
      {/* <DownloadIcon fill="white" height={500} width={500}></DownloadIcon> */}
      {/* <DownloadIcon fill="white" height={50} width={50} /> */}
      {children}
    </a>
  );
};

export default downloadFileButton;
