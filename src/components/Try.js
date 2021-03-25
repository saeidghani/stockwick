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

  return <Modal onCancel={onCancel} onOk={onOk} visible={visible} />;
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
