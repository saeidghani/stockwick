/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import likeFilledIcon from '../../assets/icons/likeFilled.svg';
import dislikeOutlineIcon from '../../assets/icons/dislikeOutline.svg';
import arrowFilledIcon from '../../assets/icons/arrowFilled.svg';
import bullishIcon from '../../assets/icons/bullish.svg';
import bearishIcon from '../../assets/icons/bearish.svg';
import Avatar from '../UI/Avatar';
import Chart from './Chart';

function StockWall({ wrapperClassName, maxHeight, displayTitle, displayChart }) {
  // eslint-disable-next-line react/prop-types
  const Post = ({ isBullish, isBearish, displayChartPost }) => (
    <div className="flex space-x-2">
      <Avatar avatarClassName="w-12 h-12" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          <div className="flex items-center space-x-2">
            <div className="text-lightGray">stockwick</div>
            <div
              className={`flex items-center space-x-2 px-2 h-8 rounded-2xl ${
                isBullish ? 'bg-darkGreen' : isBearish ? 'bg-accent' : ''
              }`}
            >
              <img src={isBullish ? bullishIcon : bearishIcon} alt="" />
              <div className="text-xs text-white font-medium">Bullish</div>
            </div>
          </div>
        </div>
        <div className="text-lightGray mb-1">Posted on Jan 20 2021, 14:21</div>
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
        {displayChartPost && <Chart wrapperClassName="w-full h-80 mt-2" />}
      </div>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <div className="px-1 py-2 overflow-auto" style={{ maxHeight }}>
        {displayTitle && <div className="boldPrimaryText text-xl mb-8">appl wall</div>}
        <Post isBullish displayChartPost={displayChart} />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mt-8 ml-12">
            <Post isBearish />
          </div>
        ))}
      </div>
    </div>
  );
}

StockWall.propTypes = {
  wrapperClassName: PropTypes.string,
  displayTitle: PropTypes.bool,
  displayChart: PropTypes.bool,
  maxHeight: PropTypes.number,
};

StockWall.defaultProps = {
  wrapperClassName: '',
  displayTitle: false,
  displayChart: false,
  maxHeight: 610,
};

export default StockWall;
