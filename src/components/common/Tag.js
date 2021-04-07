import React from 'react';
import PropTypes from 'prop-types';

function Tag({ children, text, wrapperClassName, textBoxClassName, textClassName }) {
  return (
    <div className={wrapperClassName}>
      <div className="flex h-8 w-full">
        {children}
        <div className={textBoxClassName || 'flex items-center px-2 bg-white text-primary text-xs'}>
          <span className={textClassName}>{text}</span>
        </div>
      </div>
    </div>
  );
}

Tag.propTypes = {
  wrapperClassName: PropTypes.string,
  textBoxClassName: PropTypes.string,
  textClassName: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

Tag.defaultProps = {
  wrapperClassName: '',
  textBoxClassName: '',
  textClassName: '',
  text: '',
  children: null,
};

export default Tag;
