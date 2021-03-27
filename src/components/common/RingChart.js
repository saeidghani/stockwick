import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';

function RingChart({ wrapperClassName }) {
  const dataMock = [
    { title: 'One', value: 60, color: '#1F78B4' },
    { title: 'Two', value: 25, color: '#A6CEE3' },
    { title: 'Three', value: 15, color: '#B2DF8A' },
  ];

  return (
    <div className={`w-52 ${wrapperClassName}`}>
      <PieChart data={dataMock} lineWidth={25} paddingAngle={3} />
      {/* <PieChart data={dataMock} lineWidth={20} paddingAngle={15} rounded /> */}
    </div>
  );
}

RingChart.propTypes = {
  wrapperClassName: PropTypes.string,
};

RingChart.defaultProps = {
  wrapperClassName: '',
};

export default RingChart;
