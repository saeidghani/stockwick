import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox } from 'antd';
import Modal from './Modal';
import Button from './Button';
import Divider from './Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { passwordRules, emailRules } from '../constants/formRules';

const { Item } = Form;

function LoginModal({ visible, onOk, onCancel, onForgotPasswordClick }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible} wrapClassName="w-full h-full">
      <div className="flex flex-col items-center mb-7">
        <div className="text-22px text-primary mb-2">Login</div>
        <div className="flex opacity-75">
          <div className="text-base text-primary">Don’t have an account yet?</div>
          <Button text="Sign Up" type="link" className="pl-1 pb-5 text-base" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 w-full px-0 md:px-8 pb-6">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="col-start-1 row-start-3 md:row-start-1 pr-0 md:pr-2"
        >
          <Item name="email" rules={emailRules} className="c-primary-input">
            <Input placeholder="Email*" />
          </Item>

          <Item name="password" rules={passwordRules} className="c-primary-password-input">
            <Input.Password placeholder="Password*" />
          </Item>

          <Item name="remember" valuePropName="checked">
            <Checkbox className="c-checkbox-primary text-primary">Remember me</Checkbox>
          </Item>

          <Item>
            <Button htmlType="submit" wrapperClassName="c-filled-btn c-filled-btn--blue" block>
              Sign In
            </Button>
          </Item>
          <Button
            type="link"
            wrapperClassName="-mt-5"
            className="p-0 text-primary"
            onClick={onForgotPasswordClick}
          >
            Forgot Password ?
          </Button>
        </Form>
        <Divider wrapperClassName="row-start-2 md:hidden" className="sm:bg-itemBorder w-16" />
        <Divider
          wrapperClassName="hidden md:block col-start-2 row-start-1"
          className="sm:bg-itemBorder h-full"
          type="vertical"
        />
        <SocialAuthButtons wrapperClassName="col-start-1 row-start-1 pl-0 md:col-start-2 md:pl-6" />
      </div>
    </Modal>
  );
}

LoginModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onForgotPasswordClick: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

LoginModal.defaultProps = {
  onOk: () => {},
};

export default LoginModal;
