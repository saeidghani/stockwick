import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import directMessageIcon from '../assets/icons/directMessage.svg';
import Modal from './Modal';
import Avatar from './Avatar';

function DirectMessageModal({ visible, onOk, onCancel }) {
  return (
    <Modal wrapClassName="c-modal-padding-none" onCancel={onCancel} onOk={onOk} visible={visible}>
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
            <div key={i} className="flex items-center space-x-2 w-full">
              <Avatar avatarClassName="w-11 h-11" />
              <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
            </div>
          ))}
        </div>
        <div className="col-span-3 flex justify-center items-center py-6 text-xl w-60 pl-8 w-full">
          <img className="w-24" src={directMessageIcon} alt="" />
        </div>
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
