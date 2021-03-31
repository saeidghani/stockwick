import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import northAmericaIcon from '../../assets/icons/northAmerica.svg';
import southAmericaIcon from '../../assets/icons/southAmerica.svg';
import europeIcon from '../../assets/icons/europe.svg';
import africaIcon from '../../assets/icons/africa.svg';
import asiaIcon from '../../assets/icons/asia.svg';
import searchIcon from '../../assets/icons/search.svg';
import styleVar from '../../constants/styleVariables';
import BackButton from './BackButton';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import { useQuery } from '../../hooks/useQuery';

function ChangeTimeZoneModal({ onOk, onCancel, modalVisible, drawerVisible }) {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  const timeZones = [
    { key: 1, title: 'North America', slug: 'North-America', icon: northAmericaIcon },
    { key: 2, title: 'South America', slug: 'South-America', icon: southAmericaIcon },
    { key: 3, title: 'Africa', slug: 'Africa', icon: africaIcon },
    { key: 4, title: 'Europe', slug: 'Europe', icon: europeIcon },
    { key: 5, title: 'Asia', slug: 'Asia', icon: asiaIcon },
  ];

  const Content = () => (
    <>
      <div className="text-white text-center pt-6 mb-10">Change Time Zone</div>
      <div className="flex justify-between px-4">
        {timeZones.map((t) => (
          <div
            key={t.key}
            className="flex flex-col justify-between items-center"
            onClick={() => setQuery({ timeZone: t.slug })}
          >
            <img src={t.icon} alt="" />
            <div className="text-white">{t.title}</div>
          </div>
        ))}
      </div>
      <div className="flex px-6 relative mt-8 pb-80 c-primary-filled-input">
        <Input name="search" placeholder="Search..." className="w-full text-white" />
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
