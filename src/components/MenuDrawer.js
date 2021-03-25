/*eslint-disable*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import Button from './Button';
import menuIcon from '../assets/icons/menu.svg';

function MenuDrawer({
  wrapperClassName,
  onTimeZoneClick,
  onMarketClick,
  onRegisterClick,
  onLoginClick,
}) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={wrapperClassName}>
      <Button
        type="link"
        onClick={showDrawer}
        icon={<img src={menuIcon} alt="" />}
        className="p-0"
        iconClassName=""
      />
      <Drawer
        title={<span className="textLogo text-center">stockwick</span>}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button
          text="Login"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {
            onClose();
            onLoginClick();
          }}
        />
        <Button
          text="Register"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {
            onClose();
            onRegisterClick();
          }}
        />
        <Button
          text="Change Time Zone"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {
            onClose();
            onTimeZoneClick();
          }}
        />
        <Button
          text="Change Market"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {
            onClose();
            onMarketClick();
          }}
        />
      </Drawer>
    </div>
  );
}

MenuDrawer.propTypes = {
  wrapperClassName: PropTypes.string,
  onTimeZoneClick: PropTypes.func,
  onMarketClick: PropTypes.func,
  onRegisterClick: PropTypes.func,
  onLoginClick: PropTypes.func,
};

MenuDrawer.defaultProps = {
  wrapperClassName: '',
  onTimeZoneClick: () => {},
  onMarketClick: () => {},
  onRegisterClick: () => {},
  onLoginClick: () => {},
};

export default MenuDrawer;
