import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd';
import { PlusOutlined, BellOutlined, CaretUpOutlined } from '@ant-design/icons';
import clock from '../../assets/icons/clock.svg';
import usFlag from '../../assets/icons/usFlag.svg';
import Button from '../../components/Button';
import ProfileDropdown from '../../components/ProfileDropdown';
import MenuDrawer from '../../components/MenuDrawer';
import { MessagesIcon } from '../../components/Icons';
import { useQuery } from '../../hooks/useQuery';

function Header({
  isAuth,
  onTimeZoneClick,
  onMarketClick,
  onRegisterClick,
  onLoginClick,
  onMessagesClick,
  onNotificationClick,
  onPostClick,
}) {
  const [parsedQuery] = useQuery();

  // eslint-disable-next-line no-shadow,react/prop-types
  const StockSummary = ({ stockSummaryItems }) => {
    return (
      <div className="flex divide-x divide-fadePrimary overflow-auto">
        {/* eslint-disable-next-line react/prop-types */}
        {stockSummaryItems.map((i) => (
          <div key={i} className="border-t border-b border-solid border-fadePrimary">
            <div className="flex justify-center py-5 w-60">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4">
                  <span className="text-white">S&P 500</span>
                  <span className="text-white">3136.32</span>
                </div>
                <div className="flex items-center">
                  <CaretUpOutlined className="text-secondary text-xl mr-2" />
                  <span className="text-secondary mr-6">0.39%</span>
                  <span className="text-secondary">12.2</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className="bg-primary px-4">
      <div className="hidden md:block">
        <div className="flex justify-between py-4 lg:container">
          <div className="flex items-center space-x-3 lg:space-x-5">
            <div className="textLogo text-2xl">stockwick</div>
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
                onClick={onTimeZoneClick}
              >
                15 : 46 : 01
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <img src={usFlag} alt="" />
              <div className="text-white whitespace-nowrap cursor-pointer" onClick={onMarketClick}>
                New York
              </div>
            </div>
          </div>
          {isAuth ? (
            <div className="flex items-center space-x-4 lg:space-x-10">
              <div className="flex items-center space-x-5">
                <Badge count={1} offset={[3, 3]} size="small">
                  <div className="pt-1 cursor-pointer" onClick={onMessagesClick}>
                    <MessagesIcon />
                  </div>
                </Badge>
                <Badge count={4} offset={[-2, 5]} size="small">
                  <BellOutlined className="text-white text-xl" onClick={onNotificationClick} />
                </Badge>
                <ProfileDropdown />
              </div>
              <Button text="Post" wrapperClassName="c-secondary-btn" onClick={onPostClick} />
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Button
                text="Register"
                textClassName="text-secondary"
                type="link"
                onClick={onRegisterClick}
              />
              <Button text="Login" wrapperClassName="c-secondary-btn" onClick={onLoginClick} />
            </div>
          )}
        </div>
        {isAuth && <StockSummary stockSummaryItems={[1, 2, 3, 4, 5, 6, 7]} />}
      </div>
      <div className="block md:hidden container">
        <div
          className="grid grid-cols-3 items-center pt-4 pb-2
                       border-b border-solid border-fadePrimary"
        >
          {isAuth ? <PlusOutlined className="justify-self-start text-base text-white" /> : <div />}
          <div className="justify-self-center text-secondary text-2xl font-Comfortaa">
            stockwick
          </div>
          <MenuDrawer
            wrapperClassName="justify-self-end text-base text-white pt-1"
            isAuth={parsedQuery.auth}
            onLoginClick={onLoginClick}
            onRegisterClick={onRegisterClick}
            onTimeZoneClick={onTimeZoneClick}
            onMarketClick={onMarketClick}
            onMessagesClick={onMessagesClick}
            onNotificationsClick={onNotificationClick}
          />
        </div>
        {isAuth && <StockSummary stockSummaryItems={[1, 2, 3, 4, 5, 6, 7]} />}
        <div
          className="flex justify-center items-center space-x-8 pt-4 pb-2
                       border-b border-solid border-fadePrimary"
        >
          <div className="flex space-x-2" onClick={onTimeZoneClick}>
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

Header.propTypes = {
  isAuth: PropTypes.bool,
  onTimeZoneClick: PropTypes.func,
  onMarketClick: PropTypes.func,
  onRegisterClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  onMessagesClick: PropTypes.func,
  onNotificationClick: PropTypes.func,
  onPostClick: PropTypes.func,
};

Header.defaultProps = {
  isAuth: false,
  onTimeZoneClick: () => {},
  onMarketClick: () => {},
  onRegisterClick: () => {},
  onLoginClick: () => {},
  onMessagesClick: () => {},
  onNotificationClick: () => {},
  onPostClick: () => {},
};

export default Header;
