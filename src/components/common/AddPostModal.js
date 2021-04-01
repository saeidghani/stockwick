import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import Modal from '../UI/Modal';
import BackButton from './BackButton';
import AddPost from './AddPost';
import Drawer from '../UI/Drawer';

function AddPostModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const [form] = Form.useForm();

  const onClose = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <div>
      <Modal
        wrapClassName="c-modal-padding-none"
        onCancel={onClose}
        onOk={onOk}
        visible={modalVisible}
      >
        <AddPost
          form={form}
          wrapperClassName="xs:pt-12"
          placeholder="#stonksgame #strong, post something…"
          displayAvatar
        />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full"
        bodyStyle={{ padding: 0 }}
        title={
          <div className="grid grid-cols-3 items-center">
            <BackButton onClick={onCancel} />
            <div className="text-primary justify-self-center">Create Post</div>
          </div>
        }
      >
        <AddPost
          form={form}
          wrapperClassName="xs:pt-12"
          contentClassName="xs:border xs:border-solid xs:border-gray-100"
          placeholder="#stonksgame #strong, post something…"
          displayAvatar
        />
      </Drawer>
    </div>
  );
}

AddPostModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

AddPostModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default AddPostModal;
