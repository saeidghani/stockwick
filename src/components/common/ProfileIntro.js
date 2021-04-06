import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RouteMap from '../../routes/RouteMap';
import Avatar from '../UI/Avatar';
import editIcon from '../../assets/icons/edit.svg';
import FollowList from './FollowList';

function ProfileIntro({ onOpenFollowListModalVisible }) {
  const history = useHistory();

  return (
    <div className="bg-white flex flex-col items-center mb-4 pt-4">
      <div
        className="flex mb-4 relative cursor-pointer"
        onClick={() => history.push(RouteMap.profile.edit)}
      >
        <Avatar wrapperClassName="storyRing" avatarClassName="w-20 h-20" />
        <img
          src={editIcon}
          className="w-8 h-8 absolute bottom-0 left-14 rounded-full ring ring-white"
          alt=""
        />
      </div>
      <div className="boldPrimaryText mb-1">Jason Smith</div>
      <div className="text-primary text-base mb-2">Looking infinity & beyond…</div>
      <FollowList />
      <div
        className="text-primary font-medium h-12 bg-white pt-4 cursor-pointer"
        onClick={onOpenFollowListModalVisible}
      >
        View more
      </div>
    </div>
  );
}

ProfileIntro.propTypes = {
  onOpenFollowListModalVisible: PropTypes.func,
};

ProfileIntro.defaultProps = {
  onOpenFollowListModalVisible: () => {},
};

export default ProfileIntro;
