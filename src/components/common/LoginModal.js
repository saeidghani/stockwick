import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Button from '../UI/Button';
import BackButton from './BackButton';
import SocialAuthButtons from './SocialAuthButtons';

function LoginModal({ modalVisible, drawerVisible, onOk, onCancel, onOpenRegisterModal }) {
  const Content = () => (
    <div className="w-full grid grid-cols-12 px-0 xs:px-1 sm:px-8 pb-6">
      <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col items-center mb-7">
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
      <SocialAuthButtons wrapperClassName="w-full col-span-12 xs:col-start-4 xs:col-span-6" />
    </div>
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

LoginModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOpenRegisterModal: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

LoginModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default LoginModal;
