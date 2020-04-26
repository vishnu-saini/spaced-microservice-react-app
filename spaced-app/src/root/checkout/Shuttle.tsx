import './Shuttle.scss';
import React from 'react';
import ShuttleImg from 'img/shuttle-scheme-ver.png';

const Shuttle = () => {
  return (
    <div className="checkout-shuttle">
      <img src={ShuttleImg} alt="shuttle" />
      <div className="highlight"></div>
    </div>
  );
};

export default Shuttle;
