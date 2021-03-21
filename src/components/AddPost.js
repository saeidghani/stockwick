import React from 'react';
import Input from './Input';
import uploadImageIcon from '../assets/images/icons/uploadImage.svg';
import uploadGifIcon from '../assets/images/icons/uploadGif.svg';
import uploadVideoIcon from '../assets/images/icons/uploadVideo.svg';
import chartIcon from '../assets/images/icons/chart.svg';
import { BullishIcon } from './Icons';
import balancedIcon from '../assets/images/icons/balanced.svg';
import bearishIcon from '../assets/images/icons/bearish.svg';
import facebookIcon from '../assets/images/icons/facebook.svg';
import twitterIcon from '../assets/images/icons/twitter.svg';
import linkedinIcon from '../assets/images/icons/linkedin.svg';
import Button from './Button';
import Checkbox from './Checkbox';
import Tag from './Tag';

function AddPost() {
  // eslint-disable-next-line react/prop-types
  const ShareTo = ({ children, text }) => (
    <Checkbox className="c-checkbox flex items-center" onChange={() => {}} checked={false}>
      <div className="flex items-center space-x-2 pb-0.5">
        <div>{children}</div>
        <div className="text-primary text-xs font-medium">{text}</div>
      </div>
    </Checkbox>
  );

  return (
    <div className="">
      <div
        className="flex items-center space-x-3 w-full my-auto
        border border-solid border-gray-100 py-2 pr-6 pl-4"
      >
        <div className="w-full c-input-border-none">
          <Input placeholder="Start typing " name="post" onChange={() => {}} />
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
            <ShareTo text="select all" />
            <ShareTo text="facebook">
              <img src={facebookIcon} alt="" />
            </ShareTo>
            <ShareTo text="twitter">
              <img src={twitterIcon} alt="" />
            </ShareTo>
            <ShareTo text="linkedin">
              <img src={linkedinIcon} alt="" />
            </ShareTo>
          </div>
        </div>
        <Button wrapperClassName="c-primary-btn" text="Post" />
      </div>
    </div>
  );
}

export default AddPost;
