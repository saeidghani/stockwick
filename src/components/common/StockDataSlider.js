import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

function StockDataSlider({ wrapperClassName }) {
  const carouselRef = React.createRef();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
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

  // eslint-disable-next-line no-shadow,react/prop-types
  const StockData = () => {
    return (
      <div className="border-r border-solid border-fadePrimary">
        <div className="flex justify-center py-3 md:py-5">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm">S&P 500</span>
              <span className="text-white text-xs md:text-sm">3136.32</span>
            </div>
            <div className="flex items-center">
              <CaretUpOutlined className="text-secondary text-base md:text-xl mr-2" />
              <span className="text-secondary mr-6 text-sm md:text-lg">0.39%</span>
              <span className="text-secondary text-xs md:text-base">12.2</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-primary ${wrapperClassName}`} style={{ height: 110 }}>
      <div className="w-full border-b border-solid border-fadePrimary">
        <Carousel {...settings} ref={carouselRef} draggable>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
            <div key={i}>
              <StockData />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

StockDataSlider.propTypes = {
  wrapperClassName: PropTypes.string,
};

StockDataSlider.defaultProps = {
  wrapperClassName: '',
};

export default StockDataSlider;
