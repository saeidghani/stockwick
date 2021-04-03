import React from 'react';
import PropTypes from 'prop-types';
import apple from '../../assets/icons/apple.svg';
import LogoIcon from './LogoIcon';
import SwipeSlider from '../UI/SwipeSlider';

function SimilarSocks({ wrapperClassName, displayTitle }) {
  // eslint-disable-next-line react/prop-types
  const StockItem = ({ isCdf }) => (
    <div className="flex flex-col items-center">
      {!isCdf ? (
        <LogoIcon
          icon={apple}
          wrapperClassName="bg-primary rounded-full relative mb-3"
          iconClassName="w-14 h-14 absolute top-4 left-4 pl-0.5"
          width={90}
        />
      ) : (
        <div
          className="flex justify-center items-center bg-primary rounded-full mb-3"
          style={{ width: 90, height: 90 }}
        >
          <div className="text-secondary text-32px pt-1">CDF</div>
        </div>
      )}
      <div className="text-primary text-base">Apple nc.</div>
      <div className="text-secondary text-base">300,000$</div>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <div className="card px-2 py-4">
        {displayTitle && <div className="boldPrimaryText text-xl mb-4 pl-2">similar stocks</div>}
        <SwipeSlider>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <StockItem key={i} isCdf={i === 3} />
          ))}
        </SwipeSlider>
      </div>
    </div>
  );
}

SimilarSocks.propTypes = {
  displayTitle: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

SimilarSocks.defaultProps = {
  displayTitle: false,
  wrapperClassName: '',
};

export default SimilarSocks;
