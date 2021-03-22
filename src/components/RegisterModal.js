/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox } from 'antd';
import Modal from './Modal';
import Button from './Button';
import SocialAuthButtons from './SocialAuthButtons';
import { passwordRules, userNameRules } from '../constants/formRules';

const { Item } = Form;

function RegisterModal({ visible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible} width={900}>
      <div className="flex flex-col items-center mb-7">
        <div className="text-22px text-primary mb-2">Register</div>
        <div className="flex opacity-75">
          <div className="text-base text-primary">Already have an account?</div>
          <Button text="Sign In" type="link" className="pl-1 pb-5 text-base" />
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x w-full px-8 pb-6">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="pr-4"
        >
          <Item name="username" rules={userNameRules} className="c-primary-input">
            <Input placeholder="Username*" />
          </Item>

          <Item name="email" rules={userNameRules} className="c-primary-input">
            <Input placeholder="Email*" />
          </Item>

          <Item name="password" rules={passwordRules} className="c-primary-password-input">
            <Input.Password placeholder="Password*" />
          </Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              wrapperClassName="c-filled-btn c-filled-btn--blue"
              block
            >
              Sign In
            </Button>
          </Item>
        </Form>
        <SocialAuthButtons wrapperClassName="pl-4" />
      </div>
    </Modal>
  );
}

RegisterModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

export default RegisterModal;
