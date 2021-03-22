/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import AddPost from './AddPost';
import AddPoll from './AddPoll';

function AddPostModal({ visible, onOk, onCancel }) {
  return (
    <Modal wrapClassName="c-modal-padding-none" onCancel={onCancel} onOk={onOk} visible={visible}>
      <div className="pt-12">
        <AddPost
          contentClassName="flex-col sm:items-start"
          postBtnClassName="self-end"
          placeholder="#stonksgame #strong, post something…"
          displayAvatar
        />
      </div>
    </Modal>
  );
}

AddPostModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

export default AddPostModal;
