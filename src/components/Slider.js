import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

function Slider({ wrapperClassName }) {
  const carouselRef = React.createRef();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const onPrevious = () => {
    console.log(carouselRef.current.innerSlider.state.currentSlide);
    carouselRef.current.innerSlider.slickPrev();
  };

  const onNext = () => {
    console.log(carouselRef.current.innerSlider.state.currentSlide);
    carouselRef.current.innerSlider.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: 'linear',
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    <div className={`w-full bg-primary px-4 py-3 rounded-3xl ${wrapperClassName}`}>
      <div className="flex justify-between items-center space-x-4">
        <LeftOutlined onClick={onPrevious} style={{ fontSize: '15px', color: '#fff' }} />
        <div className="w-52">
          <Carousel {...settings} ref={carouselRef} draggable>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={i === activeSlide + 1 ? 'text-white' : 'text-white opacity-50'}
              >
                1 minute
              </div>
            ))}
          </Carousel>
        </div>
        <RightOutlined onClick={onNext} style={{ fontSize: '15px', color: '#fff' }} />
      </div>
    </div>
  );
}

Slider.propTypes = {
  wrapperClassName: PropTypes.string,
};

Slider.defaultProps = {
  wrapperClassName: '',
};

export default Slider;
