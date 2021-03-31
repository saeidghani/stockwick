/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Avatar from '../UI/Avatar';
import dotsMenuIcon from '../../assets/icons/dotsMenu.svg';
import story from '../../assets/images/story.png';

function StoryViewersModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const Content = ({ height }) => (
    <div className="h-full relative">
      <img className="text-primary absolute top-7 right-12 pr-2" src={dotsMenuIcon} alt="" />
      <div className="py-4">
        <img src={story} className="w-32 mx-auto" alt="" />
      </div>
      <div
        className="flex flex-col px-4
           border-t border-solid border-itemBorder child-borderBottom overflow-auto"
        style={{ height }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="flex items-center space-x-2 py-2">
            <Avatar avatarClassName="w-11 h-11" />
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        className="c-modal-header-sm"
        closeIconClassName="text-primary text-xl pt-4"
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={400}
        bodyStyle={{ padding: 0, height: 650 }}
      >
        <Content submitItemClassName="absolute bottom-0 right-4" height={380} />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        closeIcon={<CloseOutlined className="text-primary text-xl pb-4" />}
        wrapClassName="w-full h-full"
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: 0 }}
      >
        <Content submitItemClassName="absolute bottom-0 right-6" height={620} />
      </Drawer>
    </div>
  );
}

StoryViewersModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

StoryViewersModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default StoryViewersModal;
