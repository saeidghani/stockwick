import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import Layout from '../layouts/MainLayout/MainLayout';
import SimilarSocks from '../components/SimilarSocks';
import TopMembers from '../components/TopMembers';
import Stories from '../components/Stories';
import StockWall from '../components/StockWall';
import NewsReleaseDetailed from '../components/NewsReleaseDetailed';
import NewsReleaseSummary from '../components/NewsReleaseSummary';
import StockDetails from '../components/StockDetails';
import Slider from '../components/Slider';
import StocksList from '../components/StocksList';
import Activity from '../components/Activity';
import ProfileIntro from '../components/ProfileIntro';
import SocialAuthButtons from '../components/SocialAuthButtons';
import LoginModal from '../components/LoginModal';
// import AutoComplete from '../components/AutoComplete';

function Demo() {
  // eslint-disable-next-line no-unused-vars
  const [loginModalVisible, setLoginModalVisible] = useState(true);

  return (
    <Layout>
      <LoginModal visible={loginModalVisible} onCancel={() => setLoginModalVisible(false)} />
      <div className="flex space-x-10 p-10">
        <Button text="Login Modal" onClick={() => setLoginModalVisible(true)} />
      </div>
      <div className="flex flex-col items-center space-y-10 p-8">
        <div className="bg-fadePrimary w-1/2 h-40 flex justify-center space-x-8 p-6">
          <Button text="Post" wrapperClassName="c-secondary-btn" />
          <Button text="Post" wrapperClassName="c-secondary-btn c-secondary-btn--disabled" />
        </div>
        <div className="bg-gray-50 w-1/4 h-32 flex justify-center space-x-8 p-6">
          <Button text="Post" wrapperClassName="c-primary-btn" />
          <Button text="Post" wrapperClassName="c-primary-btn c-primary-btn--disabled" />
        </div>
        <div className="w-3/5">
          <SimilarSocks />
        </div>
        <div className="w-4/5">
          <TopMembers />
        </div>
        <div className="w-3/5">
          <Stories />
        </div>
        <StockWall />
        <div className="w-80">
          <NewsReleaseDetailed />
        </div>
        <div className="w-2/3">
          <StockDetails />
        </div>
        <div className="w-80">
          <StocksList>
            <Slider />
          </StocksList>
        </div>
        <div className="w-80">
          <NewsReleaseSummary />
        </div>
        <div className="w-80">
          <Activity />
        </div>
        <div className="w-80">
          <ProfileIntro />
        </div>
        <Input wrapperClassName="c-primary-input" />
        <Button wrapperClassName="c-filled-btn c-filled-btn--blue" text="Sign In" />
        <Button wrapperClassName="c-filled-btn c-filled-btn--primary" text="Sign In" />
        <SocialAuthButtons />
      </div>
    </Layout>
  );
}

Demo.propTypes = {
  //
};

Demo.defaultProps = {};

export default Demo;
