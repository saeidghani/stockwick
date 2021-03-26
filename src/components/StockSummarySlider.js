import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

function StuckSummarySlider({ wrapperClassName }) {
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
  };

  // eslint-disable-next-line no-shadow,react/prop-types
  const StockSummary = () => {
    return (
      <div className="border-t border-b border-r border-solid border-fadePrimary">
        <div className="flex justify-center py-5">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4">
              <span className="text-white">S&P 500</span>
              <span className="text-white">3136.32</span>
            </div>
            <div className="flex items-center">
              <CaretUpOutlined className="text-secondary text-xl mr-2" />
              <span className="text-secondary mr-6">0.39%</span>
              <span className="text-secondary">12.2</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full bg-primary px-4 py-3 rounded-3xl ${wrapperClassName}`}>
      <Carousel {...settings} ref={carouselRef} draggable>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <div key={i}>
            <StockSummary />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

StuckSummarySlider.propTypes = {
  wrapperClassName: PropTypes.string,
};

StuckSummarySlider.defaultProps = {
  wrapperClassName: '',
};

export default StuckSummarySlider;
