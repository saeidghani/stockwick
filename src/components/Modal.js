import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { LeftOutlined, CloseOutlined } from '@ant-design/icons';

const _Modal = ({
  title,
  className,
  wrapClassName,
  closeIconClassName,
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
  switchCloseIcon,
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
    <div
      className={`cursor-pointer flex items-center ${
        switchCloseIcon ? 'md:hidden' : 'hidden'
      } ${closeIconClassName}`}
      onClick={onCancel}
    >
      <LeftOutlined className="text-base mr-2" />
      <div className="text-base pt-0.5">BACK</div>
    </div>
    <div
      className={`cursor-pointer justify-end ${
        switchCloseIcon ? 'hidden md:flex' : 'flex'
      } ${closeIconClassName}`}
      onClick={onCancel}
    >
      <CloseOutlined className="text-xl" />
    </div>
    {children}
  </Modal>
);

_Modal.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  switchCloseIcon: PropTypes.bool,
  title: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  closeIconClassName: PropTypes.string,
  okButtonProps: PropTypes.shape({}),
  cancelButtonProps: PropTypes.shape({}),
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  width: PropTypes.number,
};

_Modal.defaultProps = {
  visible: false,
  closable: false,
  switchCloseIcon: true,
  children: '',
  title: '',
  className: '',
  wrapClassName: '',
  closeIconClassName: 'text-primary',
  okButtonProps: {},
  cancelButtonProps: {},
  okText: '',
  cancelText: '',
  width: 900,
  onOk: () => {},
};

export default _Modal;
