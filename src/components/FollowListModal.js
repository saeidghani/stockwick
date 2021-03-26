/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import searchIcon from '../assets/icons/search.svg';
import Modal from './Modal';
import Button from './Button';
import Avatar from './Avatar';
import Input from './Input';
import { useQuery } from '../hooks/useQuery';

const { TabPane } = Tabs;
const { Search } = Input;

function FollowListModal({ visible, onOk, onCancel }) {
  const allItems = [1, 2, 3, 4, 5, 6, 7];
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;

  const allTabs = [
    { title: 'Following', count: 32, items: allItems, key: 'following' },
    { title: 'Followers', count: 21, items: allItems, key: 'followers' },
    { title: 'Blocklist', count: 21, items: allItems, key: 'blocklist' },
  ];

  const callback = (tab) => {
    console.log(tab);
    setQuery({ tab });
  };

  // eslint-disable-next-line react/prop-types
  const FollowColumn = ({ items }) => (
    <div className="flex flex-col px-4 w-full">
      {/* eslint-disable-next-line react/prop-types */}
      {items?.map((i) => (
        <div key={i} className="flex justify-between items-center space-x-2 py-4">
          <div className="flex items-center space-x-2 w-full">
            <Avatar avatarClassName="w-11 h-11" />
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          </div>
          <Button wrapperClassName="c-secondary-btn" text="Follow" />
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

  return (
    <Modal onCancel={onCancel} onOk={onOk} visible={visible}>
      <div className="pt-4">
        <Tabs
          defaultActiveKey="following"
          activeKey={tab}
          onChange={callback}
          tabBarExtraContent={SearchInput}
        >
          {allTabs.map((t) => (
            <TabPane
              tab={
                <div className={`flex flex-col items-center ${tab !== t.key ? 'opacity-40' : ''}`}>
                  <div className="boldPrimaryText text-xl">{t.count}</div>
                  <div className="boldPrimaryText text-base">{t.title}</div>
                </div>
              }
              key={t.key}
            >
              <FollowColumn items={t.items} />
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Modal>
  );
}

FollowListModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

FollowListModal.defaultProps = {
  visible: false,
};

export default FollowListModal;
