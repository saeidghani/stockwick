import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Badge } from 'antd';
import { PlusOutlined, MenuOutlined, BellOutlined, CaretUpOutlined } from '@ant-design/icons';
import clock from '../../assets/images/icons/clock.svg';
import usFlag from '../../assets/images/icons/usFlag.svg';
import avatarImg from '../../assets/images/avatar.jpg';
import Button from '../../components/Button';

function Header({ isAuth }) {
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

  const MessagesIcon = () => (
    <svg width="22" height="22" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        /* eslint-disable-next-line max-len */
        d="M0.845217 24.2424C0.622401 24.2424 0.408594 24.1544 0.250308 23.9976C0.0920225 23.8408 0.00206311 23.6278 0 23.405L0 12.558C0 12.0102 0.107894 11.4678 0.317522 10.9617C0.527149 10.4556 0.834405 9.99581 1.22175 9.60847C2.00402 8.82619 3.06501 8.38672 4.1713 8.38672H12.5217C13.628 8.38672 14.689 8.82619 15.4713 9.60847C16.2536 10.3907 16.693 11.4517 16.693 12.558V17.5667C16.693 18.673 16.2536 19.734 15.4713 20.5163C14.689 21.2985 13.628 21.738 12.5217 21.738H4.45304L1.32261 24.0859C1.18325 24.1857 1.01662 24.2403 0.845217 24.2424V24.2424ZM4.17913 10.0615C3.51494 10.0615 2.87795 10.3254 2.40829 10.795C1.93863 11.2647 1.67478 11.9017 1.67478 12.5659V21.738L3.67826 20.2354C3.82317 20.1281 3.99884 20.0705 4.17913 20.0711H12.5217C13.1859 20.0711 13.8229 19.8072 14.2926 19.3376C14.7622 18.8679 15.0261 18.2309 15.0261 17.5667V12.558C15.0261 11.8938 14.7622 11.2568 14.2926 10.7872C13.8229 10.3175 13.1859 10.0537 12.5217 10.0537L4.17913 10.0615Z"
        fill="white"
      />
      <path
        /* eslint-disable-next-line max-len */
        d="M24.197 15.8908C24.0166 15.8919 23.8407 15.8342 23.6961 15.7265L20.5657 13.3786H19.1883C19.072 13.3899 18.9547 13.3767 18.8439 13.34C18.733 13.3032 18.6311 13.2437 18.5446 13.1652C18.4581 13.0867 18.389 12.991 18.3417 12.8842C18.2944 12.7774 18.27 12.6619 18.27 12.5451C18.27 12.4284 18.2944 12.3129 18.3417 12.2061C18.389 12.0993 18.4581 12.0036 18.5446 11.9251C18.6311 11.8466 18.733 11.7871 18.8439 11.7503C18.9547 11.7136 19.072 11.7004 19.1883 11.7117H20.863C21.0434 11.7105 21.2193 11.7682 21.3639 11.876L23.3674 13.3786V4.21428C23.3674 3.55009 23.1035 2.9131 22.6339 2.44344C22.1642 1.97378 21.5272 1.70993 20.863 1.70993H12.5204C11.8562 1.70993 11.2192 1.97378 10.7496 2.44344C10.2799 2.9131 10.0161 3.55009 10.0161 4.21428V5.88124C10.0274 5.99748 10.0142 6.11479 9.97744 6.22564C9.94069 6.33649 9.88115 6.43843 9.80266 6.52491C9.72417 6.61138 9.62846 6.68048 9.52167 6.72777C9.41489 6.77506 9.29939 6.79949 9.18261 6.79949C9.06582 6.79949 8.95033 6.77506 8.84354 6.72777C8.73676 6.68048 8.64104 6.61138 8.56255 6.52491C8.48406 6.43843 8.42452 6.33649 8.38777 6.22564C8.35101 6.11479 8.33785 5.99748 8.34913 5.88124V4.21428C8.34913 3.10798 8.7886 2.04699 9.57087 1.26472C10.3531 0.482452 11.4141 0.0429761 12.5204 0.0429761H20.863C21.4115 0.0419471 21.9547 0.149082 22.4617 0.358249C22.9687 0.567416 23.4295 0.874509 23.8177 1.26195C24.2058 1.6494 24.5138 2.10959 24.7239 2.61618C24.934 3.12278 25.0422 3.66584 25.0422 4.21428V15.0612C25.0381 15.2827 24.9472 15.4937 24.7891 15.6488C24.6311 15.8039 24.4184 15.8908 24.197 15.8908V15.8908Z"
        fill="white"
      />
      <path
        /* eslint-disable-next-line max-len */
        d="M10.009 14.248H5.00809C4.89185 14.2593 4.77454 14.2461 4.66369 14.2094C4.55284 14.1726 4.4509 14.1131 4.36442 14.0346C4.27795 13.9561 4.20885 13.8604 4.16156 13.7536C4.11427 13.6468 4.08984 13.5313 4.08984 13.4145C4.08984 13.2978 4.11427 13.1823 4.16156 13.0755C4.20885 12.9687 4.27795 12.873 4.36442 12.7945C4.4509 12.716 4.55284 12.6565 4.66369 12.6197C4.77454 12.5829 4.89185 12.5698 5.00809 12.5811H10.009C10.1252 12.5698 10.2425 12.5829 10.3534 12.6197C10.4642 12.6565 10.5662 12.716 10.6526 12.7945C10.7391 12.873 10.8082 12.9687 10.8555 13.0755C10.9028 13.1823 10.9272 13.2978 10.9272 13.4145C10.9272 13.5313 10.9028 13.6468 10.8555 13.7536C10.8082 13.8604 10.7391 13.9561 10.6526 14.0346C10.5662 14.1131 10.4642 14.1726 10.3534 14.2094C10.2425 14.2461 10.1252 14.2593 10.009 14.248V14.248Z"
        fill="white"
      />
      <path
        /* eslint-disable-next-line max-len */
        d="M7.51244 17.583H5.00809C4.89185 17.5943 4.77454 17.5811 4.66369 17.5443C4.55284 17.5076 4.4509 17.448 4.36442 17.3696C4.27795 17.2911 4.20885 17.1954 4.16156 17.0886C4.11427 16.9818 4.08984 16.8663 4.08984 16.7495C4.08984 16.6327 4.11427 16.5172 4.16156 16.4104C4.20885 16.3037 4.27795 16.2079 4.36442 16.1294C4.4509 16.051 4.55284 15.9914 4.66369 15.9547C4.77454 15.9179 4.89185 15.9047 5.00809 15.916H7.51244C7.62868 15.9047 7.746 15.9179 7.85685 15.9547C7.9677 15.9914 8.06964 16.051 8.15611 16.1294C8.24259 16.2079 8.31169 16.3037 8.35898 16.4104C8.40626 16.5172 8.43069 16.6327 8.43069 16.7495C8.43069 16.8663 8.40626 16.9818 8.35898 17.0886C8.31169 17.1954 8.24259 17.2911 8.15611 17.3696C8.06964 17.448 7.9677 17.5076 7.85685 17.5443C7.746 17.5811 7.62868 17.5943 7.51244 17.583Z"
        fill="white"
      />
    </svg>
  );

  return (
    <header className="bg-primary px-4">
      <div className="hidden md:block">
        <div className="flex justify-between py-4 container">
          <div className="flex items-center space-x-5">
            <div className="text-secondary text-2xl font-Comfortaa">stockwick</div>
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
                <Badge count={1} offset={[3, 3]} size="small">
                  <div className="pt-1">
                    <MessagesIcon />
                  </div>
                </Badge>
                <Badge count={4} offset={[-2, 5]} size="small">
                  <BellOutlined className="text-white text-xl" />
                </Badge>
                <Avatar src={avatarImg} />
              </div>
              <Button text="Post" wrapperClassName="c-primary-btn" />
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Button text="Register" textClassName="text-secondary" type="link" />
              <Button text="Login" wrapperClassName="c-primary-btn" />
            </div>
          )}
        </div>
        {isAuth && <StockSummary stockSummaryItems={[1, 2, 3, 4, 5, 6, 7]} />}
      </div>
      <div className="block md:hidden container">
        <div
          className="grid grid-cols-3 align-items-center pt-4 pb-2
                       border-b border-solid border-fadePrimary"
        >
          <PlusOutlined className="justify-self-start text-base text-white pt-1" />
          <div className="justify-self-center text-secondary text-2xl font-Comfortaa">
            stockwick
          </div>
          <MenuOutlined className="justify-self-end text-base text-white pt-1" />
        </div>
        {isAuth && <StockSummary stockSummaryItems={[1, 2, 3, 4, 5, 6, 7]} />}
        <div
          className="flex justify-center items-center space-x-8 pt-4 pb-2
                       border-b border-solid border-fadePrimary"
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
