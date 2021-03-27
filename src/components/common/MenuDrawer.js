import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Drawer from '../UI/Drawer';
import styles from '../../constants/styleVariables';
import routes from '../../routes/RouteMap';

function MenuDrawer({
  visible,
  onClose,
  isAuth,
  wrapperClassName,
  onTimeZoneClick,
  onMarketClick,
  onRegisterClick,
  onLoginClick,
  onMessagesClick,
  onNotificationsClick,
}) {
  const history = useHistory();

  return (
    <div className={wrapperClassName}>
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
        onClose={onClose}
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
                onClose();
                history.push(routes.profile.index);
              }}
            />
            <Button
              text="Direct Messages"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                onClose();
                onMessagesClick();
              }}
            />
            <Button
              text="Notifications"
              type="link"
              wrapperClassName="flex justify-center mb-6"
              textClassName="text-white"
              onClick={() => {
                onClose();
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
          </>
        )}
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
  onMessagesClick: PropTypes.func,
  onNotificationsClick: PropTypes.func,
  onClose: PropTypes.func,
  isAuth: PropTypes.bool,
  visible: PropTypes.bool,
};

MenuDrawer.defaultProps = {
  wrapperClassName: '',
  onTimeZoneClick: () => {},
  onMarketClick: () => {},
  onRegisterClick: () => {},
  onLoginClick: () => {},
  onMessagesClick: () => {},
  onNotificationsClick: () => {},
  onClose: () => {},
  isAuth: false,
  visible: false,
};

export default MenuDrawer;
