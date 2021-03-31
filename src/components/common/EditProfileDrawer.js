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
      headerStyle={{ border: 0, padding: 0 }}
      title={
        <div className="bg-primary grid grid-cols-3 justify-items-center items-center py-2 px-4">
          <BackButton
            wrapperClassName="justify-self-start"
            textClassName="text-white text-base pt-0.5"
            iconClassName="text-white text-base mr-2"
            onClick={onCancel}
          />
          <div className="textLogo text-xl">stockwick</div>
        </div>
      }
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
