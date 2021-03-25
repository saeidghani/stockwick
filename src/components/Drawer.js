import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

function _Drawer({
  wrapperClassName,
  titleClassName,
  className,
  style,
  headerStyle,
  bodyStyle,
  drawerStyle,
  contentWrapperStyle,
  maskStyle,
  footerStyle,
  width,
  title,
  placement,
  children,
  visible,
  closable,
  closeIcon,
  onClose,
}) {
  return (
    <div className={wrapperClassName}>
      <Drawer
        title={<span className={titleClassName}>{title}</span>}
        placement={placement}
        closable={closable}
        closeIcon={closeIcon}
        onClose={onClose}
        visible={visible}
        className={className}
        style={style}
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        drawerStyle={drawerStyle}
        contentWrapperStyle={contentWrapperStyle}
        maskStyle={maskStyle}
        footerStyle={footerStyle}
        width={width}
      >
        {children}
      </Drawer>
    </div>
  );
}

_Drawer.propTypes = {
  wrapperClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  className: PropTypes.string,
  placement: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  closeIcon: PropTypes.node,
  style: PropTypes.shape({}),
  headerStyle: PropTypes.shape({}),
  bodyStyle: PropTypes.shape({}),
  drawerStyle: PropTypes.shape({}),
  contentWrapperStyle: PropTypes.shape({}),
  maskStyle: PropTypes.shape({}),
  footerStyle: PropTypes.shape({}),
};

_Drawer.defaultProps = {
  wrapperClassName: '',
  titleClassName: '',
  className: '',
  title: '',
  placement: 'right',
  visible: false,
  closable: true,
  closeIcon: null,
  onClose: () => {},
  style: {},
  headerStyle: {},
  bodyStyle: {},
  drawerStyle: {},
  contentWrapperStyle: {},
  maskStyle: {},
  footerStyle: {},
  width: '100%',
};

export default _Drawer;
