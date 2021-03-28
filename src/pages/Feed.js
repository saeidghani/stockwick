/*eslint-disable*/
import React from 'react';
// import PropTypes from 'prop-types';
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

function Feed() {
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

  const Tags = () => (
    <div className="flex justify-between items-center mb-4">
      <Tag text="all">
        <img src={chartIcon} alt="" className="bg-primary px-1.5" />
      </Tag>
      <Tag text="bullish">
        <BullishIcon fill="secondary" wrapperClassName="bg-primary px-1.5 flex items-center" />
      </Tag>
      <Tag text="balanced">
        <img src={balancedIcon} alt="" className="bg-primary px-1.5" />
      </Tag>
      <Tag text="bearish">
        <img src={bearishIcon} alt="" className="bg-primary px-1.5" />
      </Tag>
    </div>
  );

  return (
    <Layout mainClassName="md:pt-8 md:pb-10 md:px-4 lg:px-0 lg:container">
      <div className="pb-2 bg-blueGray px-4 pt-6 md:pt-4 md:pb-10">
        <div className="hidden md:grid md:grid-cols-4 md:gap-x-4">
          <div className="col-start-1">
            <StocksList title="My Watchlist" wrapperClassName="mb-4">
              <FilterSlider filterList={watchListFilterList} />
            </StocksList>
            <StocksList title="Stocks" wrapperClassName="mb-4">
              <FilterSlider filterList={allStocksFilterList} />
            </StocksList>
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
              <div className="w-full boldPrimaryText text-xl p-4 bg-white border border-solid border-itemBorder">
                My Wall
              </div>
              <AddPost
                uploadBtsPosition="end"
                uploadBtnClassName="w-full bg-white border border-solid border-itemBorder"
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
            <Stories wrapperClassName="mb-4" />
            <NewsReleaseSummary wrapperClassName="mb-4" />
            <Activity />
          </div>
        </div>
        <div className="md:hidden">
          <Tags />
          <Stories wrapperClassName="my-6" />
          <div className="">
            <div className="w-full boldPrimaryText text-xl p-4 bg-white border border-solid border-itemBorder">
              My Wall
            </div>
            <AddPost
              uploadBtsPosition="end"
              uploadBtnClassName="w-full bg-white border border-solid border-itemBorder"
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
