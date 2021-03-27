import React from 'react';
import PropTypes from 'prop-types';

function CircleChart({ wrapperClassName }) {
  return (
    <div className={wrapperClassName}>
      <div className="w-full h-full bg-lightGreen" />
    </div>
  );
}

CircleChart.propTypes = {
  wrapperClassName: PropTypes.string,
};

CircleChart.defaultProps = {
  wrapperClassName: '',
};

export default CircleChart;
