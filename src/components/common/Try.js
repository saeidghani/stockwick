import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import searchIcon from '../../assets/icons/search.svg';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Avatar from '../UI/Avatar';
import Input from '../UI/Input';
import { useQuery } from '../../hooks/useQuery';

const { TabPane } = Tabs;

function FollowListModal({ visible, onOk, onCancel }) {
  return <Modal onCancel={onCancel} onOk={onOk} visible={visible} />;
}

FollowListModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

FollowListModal.defaultProps = {
  visible: false,
  onOk: () => {},
};

export default FollowListModal;
