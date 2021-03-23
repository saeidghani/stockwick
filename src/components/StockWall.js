import React from 'react';
// import PropTypes from 'prop-types';
import likeFilledIcon from '../assets/icons/likeFilled.svg';
import dislikeOutlineIcon from '../assets/icons/dislikeOutline.svg';
import arrowFilledIcon from '../assets/icons/arrowFilled.svg';
import bullishIcon from '../assets/icons/bullish.svg';
import bearishIcon from '../assets/icons/bearish.svg';
import AddPost from './AddPost';
import Avatar from './Avatar';

function StockWall() {
  // eslint-disable-next-line react/prop-types
  const Post = ({ isBullish, isBearish }) => (
    <div className="flex space-x-2">
      <Avatar avatarClassName="w-12 h-12" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="">
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
            <div className="text-lightGray mb-1">Posted on Jan 20 2021, 14:21</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-lightGray">stockwick</div>
            <div
              className={`flex items-center space-x-2 px-2 h-8 rounded-2xl ${
                isBullish ? 'bg-darkGreen' : isBearish ? 'bg-accent' : ''
              }`}
            >
              {isBullish ? <img src={bullishIcon} alt="a" /> : <img src={bearishIcon} alt="a" />}
              <div className="text-xs text-white font-medium">Bullish</div>
            </div>
          </div>
        </div>
        <p className="mb-4 text-black text-base">
          Apple Stock Surging Ahead Of Possible Record Holiday Quarter. Wall Street analysts are
          pounding the table for Apple stock ahead of the company’s December-quarter earnings…
        </p>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-4">
            <img src={likeFilledIcon} alt="a" />
            <div className="boldPrimaryText">Agree</div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={arrowFilledIcon} alt="a" />
            <div className="boldPrimaryText">Disagree</div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={dislikeOutlineIcon} alt="a" />
            <div className="boldPrimaryText">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card p-0">
      <div className="px-3 py-2 overflow-auto" style={{ maxHeight: 610 }}>
        <div className="boldPrimaryText text-xl mb-8">appl wall</div>
        <Post isBullish />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mt-8 ml-14">
            <Post isBearish />
          </div>
        ))}
      </div>
      <AddPost uploadBtsPosition="end" />
    </div>
  );
}

StockWall.propTypes = {
  //
};

export default StockWall;
