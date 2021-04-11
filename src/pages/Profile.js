/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { Grid, Tabs } from 'antd';
// import PropTypes from 'prop-types';
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
  const [followed, setFollowed] = useState([]);

  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab, othersProfile } = parsedQuery || {};

  const { useBreakpoint } = Grid;
  const { sm: smUp } = useBreakpoint();

  // const dispatch = useDispatch();

  useEffect(() => {
    /*(async () => await dispatch.posts.getMyPosts())();*/
    setQuery({ auth: true, tab: 'idea', followTab: 'followers' });
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

  const handleFollowUser = (userId) => {
    if (followed?.includes(userId)) {
      const newFollowed = followed.filter((f) => f !== userId);
      setFollowed(newFollowed);
    } else {
      setFollowed([...followed, userId]);
    }
  };

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
        followed={followed}
        onSetFollowed={(userId) => handleFollowUser(userId)}
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
      <div className="pb-2 bg-blueGray lg:px-4 lg:pt-4 lg:pb-10">
        <div className="hidden lg:grid lg:grid-cols-7 lg:gap-x-4">
          <div className="col-start-1 col-span-2">
            <div className="sticky-position">
              <ProfileIntro
                onOpenFollowListModalVisible={() => setFollowListModalVisible(true)}
                followed={followed}
                onSetFollowed={(userId) => handleFollowUser(userId)}
              />
              <Activity title="My Activity" />
            </div>
          </div>
          <div className="col-start-3 col-span-3">
            <div
              className="flex justify-between w-full boldPrimaryText text-xl px-4 py-2 bg-white
                    border border-solid border-itemBorder"
            >
              <div className="pt-2">{othersProfile ? 'jasons wall' : 'My Wall'}</div>
              {othersProfile && <Button text="+Follow" wrapperClassName="c-secondary-btn" />}
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
                {!othersProfile && (
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
                )}
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
                height={430}
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
                {!othersProfile && (
                  <Button
                    text="Edit"
                    textClassName="text-sm"
                    className="px-4 py-0 bg-transparent border border-solid border-white"
                    size="small"
                    onClick={() => setEditProfileDrawerVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="grid grid-cols-12 py-4">
              <div className="col-start-3 col-span-2 flex flex-col items-center">
                <div className="text-white">32</div>
                <div className="text-white">Followings</div>
              </div>
              <div className="col-start-9 col-span-2 flex flex-col items-center">
                <div className="text-white">64</div>
                <div className="text-white">Followers</div>
              </div>
            </div>
          </div>
          <div className="c-tabs px-2 xs:px-4">
            <Tabs activeKey={tab} onChange={onTabChange}>
              <TabPane
                tab={
                  <div
                    className={`text-primary text-lg ${tab !== 'idea' ? 'text-opacity-40' : ''}`}
                  >
                    Idea
                  </div>
                }
                key="idea"
              >
                {!othersProfile && (
                  <div className="hidden sm:block">
                    <AddPost
                      miniBox
                      wrapperClassName="card p-0 mb-2"
                      contentClassName="flex justify-between items-center w-full h-full my-auto px-4 space-x-4"
                      textAreaWrapperClassName="w-full flex space-x-4"
                      uploadBtnClassName="justify-self-center self-end flex items-center space-x-3"
                      footerClassName="flex flex-col sm:flex-row px-2 sm:px-4 py-4 w-full bg-mediumGray justify-between"
                      postBtnClassName="self-end sm:self-center c-primary-btn mt-4 pr-2"
                      tagsClassName="grid grid-cols-2 gap-y-2 xs:flex xs:space-x-4 mb-4 pl-4"
                      pollPlusClassName="absolute top-24 right-0 sm:right-20 md:right-28"
                      formName="stockWall"
                      placeholder="#stonksgame #strong, post something…"
                    />
                  </div>
                )}
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
                  <div
                    className={`text-primary text-lg ${tab !== 'story' ? 'text-opacity-40' : ''}`}
                  >
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
