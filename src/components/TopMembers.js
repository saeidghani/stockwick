import React from 'react';
import { Avatar } from 'antd';
// import PropTypes from 'prop-types';
import avatarImg from '../assets/images/avatar.jpg';
import RingChart from './RingChart';

function TopMembers() {
  return (
    <div className="card p-5 w-full">
      <div className="boldPrimaryText text-base mb-4">char title #1</div>
      <div className="grid grid-cols-3 align-items-center">
        <div className="flex flex-col space-y-6">
          {[1, 2, 3]?.map((i, index) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex space-x-3 items-center">
                <div>
                  <div
                    className={`w-10 h-10 rounded-6px ${
                      index === 0 ? 'bg-lightGreen' : index === 1 ? 'bg-lightPink' : 'bg-lightBlue'
                    }`}
                  />
                </div>
                <div>
                  <Avatar src={avatarImg} className="w-14 h-14" />
                </div>
                <div className="flex flex-col">
                  <div className="boldPrimaryText text-lg">Oliver Beck</div>
                  <div className="text-darkGray">Swiss International LLC.</div>
                </div>
              </div>
              <div className="boldPrimaryText text-2xl">90%</div>
            </div>
          ))}
        </div>
        <RingChart wrapperClassName="col-start-3 justify-self-end" />
      </div>
    </div>
  );
}

TopMembers.propTypes = {
  //
};

export default TopMembers;
