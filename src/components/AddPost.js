import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';
import uploadImageIcon from '../assets/icons/uploadImage.svg';
import uploadGifIcon from '../assets/icons/uploadGif.svg';
import uploadVideoIcon from '../assets/icons/uploadVideo.svg';
import chartIcon from '../assets/icons/chart.svg';
import { BullishIcon } from './Icons';
import balancedIcon from '../assets/icons/balanced.svg';
import bearishIcon from '../assets/icons/bearish.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import Button from './Button';
import Checkbox from './Checkbox';
import Tag from './Tag';
import Avatar from './Avatar';
import AddPoll from './AddPoll';

function AddPost({
  contentClassName,
  postBtnClassName,
  placeholder,
  displayAvatar,
  displayAddPoll,
  uploadBtsPosition,
}) {
  // eslint-disable-next-line react/prop-types
  const ShareTo = ({ children, text, textClassName = '' }) => (
    <Checkbox className="c-checkbox-simple flex items-center" onChange={() => {}} checked={false}>
      <div className="flex items-center pb-0.5">
        <div>{children}</div>
        <div className={`text-primary text-xs font-medium pl-1 ${textClassName}`}>{text}</div>
      </div>
    </Checkbox>
  );

  return (
    <div className="">
      <div
        className={`flex items-center space-x-3 w-full my-auto
        border border-solid border-gray-100 py-2 pr-6 pl-4 ${contentClassName}`}
      >
        <div className="w-full flex">
          {displayAvatar && <Avatar wrapperClassName="" avatarClassName="w-11 h-11" />}
          {!displayAddPoll ? (
            <TextArea
              wrapperClassName="c-input-border-none w-full"
              className="pt-3"
              placeholder={placeholder}
              name="post"
              onChange={() => {}}
            />
          ) : (
            <AddPoll wrapperClassName="ml-4 mt-12 w-full" />
          )}
        </div>
        <div className={`justify-self-end self-${uploadBtsPosition} flex items-center space-x-3`}>
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
            <Tag text="balanced">
              <img src={balancedIcon} alt="" className="bg-primary px-1.5" />
            </Tag>
            <Tag text="bearish">
              <img src={bearishIcon} alt="" className="bg-primary px-1.5" />
            </Tag>
          </div>
          <div className="text-darkGray mb-2">share to:</div>
          <div className="flex space-x-2">
            <ShareTo text="select all" textClassName="sm:pl-0" />
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
        <Button wrapperClassName={`c-primary-btn ${postBtnClassName}`} text="Post" />
      </div>
    </div>
  );
}

AddPost.propTypes = {
  contentClassName: PropTypes.string,
  postBtnClassName: PropTypes.string,
  placeholder: PropTypes.string,
  uploadBtsPosition: PropTypes.string,
  displayAvatar: PropTypes.bool,
  displayAddPoll: PropTypes.bool,
};

AddPost.defaultProps = {
  contentClassName: '',
  postBtnClassName: '',
  uploadBtsPosition: 'start',
  placeholder: 'Start typing',
  displayAvatar: false,
  displayAddPoll: false,
};

export default AddPost;
