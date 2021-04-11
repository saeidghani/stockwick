/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { AddStoryIcon } from './Icons';
import Avatar from '../UI/Avatar';
import SwipeSlider from '../UI/SwipeSlider';

function Stories({ wrapperClassName, onAddStory, onStoryView }) {
  return (
    <div className={wrapperClassName}>
      <div className="py-1 pr-2">
        <div className="boldPrimaryText text-xl mb-2 pl-2">Live Stories</div>
        <div className="flex space-x-2">
          <div
            className="inline-flex flex-col items-center space-y-2 cursor-pointer pl-4"
            onClick={onAddStory}
          >
            <div className="flex">
              <AddStoryIcon />
            </div>
            <div className="text-primary font-medium">My story</div>
          </div>
          <div className={`relative h-28 overflow-hidden grid grid-cols-1 gap-x-4`}>
            <div className="">
              <SwipeSlider>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-2 cursor-pointer mx-2"
                    onClick={onStoryView}
                  >
                    <div className="flex">
                      <Avatar wrapperClassName="storyRing" avatarClassName="w-19 h-19" />
                    </div>
                    <div className="text-primary font-medium">Roy Mason</div>
                  </div>
                ))}
              </SwipeSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Stories.propTypes = {
  wrapperClassName: PropTypes.string,
  onAddStory: PropTypes.func,
  onStoryView: PropTypes.func,
};

Stories.defaultProps = {
  wrapperClassName: '',
  onAddStory: () => {},
  onStoryView: () => {},
};

export default Stories;
