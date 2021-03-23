import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import northAmericaIcon from '../assets/icons/northAmerica.svg';
import southAmericaIcon from '../assets/icons/southAmerica.svg';
import europeIcon from '../assets/icons/europe.svg';
import africaIcon from '../assets/icons/africa.svg';
import asiaIcon from '../assets/icons/asia.svg';
import Input from './Input';
import searchIcon from '../assets/icons/search.svg';

function ChangeTimeZoneModal({ visible, onOk, onCancel }) {
  return (
    <Modal
      wrapClassName="c-modal-padding-none c-primary-modal"
      closeXClassName="c-close-x-white"
      className=""
      onCancel={onCancel}
      onOk={onOk}
      visible={visible}
      width={400}
    >
      <div className="text-white text-center pt-6 mb-10">Change Time Zone</div>
      <div className="flex justify-between px-4">
        <div className="flex flex-col justify-between items-center">
          <img src={northAmericaIcon} alt="" />
          <div className="text-white">North America</div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={southAmericaIcon} alt="" />
          <div className="text-white">South America</div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={africaIcon} alt="" />
          <div className="text-white">Africa</div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={europeIcon} alt="" />
          <div className="text-white">Europe</div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={asiaIcon} alt="" />
          <div className="text-white">Asia</div>
        </div>
      </div>
      <div className="flex px-6 relative mt-8 pb-80">
        <Input
          wrapperClassName="c-primary-filled-input w-full"
          onChange={() => {}}
          name="search"
          placeholder="Search..."
        />
        <img className="absolute top-4 right-10" src={searchIcon} alt="" />
      </div>
    </Modal>
  );
}

ChangeTimeZoneModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

ChangeTimeZoneModal.defaultProps = {
  onOk: () => {},
};

export default ChangeTimeZoneModal;
