import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { emailRules } from '../../constants/formRules';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Drawer from '../UI/Drawer';
import BackButton from './BackButton';

const { Item } = Form;

function FindAccountModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
    onCancel();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = () => (
    <div className="flex flex-col items-center">
      <div className="text-22px text-primary mt-10 mb-8">Find your account</div>
      <div className="w-full grid grid-cols-12">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="w-full col-span-12 md:col-start-4 md:col-span-6"
        >
          <Item name="email" rules={emailRules} className="c-primary-input">
            <Input placeholder="Email" />
          </Item>

          <Item>
            <Button htmlType="submit" wrapperClassName="c-filled-btn c-filled-btn--blue" block>
              Submit
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );

  return (
    <div>
      <Modal onCancel={onCancel} onOk={onOk} visible={modalVisible} width={600}>
        <Content />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full h-full"
        headerStyle={{ border: 0 }}
        title={<BackButton onClick={onCancel} />}
      >
        <Content />
      </Drawer>
    </div>
  );
}

FindAccountModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

FindAccountModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default FindAccountModal;
