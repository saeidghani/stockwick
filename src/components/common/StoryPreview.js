import React from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined, EyeFilled } from '@ant-design/icons';

function StoryPreview({ wrapperClassName, onAddStory, onViewStory, src }) {
  return (
    <div className={wrapperClassName}>
      {!src ? (
        <div
          className="bg-primary flex flex-col justify-center items-center cursor-pointer rounded-sm"
          style={{ width: 140, height: 199 }}
          onClick={onAddStory}
        >
          <PlusOutlined className="text-white text-3xl mb-2" />
          <div className="text-white text-xl">Add New</div>
        </div>
      ) : (
        <div>
          <div className="cursor-pointer relative" onClick={onViewStory}>
            <img src={src} alt="" width={140} height={200} />
            <div className="flex space-x-1 items-center absolute bottom-6 right-4">
              <EyeFilled className="text-white text-sm" />
              <div className="text-white text-sm">54</div>
            </div>
          </div>
          <div className="mt-2 text-darkGray">posted 23 min ago</div>
        </div>
      )}
    </div>
  );
}

StoryPreview.propTypes = {
  wrapperClassName: PropTypes.string,
  onAddStory: PropTypes.func,
  onViewStory: PropTypes.func,
  src: PropTypes.string,
};

StoryPreview.defaultProps = {
  wrapperClassName: '',
  onAddStory: () => {},
  onViewStory: () => {},
  src: '',
};

export default StoryPreview;
