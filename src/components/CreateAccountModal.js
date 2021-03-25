/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Modal from './Modal';
import Button from './Button';
import { emailRules, userNameRules } from '../constants/formRules';

const { Item } = Form;

function CreateAccountModal({ visible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible} width={600}>
      <div className="flex flex-col items-center">
        <div className="text-22px text-primary mt-10 mb-8">Create Your Account</div>
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
              <Input placeholder="Email *" />
            </Item>

            <Item name="username" rules={userNameRules} className="c-primary-input">
              <Input placeholder="Username *" />
            </Item>

            <Item>
              <Button htmlType="submit" wrapperClassName="c-filled-btn c-filled-btn--blue" block>
                Submit
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

CreateAccountModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

export default CreateAccountModal;
