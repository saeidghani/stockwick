import React, { useEffect } from 'react';
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
  const { tab } = parsedQuery;

  useEffect(() => {
    setQuery({ tab: 'overview' });
  }, []);

  const onTabChange = (key) => {
    setQuery({ tab: key });
  };

  return (
    <Layout mainClassName="md:pt-8 md:pb-10 md:px-4 lg:px-0 lg:container">
      <div className="pb-2 md:bg-blueGray md:px-4 md:pt-4 md:pb-10">
        <StockSummary />
        <div className="hidden md:block mt-4">
          <div className="grid grid-cols-2 gap-x-4">
            <div className="">
              <Chart wrapperClassName="w-full h-80 mb-4" />
              <StockDetails wrapperClassName="mb-4" />
              <div className="flex space-x-4">
                <div className="w-full mb-4">
                  <div className="boldPrimaryText text-lg mb-2">technical analysis</div>
                  <CircleChart wrapperClassName="w-full h-80" />
                </div>
                <div className="w-full mb-4">
                  <div className="boldPrimaryText text-lg mb-2">bull vs bear poll</div>
                  <CircleChart wrapperClassName="w-full h-80" />
                </div>
              </div>
              <SimilarSocks wrapperClassName="mb-4" />
              <div className="flex space-x-4 mb-4">
                <NewsReleaseDetailed maxHeight={600} displayTitle />
                <NewsReleaseDetailed maxHeight={600} displayTitle />
              </div>
            </div>
            <div className="">
              <Stories wrapperClassName="mb-4" />
              <StockWallForm wrapperClassName="card p-0 mb-2" maxHeight={500} />
              <StockWallForm wrapperClassName="card p-0 mb-2" maxHeight={485} displayChart />
            </div>
          </div>
          <div className="boldPrimaryText text-lg mb-2">pie chart title</div>
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <div className="text-lightGray text-center mt-6">© stockwick inc.</div>
        </div>
      </div>
      <div className="md:hidden c-tabs px-4">
        <Tabs activeKey={tab} onChange={onTabChange}>
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
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full">
                <div className="boldPrimaryText text-lg mb-2">technical analysis</div>
                <CircleChart wrapperClassName="w-full h-80 mb-8" />
              </div>
              <div className="w-full">
                <div className="boldPrimaryText text-lg mb-2">bull vs bear poll</div>
                <CircleChart wrapperClassName="w-full h-80 mb-8" />
              </div>
            </div>
            <div className="boldPrimaryText text-lg mb-2">similar stocks</div>
            <SimilarSocks wrapperClassName="mb-8" />
            <div className="sm:hidden">
              <div className="boldPrimaryText text-lg mb-2">news release</div>
              <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} />
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-4">
              <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} displayTitle />
              <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} displayTitle />
            </div>
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
            <StockWallForm wrapperClassName="card p-0 mb-8" />
          </TabPane>
          <TabPane
            tab={
              <div className={`text-primary text-lg ${tab !== 'appleCharts' ? 'opacity-40' : ''}`}>
                Apple charts
              </div>
            }
            key="appleCharts"
          >
            <StockWallForm wrapperClassName="card p-0 mb-8" displayChart />
          </TabPane>
        </Tabs>
        <div className="text-lightGray text-center mt-3 mb-20">© stockwick inc.</div>
      </div>
    </Layout>
  );
}

export default Stock;
