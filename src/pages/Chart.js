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

function Demo() {
  return (
    <Layout>
      <HelloWorldChart />
      <br />
      <br />
      <CustomChart />
    </Layout>
  );
}

Demo.propTypes = {
  //
};

Demo.defaultProps = {};

export default Demo;
