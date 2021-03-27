import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import EditProfileForm from './EditProfileForm';
import Drawer from '../UI/Drawer';

function EditProfileDrawer({ visible, onCancel }) {
  return (
    <Drawer
      visible={visible}
      onClose={onCancel}
      wrapClassName="w-full h-full"
      headerStyle={{ border: 0 }}
      title={<BackButton onClick={onCancel} />}
    >
      <EditProfileForm />
    </Drawer>
  );
}

EditProfileDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditProfileDrawer;
