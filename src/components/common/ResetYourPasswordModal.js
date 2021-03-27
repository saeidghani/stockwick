import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { passwordRules, repeatPasswordRules } from '../../constants/formRules';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Button from '../UI/Button';
import BackButton from './BackButton';

const { Item } = Form;

function ResetYourPasswordModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = () => (
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

ResetYourPasswordModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

ResetYourPasswordModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default ResetYourPasswordModal;
