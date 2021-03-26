import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import avatarImg from '../assets/images/avatar.jpg';

function _Avatar({ wrapperClassName, avatarClassName, src }) {
  return (
    <div className={wrapperClassName || 'flex justify-center'}>
      {/* TODO remove avatarImg */}
      <Avatar
        src={src || avatarImg}
        className={avatarClassName || 'w-14 h-14'}
        icon={<UserOutlined />}
      />
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
  avatarClassName: '',
  src: '',
};

export default _Avatar;
