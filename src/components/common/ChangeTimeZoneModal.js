/*eslint-disable*/
import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import northAmericaIcon from '../../assets/icons/northAmerica.svg';
import southAmericaIcon from '../../assets/icons/southAmerica.svg';
import europeIcon from '../../assets/icons/europe.svg';
import africaIcon from '../../assets/icons/africa.svg';
import asiaIcon from '../../assets/icons/asia.svg';
import australiaIcon from '../../assets/icons/australia.svg';
import searchIcon from '../../assets/icons/search.svg';
import styleVar from '../../constants/styleVariables';
import { useQuery } from '../../hooks/useQuery';
import BackButton from './BackButton';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import SwipeSlider from '../UI/SwipeSlider';

function ChangeTimeZoneModal({ onOk, onCancel, modalVisible, drawerVisible }) {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  const timeZones = [
    { key: 1, title: 'North America', slug: 'North-America', icon: northAmericaIcon },
    { key: 2, title: 'South America', slug: 'South-America', icon: southAmericaIcon },
    { key: 3, title: 'Africa', slug: 'Africa', icon: africaIcon },
    { key: 4, title: 'Europe', slug: 'Europe', icon: europeIcon },
    { key: 5, title: 'Asia', slug: 'Asia', icon: asiaIcon },
    { key: 6, title: 'Australia', slug: 'Australia', icon: australiaIcon },
  ];

  // eslint-disable-next-line react/prop-types
  const Content = ({ wrapperClassName }) => (
    <div className={wrapperClassName}>
      <div className="text-white text-center mb-10">Choose Time Zone</div>
      <div className="px-2 xs:px-8 h-20 overflow-hidden">
        <SwipeSlider arrowClassName="md:hidden" wrapperClassName="relative">
          {timeZones.map((t) => (
            <div
              key={t.key}
              className={`flex flex-col justify-between items-center mx-2 h-20 overflow-hidden ${
                t.slug === parsedQuery.timeZone ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => setQuery({ timeZone: t.slug })}
            >
              <img src={t.icon} alt="" className="h-16 mx-auto" />
              <div className="text-white text-center">{t.title}</div>
            </div>
          ))}
        </SwipeSlider>
      </div>
      <div className="flex relative mt-8 px-2 xs:px-8 pb-80 c-primary-filled-input">
        <Input name="search" placeholder="Search..." className="w-full text-white" />
        <img className="absolute top-4 right-8 xs:right-12" src={searchIcon} alt="" />
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        wrapClassName="c-modal-padding-none c-primary-modal"
        closeIconClassName="text-white text-xl"
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={700}
      >
        <Content wrapperClassName="pt-6" />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full h-full"
        headerStyle={{ backgroundColor: styleVar.colors.fadePrimary2, border: 0 }}
        bodyStyle={{
          backgroundColor: styleVar.colors.fadePrimary2,
          paddingTop: 10,
          paddingLeft: 15,
          paddingRight: 15,
        }}
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
