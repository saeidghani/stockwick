import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from '../UI/Avatar';

function Activity() {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="card p-4 overflow-auto">
      <div className="boldPrimaryText text-xl mb-5">follower’s activity</div>
      <div className="flex flex-col child-borderBottom">
        {items.map((i) => (
          <div key={i} className="flex items-start space-x-2 py-4">
            <Avatar avatarClassName="w-11 h-11" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
                <div className="text-xs text-darkGray">23 min ago</div>
              </div>
              <div className="text-xs text-black">Is interested in trading AAPL</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Activity.propTypes = {
  //
};

export default Activity;
