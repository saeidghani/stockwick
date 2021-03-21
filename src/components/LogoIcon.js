import React from 'react';
import PropTypes from 'prop-types';

function LogoIcon({ icon, wrapperClassName, iconClassName }) {
  return (
    <div className={`rounded-full bg-primary relative ${wrapperClassName}`}>
      <img src={icon} alt="" className={`absolute top-0 left-0 ${iconClassName}`} />
    </div>
  );
}

LogoIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  wrapperClassName: PropTypes.string,
  iconClassName: PropTypes.string,
};

LogoIcon.defaultProps = {
  wrapperClassName: '',
  iconClassName: '',
};

export default LogoIcon;
