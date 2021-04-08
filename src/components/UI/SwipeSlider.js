import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function SwipeSlider({ wrapperClassName, children, sliderSettings }) {
  const carouselRef = React.createRef();

  const defaultSettings = {
    dots: false,
    className: 'center',
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current.innerSlider.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.innerSlider.slickNext();
  };

  const settings = sliderSettings || defaultSettings;

  return (
    <div className={wrapperClassName}>
      <div className="relative">
        <div className="hidden lg:block">
          <div
            className="absolute top-8 -left-4 pb-0.5 w-7 h-7 rounded-full
                    flex justify-center items-center z-10"
            style={{ backgroundColor: 'rgba(246, 248, 255, 0.7)' }}
          >
            <LeftOutlined onClick={handlePrevious} className="text-lg text-primary" />
          </div>
        </div>
        <Carousel {...settings} ref={carouselRef} draggable>
          {children}
        </Carousel>
        <div className="hidden lg:block">
          <div
            className="absolute top-8 right-0 pb-0.5 w-7 h-7 rounded-full
                    flex justify-center items-center z-10"
            style={{ backgroundColor: 'rgba(246, 248, 255, 0.7)' }}
          >
            <RightOutlined onClick={handleNext} className="text-lg text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

SwipeSlider.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  sliderSettings: PropTypes.shape({}),
};

SwipeSlider.defaultProps = {
  wrapperClassName: '',
  sliderSettings: null,
};

export default SwipeSlider;
