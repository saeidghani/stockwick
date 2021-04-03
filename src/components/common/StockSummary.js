/*eslint-disable*/
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
import apple from '../../assets/icons/appleBlack.svg';
import usFlag from '../../assets/icons/usFlag.svg';
import upArrowColorfulIcon from '../../assets/icons/upArrowColorful.svg';
import downArrowColorfulIcon from '../../assets/icons/downArrowColorful.svg';
import LogoIcon from './LogoIcon';
import Button from '../UI/Button';

function StockSummary() {
  return (
    <div className="grid grid-cols-9 gap-y-4 lg:flex lg:justify-between items-center bg-primary text-white w-full px-2 pt-5 pb-5">
      <div className="col-start-1 row-start-1 col-span-3 pl-3 sm:pl-2 sm:col-start-1 sm:row-start-1 sm:col-span-2 flex items-center space-x-3">
        <LogoIcon
          icon={apple}
          wrapperClassName="bg-white rounded-full relative"
          iconClassName="w-10 h-10 absolute top-1 left-1 pt-0.5"
          width={50}
        />
        <div className="flex flex-col justify-between h-full">
          <div className="text-xl uppercase">appl</div>
          <div className="whitespace-no-wrap text-sm capitalize">apple, Inc.</div>
        </div>
      </div>
      <div className="col-start-1 row-start-2 col-span-2 sm:col-start-3 sm:row-start-1 sm:col-span-2 sm:justify-self-start sm:pt-4 lg:pt-0 lg:col-start-2 flex flex-col sm:flex-row lg:flex-col justify-between items-center h-full">
        <img className="w-8 mb-2" src={usFlag} alt="" />
        <div className="text-sm sm:ml-2 sm:mb-2 lg:ml-0 lg:mb-0">nasdaq</div>
      </div>
      <div className="col-start-4 row-start-1 col-span-3 sm:col-start-1 sm:row-start-2 sm:col-span-2 sm:justify-self-end sm:relative sm:left-6 lg:left-0 flex flex-col justify-between items-center h-full">
        <div className="flex items-center space-x-2">
          <div className="text-22px text-secondary">7.13</div>
          <img src={upArrowColorfulIcon} className="w-5" alt="" />
          <div className="bg-darkGreen h-5 px-1 pb-0.5 rounded">1.84%</div>
        </div>
        <div className="text-sm">price</div>
      </div>
      <div className="col-start-7 row-start-1 col-span-3 sm:col-start-4 sm:row-start-2 sm:col-span-2 flex flex-col justify-between items-center h-full">
        <div className="flex">
          <div className="mr-2 text-xl text-accent mb-2">400 M</div>
          <img src={downArrowColorfulIcon} className="w-5" alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-white boldPrimaryText h-5 px-1 pb-0.5 rounded-md mr-2 uppercase">
            mega
          </div>
          <div className="text-sm">market cap</div>
        </div>
      </div>
      <div className="col-start-3 row-start-2 col-span-3 justify-self-end sm:justify-self-center sm:col-start-6 sm:row-start-2 sm:col-span-2 flex flex-col justify-between items-center h-full capitalize">
        <div className="text-base mb-1">may 04</div>
        <div className="text-sm">upcoming earnings</div>
      </div>
      <div className="col-start-6 row-start-2 col-span-2 justify-self-end sm:justify-self-center sm:col-start-8 sm:row-start-2 sm:col-span-1 flex flex-col justify-between items-center h-full">
        <div className="text-lg text-secondary">6.0%</div>
        <div className="text-sm">div yield </div>
      </div>
      <div className="col-start-8 row-start-2 col-span-2 justify-self-end sm:justify-self-center pr-4 sm:col-start-9 sm:row-start-2 sm:col-span-1 lg:pr-0 flex flex-col justify-between items-center h-full">
        <div className="text-lg text-secondary">4.1</div>
        <div className="text-sm">eps</div>
      </div>
      <div className="col-start-8 row-start-3 col-span-2 justify-self-center sm:col-start-9 sm:row-start-1 sm:col-span-1 text-sm self-center">
        <div className="hidden lg:block">21.4k followers</div>
        <div className="flex items-end space-x-2 ml-5 lg:hidden">
          <div className="">2.1 K</div>
          <UserOutlined className="text-lg" />
        </div>
      </div>
      <Button
        text="+follow stock"
        wrapperClassName="col-start-1 row-start-3 col-span-7 sm:pr-2 sm:col-start-7 sm:row-start-1 sm:col-span-2 c-secondary-btn c-secondary-btn--sm"
        textClassName="text-sm"
        block
      />
    </div>
  );
}

StockSummary.propTypes = {
  //
};

export default StockSummary;
