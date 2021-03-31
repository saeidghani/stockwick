import React from 'react';
import PropTypes from 'prop-types';
import { HelloWorldChart } from '../../chartiq';

function Chart({ wrapperClassName, title, height }) {
  return (
    <div className={wrapperClassName} style={{ height }}>
      {title && <div className="boldPrimaryText relative text-xl mb-2">{title}</div>}
      <HelloWorldChart />
    </div>
  );
}

Chart.propTypes = {
  wrapperClassName: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.number,
};

Chart.defaultProps = {
  wrapperClassName: '',
  title: '',
  height: 300,
};

export default Chart;
