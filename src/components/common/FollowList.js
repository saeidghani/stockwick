/*eslint-disable*/
import React from 'react';
import { Tabs } from 'antd';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { useQuery } from '../../hooks/useQuery';
import FollowColumn from './FollowColumn';

const { TabPane } = Tabs;

function FollowList({ followed, onSetFollowed }) {
  const allItems = [1, 2, 3, 4, 5, 6, 7];

  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { followTab } = parsedQuery;

  const onTabChange = (key) => {
    setQuery({ followTab: key });
  };

  return (
    <div className="c-tabs w-full">
      <Tabs activeKey={followTab} onChange={onTabChange}>
        <TabPane
          tab={
            <div
              className="flex flex-col items-center"
              style={{ opacity: followTab === 'followers' ? '' : '0.4' }}
            >
              <div className="boldPrimaryText text-xl">64</div>
              <div className="boldPrimaryText text-base">followers</div>
            </div>
          }
          key="followers"
        >
          <FollowColumn items={allItems} followed={followed} onSetFollowed={onSetFollowed} />
        </TabPane>
        <TabPane
          tab={
            <div
              className="flex flex-col items-center"
              style={{ opacity: followTab === 'following' ? '' : '0.4' }}
            >
              <div className="boldPrimaryText text-xl">32</div>
              <div className="boldPrimaryText text-base">following</div>
            </div>
          }
          key="following"
        >
          <FollowColumn items={allItems} followed={followed} onSetFollowed={onSetFollowed} />
        </TabPane>
      </Tabs>
    </div>
  );
}

FollowList.propTypes = {
  followed: PropTypes.arrayOf(PropTypes.shape({})),
  onSetFollowed: PropTypes.func,
};

FollowList.defaultProps = {
  followed: [],
  onSetFollowed: () => {},
};

export default FollowList;
