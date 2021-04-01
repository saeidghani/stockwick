import React from 'react';
import PropTypes from 'prop-types';
import expandIcon from '../../assets/icons/expand.svg';
import { HelloWorldChart } from '../../chartiq';

function Chart({ wrapperClassName, title, expand, unExpand, height, onExpandClick, onClose }) {
  return (
    <div className={wrapperClassName} style={{ height }}>
      <div className="flex justify-between items-center mb-2">
        {title && <div className="boldPrimaryText relative text-xl">{title}</div>}
        {expand ? (
          <div onClick={onExpandClick}>
            <img src={expandIcon} className="w-5 cursor-pointer" alt="" />
          </div>
        ) : unExpand ? (
          <div onClick={onClose}>
            <img src={expandIcon} className="w-5 cursor-pointer transform -rotate-180" alt="" />
          </div>
        ) : (
          ''
        )}
      </div>
      <HelloWorldChart />
    </div>
  );
}

Chart.propTypes = {
  wrapperClassName: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.number,
  expand: PropTypes.bool,
  unExpand: PropTypes.bool,
  onExpandClick: PropTypes.func,
  onClose: PropTypes.func,
};

Chart.defaultProps = {
  wrapperClassName: '',
  title: '',
  height: 300,
  expand: false,
  unExpand: false,
  onExpandClick: () => {},
  onClose: () => {},
};

export default Chart;
