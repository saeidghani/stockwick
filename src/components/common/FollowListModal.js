import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { useQuery } from '../../hooks/useQuery';
import searchIcon from '../../assets/icons/search.svg';
import Modal from '../UI/Modal';
import Drawer from '../UI/Drawer';
import Input from '../UI/Input';
import BackButton from './BackButton';
import FollowColumn from './FollowColumn';

const { TabPane } = Tabs;

function FollowListModal({ modalVisible, drawerVisible, onOk, onCancel, followed, onSetFollowed }) {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { followTab } = parsedQuery;

  const onTabChange = (key) => {
    setQuery({ followTab: key });
  };

  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const allTabs = [
    { title: 'Following', count: 32, items: allItems, key: 'following' },
    { title: 'Followers', count: 21, items: allItems, key: 'followers' },
    { title: 'Blocklist', count: 21, items: allItems, key: 'blocklist' },
  ];

  const SearchInput = (
    <div className="relative w-80">
      <Input
        wrapperClassName="c-primary-filled-input"
        onChange={() => {}}
        name="search"
        placeholder="Search"
      />
      <img className="absolute top-4 right-6" src={searchIcon} alt="" />
    </div>
  );

  // eslint-disable-next-line react/prop-types
  const Content = ({ height, wrapClassName }) => (
    <div className={wrapClassName}>
      <div className={drawerVisible ? 'c-tabs' : 'c-tabs-primary-bar'}>
        <Tabs
          defaultActiveKey="following"
          activeKey={followTab}
          onChange={onTabChange}
          tabBarExtraContent={modalVisible && SearchInput}
        >
          {allTabs.map((t) => (
            <TabPane
              tab={
                <div
                  className={`flex flex-col items-center ${
                    followTab !== t.key ? 'opacity-30' : ''
                  }`}
                >
                  <div className="text-primary font-medium text-xl">{t.count}</div>
                  <div className="text-primary font-medium text-base">{t.title}</div>
                </div>
              }
              key={t.key}
            >
              <FollowColumn
                followed={followed}
                onSetFollowed={onSetFollowed}
                btnClassName={
                  modalVisible ? 'c-secondary-btn--light w-26' : 'c-blue-outline-btn w-26'
                }
                items={t.items}
                height={height}
                childBorder={false}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );

  return (
    <div>
      <Modal onCancel={onCancel} onOk={onOk} visible={modalVisible}>
        <Content wrapClassName="pt-5" height={400} />
      </Modal>
      <Drawer
        visible={drawerVisible}
        onClose={onCancel}
        wrapClassName="w-full h-full"
        headerStyle={{ border: 0, padding: 0 }}
        bodyStyle={{ paddingTop: 0 }}
        title={
          <div className="bg-primary grid grid-cols-3 justify-items-center items-center py-2 px-4">
            <BackButton
              wrapperClassName="justify-self-start"
              textClassName="text-white text-base pt-0.5"
              iconClassName="text-white text-base mr-2"
              onClick={onCancel}
            />
            <div className="textLogo text-xl">stockwick</div>
          </div>
        }
      >
        <Content height={680} />
      </Drawer>
    </div>
  );
}

FollowListModal.propTypes = {
  modalVisible: PropTypes.bool,
  drawerVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
  followed: PropTypes.arrayOf(PropTypes.shape({})),
  onSetFollowed: PropTypes.func,
};

FollowListModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
  followed: [],
  onSetFollowed: () => {},
};

export default FollowListModal;
