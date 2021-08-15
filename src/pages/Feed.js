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
  const { xs: xsUp, sm: smUp, xl: lgUp } = useBreakpoint();

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
    <div className="flex flex-wrap justify-between items-center mb-4 max-w-120 mx-auto child-mb--sm">
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
    <Layout mainClassName="min-h-screen xl:pt-8 xl:pb-10 xl:container">
      {stocksListCards.map(({ key, title, filter }) => (
        <StocksListModal
          key={key}
          modalVisible={smUp && stocksListModalVisible[key]}
          drawerVisible={!smUp && stocksListModalVisible[key]}
        >
          <StocksList
            title={title}
            wrapperClassName="mb-4"
            expand={false}
            onClose={() => setStocksListModalVisible({ [key]: false })}
            height={!smUp ? 600 : 450}
          >
            <FilterSlider filterList={watchListFilterList} />
          </StocksList>
        </StocksListModal>
      ))}
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
      <div className="pb-6 bg-blueGray px-2 sm:px-4 pt-6 md:pt-4 md:pb-10">
        <div className="hidden xl:grid xl:grid-cols-7 xl:gap-x-4">
          <div className="col-start-1 col-span-2">
            <div className="sticky-position">
              {stocksListCards.map(({ key, title, filter }) => (
                <StocksList
                  key={key}
                  title={title}
                  wrapperClassName="mb-4"
                  height={430}
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
          </div>
          <div className="col-start-3 col-span-3">
            <Tags />
            <div className="">
              <div className="w-full boldPrimaryText text-xl px-4 py-2 bg-white border border-solid border-itemBorder">
                My Wall
              </div>
              <AddPost
                miniBox
                wrapperClassName="card p-0 mb-2"
                contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
                textAreaWrapperClassName="w-full flex space-x-4"
                pollPlusClassName="absolute top-24 lg:right-10 xl:right-16"
                uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                footerClassName="flex flex-col xl:flex-row pr-4 py-4 w-full bg-mediumGray justify-between"
                postBtnClassName="c-primary-btn self-end mt-4 xl:self-center pl-4"
                tagsClassName="flex justify-between items-center pl-4 mb-4"
                allTagsClassName="px-0"
                formName="stockWall"
              />
            </div>
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-darkGreen"
              isBullish
            />
            <StockWall wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-itemBorder" />
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-accent"
              isBearish
            />
            <StockWall
              wrapperClassName="mt-4 p-4 bg-white rounded border border-solid border-darkGreen"
              isBullish
            />
          </div>
          <div className="col-start-6 col-span-2">
            <div className="sticky-position">
              <Stories
                wrapperClassName="card p-1 mb-4"
                onAddStory={() => setAddStoryModalVisible(true)}
                onStoryView={() => setStoryViewModalVisible(true)}
              />
              <NewsReleaseSummary wrapperClassName="mb-4" />
              <Activity title="Follower’s Activity" />
            </div>
          </div>
        </div>
        <div className="xl:hidden">
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
              wrapperClassName="card p-0 mb-2"
              contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
              textAreaWrapperClassName="w-full flex space-x-4"
              uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
              footerClassName="flex flex-col xs:flex-row px-2 sm:px-4 py-4 w-full bg-mediumGray justify-between"
              tagsClassName="grid grid-cols-2 gap-y-2 xs:flex xs:space-x-4 mb-4 pl-4"
              pollPlusClassName="absolute top-24 right-0 sm:right-20 md:right-28"
              postBtnClassName="self-end xs:self-center c-primary-btn mt-4 pr-2"
              formName="stockWall"
            />
          </div>
          <StockWall
            wrapperClassName="mt-4 py-4 px-1 xs:px-4 bg-white rounded border border-solid border-darkGreen"
            isBullish
          />
          <StockWall wrapperClassName="mt-4 py-4 px-1 xs:px-4 bg-white rounded" />
          <StockWall
            wrapperClassName="mt-4 py-4 px-1 xs:px-4 bg-white rounded border border-solid border-accent"
            isBearish
          />
          <StockWall
            wrapperClassName="mt-4 py-4 px-1 xs:px-4 bg-white rounded border border-solid border-darkGreen"
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
