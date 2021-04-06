import React from 'react';
import PropTypes from 'prop-types';
import likeFilledIcon from '../../assets/icons/likeFilled.svg';
import dislikeOutlineIcon from '../../assets/icons/dislikeOutline.svg';
import arrowFilledIcon from '../../assets/icons/arrowFilled.svg';
import bullishIcon from '../../assets/icons/bullish.svg';
import bearishIcon from '../../assets/icons/bearish.svg';
import shareFilledIcon from '../../assets/icons/shareFilled.svg';
import Avatar from '../UI/Avatar';
import Chart from './Chart';

function StockWall({
  wrapperClassName,
  maxHeight,
  isBullish,
  isBearish,
  title,
  displayChart,
  comments,
}) {
  // eslint-disable-next-line react/prop-types
  const Post = ({ isComment, isBullishType, isBearishType, displayChartPost }) => (
    <div className="flex space-x-2">
      <Avatar avatarClassName="w-12 h-12" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          <div className="flex items-center space-x-2">
            <div className="text-lightGray">stockwick</div>
            <div
              className={`flex items-center space-x-2 px-2 h-8 rounded-2xl ${
                isBullishType ? 'bg-darkGreen' : isBearishType ? 'bg-accent' : ''
              }`}
            >
              <img src={isBullishType ? bullishIcon : bearishIcon} alt="" />
              <div className="text-xs text-white font-medium">
                {isBullishType ? 'Bullish' : 'Bearish'}
              </div>
            </div>
          </div>
        </div>
        <div className="text-lightGray mb-1">Posted on Jan 20 2021, 14:21</div>
        <p className="mb-4 text-black text-base">
          Apple Stock Surging Ahead Of Possible Record Holiday Quarter. Wall Street analysts are
          pounding the table for Apple stock ahead of the company’s December-quarter earnings…
        </p>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 pb-2">
            <img className="cursor-pointer" src={likeFilledIcon} alt="a" />
            <div className="boldPrimaryText pt-1">{isComment ? 'Like' : 'Agree'}</div>
          </div>
          <div className="flex items-center space-x-4">
            <img className="cursor-pointer" src={dislikeOutlineIcon} alt="a" />
            <div className="boldPrimaryText pb-1">{isComment ? 'Dislike' : 'Disagree'}</div>
          </div>
          {!isComment && (
            <div className="flex items-center space-x-4 pb-1">
              <img className="cursor-pointer" src={arrowFilledIcon} alt="a" />
              <div className="boldPrimaryText">Reply</div>
            </div>
          )}
          <div className="flex items-center space-x-4">
            <img className="cursor-pointer" src={shareFilledIcon} alt="a" />
          </div>
        </div>
        {displayChartPost && <Chart wrapperClassName="mt-5" />}
      </div>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <div className="px-2 py-2 overflow-auto" style={{ maxHeight }}>
        {title && <div className="boldPrimaryText text-xl mb-8">{title}</div>}
        <Post isBullishType={isBullish} isBearishType={isBearish} displayChartPost={displayChart} />
        {comments.map((c) => (
          <div key={c.key} className="mt-8 ml-12">
            <Post isComment isBearishType />
          </div>
        ))}
      </div>
    </div>
  );
}

StockWall.propTypes = {
  wrapperClassName: PropTypes.string,
  title: PropTypes.string,
  displayChart: PropTypes.bool,
  isBullish: PropTypes.bool,
  isBearish: PropTypes.bool,
  maxHeight: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.shape({})),
};

StockWall.defaultProps = {
  wrapperClassName: '',
  title: '',
  displayChart: false,
  isBullish: false,
  isBearish: false,
  maxHeight: 610,
  comments: [],
};

export default StockWall;
