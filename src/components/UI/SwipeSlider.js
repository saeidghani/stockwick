import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

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

  const settings = sliderSettings || defaultSettings;

  return (
    <div className={wrapperClassName}>
      <Carousel {...settings} ref={carouselRef} draggable>
        {children}
      </Carousel>
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
