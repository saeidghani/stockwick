import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { useQuery } from '../../hooks/useQuery';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Drawer from '../UI/Drawer';
import BackButton from './BackButton';
import Avatar from '../UI/Avatar';
import Input from '../UI/Input';
import searchIcon from '../../assets/icons/search.svg';

const { TabPane } = Tabs;

function FollowListModal({ modalVisible, drawerVisible, onOk, onCancel }) {
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

  // eslint-disable-next-line react/prop-types
  const FollowColumn = ({ items, height }) => (
    <div className="flex flex-col px-4 w-full overflow-auto" style={{ height }}>
      {/* eslint-disable-next-line react/prop-types */}
      {items?.map((i) => (
        <div key={i} className="flex justify-between items-center space-x-2 py-4">
          <div className="flex items-center space-x-2 w-full">
            <Avatar avatarClassName="w-11 h-11" />
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          </div>
          <Button
            wrapperClassName={modalVisible ? 'c-secondary-btn--light' : 'c-blue-outline-btn'}
            text="Follow"
          />
        </div>
      ))}
    </div>
  );

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
              <FollowColumn items={t.items} height={height} />
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
};

FollowListModal.defaultProps = {
  modalVisible: false,
  drawerVisible: false,
  onOk: () => {},
};

export default FollowListModal;
