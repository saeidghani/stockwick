import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars,react/prop-types
function Tag({ children, text, wrapperClassName, textClassName }) {
  return (
    <div className={wrapperClassName}>
      <div className="flex h-8">
        {children}
        <div className="flex items-center px-2 bg-white text-primary text-xs">
          <span className={textClassName}>{text}</span>
        </div>
      </div>
    </div>
  );
}

Tag.prototype = {
  wrapperClassName: PropTypes.string,
  textClassName: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

Tag.defaultProps = {
  wrapperClassName: '',
  textClassName: '',
  text: '',
  children: null,
};

export default Tag;
