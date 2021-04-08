import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function SwipeSlider({ wrapperClassName, children, arrowClassName }) {
  const carouselRef = React.createRef();

  const settings = {
    dots: false,
    className: 'center',
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    variableWidth: true,
  };

  const handlePrevious = () => {
    carouselRef.current.innerSlider.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.innerSlider.slickNext();
  };

  return (
    <div className={wrapperClassName}>
      <div className="relative">
        <div className={arrowClassName || 'hidden lg:block'}>
          <div
            className="absolute top-8 -left-2 pb-0.5 w-7 h-7 rounded-full
                    flex justify-center items-center z-10"
            style={{ backgroundColor: 'rgba(246, 248, 255, 0.7)' }}
          >
            <LeftOutlined onClick={handlePrevious} className="text-lg text-primary" />
          </div>
        </div>
        <Carousel {...settings} ref={carouselRef} draggable>
          {children}
        </Carousel>
        <div className={arrowClassName || 'hidden lg:block'}>
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
  arrowClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SwipeSlider.defaultProps = {
  wrapperClassName: '',
  arrowClassName: '',
};

export default SwipeSlider;
