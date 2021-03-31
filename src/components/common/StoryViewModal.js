/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Avatar from '../UI/Avatar';
import dotsMenuIcon from '../../assets/icons/dotsMenu.svg';
import story from '../../assets/images/story.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';

function StoryViewModal({ modalVisible, drawerVisible, onOk, onCancel, onStoryViewers }) {
  const Content = () => (
    <div className="h-full relative">
      <img src={story} alt="" />
      <div className="absolute -bottom-6 left-4">
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

  const HeaderExtra = ({ width }) => (
    <div className="flex justify-between items-center" style={{ width }}>
      <div className="flex items-center space-x-2">
        <Avatar />
        <div className="">your story</div>
      </div>
      <img src={dotsMenuIcon} alt="" />
    </div>
  );

  return (
    <div>
      <Modal
        className="c-modal-header-sm"
        closeIconClassName="text-primary text-xl pt-5"
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={400}
        bodyStyle={{ padding: 0, height: 650 }}
        title={<HeaderExtra width={340} />}
      >
        <Content />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        closeIcon={<CloseOutlined className="text-primary text-xl pb-4" />}
        wrapClassName="w-full h-full"
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: 0 }}
        title={<HeaderExtra />}
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
