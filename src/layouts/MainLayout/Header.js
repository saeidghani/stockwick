/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Badge, Grid } from 'antd';
import { PlusOutlined, BellOutlined } from '@ant-design/icons';
import clock from '../../assets/icons/clock.svg';
import usFlag from '../../assets/icons/usFlag.svg';
import { useQuery } from '../../hooks/useQuery';
import routes from '../../routes/RouteMap';
import menuIcon from '../../assets/icons/menu.svg';
import searchWhiteIcon from '../../assets/icons/searchWhite.svg';
import Button from '../../components/UI/Button';
import ProfileDropdown from '../../components/common/ProfileDropdown';
import MenuDrawer from '../../components/common/MenuDrawer';
import { MessagesIcon } from '../../components/common/Icons';
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
import FindAccountModal from '../../components/common/FindAccountModal';
import ResetPasswordModal from '../../components/common/ResetPasswordModal';
import SearchModal from '../../components/common/SearchModal';

function Header() {
  const [changeTimeZoneModalVisible, setChangeTimeZoneModalVisible] = useState(false);
  const [changeMarketModalVisible, setChangeMarketModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [findAccountModalVisible, setFindAccountModalVisible] = useState(false);
  const [createAccountModalVisible, setCreateAccountModalVisible] = useState(false);
  const [resetPasswordModalVisible, setResetPasswordModalVisible] = useState(false);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [directMessageModalVisible, setDirectMessageModalVisible] = useState(false);
  const [addPostModalVisible, setAddPostModalVisible] = useState(false);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { useBreakpoint } = Grid;
  const { sm: smUp } = useBreakpoint();
  const { pathname } = useLocation();
  const [parsedQuery, query, setQuery] = useQuery();

  const { market, timeZone, categoryTitle } = parsedQuery || {};

  useEffect(() => {
    if (!market) setQuery({ market: 'New-York-United-States' });
    if (!timeZone) setQuery({ timeZone: 'North-America' });
    if (!categoryTitle) setQuery({ categoryTitle: 'stocks' });
  }, [query, market, timeZone, categoryTitle]);

  return (
    <header className="page-header">
      <ChangeTimeZoneModal
        modalVisible={smUp && changeTimeZoneModalVisible}
        drawerVisible={!smUp && changeTimeZoneModalVisible}
        onCancel={() => setChangeTimeZoneModalVisible(false)}
      />
      <ChangeMarketModal
        visible={changeMarketModalVisible}
        onCancel={() => setChangeMarketModalVisible(false)}
      />
      <RegisterModal
        modalVisible={smUp && registerModalVisible}
        drawerVisible={!smUp && registerModalVisible}
        onCancel={() => setRegisterModalVisible(false)}
        onOpenLoginModal={() => setLoginModalVisible(true)}
      />
      <LoginModal
        modalVisible={smUp && loginModalVisible}
        drawerVisible={!smUp && loginModalVisible}
        onForgotPasswordClick={() => setFindAccountModalVisible(true)}
        onCancel={() => setLoginModalVisible(false)}
        onOpenRegisterModal={() => setRegisterModalVisible(true)}
      />
      <FindAccountModal
        modalVisible={smUp && findAccountModalVisible}
        drawerVisible={!smUp && findAccountModalVisible}
        onCancel={() => setFindAccountModalVisible(false)}
      />
      <CreateAccountModal
        modalVisible={smUp && createAccountModalVisible}
        drawerVisible={!smUp && createAccountModalVisible}
        onCancel={() => setCreateAccountModalVisible(false)}
      />
      <ResetPasswordModal
        modalVisible={smUp && resetPasswordModalVisible}
        drawerVisible={!smUp && resetPasswordModalVisible}
        onCancel={() => setResetPasswordModalVisible(false)}
      />
      <DirectMessageModal
        modalVisible={smUp && directMessageModalVisible}
        drawerVisible={!smUp && directMessageModalVisible}
        onCancel={() => setDirectMessageModalVisible(false)}
      />
      <NotificationModal
        visible={notificationModalVisible}
        onCancel={() => setNotificationModalVisible(false)}
      />
      <AddPostModal
        modalVisible={smUp && addPostModalVisible}
        drawerVisible={!smUp && addPostModalVisible}
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
      <SearchModal
        modalVisible={smUp && searchModalVisible}
        drawerVisible={!smUp && searchModalVisible}
        onCancel={() => setSearchModalVisible(false)}
      />
      <div className="hidden lg:block relative">
        <div className="page-header-base bg-primary border-b border-solid border-fadePrimary">
          <div className="flex justify-between px-4 py-4 xl:container">
            <div className="flex items-center space-x-3 lg:space-x-5">
              {/* TODO just use routes.home after adding auth */}
              <Link
                to={!!parsedQuery?.auth ? `${routes?.feed.index}?auth=true` : routes?.feed.index}
              >
                <div className="textLogo text-2xl cursor-pointer">stockwick</div>
              </Link>
              <div className="">
                <div className="text-white">NYSE closes in</div>
                <div className="text-white">03 : 03 : 59</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
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
              {!pathname.includes(routes.home) && (
                <>
                  <div className="hidden lg:block w-64 xl:w-80">
                    <CategoriesSearch selectWrapperClassName="h-14 w-24" />
                  </div>
                  <div className="lg:hidden pl-4" onClick={() => setSearchModalVisible(true)}>
                    <img src={searchWhiteIcon} className="w-6" alt="" />
                  </div>
                </>
              )}
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
        {parsedQuery.auth && (
          <div className="relative">
            <StockDataSlider
              wrapperClassName={pathname.includes(routes.home) ? '' : 'page-header-slider'}
            />
          </div>
        )}
      </div>
      <div className="block lg:hidden lg:container">
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
          <div className="justify-self-end flex items-center space-x-6">
            {!pathname.includes(routes.home) && (
              <div className="lg:hidden" onClick={() => setSearchModalVisible(true)}>
                <img src={searchWhiteIcon} className="w-6" alt="" />
              </div>
            )}
            <Button
              type="link"
              onClick={() => setDrawerVisible(true)}
              icon={<img src={menuIcon} alt="" />}
              className="p-0"
              wrapperClassName=""
            />
          </div>
        </div>
        {parsedQuery.auth && <StockDataSlider wrapperClassName="hidden sm:block" />}
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
