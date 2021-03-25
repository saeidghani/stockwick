import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function MainLayout({
  children,
  isAuth,
  mainClassName,
  onTimeZoneClick,
  onMarketClick,
  onRegisterClick,
  onLoginClick,
  onMessagesClick,
  onNotificationClick,
  onPostClick,
}) {
  return (
    <div className="">
      <Header
        isAuth={isAuth}
        onTimeZoneClick={onTimeZoneClick}
        onMarketClick={onMarketClick}
        onRegisterClick={onRegisterClick}
        onLoginClick={onLoginClick}
        onMessagesClick={onMessagesClick}
        onNotificationClick={onNotificationClick}
        onPostClick={onPostClick}
      />
      <main className={`min-h-screen ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool,
  mainClassName: PropTypes.string,
  onTimeZoneClick: PropTypes.func,
  onMarketClick: PropTypes.func,
  onRegisterClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  onMessagesClick: PropTypes.func,
  onNotificationClick: PropTypes.func,
  onPostClick: PropTypes.func,
};

MainLayout.defaultProps = {
  mainClassName: '',
  isAuth: false,
  onTimeZoneClick: () => {},
  onMarketClick: () => {},
  onRegisterClick: () => {},
  onLoginClick: () => {},
  onMessagesClick: () => {},
  onNotificationClick: () => {},
  onPostClick: () => {},
};

export default MainLayout;
