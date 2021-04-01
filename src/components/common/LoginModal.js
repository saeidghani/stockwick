import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox } from 'antd';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Button from '../UI/Button';
import BackButton from './BackButton';
import Divider from '../UI/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { passwordRules, emailRules } from '../../constants/formRules';

const { Item } = Form;

function LoginModal({
  modalVisible,
  drawerVisible,
  onOk,
  onCancel,
  onForgotPasswordClick,
  onOpenRegisterModal,
}) {
  const onFinish = (values) => {
    console.log('Success:', values);
    onCancel();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = () => (
    <>
      <div className="flex flex-col items-center mb-7">
        <div className="text-22px text-primary mb-2">Login</div>
        <div className="flex opacity-75">
          <div className="text-base text-primary">Don’t have an account yet?</div>
          <Button
            text="Sign Up"
            type="link"
            className="pl-1 pb-5 text-base"
            onClick={() => {
              onCancel();
              onOpenRegisterModal();
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 w-full px-0 xs:px-1 sm:px-8 pb-6">
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="col-start-1 row-start-3 xs:row-start-1 pr-0 xs:pr-2"
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
            onClick={() => {
              onCancel();
              onForgotPasswordClick();
            }}
          >
            Forgot Password ?
          </Button>
        </Form>
        <Divider wrapperClassName="row-start-2 xs:hidden" className="xs:bg-itemBorder w-16" />
        <Divider
          wrapperClassName="hidden xs:block col-start-2 row-start-1"
          className="xs:bg-itemBorder h-full"
          type="vertical"
        />
        <SocialAuthButtons wrapperClassName="col-start-1 row-start-1 pl-0 xs:col-start-2 xs:pl-6" />
      </div>
    </>
  );

  return (
    <div className="">
      <Modal onCancel={onCancel} onOk={onOk} visible={modalVisible} wrapClassName="w-full h-full">
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

LoginModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onForgotPasswordClick: PropTypes.func,
  onOpenRegisterModal: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

LoginModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onForgotPasswordClick: () => {},
  onOk: () => {},
};

export default LoginModal;
