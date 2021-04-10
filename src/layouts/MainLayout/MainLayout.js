import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import routes from '../../routes/RouteMap';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children, isAuth, mainClassName }) {
  const { pathname } = useLocation();

  return (
    <div className={pathname.includes(routes.home) ? 'bg-primary' : ''}>
      <Header isAuth={isAuth} />
      <main className={`${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool,
  mainClassName: PropTypes.string,
};

MainLayout.defaultProps = {
  mainClassName: '',
  isAuth: false,
};

export default MainLayout;
