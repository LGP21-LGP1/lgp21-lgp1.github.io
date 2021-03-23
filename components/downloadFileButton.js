import React from 'react';

const downloadFileButton = ({fileName, children}) => {
  return (
    <a href={process.env.BACKEND_URL + '/files/'+ fileName} download> {children} </a>
  );
};

export default downloadFileButton;
