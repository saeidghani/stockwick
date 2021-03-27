import React from 'react';
// import PropTypes from 'prop-types';
import apple from '../../assets/icons/apple.svg';
import LogoIcon from './LogoIcon';

function SimilarSocks() {
  const StockItem = () => (
    <div className="flex flex-col items-center">
      <LogoIcon icon={apple} wrapperClassName="w-24 h-24 mb-3" iconClassName="pl-6 pt-5" />
      <div className="text-primary text-lg">Apple nc.</div>
      <div className="text-secondary text-base">300,000$</div>
    </div>
  );

  return (
    <div className="card">
      <div className="boldPrimaryText text-xl mb-4">similar stocks</div>
      <div className="flex space-x-8 overflow-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <StockItem key={i} />
        ))}
      </div>
    </div>
  );
}

SimilarSocks.propTypes = {
  //
};

export default SimilarSocks;
