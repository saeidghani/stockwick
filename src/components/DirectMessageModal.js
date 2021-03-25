import React from 'react';
import PropTypes from 'prop-types';
import directMessageIcon from '../assets/icons/directMessage.svg';
import { useQuery } from '../hooks/useQuery';
import happyStickerIcon from '../assets/icons/happySticker.svg';
import thumbnailIcon from '../assets/icons/thumbnail.svg';
import directMessageColorfulIcon from '../assets/icons/directMessageColorful.svg';
import Modal from './Modal';
import Avatar from './Avatar';
import Input from './Input';
import Drawer from './Drawer';
import BackButton from './BackButton';

function DirectMessageModal({ modalVisible, drawerVisible, onOk, onCancel }) {
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
    <div>
      <Modal
        wrapClassName="c-modal-padding-none"
        closeIconClassName=""
        onCancel={() => {
          setQuery({ messageTo: '' });
          onCancel();
        }}
        onOk={onOk}
        visible={modalVisible}
      >
        <MdDirectMessage />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full h-full"
        headerStyle={{}}
        title={
          <div className="flex justify-between items-center px-4">
            <BackButton
              onClick={() => {
                if (parsedQuery.messageTo) {
                  setQuery({ messageTo: '' });
                } else {
                  onCancel();
                }
              }}
            />
            {parsedQuery.messageTo ? (
              <div className="flex flex-col items-center space-y-2 pr-4">
                <Avatar avatarClassName="w-11 h-11" />
                <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
              </div>
            ) : (
              <div className="boldPrimaryText text-xl text-center pr-4">Direct Message</div>
            )}
            <div />
          </div>
        }
      >
        <SMDirectMessage />
      </Drawer>
    </div>
  );
}

DirectMessageModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  drawerVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

DirectMessageModal.defaultProps = {
  onOk: () => {},
};

export default DirectMessageModal;
