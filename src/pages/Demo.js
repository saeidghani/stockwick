import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Button from '../components/Button';
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
import StockSummary from '../components/StockSummary';
import CategoriesSearch from '../components/CategoriesSearch';
import MenuDrawer from '../components/MenuDrawer';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import FindAccountModal from '../components/FindAccountModal';
import ResetYourPasswordModal from '../components/ResetYourPasswordModal';
import CreateAccountModal from '../components/CreateAccountModal';
import FollowListModal from '../components/FollowListModal';
import AddPostModal from '../components/AddPostModal';
import DirectMessageModal from '../components/DirectMessageModal';
import CommentMessageModal from '../components/CommentMessageModal';
import StoryViewModal from '../components/StoryViewModal';
import NotificationModal from '../components/NotificationModal';
import ChangeMarketModal from '../components/ChangeMarketModal';
import ChangeTimeZoneModal from '../components/ChangeTimeZoneModal';

function Demo() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [findAccountModalVisible, setFindAccountModalVisible] = useState(false);
  const [resetYourPasswordModalVisible, setResetYourPasswordModalVisible] = useState(false);
  const [createAccountModalVisible, setCreateAccountModalVisible] = useState(false);
  const [followListModalVisible, setFollowListModalVisible] = useState(false);
  const [addPostModalVisible, setAddPostModalVisible] = useState(false);
  const [directMessageModalVisible, setDirectMessageModalVisible] = useState(false);
  const [commentMessageModalVisible, setCommentMessageModalVisible] = useState(false);
  const [storyViewModalVisible, setStoryViewModalVisible] = useState(false);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [changeMarketModalVisible, setChangeMarketModalVisible] = useState(false);
  const [changeTimeZoneModalVisible, setChangeTimeZoneModalVisible] = useState(false);

  return (
    <Layout>
      <LoginModal visible={loginModalVisible} onCancel={() => setLoginModalVisible(false)} />
      <RegisterModal
        visible={registerModalVisible}
        onCancel={() => setRegisterModalVisible(false)}
      />
      <FindAccountModal
        visible={findAccountModalVisible}
        onCancel={() => setFindAccountModalVisible(false)}
      />
      <ResetYourPasswordModal
        visible={resetYourPasswordModalVisible}
        onCancel={() => setResetYourPasswordModalVisible(false)}
      />
      <CreateAccountModal
        visible={createAccountModalVisible}
        onCancel={() => setCreateAccountModalVisible(false)}
      />
      <FollowListModal
        visible={followListModalVisible}
        onCancel={() => setFollowListModalVisible(false)}
      />
      <AddPostModal visible={addPostModalVisible} onCancel={() => setAddPostModalVisible(false)} />
      <DirectMessageModal
        visible={directMessageModalVisible}
        onCancel={() => setDirectMessageModalVisible(false)}
      />
      <CommentMessageModal
        visible={commentMessageModalVisible}
        onCancel={() => setCommentMessageModalVisible(false)}
      />
      <StoryViewModal
        visible={storyViewModalVisible}
        onCancel={() => setStoryViewModalVisible(false)}
      />
      <NotificationModal
        visible={notificationModalVisible}
        onCancel={() => setNotificationModalVisible(false)}
      />
      <ChangeMarketModal
        visible={changeMarketModalVisible}
        onCancel={() => setChangeMarketModalVisible(false)}
      />
      <ChangeTimeZoneModal
        visible={changeTimeZoneModalVisible}
        onCancel={() => setChangeTimeZoneModalVisible(false)}
      />
      <div className="flex flex-wrap space-x-10 p-10 child-mb--xl">
        <Button text="Login Modal" onClick={() => setLoginModalVisible(true)} />
        <Button text="Register Modal" onClick={() => setRegisterModalVisible(true)} />
        <Button text="Find Account Modal" onClick={() => setFindAccountModalVisible(true)} />
        <Button
          text="Reset Your Password Modal"
          onClick={() => setResetYourPasswordModalVisible(true)}
        />
        <Button text="Create Account Modal" onClick={() => setCreateAccountModalVisible(true)} />
        <Button text="Follow List Modal" onClick={() => setFollowListModalVisible(true)} />
        <Button text="Add Post Modal" onClick={() => setAddPostModalVisible(true)} />
        <Button text="Direct Message Modal" onClick={() => setDirectMessageModalVisible(true)} />
        <Button text="Comment Message Modal" onClick={() => setCommentMessageModalVisible(true)} />
        <Button text="Story View Modal" onClick={() => setStoryViewModalVisible(true)} />
        <Button text="Notification Modal" onClick={() => setNotificationModalVisible(true)} />
        <Button text="Change Market Modal" onClick={() => setChangeMarketModalVisible(true)} />
        <Button text="Change Time Zone Modal" onClick={() => setChangeTimeZoneModalVisible(true)} />
      </div>
      <div className="flex flex-col items-center space-y-10 p-8">
        <div className="bg-primary w-20">
          <MenuDrawer />
        </div>
        <div className="w-60 mb-40">
          <CategoriesSearch />
        </div>
        <div className="w-full px-24 mt-10">
          <StockSummary />
        </div>
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
        <Button wrapperClassName="c-filled-btn c-filled-btn--blue" text="Sign In" />
        <Button wrapperClassName="c-filled-btn c-filled-btn--primary" text="Sign In" />
        <div className="w-1/3">
          <SocialAuthButtons />
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
