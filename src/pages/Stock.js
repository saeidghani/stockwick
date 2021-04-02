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
  const { sm: smOrHigherScreen } = useBreakpoint();

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
    { key: 4, title: '20 minute' },
    { key: 5, title: '30 minute' },
    { key: 6, title: '45 minute' },
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
    <Layout mainClassName="min-h-screen md:pt-8 md:pb-10 md:px-4 lg:px-0 lg:container">
      <ChartModal
        modalVisible={smOrHigherScreen && chartModalVisible}
        drawerVisible={!smOrHigherScreen && chartModalVisible}
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
        modalVisible={smOrHigherScreen && addStoryModalVisible}
        drawerVisible={!smOrHigherScreen && addStoryModalVisible}
      />
      <StoryViewModal
        onCancel={() => setStoryViewModalVisible(false)}
        modalVisible={smOrHigherScreen && storyViewModalVisible}
        drawerVisible={!smOrHigherScreen && storyViewModalVisible}
        onStoryViewers={() => setStoryViewersModalVisible(true)}
      />
      <StoryViewersModal
        onCancel={() => setStoryViewersModalVisible(false)}
        modalVisible={smOrHigherScreen && storyViewersModalVisible}
        drawerVisible={!smOrHigherScreen && storyViewersModalVisible}
      />
      <div className="pb-2 bg-blueGray md:px-4 md:pt-4 md:pb-10">
        <StockSummary />
        <div className="hidden md:block mt-4">
          <div className="grid grid-cols-2 gap-x-4">
            <div className="">
              <Chart
                wrapperClassName="mb-4 card p-4"
                title="advance charting"
                height={370}
                onExpandClick={() => setChartModalVisible(true)}
                expand
              />
              <div className="relative" style={{ height: 70 }}>
                <StockDetails wrapperClassName="mb-4 absolute w-full" />
              </div>
              <div className="grid grid-cols-2 gap-x-2">
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">technical analysis</div>
                  <div className="mx-auto mb-4">
                    <FilterSlider filterList={timeList} />
                  </div>
                  <CircleChart wrapperClassName="w-full h-48" />
                </div>
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">bull vs bear poll</div>
                  <div className="mx-auto mb-4">
                    <FilterSlider filterList={periodList} />
                  </div>
                  <CircleChart wrapperClassName="w-full h-48" />
                </div>
              </div>
              <SimilarSocks wrapperClassName="mb-4" />
              <div className="flex space-x-4 mb-4">
                <NewsReleaseDetailed maxHeight={600} displayTitle />
                <NewsReleaseDetailed maxHeight={600} displayTitle />
              </div>
            </div>
            <div className="">
              <Stories
                wrapperClassName="card mb-4 p-1"
                onAddStory={() => setAddStoryModalVisible(true)}
                onStoryView={() => setStoryViewModalVisible(true)}
              />
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                footerClassName="flex-col xl:flex-row"
                postBtnClassName="self-end xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-start lg:justify-items-center xl:gap-x-2 gap-y-4 lg:pl-2 xl:pl-4 mb-4"
                uploadBtsPosition="end"
                formName="stockWall"
              >
                <StockWall
                  wrapperClassName="px-4 pt-4"
                  maxHeight={500}
                  comments={comments}
                  isBullish
                  title="appl wall"
                />
              </AddPost>
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                footerClassName="flex-col xl:flex-row"
                postBtnClassName="self-end xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-start lg:justify-items-center xl:gap-x-2 gap-y-4 lg:pl-2 xl:pl-4 mb-4"
                uploadBtsPosition="end"
                formName="stockCharts"
              >
                <StockWall
                  wrapperClassName="px-4 pt-4"
                  maxHeight={485}
                  comments={comments}
                  isBearish
                  title="appl charts"
                  displayChart
                />
              </AddPost>
            </div>
          </div>
          <div className="boldPrimaryText text-lg mb-2">pie chart title</div>
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <TopMembers wrapperClassName="overflow-auto mb-4" width="100%" />
          <div className="text-lightGray text-center mt-6">© stockwick inc.</div>
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
              <Stories
                wrapperClassName="mb-4"
                onAddStory={() => setAddStoryModalVisible(true)}
                onStoryView={() => setStoryViewModalVisible(true)}
              />
              <div className="boldPrimaryText text-lg mb-2">advance charting</div>
              <Chart wrapperClassName="w-full h-80 mb-8" />
              <div className="relative" style={{ height: 70 }}>
                <StockDetails wrapperClassName="mb-4 absolute w-full" />
              </div>
              <div className="grid grid-cols-2 gap-x-2 mt-4 mb-4">
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">technical analysis</div>
                  <div className="card p-4">
                    <div className="mx-auto mb-4">
                      <FilterSlider filterList={timeList} />
                    </div>
                    <CircleChart wrapperClassName="w-full h-48" />
                  </div>
                </div>
                <div className="w-full mb-4 md:bg-white md:p-3">
                  <div className="boldPrimaryText text-lg mb-4">bull vs bear poll</div>
                  <div className="card p-4">
                    <div className="mx-auto mb-4">
                      <FilterSlider filterList={periodList} />
                    </div>
                    <CircleChart wrapperClassName="w-full h-48" />
                  </div>
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
              <TopMembers wrapperClassName="overflow-auto mb-8" width="100%" />
              <TopMembers wrapperClassName="overflow-auto mb-8" width="100%" />
              <TopMembers wrapperClassName="overflow-auto mb-8" width="100%" />
              <TopMembers wrapperClassName="overflow-auto mb-8" width="100%" />
            </TabPane>
            <TabPane
              tab={
                <div className={`text-primary text-lg ${tab !== 'appleWall' ? 'opacity-40' : ''}`}>
                  Apple Wall
                </div>
              }
              key="appleWall"
            >
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                footerClassName="flex-col xl:flex-row"
                postBtnClassName="self-end xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 mb-2"
                uploadBtsPosition="end"
                formName="stockWall"
              >
                <StockWall
                  wrapperClassName="px-4 pt-4"
                  maxHeight={500}
                  comments={comments}
                  isBullish
                  title="appl wall"
                />
              </AddPost>
            </TabPane>
            <TabPane
              tab={
                <div
                  className={`text-primary text-lg ${tab !== 'appleCharts' ? 'opacity-40' : ''}`}
                >
                  Apple charts
                </div>
              }
              key="appleCharts"
            >
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                footerClassName="flex-col xl:flex-row"
                postBtnClassName="self-end xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 mb-2"
                uploadBtsPosition="end"
                formName="stockCharts"
              >
                <StockWall
                  wrapperClassName="px-4 pt-4"
                  maxHeight={485}
                  comments={comments}
                  isBearish
                  title="appl charts"
                  displayChart
                />
              </AddPost>
            </TabPane>
          </Tabs>
          <div className="text-lightGray text-center mt-3 mb-20">© stockwick inc.</div>
        </div>
      </div>
    </Layout>
  );
}

export default Stock;
