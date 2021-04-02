import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

function FilterSlider({ wrapperClassName, filterList }) {
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
    <div className={`w-full bg-primary py-2 rounded-3xl ${wrapperClassName}`}>
      <div className="w-full flex items-center px-3 relative">
        <RightOutlined onClick={onNext} className="text-base text-white absolute right-2" />
        <div className="w-full px-4">
          <Carousel {...settings} ref={carouselRef} draggable>
            {filterList.map(({ key, title }) => (
              <div
                key={key}
                className={
                  key === activeSlide + 1
                    ? 'text-center text-white whitespace-no-wrap'
                    : 'text-center text-white whitespace-no-wrap opacity-50'
                }
              >
                {title}
              </div>
            ))}
          </Carousel>
        </div>
        <LeftOutlined onClick={onPrevious} className="text-base text-white absolute left-2" />
      </div>
    </div>
  );
}

FilterSlider.propTypes = {
  wrapperClassName: PropTypes.string,
  filterList: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.number, title: PropTypes.string }),
  ),
};

FilterSlider.defaultProps = {
  wrapperClassName: '',
  filterList: [],
};

export default FilterSlider;
