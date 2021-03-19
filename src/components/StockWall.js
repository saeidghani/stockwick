import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import likeFilledIcon from '../assets/images/icons/likeFilled.svg';
import dislikeOutlineIcon from '../assets/images/icons/dislikeOutline.svg';
import arrowFilledIcon from '../assets/images/icons/arrowFilled.svg';
import bullishIcon from '../assets/images/icons/bullish.svg';
import bearishIcon from '../assets/images/icons/bearish.svg';
import uploadImageIcon from '../assets/images/icons/uploadImage.svg';
import uploadGifIcon from '../assets/images/icons/uploadGif.svg';
import uploadVideoIcon from '../assets/images/icons/uploadVideo.svg';
import chartIcon from '../assets/images/icons/chart.svg';
import balancedIcon from '../assets/images/icons/balanced.svg';
import facebookIcon from '../assets/images/icons/facebook.svg';
import twitterIcon from '../assets/images/icons/twitter.svg';
import linkedinIcon from '../assets/images/icons/linkedin.svg';
import avatarImg from '../assets/images/avatar.jpg';
import { BullishIcon } from './Icons';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

function StockWall() {
  // eslint-disable-next-line react/prop-types
  const Post = ({ isBullish, isBearish }) => (
    <div className="flex space-x-2">
      <div>
        <Avatar src={avatarImg} className="w-12 h-12" />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="">
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
            <div className="text-lightGray mb-1">Posted on Jan 20 2021, 14:21</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-lightGray">stockwick</div>
            <div
              className={`flex items-center space-x-2 px-2 h-8 rounded-2xl ${
                isBullish ? 'bg-darkGreen' : isBearish ? 'bg-accent' : ''
              }`}
            >
              {isBullish ? <img src={bullishIcon} alt="a" /> : <img src={bearishIcon} alt="a" />}
              <div className="text-xs text-white font-medium">Bullish</div>
            </div>
          </div>
        </div>
        <p className="mb-4 text-black text-base">
          Apple Stock Surging Ahead Of Possible Record Holiday Quarter. Wall Street analysts are
          pounding the table for Apple stock ahead of the company’s December-quarter earnings…
        </p>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-4">
            <img src={likeFilledIcon} alt="a" />
            <div className="boldPrimaryText">Agree</div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={arrowFilledIcon} alt="a" />
            <div className="boldPrimaryText">Disagree</div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={dislikeOutlineIcon} alt="a" />
            <div className="boldPrimaryText">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );

  // eslint-disable-next-line no-unused-vars,react/prop-types
  const Tag = ({ children, text }) => (
    <div className="flex h-8">
      {children}
      <div className="flex items-center px-4 bg-white text-primary text-xs">
        <span className="">{text}</span>
      </div>
    </div>
  );

  const AddPost = () => (
    <div className="">
      <div
        className="flex items-center space-x-3 w-full my-auto
        border border-solid border-gray-100 py-2 pr-6 pl-4"
      >
        <div className="w-full c-input-border-none">
          <Input placeholder="Start typing " />
        </div>
        <div className="justify-self-end flex items-center space-x-3">
          <img src={uploadImageIcon} alt="" />
          <img src={uploadGifIcon} alt="" />
          <img src={uploadVideoIcon} alt="" />
        </div>
      </div>
      <div className="p-6 bg-mediumGray flex justify-between">
        <div className="">
          <div className="flex items-center space-x-4 mb-4">
            <Tag text="all">
              <img src={chartIcon} alt="" className="bg-primary px-1.5" />
            </Tag>
            <Tag text="bullish">
              <BullishIcon
                fill="secondary"
                wrapperClassName="bg-primary px-1.5 flex items-center"
              />
            </Tag>
            <Tag text="all">
              <img src={chartIcon} alt="" className="bg-primary px-1.5" />
            </Tag>
            <Tag text="balanced">
              <img src={balancedIcon} alt="" className="bg-primary px-1.5" />
            </Tag>
            <Tag text="bearish">
              <img src={bearishIcon} alt="" className="bg-primary px-1.5" />
            </Tag>
          </div>
          <div className="text-darkGray mb-2">share to:</div>
          <div className="flex space-x-2">
            <Checkbox className="c-checkbox flex items-center">
              <div className="text-primary text-xs font-medium pb-0.5">select all</div>
            </Checkbox>
            <Checkbox className="c-checkbox flex items-center">
              <div className="flex items-center space-x-2 pb-0.5">
                <img src={facebookIcon} alt="" />
                <div className="text-primary text-xs font-medium">facebook</div>
              </div>
            </Checkbox>
            <Checkbox className="c-checkbox flex items-center">
              <div className="flex items-center space-x-2 pb-0.5">
                <img src={twitterIcon} alt="" />
                <div className="text-primary text-xs font-medium">twitter</div>
              </div>
            </Checkbox>
            <Checkbox className="c-checkbox flex items-center">
              <div className="flex items-center space-x-2 pb-0.5">
                <img src={linkedinIcon} alt="" />
                <div className="text-primary text-xs font-medium">linkedin</div>
              </div>
            </Checkbox>
          </div>
        </div>
        <Button wrapperClassName="c-primary-btn" text="Post" />
      </div>
    </div>
  );

  return (
    <div className="card p-0">
      <div className="px-3 py-2">
        <div className="boldPrimaryText text-xl mb-8">appl wall</div>
        <Post isBullish />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mt-8 ml-14">
            <Post isBearish />
          </div>
        ))}
      </div>
      <AddPost />
    </div>
  );
}

StockWall.propTypes = {
  //
};

export default StockWall;
