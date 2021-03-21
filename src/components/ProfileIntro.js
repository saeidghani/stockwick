import React from 'react';
// import PropTypes from 'prop-types';
import ProfileInfo from './ProfileInfo';
import FollowList from './FollowList';

function ProfileIntro() {
  return (
    <div className="card px-0 py-4">
      <ProfileInfo />
      <FollowList />
    </div>
  );
}

ProfileIntro.propTypes = {
  //
};

export default ProfileIntro;
