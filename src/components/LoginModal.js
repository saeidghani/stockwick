import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function LoginModal({ visible, onOk, onCancel }) {
  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible}>
      dddd
    </Modal>
  );
}

LoginModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LoginModal;
