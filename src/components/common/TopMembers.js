import React from 'react';
import PropTypes from 'prop-types';
import RingChart from './RingChart';
import Avatar from '../UI/Avatar';

function TopMembers({ wrapperClassName }) {
  return (
    <div className={wrapperClassName}>
      <div className="card p-5 w-full" style={{ width: 700 }}>
        <div className="boldPrimaryText text-base mb-4">char title #1</div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-6 w-96">
            {[1, 2, 3]?.map((i, index) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex justify-between space-x-3 items-center">
                  <div>
                    <div
                      className={`w-10 h-10 rounded-6px ${
                        index === 0
                          ? 'bg-lightGreen'
                          : index === 1
                          ? 'bg-lightPink'
                          : 'bg-lightBlue'
                      }`}
                    />
                  </div>
                  <Avatar />
                  <div className="flex flex-col">
                    <div className="boldPrimaryText text-lg">Oliver Beck</div>
                    <div className="text-darkGray">Swiss International LLC.</div>
                  </div>
                </div>
                <div className="boldPrimaryText text-2xl">90%</div>
              </div>
            ))}
          </div>
          <div className="w-56">
            <RingChart />
          </div>
        </div>
      </div>
    </div>
  );
}

TopMembers.propTypes = {
  wrapperClassName: PropTypes.string,
};

TopMembers.defaultProps = {
  wrapperClassName: '',
};

export default TopMembers;
