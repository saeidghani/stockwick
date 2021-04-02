import React from 'react';
import PropTypes from 'prop-types';
import { AddStoryIcon } from './Icons';
import Avatar from '../UI/Avatar';

function Stories({ wrapperClassName, onAddStory, onStoryView }) {
  return (
    <div className={wrapperClassName}>
      <div className="py-1 px-3">
        <div className="boldPrimaryText text-xl mb-2">live stories</div>
        <div className="flex space-x-4 overflow-auto">
          <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={onAddStory}>
            <div className="bg-primary bg-opacity-60 border-4 border-solid border-primary rounded-full">
              <AddStoryIcon />
            </div>
            <div className="text-primary font-medium">My story</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={onStoryView}
            >
              <Avatar wrapperClassName="storyRing" avatarClassName="w-20 h-20" />
              <div className="text-primary font-medium">Roy Mason</div>
            </div>
          ))}
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
