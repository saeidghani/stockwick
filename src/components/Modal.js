import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const _Modal = ({
  title,
  className,
  wrapClassName,
  visible,
  onOk,
  onCancel,
  children,
  okButtonProps,
  cancelButtonProps,
  okText,
  cancelText,
  width,
  closable,
  ...props
}) => (
  <Modal
    className={`p-0 ${className}`}
    wrapClassName={wrapClassName}
    centered
    title={title}
    visible={visible}
    closable={closable}
    onCancel={onCancel}
    width={width}
    footer={null}
    {...props}
  >
    {children}
  </Modal>
);

_Modal.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  title: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  okButtonProps: PropTypes.shape({}),
  cancelButtonProps: PropTypes.shape({}),
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  width: PropTypes.number,
};

_Modal.defaultProps = {
  visible: false,
  closable: true,
  children: '',
  title: '',
  className: '',
  wrapClassName: '',
  okButtonProps: {},
  cancelButtonProps: {},
  okText: '',
  cancelText: '',
  width: 679,
};

export default _Modal;
