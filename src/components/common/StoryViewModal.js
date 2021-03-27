import React from 'react';
import PropTypes from 'prop-types';
import story from '../../assets/images/story.png';
import dotsMenuIcon from '../../assets/icons/dotsMenu.svg';
import Modal from '../UI/Modal';
import Avatar from '../UI/Avatar';

function StoryViewModal({ visible, onOk, onCancel }) {
  return (
    <Modal
      wrapClassName="c-modal-padding-none"
      onCancel={onCancel}
      onOk={onOk}
      visible={visible}
      width={500}
    >
      <div className="relative">
        <img className="text-primary absolute top-7 right-12" src={dotsMenuIcon} alt="" />
        <div className="py-4">
          <img src={story} className="w-32 mx-auto" alt="" />
        </div>
        <div
          className="flex flex-col px-4
           border-t border-solid border-itemBorder child-borderBottom"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
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

StoryViewModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

StoryViewModal.defaultProps = {
  visible: false,
  onOk: () => {},
};

export default StoryViewModal;
