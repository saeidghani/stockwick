import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Button from './Button';
import Divider from './Divider';

function ChangeMarketModal({ visible, onOk, onCancel }) {
  return (
    <Modal
      wrapClassName="c-modal-padding-none c-primary-modal"
      closeXClassName="c-close-x-white"
      className=""
      onCancel={onCancel}
      onOk={onOk}
      visible={visible}
      width={220}
    >
      <div className="text-white text-center pt-6">Change Market</div>
      <div className="flex flex-col items-center pb-4 mt-8 mb-6 px-6">
        <Button text="Tokyo Japan" type="link" textClassName="text-white text-opacity-60 text-xs" />
        <Divider wrapperClassName="c-divider" className="bg-white bg-opacity-5 w-16" />
        <Button text="New York United States" type="link" textClassName="text-white text-base" />
        <Divider wrapperClassName="c-divider" className="bg-white bg-opacity-5 w-16" />
        <Button
          text="LondonEngland"
          type="link"
          textClassName="text-white text-opacity-60 text-xs"
        />
        <Divider wrapperClassName="c-divider" className="bg-white bg-opacity-5 w-16" />
        <Button
          text="SydneyAustralia"
          type="link"
          textClassName="text-white text-opacity-60 text-xs"
        />
      </div>
    </Modal>
  );
}

ChangeMarketModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

ChangeMarketModal.defaultProps = {
  onOk: () => {},
};

export default ChangeMarketModal;
