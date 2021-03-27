import React from 'react';
import PropTypes from 'prop-types';
import directMessageColorfulIcon from '../../assets/icons/directMessageColorful.svg';
import happyStickerIcon from '../../assets/icons/happySticker.svg';
import thumbnailIcon from '../../assets/icons/thumbnail.svg';
import Modal from '../UI/Modal';
import Avatar from '../UI/Avatar';
import Input from '../UI/Input';

function CommentMessageModal({ visible, onOk, onCancel }) {
  const AvatarName = () => (
    <div className="flex items-center space-x-2 w-full">
      <Avatar avatarClassName="w-11 h-11" />
      <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
    </div>
  );

  return (
    <Modal wrapClassName="c-modal-padding-none" onCancel={onCancel} onOk={onOk} visible={visible}>
      <div className="grid grid-cols-4 items-center">
        <div
          className="py-6 boldPrimaryText text-xl w-60 pl-6
           border-r border-solid border-itemBorder"
        >
          Direct Message
        </div>
        <div className="col-span-3 pl-8">
          <AvatarName />
        </div>
      </div>
      <div className="grid grid-cols-4 border-t border-solid border-itemBorder">
        <div
          className="flex flex-col space-y-4 py-6 boldPrimaryText text-xl w-60 pl-6
             border-r border-solid border-itemBorder"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <AvatarName key={i} />
          ))}
        </div>
        <div
          className="col-span-3 grid grid-cols-1 items-center
             py-6 px-6 text-xl w-60 pl-8 w-full"
        >
          <div className="self-start flex space-x-2 items-center w-full h-16">
            <Avatar />
            <div
              className="bg-midGray text-white py-1 px-4 text-base
                 rounded-tl-md rounded-tr-md rounded-br-md bg-opacity-60"
            >
              Hey
            </div>
          </div>
          <div
            className="self-start justify-self-end bg-blue text-white pt-1 pb-4 px-4 text-base
                 rounded-tl-md rounded-tr-md rounded-bl-md"
            style={{ width: 360 }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          </div>
          <div className="self-end flex w-full">
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
    </Modal>
  );
}

CommentMessageModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

CommentMessageModal.defaultProps = {
  visible: false,
  onOk: () => {},
};

export default CommentMessageModal;
