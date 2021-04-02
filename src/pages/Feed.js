/*eslint-disable*/
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from 'antd';
import chartIcon from '../assets/icons/chart.svg';
import balancedIcon from '../assets/icons/balanced.svg';
import bearishIcon from '../assets/icons/bearish.svg';
import Layout from '../layouts/MainLayout/MainLayout';
import Stories from '../components/common/Stories';
import NewsReleaseSummary from '../components/common/NewsReleaseSummary';
import Activity from '../components/common/Activity';
import StocksList from '../components/common/StocksList';
import AddPost from '../components/common/AddPost';
import Tag from '../components/common/Tag';
import { BullishIcon } from '../components/common/Icons';
import FilterSlider from '../components/common/FilterSlider';
import StockWall from '../components/common/StockWall';
import { useQuery } from '../hooks/useQuery';
import AddStoryModal from '../components/common/AddStoryModal';
import StoryViewModal from '../components/common/StoryViewModal';
import StocksListModal from '../components/common/StocksListModal';
import StoryViewersModal from '../components/common/StoryViewersModal';

function Feed() {
  const [stocksListModalVisible, setStocksListModalVisible] = useState({
    watchlist: false,
    stocks: false,
  });
  const [addStoryModalVisible, setAddStoryModalVisible] = useState(false);
  const [storyViewModalVisible, setStoryViewModalVisible] = useState(false);
  const [storyViewersModalVisible, setStoryViewersModalVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  const { useBreakpoint } = Grid;
  const { sm: smOrHigherScreen } = useBreakpoint();

  useEffect(() => {
    setQuery({ auth: true });
  }, []);

  const watchListFilterList = [
    { key: 1, title: 'all' },
    { key: 2, title: 'stocks' },
    { key: 3, title: 'cryptocurrencies' },
    { key: 4, title: 'forex' },
    { key: 5, title: 'bitcoin' },
    { key: 6, title: 'bitcoin' },
  ];

  const allStocksFilterList = [
    { key: 1, title: 'most viewed' },
    { key: 2, title: 'most commented' },
    { key: 3, title: 'most recommended' },
    { key: 4, title: 'most like' },
    { key: 5, title: 'most agree' },
    { key: 6, title: 'most agree' },
  ];

  const stocksListCards = [
    { key: 'watchlist', title: 'My Watchlist', filter: watchListFilterList },
    { key: 'stocks', title: 'Stocks', filter: allStocksFilterList },
  ];

  const Tags = () => (
    <div className="flex justify-between items-center mb-4">
      <Tag text="all" textClassName="px-2">
        <img src={chartIcon} alt="" className="w-8 bg-primary px-1.5" />
      </Tag>
      <Tag text="bullish" textClassName="px-2">
        <BullishIcon fill="secondary" wrapperClassName="w-8 bg-primary px-1.5 flex items-center" />
      </Tag>
      <Tag text="balanced" textClassName="px-2">
        <img src={balancedIcon} alt="" className="w-8 bg-primary px-1.5" />
      </Tag>
      <Tag text="bearish" textClassName="px-2">
        <img src={bearishIcon} alt="" className="w-8 bg-primary px-1.5" />
      </Tag>
    </div>
  );

  return (
    <Layout mainClassName="min-h-screen md:pt-8 md:pb-10 md:px-4 lg:px-0 lg:container">
      {stocksListCards.map(({ key, title, filter }) => (
        <StocksListModal
          modalVisible={smOrHigherScreen && stocksListModalVisible[key]}
          drawerVisible={!smOrHigherScreen && stocksListModalVisible[key]}
        >
          <StocksList
            title={title}
            wrapperClassName="mb-4"
            expand={false}
            onClose={() => setStocksListModalVisible({ [key]: false })}
            height={!smOrHigherScreen ? 600 : 450}
          >
            <FilterSlider filterList={watchListFilterList} />
          </StocksList>
        </StocksListModal>
      ))}
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
      <div className="pb-6 bg-blueGray px-4 pt-6 md:pt-4 md:pb-10">
        <div className="hidden md:grid md:grid-cols-4 md:gap-x-4">
          <div className="col-start-1">
            {stocksListCards.map(({ key, title, filter }) => (
              <StocksList
                title={title}
                wrapperClassName="mb-4"
                onExpandClick={() => setStocksListModalVisible({ [key]: true })}
              >
                <FilterSlider filterList={filter} />
              </StocksList>
            ))}
            <div className="bg-primary flex justify-center items-center h-60 rounded">
              <div className="flex flex-col items-center">
                <div className="text-white">powered by</div>
                <div className="textLogo text-3xl">stockwick</div>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-span-2">
            <Tags />
            <div className="">
              <div className="w-full boldPrimaryText text-xl px-4 py-2 bg-white border border-solid border-itemBorder">
                My Wall
              </div>
              <AddPost
                miniBox
                footerClassName="flex-col xl:flex-row"
                postBtnClassName="self-end xl:self-center"
                tagsClassName="grid grid-cols-2 gap-y-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-start lg:justify-items-center xl:gap-x-2 gap-y-4 lg:pl-2 xl:pl-4 mb-4"
                uploadBtsPosition="end"
                placeholder="#stonksgame #strong, post something…"
              />
            </div>
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-darkGreen"
              isBullish
            />
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-itemBorder"
              displayChart
            />
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-accent"
              isBearish
            />
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-darkGreen"
              isBullish
            />
          </div>
          <div className="col-start-4">
            <Stories
              wrapperClassName="card p-1 mb-4"
              onAddStory={() => setAddStoryModalVisible(true)}
              onStoryView={() => setStoryViewModalVisible(true)}
            />
            <NewsReleaseSummary wrapperClassName="mb-4" />
            <Activity />
          </div>
        </div>
        <div className="md:hidden">
          <Tags />
          <Stories
            wrapperClassName="my-6"
            onAddStory={() => setAddStoryModalVisible(true)}
            onStoryView={() => setStoryViewModalVisible(true)}
          />
          <div className="">
            <div className="w-full boldPrimaryText text-xl px-4 py-2 bg-white border border-solid border-itemBorder">
              My Wall
            </div>
            <AddPost
              miniBox
              uploadBtsPosition="end"
              placeholder="#stonksgame #strong, post something…"
            />
          </div>
          <StockWall
            wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-darkGreen"
            isBullish
          />
          <StockWall wrapperClassName="mt-4 p-4 bg-white rounded" displayChart />
          <StockWall
            wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-accent"
            isBearish
          />
          <StockWall
            wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-darkGreen"
            isBullish
          />
          <div className="text-lightGray text-center mt-6">© stockwick inc.</div>
        </div>
      </div>
    </Layout>
  );
}

Feed.propTypes = {
  //
};

Feed.defaultProps = {};

export default Feed;
