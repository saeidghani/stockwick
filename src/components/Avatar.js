import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import avatarImg from '../assets/images/avatar.jpg';

function _Avatar({ wrapperClassName, avatarClassName, src }) {
  console.log(src);
  return (
    <div className={wrapperClassName}>
      <Avatar src={avatarImg} className={`${avatarClassName}`} icon={<UserOutlined />} />
    </div>
  );
}

_Avatar.propTypes = {
  wrapperClassName: PropTypes.string,
  avatarClassName: PropTypes.string,
  src: PropTypes.string,
};

_Avatar.defaultProps = {
  wrapperClassName: '',
  avatarClassName: 'w-14 h-14',
  src: '',
};

export default _Avatar;
