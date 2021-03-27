import React from 'react';
import PropTypes from 'prop-types';

function LogoIcon({ icon, wrapperClassName, iconClassName, width }) {
  let style = {};
  if (width) {
    style = { width, height: width };
  }

  return (
    <div>
      <div className={wrapperClassName || 'rounded-full bg-primary relative'} style={style}>
        <img src={icon} alt="" className={iconClassName || 'absolute top-0 left-0'} />
      </div>
    </div>
  );
}

LogoIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  wrapperClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  width: PropTypes.number,
};

LogoIcon.defaultProps = {
  wrapperClassName: '',
  iconClassName: '',
  width: null,
};

export default LogoIcon;
