/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { AddStoryIcon } from './Icons';
import Avatar from '../UI/Avatar';
import SwipeSlider from '../UI/SwipeSlider';

function Stories({ wrapperClassName, onAddStory, onStoryView, gridCols, isSmSlider }) {
  const mdSliderSettings = {
    dots: false,
    className: 'center',
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const smSliderSettings = {
    dots: false,
    className: 'center',
    infinite: true,
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const settings = isSmSlider ? smSliderSettings : mdSliderSettings;

  return (
    <div className={wrapperClassName}>
      <div className="py-1 px-2">
        <div className="boldPrimaryText text-xl mb-2">live stories</div>
        <div className={`grid grid-cols-${gridCols} gap-x-4`}>
          <div
            className="inline-flex flex-col items-center space-y-2 cursor-pointer"
            onClick={onAddStory}
          >
            <div className="flex">
              <AddStoryIcon />
            </div>
            <div className="text-primary font-medium">My story</div>
          </div>
          <SwipeSlider
            wrapperClassName={`col-start-2 col-span-${gridCols - 1}`}
            sliderSettings={settings}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 cursor-pointer"
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
  );
}

Stories.propTypes = {
  wrapperClassName: PropTypes.string,
  gridCols: PropTypes.number,
  onAddStory: PropTypes.func,
  onStoryView: PropTypes.func,
  isSmSlider: PropTypes.bool,
};

Stories.defaultProps = {
  wrapperClassName: '',
  gridCols: 5,
  onAddStory: () => {},
  onStoryView: () => {},
  isSmSlider: false,
};

export default Stories;
