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
    form.setFieldsValue({ days: 1, hours: 1, minutes: 1 });
    onCancel();
  };

  return (
    <div>
      <Modal
        wrapClassName="c-modal-padding-none"
        onCancel={onClose}
        onOk={onOk}
        visible={modalVisible}
        width={800}
      >
        <AddPost
          form={form}
          wrapperClassName="xs:pt-12"
          contentClassName="flex justify-between items-center w-full h-full my-auto px-4"
          uploadBtnClassName="justify-self-center self-start flex items-center space-x-3"
          tagsClassName="flex space-x-2 items-center pl-4 mb-2"
          pollPlusClassName="absolute top-24 right-28"
          postBtnClassName="self-end c-primary-btn hidden xs:block mt-4 xl:mt-0"
          placeholder="#stonksgame #strong, post something…"
          textAreaRows={4}
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
          contentClassName="flex justify-between items-center w-full h-full my-auto px-4"
          footerClassName="px-2 py-4 w-full bg-mediumGray flex justify-between absolute bottom-0"
          uploadBtnClassName="justify-self-center self-start flex items-center space-x-3
                              absolute bottom-36 pb-2"
          tagsClassName="flex space-x-2 items-center mb-2"
          pollPlusClassName="absolute top-24 right-28"
          allTagsClassName="px-0"
          placeholder="#stonksgame #strong, post something…"
          textAreaRows={4}
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
