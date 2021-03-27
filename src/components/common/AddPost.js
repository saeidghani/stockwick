/*eslint-disable*/
import React, { useState } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import uploadImageIcon from '../../assets/icons/uploadImage.svg';
import uploadGifIcon from '../../assets/icons/uploadGif.svg';
import uploadVideoIcon from '../../assets/icons/uploadVideo.svg';
import pollIcon from '../../assets/icons/poll.svg';
import chartIcon from '../../assets/icons/chart.svg';
import { BullishIcon } from './Icons';
import balancedIcon from '../../assets/icons/balanced.svg';
import bearishIcon from '../../assets/icons/bearish.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Tag from './Tag';
import Avatar from '../UI/Avatar';
import AddPoll from './AddPoll';

const { TextArea } = Input;
const { Item } = Form;

function AddPost({
  contentClassName,
  postBtnClassName,
  placeholder,
  displayAvatar,
  uploadBtsPosition,
}) {
  const [addPoll, setAddPoll] = useState(false);

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
    <div className="h-full">
      <div
        className={`flex flex-col justify-between items-center space-x-3 w-full h-full my-auto
        xs:border xs:border-solid xs:border-gray-100 py-2 pr-6 pl-4 ${contentClassName}`}
      >
        <Button
          htmlType="submit"
          wrapperClassName="block xs:hidden absolute top-4 right-4"
          textClassName="text-primary"
          text="Post"
          type="link"
        />
        <div className="w-full flex space-x-4 mb-4">
          {displayAvatar && <Avatar wrapperClassName="" avatarClassName="w-11 h-11" />}
          <div className="flex flex-col w-full">
            <Item name="text" label="" className="c-input-border-none w-full mb-0">
              <TextArea
                className="w-full pt-3"
                placeholder={placeholder}
                name="text"
                onChange={() => {}}
                rows={4}
              />
            </Item>
            <AddPoll wrapperClassName={`w-full mt-4 ${addPoll ? '' : 'hidden'}`} />
          </div>
        </div>
        <div
          className={`justify-self-end self-${uploadBtsPosition} flex items-center space-x-3 absolute bottom-32 xs:bottom-0 pb-6 xs:pb-0 xs:relative`}
        >
          <Item name="uploadImage" className="cursor-pointer m-0">
            <img src={uploadImageIcon} alt="" />
          </Item>
          <Item name="uploadGif" className="cursor-pointer m-0">
            <img src={uploadGifIcon} alt="" />
          </Item>
          <Item name="uploadVideo" className="cursor-pointer m-0">
            <img src={uploadVideoIcon} alt="" />
          </Item>
          <div className="cursor-pointer" onClick={() => setAddPoll(true)}>
            <img src={pollIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="px-2 py-4 xs:p-6 bg-mediumGray flex justify-between absolute bottom-0 xs:relative">
        <div className="">
          <div className="flex items-center space-x-2 xs:space-x-4 mb-4">
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
        <Button
          htmlType="submit"
          wrapperClassName={`c-primary-btn hidden xs:block ${postBtnClassName}`}
          text="Post"
        />
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
};

AddPost.defaultProps = {
  contentClassName: '',
  postBtnClassName: '',
  uploadBtsPosition: 'start',
  placeholder: 'Start typing',
  displayAvatar: false,
};

export default AddPost;
