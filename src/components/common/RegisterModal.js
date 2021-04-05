import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Button from '../UI/Button';
import BackButton from './BackButton';
import SocialAuthButtons from './SocialAuthButtons';
import { emailRules, userNameRules } from '../../constants/formRules';

const { Item } = Form;

const stages = {
  socialAuth: 'socialAuth',
  createAccount: 'createAccount',
};

function RegisterModal({
  modalVisible,
  drawerVisible,
  onOk,
  onCancel,
  onOpenLoginModal,
  // eslint-disable-next-line no-unused-vars
  onOpenCreateAccountModal,
}) {
  // eslint-disable-next-line no-unused-vars
  const [currentStage, setCurrentStage] = useState(stages.createAccount);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log('Success:', values);
    await dispatch.auth.setRequiredFields(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const CreateAccountContent = () => (
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

  const RegisterContent = () => (
    <div className="w-full grid grid-cols-12 px-0 xs:px-1 sm:px-8 pb-6">
      <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col items-center mb-7">
        <div className="text-22px text-primary mb-2">Register</div>
        <div className="flex opacity-75">
          <div className="text-base text-primary">Already have an account?</div>
          <Button
            text="Sign In"
            type="link"
            className="pl-1 pb-5 text-base"
            textClassName=""
            onClick={() => {
              onCancel();
              onOpenLoginModal();
            }}
          />
        </div>
      </div>
      <SocialAuthButtons
        wrapperClassName="w-full col-span-12 xs:col-start-4 xs:col-span-6"
        onGetGoogleAuth={async () => {
          await dispatch.auth.getGoogleAuth();
          // onOpenCreateAccountModal();
        }}
        onGetFacebookAuth={async () => {
          await dispatch.auth.getFacebookAuth();
          // onOpenCreateAccountModal();
        }}
        onGetTwitterAuth={async () => {
          await dispatch.auth.getTwitterAuth();
          // onOpenCreateAccountModal();
        }}
        onGetLinkedinAuth={async () => {
          await dispatch.auth.getLinkedinAuth();
          // onOpenCreateAccountModal();
        }}
      />
    </div>
  );

  const Content = () => (
    <div>{currentStage === stages.socialAuth ? <RegisterContent /> : <CreateAccountContent />}</div>
  );

  return (
    <div className="">
      <Modal
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        wrapClassName="w-full h-full"
        width={700}
      >
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
  onOpenLoginModal: PropTypes.func.isRequired,
  onOk: PropTypes.func,
  onOpenCreateAccountModal: PropTypes.func,
};

RegisterModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
  onOpenCreateAccountModal: () => {},
};

export default RegisterModal;
