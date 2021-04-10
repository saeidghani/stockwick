/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import dotsMenuIcon from '../../assets/icons/dotsMenu.svg';
import story from '../../assets/images/story.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Avatar from '../UI/Avatar';

function StoryViewModal({ modalVisible, drawerVisible, onOk, onCancel, onStoryViewers }) {
  const Content = () => (
    <div className="h-full relative">
      <HeaderExtra />
      <img className="h-full w-full object-cover" src={story} alt="" />
      <div className="absolute bottom-0 left-4 pb-4">
        <div className="flex items-center space-x-2">
          <Avatar src={avatar2} />
          <Avatar src={avatar3} />
        </div>
        <div
          className="text-white mt-1 ml-2 cursor-pointer"
          onClick={() => {
            onCancel();
            onStoryViewers();
          }}
        >
          Viewed By 13
        </div>
      </div>
    </div>
  );

  const HeaderExtra = () => (
    <div className="">
      <div className="bg-gradient-to-b from-midGray absolute top-0 left-0 right-0 h-20" />
      <div className="z-10">
        <div className="flex items-center space-x-2 absolute top-4 left-4">
          <Avatar />
          <div className="text-white">your story</div>
        </div>
        <div className="flex space-x-2 items-center absolute top-7 right-4">
          <img className="" src={dotsMenuIcon} alt="" />
          <div onClick={onCancel}>
            <CloseOutlined className="text-primary text-xl pb-1 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        className="c-modal-header-sm"
        closable={false}
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={400}
        bodyStyle={{ padding: 0, height: 650 }}
        title=""
      >
        <Content />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        closable={false}
        wrapClassName="w-full h-full"
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: 0 }}
        title=""
      >
        <Content />
      </Drawer>
    </div>
  );
}

StoryViewModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

StoryViewModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default StoryViewModal;
