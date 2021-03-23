import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';

function _Divider({ wrapperClassName, className }) {
  return (
    <div className={wrapperClassName}>
      <Divider className={className} />
    </div>
  );
}

_Divider.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
};

_Divider.defaultProps = {
  wrapperClassName: '',
  className: '',
};

export default _Divider;
