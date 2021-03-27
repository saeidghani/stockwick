import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import StockSummary from '../components/common/StockSummary';

function Stock() {
  return (
    <Layout mainClassName="md:pt-8 md:px-4 lg:px-0 lg:container">
      <div className="md:bg-blueGray md:px-4 md:pt-4 pb-24">
        <StockSummary />
      </div>
    </Layout>
  );
}

export default Stock;
