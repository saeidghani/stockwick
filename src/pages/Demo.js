import React from 'react';
// import PropTypes from 'prop-types';
import Layout from '../layouts/MainLayout/MainLayout';
import Button from '../components/Button';
import SimilarSocks from '../components/SimilarSocks';
import TopMembers from '../components/TopMembers';
import Stories from '../components/Stories';
import StockWall from '../components/StockWall';
import NewRelease from '../components/NewRelease';

function Demo() {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-4 p-8">
        <div className="bg-fadePrimary w-1/2 h-40 flex justify-center space-x-8 p-6">
          <Button text="Post" wrapperClassName="c-secondary-btn" />
          <Button text="Post" wrapperClassName="c-secondary-btn c-secondary-btn--disabled" />
        </div>
        <div className="bg-gray-50 w-1/4 h-32 flex justify-center space-x-8 p-6">
          <Button text="Post" wrapperClassName="c-primary-btn" />
          <Button text="Post" wrapperClassName="c-primary-btn c-primary-btn--disabled" />
        </div>
        <SimilarSocks />
        <br />
        <TopMembers />
        <br />
        <Stories />
        <br />
        <StockWall />
        <br />
        <div className="w-80">
          <NewRelease />
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
