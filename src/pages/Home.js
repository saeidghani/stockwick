import React, { useState } from 'react';
import { Grid } from 'antd';
import { useQuery } from '../hooks/useQuery';
import Layout from '../layouts/MainLayout/MainLayout';
import CategoriesSearch from '../components/CategoriesSearch';
import ChangeTimeZoneModal from '../components/ChangeTimeZoneModal';
import ChangeMarketModal from '../components/ChangeMarketModal';
import RegisterModal from '../components/RegisterModal';
import LoginModal from '../components/LoginModal';
import DirectMessageModal from '../components/DirectMessageModal';
import NotificationModal from '../components/NotificationModal';
import AddPostModal from '../components/AddPostModal';
// import FindAccountModal from '../components/FindAccountModal';
// import ResetYourPasswordModal from '../components/ResetYourPasswordModal';
import CreateAccountModal from '../components/CreateAccountModal';

export default function Home() {
  const [changeTimeZoneModalVisible, setChangeTimeZoneModalVisible] = useState(false);
  const [changeMarketModalVisible, setChangeMarketModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [findAccountModalVisible, setFindAccountModalVisible] = useState(false);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [directMessageModalVisible, setDirectMessageModalVisible] = useState(false);
  const [addPostModalVisible, setAddPostModalVisible] = useState(false);

  const [parsedQuery] = useQuery();
  const { useBreakpoint } = Grid;
  const { sm: isSmScreen } = useBreakpoint();

  return (
    <Layout
      onTimeZoneClick={() => setChangeTimeZoneModalVisible(true)}
      onMarketClick={() => setChangeMarketModalVisible(true)}
      onRegisterClick={() => setRegisterModalVisible(true)}
      onLoginClick={() => setLoginModalVisible(true)}
      onMessagesClick={() => setDirectMessageModalVisible(true)}
      onNotificationClick={() => setNotificationModalVisible(true)}
      onPostClick={() => setAddPostModalVisible(true)}
      isAuth={parsedQuery.auth}
    >
      <ChangeTimeZoneModal
        modalVisible={isSmScreen && changeTimeZoneModalVisible}
        drawerVisible={!isSmScreen && changeTimeZoneModalVisible}
        onCancel={() => setChangeTimeZoneModalVisible(false)}
      />
      <ChangeMarketModal
        visible={changeMarketModalVisible}
        onCancel={() => setChangeMarketModalVisible(false)}
      />
      <RegisterModal
        modalVisible={isSmScreen && registerModalVisible}
        drawerVisible={!isSmScreen && registerModalVisible}
        onCancel={() => setRegisterModalVisible(false)}
      />
      <LoginModal
        modalVisible={isSmScreen && loginModalVisible}
        drawerVisible={!isSmScreen && loginModalVisible}
        onForgotPasswordClick={() => {
          setLoginModalVisible(false);
          setFindAccountModalVisible(true);
        }}
        onCancel={() => setLoginModalVisible(false)}
      />
      <CreateAccountModal
        modalVisible={isSmScreen && findAccountModalVisible}
        drawerVisible={!isSmScreen && findAccountModalVisible}
        onCancel={() => setFindAccountModalVisible(false)}
      />
      <DirectMessageModal
        modalVisible={isSmScreen && directMessageModalVisible}
        drawerVisible={!isSmScreen && directMessageModalVisible}
        onCancel={() => setDirectMessageModalVisible(false)}
      />
      <NotificationModal
        onCancel={() => setNotificationModalVisible(false)}
        visible={notificationModalVisible}
      />
      <AddPostModal onCancel={() => setAddPostModalVisible(false)} visible={addPostModalVisible} />
      <div
        className="min-h-screen bg-primary flex flex-col justify-center items-center space-y-4 px-2
                     sm:px-8 pb-12"
      >
        <div className="textLogo text-5xl sm:text-6xl md:text-7xl mb-10">stockwick</div>
        <div className="w-full grid grid-cols-12">
          <CategoriesSearch
            wrapperClassName="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10
                              lg:col-start-3 lg:col-span-8 lg:px-2 xl:col-start-4 xl:col-span-6 xl:px-6"
          />
        </div>
      </div>
    </Layout>
  );
}
