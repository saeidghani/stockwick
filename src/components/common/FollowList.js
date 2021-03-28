import React, { useEffect } from 'react';
import { Tabs } from 'antd';
// import PropTypes from 'prop-types';
import { useQuery } from '../../hooks/useQuery';
import Avatar from '../UI/Avatar';
import Button from '../UI/Button';

const { TabPane } = Tabs;

function FollowList() {
  const allItems = [1, 2, 3, 4, 5, 6, 7];

  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { tab } = parsedQuery;

  useEffect(() => {
    setQuery({ tab: 'followers' });
  }, []);

  const onTabChange = (key) => {
    setQuery({ tab: key });
  };

  // eslint-disable-next-line react/prop-types
  const FollowColumn = ({ items }) => (
    <div className="flex flex-col px-4 child-borderBottom">
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((i) => (
        <div key={i} className="flex justify-between items-center space-x-2 py-4">
          <div className="flex items-center space-x-2 w-full">
            <Avatar avatarClassName="w-11 h-11" />
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          </div>
          <Button wrapperClassName="c-blue-outline-btn" text="+Follow" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="c-tabs">
      <Tabs activeKey={tab} onChange={onTabChange}>
        <TabPane
          tab={
            <div
              className={`flex flex-col items-center ${tab !== 'followers' ? 'opacity-40' : ''}`}
            >
              <div className="boldPrimaryText text-xl">64</div>
              <div className="boldPrimaryText text-base">followers</div>
            </div>
          }
          key="followers"
        >
          <FollowColumn items={allItems} />
        </TabPane>
        <TabPane
          tab={
            <div
              className={`flex flex-col items-center ${tab !== 'following' ? 'opacity-40' : ''}`}
            >
              <div className="boldPrimaryText text-xl">32</div>
              <div className="boldPrimaryText text-base">following</div>
            </div>
          }
          key="following"
        >
          <FollowColumn items={allItems} />
        </TabPane>
      </Tabs>
    </div>
  );
}

FollowList.propTypes = {
  //
};

export default FollowList;
