import React from 'react';
// import PropTypes from 'prop-types';
import Layout from '../layouts/MainLayout/MainLayout';
import {
  // AdvancedChart,
  // MultiChart,
  // Enable ActiveTraderWorkstation
  // ActiveTraderWorkstation,
  CustomChart,
  HelloWorldChart,
} from '../chartiq';

function Chart() {
  return (
    <Layout>
      <HelloWorldChart />
      <br />
      <br />
      <CustomChart />
    </Layout>
  );
}

Chart.propTypes = {
  //
};

Chart.defaultProps = {};

export default Chart;
