import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';

function _Divider({ wrapperClassName, className, type }) {
  return (
    <div className={`c-divider ${wrapperClassName}`}>
      <Divider className={`bg-white ${className}`} type={type} />
    </div>
  );
}

_Divider.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['horizontal', 'vertical']),
};

_Divider.defaultProps = {
  wrapperClassName: '',
  className: '',
  type: 'horizontal',
};

export default _Divider;
