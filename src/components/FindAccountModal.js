/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Modal from './Modal';
import Button from './Button';
import { emailRules } from '../constants/formRules';

const { Item } = Form;

function FindAccountModal({ visible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible} width={900}>
      <div className="flex flex-col items-center w-1/3 mx-auto">
        <div className="text-22px text-primary mt-12 mb-8">Find your account</div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="w-full"
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
    </Modal>
  );
}

FindAccountModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

export default FindAccountModal;
