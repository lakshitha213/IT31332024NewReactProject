import React from 'react';
import './FontSizeToggle.css'

const FontSizeToggle = ({ setFontSize }) => {
  return (
    <>
    <div className="font-size-toggle">
       
      <p>Font Size</p>
      <button className="b" onClick={() => setFontSize('16px')}>S</button>
      <button className="b" onClick={() => setFontSize('20px')}>M</button>
      <button className="b" onClick={() => setFontSize('24px')}>L</button>
        
      </div>
        <hr></hr>
        </>
  );
};

export default FontSizeToggle;
