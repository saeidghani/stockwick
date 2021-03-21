import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import avatarImg from '../assets/images/avatar.jpg';

function _Avatar({ wrapperClassName, avatarClassName }) {
  return (
    <div className={wrapperClassName}>
      <Avatar src={avatarImg} className={`${avatarClassName}`} />
    </div>
  );
}

_Avatar.propTypes = {
  wrapperClassName: PropTypes.string,
  avatarClassName: PropTypes.string,
};

_Avatar.defaultProps = {
  wrapperClassName: '',
  avatarClassName: 'w-14 h-14',
};

export default _Avatar;
