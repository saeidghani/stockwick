import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import Drawer from './Drawer';
import menuIcon from '../assets/icons/menu.svg';
import styles from '../constants/styleVariables';
import routes from '../constants/routes';

function MenuDrawer({
  wrapperClassName,
  onTimeZoneClick,
  onMarketClick,
  onRegisterClick,
  onLoginClick,
  onMessagesClick,
  onNotificationsClick,
  isAuth,
}) {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={wrapperClassName}>
      <Button
        type="link"
        onClick={() => setVisible(true)}
        icon={<img src={menuIcon} alt="" />}
        className="p-0"
        iconClassName=""
      />
      <Drawer
        title="stockwick"
        titleClassName="textLogo text-center"
        className="c-drawer-round"
        headerStyle={{
          backgroundColor: styles.colors.fadePrimary2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          borderTopLeftRadius: '20px',
        }}
        bodyStyle={{ backgroundColor: styles.colors.fadePrimary2, padding: '0 20px' }}
        onClose={handleClose}
        closable={false}
        visible={visible}
        width={250}
      >
        {isAuth ? (
          <>
            <Button
              text="Profile"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                handleClose();
                history.push(routes.profile.index);
              }}
            />
            <Button
              text="Direct Messages"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                handleClose();
                onMessagesClick();
              }}
            />
            <Button
              text="Notifications"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                handleClose();
                onNotificationsClick();
              }}
            />
          </>
        ) : (
          <>
            <Button
              text="Login"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                handleClose();
                onLoginClick();
              }}
            />
            <Button
              text="Register"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                handleClose();
                onRegisterClick();
              }}
            />
          </>
        )}
        <Button
          text="Change Time Zone"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {
            handleClose();
            onTimeZoneClick();
          }}
        />
        <Button
          text="Change Market"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {
            handleClose();
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
  onMessagesClick: PropTypes.func,
  onNotificationsClick: PropTypes.func,
  isAuth: PropTypes.bool,
};

MenuDrawer.defaultProps = {
  wrapperClassName: '',
  onTimeZoneClick: () => {},
  onMarketClick: () => {},
  onRegisterClick: () => {},
  onLoginClick: () => {},
  onMessagesClick: () => {},
  onNotificationsClick: () => {},
  isAuth: false,
};

export default MenuDrawer;
