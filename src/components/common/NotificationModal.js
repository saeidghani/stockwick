import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Avatar from '../UI/Avatar';

function NotificationModal({ visible, onOk, onCancel }) {
  return (
    <Modal
      wrapClassName="c-modal-padding-none"
      closeIconClassName=""
      onCancel={onCancel}
      onOk={onOk}
      visible={visible}
      width={400}
    >
      <div className="">
        <div className="boldPrimaryText text-xl pt-4 pb-4 pl-6">Notifications</div>
        <div
          className="flex flex-col px-4
           border-t border-solid border-itemBorder overflow-auto"
          style={{ height: 500 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="flex items-center space-x-2 py-4">
              <Avatar avatarClassName="w-11 h-11" />
              <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

NotificationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

NotificationModal.defaultProps = {
  onOk: () => {},
};

export default NotificationModal;
