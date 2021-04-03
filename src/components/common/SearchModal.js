import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import BackButton from './BackButton';
import CategoriesSearch from './CategoriesSearch';

function SearchModal({ modalVisible, drawerVisible, onOk, onCancel }) {
  return (
    <div>
      <Modal
        wrapClassName="c-modal-padding-none"
        onCancel={onCancel}
        onOk={onOk}
        visible={modalVisible}
        width={500}
      >
        <div className="boldPrimaryText text-xl pt-4 pb-4 pl-6">Search</div>
        <div className="border-t border-solid border-itemBorder p-6" style={{ minHeight: 600 }}>
          <CategoriesSearch autoCompleteClassName="c-autocomplete--gray" />
        </div>
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full h-full"
        headerStyle={{ border: 0 }}
        title={<BackButton onClick={onCancel} />}
      >
        <CategoriesSearch autoCompleteClassName="c-autocomplete--gray" />
      </Drawer>
    </div>
  );
}

SearchModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

SearchModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default SearchModal;
