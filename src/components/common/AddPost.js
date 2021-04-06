/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Button from '../UI/Button';
import Avatar from '../UI/Avatar';
import AddPoll from './AddPoll';
import uploadImageIcon from '../../assets/icons/uploadImage.svg';
import uploadGifIcon from '../../assets/icons/uploadGif.svg';
import uploadVideoIcon from '../../assets/icons/uploadVideo.svg';
import pollIcon from '../../assets/icons/poll.svg';
import Tag from './Tag';
import chartIcon from '../../assets/icons/chart.svg';
import { BullishIcon } from './Icons';
import balancedIcon from '../../assets/icons/balanced.svg';
import bearishIcon from '../../assets/icons/bearish.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import Checkbox from '../UI/Checkbox';

const { TextArea } = Input;
const { Item } = Form;

function AddPost({
  wrapperClassName,
  contentClassName,
  postBtnClassName,
  uploadBtnClassName,
  footerClassName,
  tagsClassName,
  textAreaWrapperClassName,
  pollPlusClassName,
  pollWidth,
  form,
  formName,
  placeholder,
  displayAvatar,
  miniBox,
  textAreaRows,
}) {
  const [addPoll, setAddPoll] = useState(false);

  /* const { setFieldsValue } = form;

  useEffect(() => {
    setAddPoll(false);
    setFieldsValue({ days: 1 });
  }, []);*/

  const initialValues = {
    choice1: '',
    choice2: '',
    days: '',
    extraChoices: '',
    hours: '',
    minutes: '',
    question: '',
    text: '',
    uploadGif: '',
    uploadImage: '',
    uploadVideo: '',
    remember: true,
  };

  // eslint-disable-next-line react/prop-types,no-shadow
  const ShareTo = ({ children, text, textClassName = 'ml-1' }) => (
    <Checkbox className="c-checkbox-simple flex items-center" onChange={() => {}} checked={false}>
      <div className="flex justify-between items-center pb-0.5 ml-1">
        <div>{children}</div>
        <div className={`text-primary text-xs font-medium ${textClassName}`}>{text}</div>
      </div>
    </Checkbox>
  );

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={wrapperClassName}>
      <Form
        name={formName}
        initialValues={initialValues}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="h-full"
      >
        {!miniBox && (
          <Button
            htmlType="submit"
            wrapperClassName="block xs:hidden absolute top-4 right-2 z-10"
            textClassName="text-primary"
            text="Post"
            type="link"
          />
        )}
        <div className="h-full">
          <div
            className={
              contentClassName || 'flex flex-col justify-between items-center w-full h-full my-auto'
            }
          >
            <div className={textAreaWrapperClassName || 'w-full flex space-x-4 mb-4 pt-2'}>
              {displayAvatar && <Avatar wrapperClassName="" avatarClassName="w-11 h-11" />}
              <div className="grid grid-cols-1 w-full">
                <Item name="text" label="" className="c-input-border-none w-full mb-0">
                  <TextArea
                    className="w-full py-2"
                    placeholder={placeholder}
                    name="text"
                    onChange={() => {}}
                    rows={textAreaRows}
                  />
                </Item>
                <AddPoll
                  wrapperClassName={`w-full mt-4 ${displayAvatar ? '' : 'pl-8'} ${
                    addPoll ? '' : 'hidden'
                  }`}
                  pollPlusClassName={pollPlusClassName}
                  pollWidth={pollWidth}
                />
              </div>
            </div>
            <div
              className={
                uploadBtnClassName ||
                'justify-self-end self-start flex items-center space-x-3 absolute bottom-32 xs:bottom-0 pl-3 xs:pb-0 xs:relative'
              }
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
              <div className="cursor-pointer" onClick={() => setAddPoll((prevState) => !prevState)}>
                <img src={pollIcon} alt="" />
              </div>
            </div>
          </div>
          <footer
            className={`px-4 py-4 lg:pl-0 lg:pt-6 lg:pb-6 w-full bg-mediumGray flex justify-between absolute bottom-0 xs:relative ${footerClassName}`}
          >
            <div className="">
              <div className={tagsClassName || 'flex space-x-2 items-center mb-2'}>
                <Tag text="all" wrapperClassName="" textClassName="px-3">
                  <img src={chartIcon} alt="" className="w-8 bg-primary px-1.5" />
                </Tag>
                <Tag
                  text="bullish"
                  textClassName="text-secondary"
                  textBoxClassName="bg-primary flex items-center px-2 text-primary text-xs"
                >
                  <BullishIcon
                    fill="secondary"
                    wrapperClassName="w-8 bg-primary px-1.5 flex items-center"
                  />
                </Tag>
                <Tag text="balanced">
                  <img src={balancedIcon} alt="" className="w-8 bg-primary px-1.5" />
                </Tag>
                <Tag text="bearish">
                  <img src={bearishIcon} alt="" className="w-8 bg-primary px-1.5" />
                </Tag>
              </div>
              <div className="lg:pl-6">
                <div className="text-darkGray mb-2">share to:</div>
                <div className="flex lg:grid grid-cols-4">
                  <ShareTo text="select all" textClassName="whitespace-no-wrap" />
                  <ShareTo text="facebook">
                    <img src={facebookIcon} className="w-4 h-4" alt="" />
                  </ShareTo>
                  <ShareTo text="twitter">
                    <img src={twitterIcon} className="w-4 h-4" alt="" />
                  </ShareTo>
                  <ShareTo text="linkedin">
                    <img src={linkedinIcon} className="w-4 h-4" alt="" />
                  </ShareTo>
                </div>
              </div>
            </div>
            <Button
              htmlType="submit"
              wrapperClassName={`c-primary-btn hidden xs:block mt-4 xl:mt-0 ${postBtnClassName}`}
              text="Post"
            />
          </footer>
        </div>
      </Form>
    </div>
  );
}

AddPost.propTypes = {
  wrapperClassName: PropTypes.string,
  formName: PropTypes.string,
  contentClassName: PropTypes.string,
  uploadBtnClassName: PropTypes.string,
  postBtnClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  tagsClassName: PropTypes.string,
  pollPlusClassName: PropTypes.string,
  pollWidth: PropTypes.string,
  placeholder: PropTypes.string,
  uploadBtsPosition: PropTypes.string,
  children: PropTypes.node,
  displayAvatar: PropTypes.bool,
  miniBox: PropTypes.bool,
  textAreaRows: PropTypes.number,
};

AddPost.defaultProps = {
  wrapperClassName: '',
  formName: '',
  contentClassName: '',
  uploadBtnClassName: '',
  postBtnClassName: '',
  footerClassName: '',
  tagsClassName: '',
  pollPlusClassName: '',
  pollWidth: '',
  uploadBtsPosition: 'start',
  placeholder: 'Start typing',
  children: null,
  displayAvatar: false,
  miniBox: false,
  textAreaRows: 1,
};

export default AddPost;
