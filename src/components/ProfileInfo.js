import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import edit from '../assets/images/icons/edit.svg';

function ProfileInfo() {
  return (
    <div className="flex flex-col items-center mb-2">
      <div className="flex mb-4 relative">
        <Avatar wrapperClassName="storyRing border-3" avatarClassName="w-28 h-28" />
        <img
          src={edit}
          alt=""
          className="absolute bottom-2 -right-2 w-12 h-12 ring-4 ring-white rounded-full"
        />
      </div>
      <div className="boldPrimaryText text-22px mb-1">Jason Smith</div>
      <div className="text-primary text-base">Looking infinity & beyond…</div>
    </div>
  );
}

ProfileInfo.propTypes = {
  //
};

export default ProfileInfo;
