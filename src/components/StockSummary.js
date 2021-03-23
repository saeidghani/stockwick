import React from 'react';
// import PropTypes from 'prop-types';
import apple from '../assets/icons/appleBlack.svg';
import usFlag from '../assets/icons/usFlag.svg';
import upArrowColorfulIcon from '../assets/icons/upArrowColorful.svg';
import downArrowColorfulIcon from '../assets/icons/downArrowColorful.svg';
import LogoIcon from './LogoIcon';
import Button from './Button';

function StockSummary() {
  return (
    <div
      className="bg-primary text-white w-full flex justify-between items-center space-x-6 px-4 py-2"
      style={{ height: 130 }}
    >
      <LogoIcon
        icon={apple}
        wrapperClassName="sm:bg-white"
        iconClassName="sm:top-3 sm:left-4"
        width={72}
      />
      <div className="flex flex-col">
        <div className="">APPL</div>
        <div className="whitespace-no-wrap">Apple, Inc.</div>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-8 mb-2" src={usFlag} alt="" />
        <div className="">nasdaq</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="text-26px text-secondary">7.13</div>
          <img src={upArrowColorfulIcon} className="w-5" alt="" />
          <div className="bg-darkGreen h-5 px-1 pb-0.5 rounded">1.84%</div>
        </div>
        <div className="">price</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className="mr-2 text-xl text-accent mb-2">400 M</div>
          <img src={downArrowColorfulIcon} className="w-5" alt="" />
        </div>
        <div className="flex items-center">
          <div className="bg-white boldPrimaryText h-5 px-1 pb-0.5 rounded-md mr-2">mega</div>
          <div className="">market cap</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-lg">May 04</div>
        <div className="text-base">UPCOMING EARNINGS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-lg text-secondary">6.0%</div>
        <div className="text-base">div yield </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-lg text-secondary">4.1</div>
        <div className="text-base">eps</div>
      </div>
      <div className="text-lg">21.4k followers</div>
      <Button text="+follow stock" wrapperClassName="c-secondary-btn" />
    </div>
  );
}

StockSummary.propTypes = {
  //
};

export default StockSummary;
