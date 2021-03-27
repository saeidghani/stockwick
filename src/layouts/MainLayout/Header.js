/*eslint-disable*/
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Badge, Grid } from 'antd';
import { PlusOutlined, BellOutlined, CaretUpOutlined } from '@ant-design/icons';
import clock from '../../assets/icons/clock.svg';
import usFlag from '../../assets/icons/usFlag.svg';
import Button from '../../components/UI/Button';
import ProfileDropdown from '../../components/common/ProfileDropdown';
import MenuDrawer from '../../components/common/MenuDrawer';
import { MessagesIcon } from '../../components/common/Icons';
import { useQuery } from '../../hooks/useQuery';
import CategoriesSearch from '../../components/common/CategoriesSearch';
import StockDataSlider from '../../components/common/StockDataSlider';
import ChangeTimeZoneModal from '../../components/common/ChangeTimeZoneModal';
import ChangeMarketModal from '../../components/common/ChangeMarketModal';
import RegisterModal from '../../components/common/RegisterModal';
import LoginModal from '../../components/common/LoginModal';
import CreateAccountModal from '../../components/common/CreateAccountModal';
import DirectMessageModal from '../../components/common/DirectMessageModal';
import NotificationModal from '../../components/common/NotificationModal';
import AddPostModal from '../../components/common/AddPostModal';
import routes from '../../routes/RouteMap';
import menuIcon from '../../assets/icons/menu.svg';
// import FindAccountModal from '../components/FindAccountModal';
// import ResetYourPasswordModal from '../components/ResetYourPasswordModal';

function Header() {
  const [changeTimeZoneModalVisible, setChangeTimeZoneModalVisible] = useState(false);
  const [changeMarketModalVisible, setChangeMarketModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [findAccountModalVisible, setFindAccountModalVisible] = useState(false);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [directMessageModalVisible, setDirectMessageModalVisible] = useState(false);
  const [addPostModalVisible, setAddPostModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { pathname } = useLocation();
  const [parsedQuery] = useQuery();
  const { useBreakpoint } = Grid;
  const { sm: isSmScreen } = useBreakpoint();

  return (
    <header className="page-header">
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
        visible={notificationModalVisible}
        onCancel={() => setNotificationModalVisible(false)}
      />
      <AddPostModal
        modalVisible={isSmScreen && addPostModalVisible}
        drawerVisible={!isSmScreen && addPostModalVisible}
        onCancel={() => setAddPostModalVisible(false)}
      />
      <MenuDrawer
        isAuth={!!parsedQuery.auth}
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onLoginClick={() => setLoginModalVisible(true)}
        onRegisterClick={() => setRegisterModalVisible(true)}
        onTimeZoneClick={() => setChangeTimeZoneModalVisible(true)}
        onMarketClick={() => setChangeMarketModalVisible(true)}
        onMessagesClick={() => setDirectMessageModalVisible(true)}
        onNotificationsClick={() => setNotificationModalVisible(true)}
      />
      <div className="hidden md:block">
        <div className="page-header-base bg-primary">
          <div className="flex justify-between px-4 py-4 lg:container">
            <div className="flex items-center space-x-3 lg:space-x-5">
              {/* TODO just use routes.home after adding auth */}
              <Link to={!!parsedQuery?.auth ? `${routes?.home}?auth=true` : routes?.home}>
                <div className="textLogo text-2xl cursor-pointer">stockwick</div>
              </Link>
              <div className="">
                <div className="text-white">NYSE closes in</div>
                <div className="text-white">03 : 03 : 59</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-10">
              <div className="flex items-center space-x-1">
                <img src={clock} alt="" />
                <div
                  className="text-white whitespace-nowrap cursor-pointer"
                  onClick={() => setChangeTimeZoneModalVisible(true)}
                >
                  15 : 46 : 01
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <img src={usFlag} alt="" />
                <div
                  className="text-white whitespace-nowrap cursor-pointer"
                  onClick={() => setChangeMarketModalVisible(true)}
                >
                  New York
                </div>
              </div>
              {!pathname.includes(routes.home) && <CategoriesSearch />}
            </div>
            {parsedQuery.auth ? (
              <div className="flex items-center space-x-4 lg:space-x-10">
                <div className="flex items-center space-x-5">
                  <Badge count={1} offset={[3, 2]} size="small">
                    <div
                      className="cursor-pointer"
                      onClick={() => setDirectMessageModalVisible(true)}
                    >
                      <MessagesIcon />
                    </div>
                  </Badge>
                  <Badge count={4} offset={[-2, 5]} size="small">
                    <BellOutlined
                      className="text-white text-xl"
                      onClick={() => setNotificationModalVisible(true)}
                    />
                  </Badge>
                  <ProfileDropdown />
                </div>
                <Button
                  text="Post"
                  wrapperClassName="c-secondary-btn"
                  onClick={() => setAddPostModalVisible(true)}
                />
              </div>
            ) : (
              <div className="flex items-center space-x-5">
                <Button
                  text="Register"
                  textClassName="text-secondary"
                  type="link"
                  onClick={() => setRegisterModalVisible(true)}
                />
                <Button
                  text="Login"
                  wrapperClassName="c-secondary-btn"
                  onClick={() => setLoginModalVisible(true)}
                />
              </div>
            )}
          </div>
        </div>
        {(!pathname?.includes(routes.home) ||
          (pathname?.includes(routes.home) && parsedQuery.auth)) && (
          <StockDataSlider wrapperClassName="page-header-slider" />
        )}
      </div>
      <div className="block md:hidden md:container">
        <div
          className="bg-primary grid grid-cols-3 items-center pt-4 px-6 pb-2
                        border-b border-solid border-fadePrimary"
        >
          {parsedQuery.auth ? (
            <PlusOutlined className="justify-self-start text-base text-white" />
          ) : (
            <div />
          )}
          {/* TODO just use routes.home after adding auth */}
          <Link
            className="justify-self-center"
            to={!!parsedQuery.auth ? `${routes.home}?auth=true` : routes.home}
          >
            <div className="textLogo justify-self-center text-2xl">stockwick</div>
          </Link>
          <Button
            type="link"
            onClick={() => setDrawerVisible(true)}
            icon={<img src={menuIcon} alt="" />}
            className="p-0"
            wrapperClassName="justify-self-end"
          />
        </div>
        {pathname?.includes(routes.home) && parsedQuery.auth && <StockDataSlider />}
        {!pathname?.includes(routes.home) && <StockDataSlider wrapperClassName="hidden sm:block" />}
        <div
          className="bg-primary flex justify-center items-center space-x-8 py-2
                       border-b border-solid border-fadePrimary"
        >
          <div className="flex space-x-2" onClick={() => setChangeTimeZoneModalVisible(true)}>
            <div className="text-white whitespace-nowrap">15 : 46 : 01</div>
            <div className="text-white opacity-50">GMT+3</div>
          </div>
          <div className="flex space-x-2">
            <div className="text-white whitespace-nowrap">NYSE closes in</div>
            <div className="text-white whitespace-nowrap">03 : 03 : 59</div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
