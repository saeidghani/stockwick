import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Modal from './Modal';
import Button from './Button';
import Divider from './Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { emailRules, passwordRules, userNameRules } from '../constants/formRules';

const { Item } = Form;

function RegisterModal({ visible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible}>
      <div className="flex flex-col items-center mb-7">
        <div className="text-22px text-primary mb-2">Register</div>
        <div className="flex opacity-75">
          <div className="text-base text-primary">Already have an account?</div>
          <Button
            text="Sign In"
            type="link"
            className="pl-1 pb-5 text-base"
            textClassName="text-secondary"
          />
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
          <Item name="username" rules={userNameRules} className="c-primary-input">
            <Input placeholder="Username*" />
          </Item>

          <Item name="email" rules={emailRules} className="c-primary-input">
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
        <Divider wrapperClassName="row-start-2 md:hidden" className="sm:bg-itemBorder w-16" />
        <Divider
          wrapperClassName="hidden md:block col-start-2 row-start-1 pb-4"
          className="sm:bg-itemBorder h-full"
          type="vertical"
        />
        <SocialAuthButtons wrapperClassName="col-start-1 row-start-1 pl-0 md:col-start-2 md:pl-6" />
      </div>
    </Modal>
  );
}

RegisterModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

RegisterModal.defaultProps = {
  onOk: () => {},
};

export default RegisterModal;
