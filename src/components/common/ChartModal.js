/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';

function ChartModal({ children, modalVisible, drawerVisible, onOk, onCancel }) {
  return (
    <div>
      <Modal
        className="c-modal-header-sm"
        onCancel={onCancel}
        onOk={onOk}
        closable={false}
        visible={modalVisible}
        width={600}
        bodyStyle={{ padding: 0 }}
      >
        {children}
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        closable={false}
        wrapClassName="w-full h-full"
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: 0 }}
      >
        {children}
      </Drawer>
    </div>
  );
}

ChartModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  children: PropTypes.node,
};

ChartModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
  onCancel: () => {},
  children: null,
};

export default ChartModal;
