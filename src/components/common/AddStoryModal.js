/*eslint-disable*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Upload, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import BackButton from './BackButton';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Drawer from '../UI/Drawer';
import Avatar from '../UI/Avatar';

const { Item } = Form;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function AddStoryModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const uploadProps = {
    name: 'story',
    multiple: false,
    showUploadList: false,
    onRemove: (file) => {},
    beforeUpload: (file) => {
      console.log(file);
      return false;
    },
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
    imageUrl,
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = ({ submitItemClassName }) => (
    <div className="h-full">
      <Form
        name="uploadStory"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-full h-full col-span-12 md:col-start-4 md:col-span-6"
      >
        <Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger className="w-full h-full" {...uploadProps}>
            {imageUrl ? <img src={imageUrl} alt="" style={{ width: '100%' }} /> : ''}
          </Upload.Dragger>
        </Item>

        <Item className={submitItemClassName}>
          <Button
            htmlType="submit"
            text="POST"
            wrapperClassName="c-secondary-btn"
            textClassName="text-secondary"
          />
        </Item>
      </Form>
    </div>
  );

  const HeaderExtra = () => (
    <div className="flex items-center space-x-2">
      <Avatar />
      <div className="">your story</div>
    </div>
  );

  return (
    <div>
      <Modal
        className="c-modal-header-sm"
        closeIconClassName="text-primary text-xl pt-6"
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={400}
        bodyStyle={{ padding: 0, height: 650 }}
        title={<HeaderExtra />}
      >
        <Content submitItemClassName="absolute bottom-0 right-4" />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        closeIcon={<CloseOutlined className="text-primary text-xl pt-2" />}
        wrapClassName="w-full h-full"
        bodyStyle={{ padding: 0 }}
        title={<HeaderExtra />}
      >
        <Content submitItemClassName="absolute bottom-0 right-6" />
      </Drawer>
    </div>
  );
}

AddStoryModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

AddStoryModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default AddStoryModal;
