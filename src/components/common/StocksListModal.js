/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';

function StocksListModal({ children, modalVisible, drawerVisible, onOk, onCancel }) {
  return (
    <div>
      <Modal
        className="c-modal-header-sm"
        onCancel={onCancel}
        onOk={onOk}
        closable={false}
        visible={modalVisible}
        width={400}
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

StocksListModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

StocksListModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
  onCancel: () => {},
  children: null,
};

export default StocksListModal;
