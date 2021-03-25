/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Modal from './Modal';
import Button from './Button';
import { passwordRules, repeatPasswordRules } from '../constants/formRules';

const { Item } = Form;

function ResetYourPasswordModal({ visible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible} width={600}>
      <div className="flex flex-col items-center">
        <div className="text-22px text-primary mt-10 mb-8">Reset your password</div>
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
            <Item name="password" rules={passwordRules} className="c-primary-password-input">
              <Input.Password placeholder="Password *" />
            </Item>

            <Item
              name="repeatPassword"
              rules={repeatPasswordRules}
              className="c-primary-password-input"
            >
              <Input.Password placeholder="Repeat Password *" />
            </Item>

            <Item>
              <Button htmlType="submit" wrapperClassName="c-filled-btn c-filled-btn--blue" block>
                Save Password
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

ResetYourPasswordModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

export default ResetYourPasswordModal;
