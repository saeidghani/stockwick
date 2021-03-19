import React from 'react';
import { Avatar } from 'antd';
import avatarImg from '../assets/images/avatar.jpg';
// import PropTypes from 'prop-types';

const AddStoryIcon = () => (
  <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      /* eslint-disable-next-line max-len */
      d="M38.7666 77C59.8823 77 77 59.8823 77 38.7666C77 17.6509 59.8823 0.533203 38.7666 0.533203C17.6509 0.533203 0.533203 17.6509 0.533203 38.7666C0.533203 59.8823 17.6509 77 38.7666 77Z"
      fill="#F8F8F8"
      fillOpacity="0.33"
    />
    <path
      /* eslint-disable-next-line max-len */
      d="M39 76C59.4345 76 76 59.4345 76 39C76 18.5655 59.4345 2 39 2C18.5655 2 2 18.5655 2 39C2 59.4345 18.5655 76 39 76Z"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="18 18"
    />
    <path
      d="M51 38.0769V39.9231H39.9231V51H38.0769V39.9231H27V38.0769H38.0769V27H39.9231V38.0769H51Z"
      fill="#001560"
      stroke="#001560"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Stories() {
  return (
    <div className="card py-1 px-3">
      <div className="boldPrimaryText text-xl mb-2">live stories</div>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-primary bg-opacity-60 border-4 border-solid border-primary rounded-full">
            <AddStoryIcon />
          </div>
          <div className="text-primary font-medium">Roy Mason</div>
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="border-2 border-solid border-secondary p-0.5 rounded-full">
              <Avatar src={avatarImg} className="w-20 h-20" />
            </div>
            <div className="text-primary font-medium">Roy Mason</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Stories.propTypes = {
  //
};

export default Stories;
