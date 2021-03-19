import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children, isAuth, mainClassName }) {
  return (
    <div className="">
      <Header isAuth={isAuth} />
      <main className={`min-h-screen container ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool.isRequired,
  mainClassName: PropTypes.string,
};

MainLayout.defaultProps = {
  mainClassName: '',
};

export default MainLayout;
