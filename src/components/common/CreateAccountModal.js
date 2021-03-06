import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import { emailRules, userNameRules } from '../../constants/formRules';
import Drawer from '../UI/Drawer';
import BackButton from './BackButton';

const { Item } = Form;

function CreateAccountModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log('Success:', values);
    await dispatch.auth.setRequiredFields(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Content = () => (
    <div className="flex flex-col items-center">
      <div className="text-22px text-primary mt-10 mb-8">Create Your Account</div>
      <div className="w-full grid grid-cols-12">
        <Form
          name="createAccount"
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

CreateAccountModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

CreateAccountModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default CreateAccountModal;
