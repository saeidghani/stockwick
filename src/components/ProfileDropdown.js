import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import Avatar from './Avatar';

const { Item } = Menu;

const ProfileDropdown = ({ src }) => {
  const history = useHistory();

  const options = [
    {
      key: 1,
      title: 'view profile',
      titleClassName: 'text-white',
      onClick: () => {
        history.push('/');
      },
    },
    {
      key: 2,
      title: 'edit profile',
      titleClassName: 'text-white',
      onClick: () => {
        history.push('/');
      },
    },
    {
      key: 2,
      title: 'sign out',
      titleClassName: 'text-red-500',
      onClick: () => {
        history.push('/');
      },
    },
  ];

  const _Menu = (
    <Menu className="bg-fadePrimary py-2 px-1">
      {options.map((option) => (
        // eslint-disable-next-line react/jsx-indent
        <Item key={option.key} className="flex items-center hover:bg-fadePrimary">
          <div onClick={option.onClick} className={`w-full ${option.titleClassName || ''}`}>
            {option.title}
          </div>
        </Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={_Menu} trigger={['click']} placement="bottomRight">
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Avatar src={src} className="" />
      </a>
    </Dropdown>
  );
};

ProfileDropdown.propTypes = {
  src: PropTypes.string,
};

ProfileDropdown.defaultProps = {
  src: '',
};

export default ProfileDropdown;
