import React from 'react';
// import PropTypes from 'prop-types';
import apple from '../../assets/images/icons/apple.svg';

function SimilarSocks() {
  const StockItem = () => (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-primaryColor relative mb-3">
        <img src={apple} alt="" className="absolute top-0 left-0 pl-6 pt-5" />
      </div>
      <div className="text-primaryColor text-lg">Apple nc.</div>
      <div className="text-secondaryColor text-base">300,000$</div>
    </div>
  );

  return (
    <div className="card">
      <div className="text-primaryColor text-xl font-bold mb-4">similar stocks</div>
      <div className="flex space-x-8">
        {[1, 2, 3, 4, 5].map((i) => (
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
