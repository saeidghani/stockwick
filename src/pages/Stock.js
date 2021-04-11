/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Grid, Tabs } from 'antd';
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
import FilterSlider from '../components/common/FilterSlider';
import AddPost from '../components/common/AddPost';
import StockWall from '../components/common/StockWall';
import ChartModal from '../components/common/ChartModal';
import AddStoryModal from '../components/common/AddStoryModal';
import StoryViewModal from '../components/common/StoryViewModal';
import StoryViewersModal from '../components/common/StoryViewersModal';

const { TabPane } = Tabs;

function Stock() {
  const [addStoryModalVisible, setAddStoryModalVisible] = useState(false);
  const [chartModalVisible, setChartModalVisible] = useState(false);
  const [storyViewModalVisible, setStoryViewModalVisible] = useState(false);
  const [storyViewersModalVisible, setStoryViewersModalVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;

  const { useBreakpoint } = Grid;
  const { sm: smUp, xs: xsUp } = useBreakpoint();

  useEffect(() => {
    setQuery({ auth: true, tab: 'overview' });
  }, []);

  const onTabChange = (key) => {
    setQuery({ tab: key });
  };

  const comments = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }];

  const timeList = [
    { key: 1, title: '1 minute' },
    { key: 2, title: '5 minute' },
    { key: 3, title: '15 minute' },
    { key: 4, title: '1 hours' },
    { key: 5, title: '4 hours' },
  ];

  const periodList = [
    { key: 1, title: 'daily' },
    { key: 2, title: 'weekly' },
    { key: 3, title: 'monthly' },
    { key: 4, title: 'yearly' },
    { key: 5, title: 'yearly' },
    { key: 6, title: 'yearly' },
  ];

  return (
    <Layout mainClassName="min-h-screen xl:pt-8 xl:pb-10 xl:container">
      <ChartModal
        modalVisible={smUp && chartModalVisible}
        drawerVisible={!smUp && chartModalVisible}
      >
        <Chart
          wrapperClassName="mb-4 card p-4"
          title="advance charting"
          height={370}
          onClose={() => setChartModalVisible(false)}
          unExpand
        />
      </ChartModal>
      <AddStoryModal
        onCancel={() => setAddStoryModalVisible(false)}
        modalVisible={smUp && addStoryModalVisible}
        drawerVisible={!smUp && addStoryModalVisible}
      />
      <StoryViewModal
        onCancel={() => setStoryViewModalVisible(false)}
        modalVisible={smUp && storyViewModalVisible}
        drawerVisible={!smUp && storyViewModalVisible}
        onStoryViewers={() => setStoryViewersModalVisible(true)}
      />
      <StoryViewersModal
        onCancel={() => setStoryViewersModalVisible(false)}
        modalVisible={smUp && storyViewersModalVisible}
        drawerVisible={!smUp && storyViewersModalVisible}
      />
      <div className="pb-2 bg-blueGray xl:px-4 xl:pt-4 xl:pb-10">
        <StockSummary />
        <div className="hidden xl:block mt-4">
          <div className="grid grid-cols-2 gap-x-4">
            <div className="">
              <Chart
                wrapperClassName="mb-4 card p-4"
                title="Advance Charting"
                height={370}
                onExpandClick={() => setChartModalVisible(true)}
                expand
              />
              <div className="relative" style={{ height: 70 }}>
                <StockDetails wrapperClassName="mb-4 absolute w-full" />
              </div>
              <div className="grid grid-cols-2 gap-x-2">
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">Technical Analysis</div>
                  <div className="mx-auto mb-4">
                    <FilterSlider filterList={timeList} />
                  </div>
                  <CircleChart wrapperClassName="w-full h-48" />
                </div>
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">Bull Vs Bear Poll</div>
                  <div className="mx-auto mb-4">
                    <FilterSlider filterList={periodList} />
                  </div>
                  <CircleChart wrapperClassName="w-full h-48" />
                </div>
              </div>
              <SimilarSocks wrapperClassName="mb-4" displayTitle />
              <div className="flex space-x-4 mb-4">
                <NewsReleaseDetailed maxHeight={600} displayTitle />
                <NewsReleaseDetailed maxHeight={600} displayTitle />
              </div>
            </div>
            <div className="col-start-2 col-span-1">
              <Stories
                wrapperClassName="card mb-4 p-1"
                onAddStory={() => setAddStoryModalVisible(true)}
                onStoryView={() => setStoryViewModalVisible(true)}
              />
              <StockWall
                wrapperClassName="border-t border-l border-r border-solid border-cardBorder bg-white top-4"
                maxHeight={470}
                comments={comments}
                isBullish
                title="appl wall"
              />
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-4"
                contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
                textAreaWrapperClassName="w-full flex space-x-4"
                pollPlusClassName="absolute top-24 lg:right-10 xl:right-16"
                uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                footerClassName="flex flex-col xl:flex-row pr-4 py-4 w-full bg-mediumGray justify-between"
                postBtnClassName="c-primary-btn self-end mt-4 xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 lg:grid-cols-4 justify-items-start lg:justify-items-center xl:gap-x-2 gap-y-4 lg:pl-2 xl:pl-4 mb-4"
                formName="stockWall"
              />
              <StockWall
                wrapperClassName="border-t border-l border-r border-solid border-cardBorder bg-white top-4"
                maxHeight={468}
                comments={comments}
                isBearish
                title="appl charts"
                displayChart
              />
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
                textAreaWrapperClassName="w-full flex space-x-4"
                pollPlusClassName="absolute top-24 lg:right-10 xl:right-16"
                uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                footerClassName="flex flex-col xl:flex-row pr-4 py-4 w-full bg-mediumGray justify-between"
                postBtnClassName="c-primary-btn self-end mt-4 xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 lg:grid-cols-4 justify-items-start lg:justify-items-center xl:gap-x-2 gap-y-4 lg:pl-2 xl:pl-4 mb-4"
                formName="stockWall"
              />
            </div>
          </div>
          {!parsedQuery?.isCrypto && (
            <>
              <div className="boldPrimaryText text-lg mb-2">pie chart title</div>
              <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
              <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
              <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
              <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
            </>
          )}
          <div className="text-lightGray text-center mt-6">© stockwick inc.</div>
        </div>
        <div className="xl:hidden c-tabs px-2 xs:px-4">
          <Tabs activeKey={tab} onChange={onTabChange}>
            <TabPane
              tab={
                <div
                  className={`text-primary text-lg ${tab !== 'overview' ? 'text-opacity-40' : ''}`}
                >
                  Overview
                </div>
              }
              key="overview"
            >
              <Stories
                wrapperClassName="mb-4"
                onAddStory={() => setAddStoryModalVisible(true)}
                onStoryView={() => setStoryViewModalVisible(true)}
                gridCols={xsUp && !smUp ? 4 : !xsUp && smUp ? 7 : 3}
              />
              <div className="boldPrimaryText text-lg mb-2">Advance Charting</div>
              <Chart wrapperClassName="w-full h-80 mb-8" />
              <div className="relative" style={{ height: 70 }}>
                <StockDetails wrapperClassName="mb-4 absolute w-full" />
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 mt-4 mb-4">
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">Technical Analysis</div>
                  <div className="card p-4">
                    <div className="mx-auto mb-4">
                      <FilterSlider filterList={timeList} />
                    </div>
                    <CircleChart wrapperClassName="w-full h-48" />
                  </div>
                </div>
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">Bull Vs Bear Poll</div>
                  <div className="card p-4">
                    <div className="mx-auto mb-4">
                      <FilterSlider filterList={periodList} />
                    </div>
                    <CircleChart wrapperClassName="w-full h-48" />
                  </div>
                </div>
              </div>
              <div className="boldPrimaryText text-lg mb-2">Similar Stocks</div>
              <SimilarSocks wrapperClassName="mb-8" />
              <div className="sm:hidden">
                <div className="boldPrimaryText text-lg mb-2">News Release</div>
                <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} />
              </div>
              <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-4">
                <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} displayTitle />
                <NewsReleaseDetailed wrapperClassName="mb-8" maxHeight={470} displayTitle />
              </div>
              {!parsedQuery?.isCrypto && (
                <>
                  <div className="boldPrimaryText text-lg mb-2">pie chart title</div>
                  <TopMembers wrapperClassName="overflow-auto mb-8" width={1000} />
                  <TopMembers wrapperClassName="overflow-auto mb-8" width={1000} />
                  <TopMembers wrapperClassName="overflow-auto mb-8" width={1000} />
                  <TopMembers wrapperClassName="overflow-auto mb-8" width={1000} />
                </>
              )}
            </TabPane>
            <TabPane
              tab={
                <div
                  className={`text-primary text-lg ${tab !== 'appleWall' ? 'text-opacity-40' : ''}`}
                >
                  Apple Wall
                </div>
              }
              key="appleWall"
            >
              <StockWall
                wrapperClassName="border-t border-l border-r border-solid border-cardBorder bg-white top-4 pl-0 xs:px-2"
                maxHeight={500}
                comments={comments}
                isBullish
                title="appl wall"
              />
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
                textAreaWrapperClassName="w-full flex space-x-4"
                uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                footerClassName="flex flex-col xs:flex-row px-2 sm:px-4 py-4 w-full bg-mediumGray justify-between"
                postBtnClassName="self-end xs:self-center c-primary-btn mt-4 pr-2"
                tagsClassName="grid grid-cols-2 gap-y-2 xs:flex xs:space-x-4 mb-4 pl-4"
                pollPlusClassName="absolute top-24 right-0 sm:right-20 md:right-28"
                formName="stockWall"
              />
            </TabPane>
            <TabPane
              tab={
                <div
                  className={`text-primary text-lg ${
                    tab !== 'appleCharts' ? 'text-opacity-40' : ''
                  }`}
                >
                  Apple charts
                </div>
              }
              key="appleCharts"
            >
              <div className="boldPrimaryText mb-4">appl charts</div>
              <StockWall
                wrapperClassName="border-t border-l border-r border-solid border-cardBorder bg-white top-4 pl-0 xs:px-2"
                maxHeight={500}
                comments={comments}
                isBullish
                title="Market’s commitment long title #1"
                titleClassName="boldPrimaryText text-xl mt-2 mb-4 pl-2 xs:pl-4"
                displayChart
              />
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
                textAreaWrapperClassName="w-full flex space-x-4"
                uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                footerClassName="flex flex-col xs:flex-row px-2 sm:px-4 py-4 w-full bg-mediumGray justify-between"
                postBtnClassName="self-end xs:self-center c-primary-btn mt-4 pr-2"
                tagsClassName="grid grid-cols-2 gap-y-2 xs:flex xs:space-x-4 mb-4 pl-4"
                pollPlusClassName="absolute top-24 right-0 sm:right-20 md:right-28"
                formName="stockWall"
              />
            </TabPane>
          </Tabs>
          <div className="text-lightGray text-center mt-3 mb-20">© stockwick inc.</div>
        </div>
      </div>
    </Layout>
  );
}

export default Stock;
