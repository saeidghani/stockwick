/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RouteMap from '../../routes/RouteMap';
import Avatar from '../UI/Avatar';
import editIcon from '../../assets/icons/edit.svg';
import { useQuery } from '../../hooks/useQuery';
import FollowList from './FollowList';

function ProfileIntro({ onOpenFollowListModalVisible, followed, onSetFollowed }) {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { othersProfile } = parsedQuery || {};

  return (
    <div className="bg-white flex flex-col items-center mb-4 pt-4">
      <div
        className="flex mb-4 relative cursor-pointer"
        onClick={() => history.push(RouteMap.profile.edit)}
      >
        <Avatar wrapperClassName="storyRing" avatarClassName="w-20 h-20" />
        {!othersProfile && (
          <img
            src={editIcon}
            className="w-8 h-8 absolute bottom-0 left-14 rounded-full ring ring-white"
            alt=""
          />
        )}
      </div>
      <div className="boldPrimaryText mb-1">Jason Smith</div>
      <div className="text-primary text-base mb-2">Looking infinity & beyond…</div>
      <FollowList followed={followed} onSetFollowed={onSetFollowed} />
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
  followed: PropTypes.arrayOf(PropTypes.shape({})),
  onSetFollowed: PropTypes.func,
};

ProfileIntro.defaultProps = {
  onOpenFollowListModalVisible: () => {},
  followed: [],
  onSetFollowed: () => {},
};

export default ProfileIntro;
