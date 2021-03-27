import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import northAmericaIcon from '../../assets/icons/northAmerica.svg';
import southAmericaIcon from '../../assets/icons/southAmerica.svg';
import europeIcon from '../../assets/icons/europe.svg';
import africaIcon from '../../assets/icons/africa.svg';
import asiaIcon from '../../assets/icons/asia.svg';
import Input from '../UI/Input';
import searchIcon from '../../assets/icons/search.svg';
import BackButton from './BackButton';
import Drawer from '../UI/Drawer';
import styleVar from '../../constants/styleVariables';

function ChangeTimeZoneModal({ onOk, onCancel, modalVisible, drawerVisible }) {
  const Content = () => (
    <>
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
    </>
  );

  return (
    <div>
      <Modal
        wrapClassName="c-modal-padding-none c-primary-modal"
        closeIconClassName="text-white text-xl"
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={400}
      >
        <Content />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full h-full"
        headerStyle={{ backgroundColor: styleVar.colors.fadePrimary2, border: 0 }}
        bodyStyle={{ backgroundColor: styleVar.colors.fadePrimary2 }}
        title={
          <BackButton
            onClick={onCancel}
            iconClassName="text-white text-base mr-2"
            textClassName="text-white text-base mr-2"
          />
        }
      >
        <Content />
      </Drawer>
    </div>
  );
}

ChangeTimeZoneModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

ChangeTimeZoneModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default ChangeTimeZoneModal;
