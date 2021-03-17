import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../components/common/Button';
import Layout from '../layouts/MainLayout/MainLayout';

function Demo() {
  return (
    <Layout>
      <div className="bg-primaryColor flex flex-col items-center space-y-4 p-8">
        <div className="bg-primaryColor w-1/2 h-40 flex justify-center space-x-8 p-6">
          <Button text="Post" wrapperClassName="c-primary-btn" />
          <Button text="Post" wrapperClassName="c-primary-btn c-primary-btn--disabled" />
        </div>
        <div className="bg-gray-50 w-1/2 h-40 flex justify-center space-x-8 p-6">
          <Button text="Post" wrapperClassName="c-secondary-btn" />
          <Button text="Post" wrapperClassName="c-secondary-btn c-secondary-btn--disabled" />
        </div>
      </div>
    </Layout>
  );
}

Demo.propTypes = {
  //
};

Demo.defaultProps = {};

export default Demo;
