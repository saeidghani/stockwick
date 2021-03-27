import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import Modal from '../UI/Modal';
import AddPost from './AddPost';
import BackButton from './BackButton';
import Drawer from '../UI/Drawer';

function AddPostModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const [form] = Form.useForm();

  const onClose = () => {
    form.resetFields();
    onCancel();
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = () => (
    <div className="xs:pt-12">
      <Form
        name="addPost"
        initialValues={{
          choice1: '',
          choice2: '',
          days: '',
          extraChoices: '',
          hours: '',
          minutes: '',
          question: '',
          text: '',
          uploadGif: '',
          uploadImage: '',
          uploadVideo: '',
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="h-full"
      >
        <AddPost
          contentClassName="flex-col sm:items-start"
          postBtnClassName="self-end"
          placeholder="#stonksgame #strong, post something…"
          displayAvatar
        />
      </Form>
    </div>
  );

  return (
    <div>
      <Modal
        wrapClassName="c-modal-padding-none"
        onCancel={onClose}
        onOk={onOk}
        visible={modalVisible}
      >
        <Content />
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
        <Content />
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
