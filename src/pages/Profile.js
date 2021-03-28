import React, { useEffect } from 'react';
import { Tabs } from 'antd';
// import PropTypes from 'prop-types';
import editIcon from '../assets/icons/edit.svg';
import Layout from '../layouts/MainLayout/MainLayout';
import Activity from '../components/common/Activity';
import StocksList from '../components/common/StocksList';
import AddPost from '../components/common/AddPost';
import FilterSlider from '../components/common/FilterSlider';
import StockWall from '../components/common/StockWall';
import FollowList from '../components/common/FollowList';
import Avatar from '../components/UI/Avatar';
import { useQuery } from '../hooks/useQuery';

const { TabPane } = Tabs;

function Profile() {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;

  useEffect(() => {
    setQuery({ tab: 'idea' });
  }, []);

  const onTabChange = (key) => {
    setQuery({ tab: key });
  };

  const watchListFilterList = [
    { key: 1, title: 'all' },
    { key: 2, title: 'stocks' },
    { key: 3, title: 'cryptocurrencies' },
    { key: 4, title: 'forex' },
    { key: 5, title: 'bitcoin' },
    { key: 6, title: 'bitcoin' },
  ];

  return (
    <Layout mainClassName="md:pt-8 md:pb-10 md:px-4 lg:px-0 lg:container">
      <div className="pb-2 bg-blueGray px-4 pt-6 md:pt-4 md:pb-10">
        <div className="hidden md:grid md:grid-cols-4 md:gap-x-4">
          <div className="col-start-1">
            <div className="bg-white flex flex-col items-center mb-4 pt-4">
              <div className="flex mb-4 relative">
                <Avatar wrapperClassName="storyRing" avatarClassName="w-20 h-20" />
                <img
                  src={editIcon}
                  className="w-8 h-8 absolute bottom-0 left-14 rounded-full ring ring-white"
                  alt=""
                />
              </div>
              <div className="boldPrimaryText mb-1">Jason Smith</div>
              <div className="text-primary mb-2">Looking infinity & beyond…</div>
              <FollowList />
            </div>
            <Activity />
          </div>
          <div className="col-start-2 col-span-2">
            <div className="">
              <div
                className="w-full boldPrimaryText text-xl p-4 bg-white
                    border border-solid border-itemBorder"
              >
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
              wrapperClassName="mt-4 p-4 bg-white rounded rounded border border-solid border-itemBorder"
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
            <StocksList title="My Watchlist" wrapperClassName="mb-4">
              <FilterSlider filterList={watchListFilterList} />
            </StocksList>
            <Activity />
          </div>
        </div>
        <div className="md:hidden c-tabs px-4">
          <Tabs activeKey={tab} onChange={onTabChange}>
            <TabPane
              tab={
                <div className={`text-primary text-lg ${tab !== 'idea' ? 'opacity-40' : ''}`}>
                  Idea
                </div>
              }
              key="idea"
            >
              <div className="">
                <div
                  className="w-full boldPrimaryText text-xl p-4 bg-white
                     border border-solid border-itemBorder"
                >
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
                wrapperClassName="mt-4 p-4 bg-white rounded rounded border border-solid border-itemBorder"
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
            </TabPane>
            <TabPane
              tab={
                <div className={`text-primary text-lg ${tab !== 'story' ? 'opacity-40' : ''}`}>
                  Story
                </div>
              }
              key="story"
            >
              ssssssssssssss
            </TabPane>
          </Tabs>
          <div className="text-lightGray text-center mt-3 mb-20">© stockwick inc.</div>
        </div>
      </div>
    </Layout>
  );
}

Profile.propTypes = {
  //
};

Profile.defaultProps = {};

export default Profile;
