import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { LeftOutlined } from '@ant-design/icons';
import directMessageIcon from '../assets/icons/directMessage.svg';
import Modal from './Modal';
import Avatar from './Avatar';
import { useQuery } from '../hooks/useQuery';
import Input from './Input';
import happyStickerIcon from '../assets/icons/happySticker.svg';
import thumbnailIcon from '../assets/icons/thumbnail.svg';
import directMessageColorfulIcon from '../assets/icons/directMessageColorful.svg';

function DirectMessageModal({ visible, onOk, onCancel }) {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  const MdDirectMessage = () => (
    <>
      <div className="grid grid-cols-4">
        <div
          className="py-6 boldPrimaryText text-xl w-60 pl-6
           border-r border-solid border-itemBorder"
        >
          Direct Message
        </div>
      </div>
      <div className="grid grid-cols-4 border-t border-solid border-itemBorder">
        <div
          className="flex flex-col space-y-4 py-6 boldPrimaryText text-xl w-60 pl-6
             border-r border-solid border-itemBorder"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-2 w-full cursor-pointer">
              <Avatar avatarClassName="w-11 h-11" />
              <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
            </div>
          ))}
        </div>
        <div className="col-span-3 flex justify-center items-center py-6 text-xl w-60 pl-8 w-full">
          <img className="w-24" src={directMessageIcon} alt="" />
        </div>
      </div>
    </>
  );

  const SMDirectMessageList = () => (
    <>
      <div
        className="flex justify-between items-center pt-5 pb-4 px-4
           border-b border-solid border-itemBorder"
      >
        <div className="cursor-pointer flex items-center" onClick={onCancel}>
          <LeftOutlined className="text-base mr-2" />
          <div className="text-base pt-0.5">BACK</div>
        </div>
        <div className="boldPrimaryText text-xl text-center pr-4">Direct Message</div>
        <div />
      </div>
      <div className="flex flex-col boldPrimaryText text-xl child-borderBottom">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center space-x-2 w-full p-4 cursor-pointer"
            onClick={() => setQuery({ messageTo: i })}
          >
            <Avatar avatarClassName="w-11 h-11" />
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          </div>
        ))}
      </div>
    </>
  );

  const SMDirectMessageSingle = () => (
    <div>
      <div
        className="flex justify-between items-center space-x-2 w-full pt-4 pb-2 px-4
                         border-b border-solid border-itemBorder"
      >
        <div
          className="self-start cursor-pointer flex items-center"
          onClick={() => setQuery({ messageTo: '' })}
        >
          <LeftOutlined className="text-base mr-2" />
          <div className="text-base pt-0.5">BACK</div>
        </div>
        <div className="flex flex-col items-center space-y-2 pr-4">
          <Avatar avatarClassName="w-11 h-11" />
          <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
        </div>
        <div />
      </div>
      <div className="p-6">
        <div className="flex space-x-2 items-center w-full h-16 mb-2">
          <Avatar />
          <div
            className="bg-midGray text-white py-1 px-4 text-base
                 rounded-tl-md rounded-tr-md rounded-br-md bg-opacity-60"
          >
            Hey
          </div>
        </div>
        <div
          className="ml-auto bg-blue text-white pt-1 pb-4 px-3 text-base
                 rounded-tl-md rounded-tr-md rounded-bl-md mb-20"
          style={{ width: 310 }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        </div>
        <div className="mt-auto flex w-full">
          <div className="relative flex-grow mr-4">
            <Input
              wrapperClassName="c-round-filled-input--light primary-placeholder--fade w-full"
              onChange={() => {}}
              name="comment"
              placeholder="Write a Message…"
            />
            <div className="flex space-x-2 absolute top-3 right-4">
              <img className="w-6" src={happyStickerIcon} alt="" />
              <img className="w-6" src={thumbnailIcon} alt="" />
            </div>
          </div>
          <img className="w-10" src={directMessageColorfulIcon} alt="" />
        </div>
      </div>
    </div>
  );

  const SMDirectMessage = () => (
    <div>{!parsedQuery.messageTo ? <SMDirectMessageList /> : <SMDirectMessageSingle />}</div>
  );

  return (
    <Modal
      wrapClassName="c-modal-padding-none"
      closeIconClassName="hidden md:block absolute top-5 md:right-5"
      onCancel={() => {
        setQuery({ messageTo: '' });
        onCancel();
      }}
      onOk={onOk}
      visible={visible}
    >
      <div className="hidden md:block">
        <MdDirectMessage />
      </div>
      <div className="block md:hidden">
        <SMDirectMessage />
      </div>
    </Modal>
  );
}

DirectMessageModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

DirectMessageModal.defaultProps = {
  onOk: () => {},
};

export default DirectMessageModal;
