import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Badge } from 'antd';
import { PlusOutlined, MenuOutlined, BellOutlined, CaretUpOutlined } from '@ant-design/icons';
import clock from '../../assets/images/icons/clock.svg';
import usFlag from '../../assets/images/icons/usFlag.svg';
import messages from '../../assets/images/icons/messages.svg';
import avatarImg from '../../assets/images/avatar.jpg';
import Button from '../../components/common/Button';

function Header({ isAuth }) {
  const stockSummaryItems = [...Array(10).keys()];

  const StockSummary = () => (
    <div className="flex justify-center py-5 w-60">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-4">
          <span className="text-white">S&P 500</span>
          <span className="text-white">3136.32</span>
        </div>
        <div className="flex items-center">
          <CaretUpOutlined className="text-secondaryColor text-xl mr-2" />
          <span className="text-secondaryColor mr-6">0.39%</span>
          <span className="text-secondaryColor">12.2</span>
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-primaryColor px-4">
      <div className="hidden md:block ">
        <div className="grid grid-cols-3 justify-items-center py-4">
          <div className="flex items-center space-x-5">
            <div className="text-secondaryColor text-2xl font-Comfortaa">stockwick</div>
            <div className="">
              <div className="text-white">NYSE closes in</div>
              <div className="text-white">03 : 03 : 59</div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-1">
              <img src={clock} alt="" />
              <div className="text-white whitespace-nowrap">15 : 46 : 01</div>
            </div>
            <div className="flex items-center space-x-1">
              <img src={usFlag} alt="" />
              <div className="text-white whitespace-nowrap">New York</div>
            </div>
          </div>
          {isAuth ? (
            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-5">
                <Badge count={1} offset={[3, 3]}>
                  <img src={messages} alt="" className="pt-2" />
                </Badge>
                <Badge count={4} offset={[-2, 5]}>
                  <BellOutlined className="text-white text-xl" />
                </Badge>
                <Avatar src={avatarImg} />
              </div>
              <Button text="Post" wrapperClassName="c-primary-btn" />
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Button text="Register" textClassName="text-secondaryColor" type="link" />
              <Button text="Login" wrapperClassName="c-primary-btn" />
            </div>
          )}
        </div>
        {isAuth && (
          <div className="flex divide-x divide-fadePrimaryColor">
            {stockSummaryItems.map((i) => (
              <div key={i} className="border-t border-b border-solid border-fadePrimaryColor">
                <StockSummary />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="block md:hidden">
        <div
          className="grid grid-cols-3 align-items-center pt-4 pb-2
                       border-b border-solid border-fadePrimaryColor"
        >
          <PlusOutlined className="justify-self-start text-base text-white pt-1" />
          <div className="justify-self-center text-secondaryColor text-2xl font-Comfortaa">
            stockwick
          </div>
          <MenuOutlined className="justify-self-end text-base text-white pt-1" />
        </div>
        <div
          className="flex justify-center items-center space-x-8 pt-4 pb-2
                       border-b border-solid border-fadePrimaryColor"
        >
          <div className="flex space-x-2">
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
  isAuth: PropTypes.bool.isRequired,
};

Header.defaultProps = {};

export default Header;
