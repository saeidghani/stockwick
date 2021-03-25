import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Modal from './Modal';
import Drawer from './Drawer';
import Button from './Button';
import BackButton from './BackButton';
import Divider from './Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { passwordRules, emailRules, userNameRules } from '../constants/formRules';

const { Item } = Form;

function RegisterModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = () => (
    <>
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
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 w-full px-0 xs:px-1 sm:px-8 pb-6">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="col-start-1 row-start-3 xs:row-start-1 pr-0 xs:pr-2"
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
        <Divider wrapperClassName="row-start-2 xs:hidden" className="sm:bg-itemBorder w-16" />
        <Divider
          wrapperClassName="hidden xs:block col-start-2 row-start-1 pb-4"
          className="sm:bg-itemBorder h-full"
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

RegisterModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

RegisterModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default RegisterModal;
