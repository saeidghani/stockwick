import React from 'react';
// import PropTypes from 'prop-types';
import monitors from '../assets/images/monitors.png';

function NewRelease() {
  return (
    <div className="card p-4 overflow-auto" style={{ height: 750 }}>
      <div className="boldPrimaryText text-xl mb-4">news release</div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col mb-8">
          <div className="text-primary text-lg font-medium mb-2">stock news title</div>
          <img src={monitors} alt="" className="mb-4" />
          <p className="text-base text-black">
            Apple Stock Surging Ahead Of Possible Record Holiday Quarter. Wall Street analysts are
            pounding the table for Apple stock ahead of the company’s December-quarter earnings
            report next week….
          </p>
        </div>
      ))}
    </div>
  );
}

NewRelease.propTypes = {
  //
};

export default NewRelease;
