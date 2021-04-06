/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Tabs } from 'antd';
// import PropTypes from 'prop-types';
import editIcon from '../assets/icons/edit.svg';
import storyPreview from '../assets/images/storyPreview.png';
import RouteMap from '../routes/RouteMap';
import { useQuery } from '../hooks/useQuery';
import Layout from '../layouts/MainLayout/MainLayout';
import Activity from '../components/common/Activity';
import StocksList from '../components/common/StocksList';
import AddPost from '../components/common/AddPost';
import FilterSlider from '../components/common/FilterSlider';
import StockWall from '../components/common/StockWall';
import FollowListModal from '../components/common/FollowListModal';
import EditProfileDrawer from '../components/common/EditProfileDrawer';
import Avatar from '../components/UI/Avatar';
import Button from '../components/UI/Button';
import StocksListModal from '../components/common/StocksListModal';
import StoryPreview from '../components/common/StoryPreview';
import AddStoryModal from '../components/common/AddStoryModal';
import StoryViewModal from '../components/common/StoryViewModal';
import StoryViewersModal from '../components/common/StoryViewersModal';
import ProfileIntro from '../components/common/ProfileIntro';

const { TabPane } = Tabs;

function Profile() {
  const [followListModalVisible, setFollowListModalVisible] = useState(false);
  const [editProfileDrawerVisible, setEditProfileDrawerVisible] = useState(false);
  const [stocksListModalVisible, setStocksListModalVisible] = useState(false);
  const [addStoryModalVisible, setAddStoryModalVisible] = useState(false);
  const [storyViewModalVisible, setStoryViewModalVisible] = useState(false);
  const [storyViewersModalVisible, setStoryViewersModalVisible] = useState(false);

  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;

  const { useBreakpoint } = Grid;
  const { sm: smUp } = useBreakpoint();

  useEffect(() => {
    setQuery({ auth: true, tab: 'idea', followTab: 'followers', modalFollowTab: 'following' });
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
  ];

  return (
    <Layout mainClassName="min-h-screen lg:pt-8 lg:pb-10 lg:px-4 xl:container">
      <EditProfileDrawer
        onCancel={() => setEditProfileDrawerVisible(false)}
        afterSave={() => setEditProfileDrawerVisible(false)}
        visible={editProfileDrawerVisible}
      />
      <FollowListModal
        onCancel={() => setFollowListModalVisible(false)}
        modalVisible={smUp && followListModalVisible}
        drawerVisible={!smUp && followListModalVisible}
      />
      <StocksListModal
        modalVisible={smUp && stocksListModalVisible}
        drawerVisible={!smUp && stocksListModalVisible}
      >
        <StocksList
          title="My Watchlist"
          wrapperClassName="mb-4"
          expand={false}
          height={!smUp ? 600 : 450}
          onClose={() => setStocksListModalVisible(false)}
        >
          <FilterSlider filterList={watchListFilterList} />
        </StocksList>
      </StocksListModal>
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
      <div className="pb-2 bg-blueGray px-4 lg:pt-4 lg:pb-10">
        <div className="hidden lg:grid lg:grid-cols-7 lg:gap-x-4">
          <div className="col-start-1 col-span-2">
            <div className="sticky-position">
              <ProfileIntro onOpenFollowListModalVisible={() => setFollowListModalVisible(true)} />
              <Activity title="My Activity" />
            </div>
          </div>
          <div className="col-start-3 col-span-3">
            <div
              className="w-full boldPrimaryText text-xl px-4 py-2 bg-white
                    border border-solid border-itemBorder"
            >
              My Wall
            </div>
            <Tabs activeKey={tab} onChange={onTabChange} className="c-tabs c-tabs-sm">
              <TabPane
                tab={
                  <div className={`boldPrimaryText text-lg ${tab !== 'idea' ? 'opacity-50' : ''}`}>
                    ideas
                  </div>
                }
                key="idea"
              >
                <AddPost
                  miniBox
                  wrapperClassName="card p-0 mb-2"
                  contentClassName="flex flex-col justify-between items-center w-full h-full my-auto px-4 space-x-4"
                  textAreaWrapperClassName="w-full flex space-x-4"
                  uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                  footerClassName="flex-col xl:flex-row"
                  postBtnClassName="self-end xl:self-center"
                  tagsClassName="grid grid-cols-2 gap-y-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-start lg:justify-items-center xl:gap-x-2 gap-y-4 lg:pl-2 xl:pl-4 mb-4"
                  pollPlusClassName="absolute top-24 right-12"
                  pollWidth="w-4/5"
                  formName="stockWall"
                />
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
              </TabPane>
              <TabPane
                tab={
                  <div className={`boldPrimaryText text-lg ${tab !== 'story' ? 'opacity-50' : ''}`}>
                    stories
                  </div>
                }
                key="story"
              >
                <div className="flex space-x-2 flex-wrap child-mb--lg">
                  <StoryPreview
                    wrapperClassName="ml-2"
                    onAddStory={() => setAddStoryModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                </div>
              </TabPane>
            </Tabs>
          </div>
          <div className="col-start-6 col-span-2">
            <div className="sticky-position">
              <StocksList
                title="My Watchlist"
                wrapperClassName="mb-4"
                onExpandClick={() => setStocksListModalVisible(true)}
              >
                <FilterSlider filterList={watchListFilterList} />
              </StocksList>
              <Activity title="Follower’s Activity" />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="bg-primary px-5">
            <div
              className="flex items-center space-x-4
                       border-b border-solid border-fadePrimary py-4"
            >
              <div
                className="flex relative cursor-pointer"
                onClick={() => history.push(RouteMap.profile.edit)}
              >
                <Avatar wrapperClassName="storyRing" avatarClassName="w-12 h-12" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="">
                  <div className="text-white font-bold">Jason Smith</div>
                  <div className="text-white">Looking infinity & beyond…</div>
                </div>
                <Button
                  text="Edit"
                  textClassName="text-sm"
                  className="px-4 py-0 bg-transparent border border-solid border-white"
                  size="small"
                  onClick={() => setEditProfileDrawerVisible(true)}
                />
              </div>
            </div>
            <div className="flex justify-center space-x-20 py-4">
              <div className="flex flex-col items-center">
                <div className="text-white">64</div>
                <div className="text-white">followers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-white">32</div>
                <div className="text-white">following</div>
              </div>
            </div>
          </div>
          <div className="c-tabs px-4">
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
                    className="w-full boldPrimaryText text-xl px-4 py-2 bg-white
                               border border-solid border-itemBorder"
                  >
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
                <div className="flex space-x-2 flex-wrap child-mb--lg">
                  <StoryPreview
                    wrapperClassName="ml-2"
                    onAddStory={() => setAddStoryModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                  <StoryPreview
                    src={storyPreview}
                    onViewStory={() => setStoryViewModalVisible(true)}
                  />
                </div>
              </TabPane>
            </Tabs>
          </div>
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
