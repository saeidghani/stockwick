import React from 'react';
import PropTypes from 'prop-types';

function Chart({ wrapperClassName }) {
  return (
    <div className={wrapperClassName}>
      <div className="w-full h-full bg-lightPink" />
    </div>
  );
}

Chart.propTypes = {
  wrapperClassName: PropTypes.string,
};

Chart.defaultProps = {
  wrapperClassName: '',
};

export default Chart;
