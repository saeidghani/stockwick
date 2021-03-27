/*eslint-disable*/
import React from 'react';
import { Tabs } from 'antd';
import { useQuery } from '../hooks/useQuery';
import Layout from '../layouts/MainLayout/MainLayout';
import StockSummary from '../components/common/StockSummary';
import Stories from '../components/common/Stories';
import Chart from '../components/common/Chart';
import StockDetails from '../components/common/StockDetails';
import CircleChart from '../components/common/CircleChart';
import SimilarSocks from '../components/common/SimilarSocks';
import NewsReleaseDetailed from '../components/common/NewsReleaseDetailed';
import TopMembers from '../components/common/TopMembers';
import StockWallForm from '../components/common/StockWallForm';

const { TabPane } = Tabs;

function Stock() {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab = 'overview' } = parsedQuery;

  const onTabChange = (key) => {
    setQuery({ tab: key });
  };

  return (
    <Layout mainClassName="md:pt-8 md:px-4 lg:px-0 lg:container">
      <div className="pb-2 md:bg-blueGray md:px-4 md:pt-4 md:pb-24">
        <StockSummary />
      </div>
      <div className="c-tabs px-4">
        <Tabs defaultActiveKey="overview" onChange={onTabChange}>
          <TabPane
            tab={
              <div className={`text-primary text-lg ${tab !== 'overview' ? 'opacity-40' : ''}`}>
                Overview
              </div>
            }
            key="overview"
          >
            <Stories wrapperClassName="mb-8" />
            <div className="boldPrimaryText text-lg mb-2">advance charting</div>
            <Chart wrapperClassName="w-full h-80 mb-8" />
            <StockDetails wrapperClassName="mb-8" />
            <div className="boldPrimaryText text-lg mb-2">technical analysis</div>
            <CircleChart wrapperClassName="w-full h-80 mb-8" />
            <div className="boldPrimaryText text-lg mb-2">bull vs bear poll</div>
            <CircleChart wrapperClassName="w-full h-80 mb-8" />
            <div className="boldPrimaryText text-lg mb-2">similar stocks</div>
            <SimilarSocks wrapperClassName="mb-8" />
            <div className="boldPrimaryText text-lg mb-2">news release</div>
            <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} />
            <div className="boldPrimaryText text-lg mb-2">pie chart title</div>
            <TopMembers wrapperClassName="overflow-auto mb-8" />
            <TopMembers wrapperClassName="overflow-auto mb-8" />
            <TopMembers wrapperClassName="overflow-auto mb-8" />
            <TopMembers wrapperClassName="overflow-auto mb-8" />
          </TabPane>
          <TabPane
            tab={
              <div className={`text-primary text-lg ${tab !== 'appleWall' ? 'opacity-40' : ''}`}>
                Apple Wall
              </div>
            }
            key="appleWall"
          >
            <StockWallForm wrapperClassName="card p-0" />
          </TabPane>
          <TabPane
            tab={
              <div className={`text-primary text-lg ${tab !== 'appleCharts' ? 'opacity-40' : ''}`}>
                Apple charts
              </div>
            }
            key="appleCharts"
          >
            ddddd
          </TabPane>
        </Tabs>
      </div>
      <div className="text-lightGray text-center mt-3 mb-20">© stockwick inc.</div>
    </Layout>
  );
}

export default Stock;
