import React from 'react';
import PropTypes from 'prop-types';
import apple from '../../assets/icons/apple.svg';
import LogoIcon from './LogoIcon';

function SimilarSocks({ wrapperClassName, displayTitle }) {
  const StockItem = () => (
    <div className="flex flex-col items-center">
      <LogoIcon
        icon={apple}
        wrapperClassName="bg-primary rounded-full relative mb-3"
        iconClassName="w-10 h-10 absolute top-3 left-3 pl-0.5"
        width={70}
      />
      <div className="text-primary text-base">Apple nc.</div>
      <div className="text-secondary text-base">300,000$</div>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <div className="card">
        {displayTitle && <div className="boldPrimaryText text-xl mb-4">similar stocks</div>}
        <div className="flex space-x-8 overflow-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <StockItem key={i} />
          ))}
        </div>
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
