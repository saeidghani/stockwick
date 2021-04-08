import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import apple from '../../assets/icons/apple.svg';
import LogoIcon from './LogoIcon';

function SimilarSocks({ wrapperClassName, displayTitle }) {
  const carouselRef = React.createRef();

  const settings = {
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

  // eslint-disable-next-line react/prop-types
  const StockItem = ({ isCdf, isCmp, isRed }) => (
    <div className="flex flex-col items-center">
      {!isCdf ? (
        <LogoIcon
          icon={apple}
          wrapperClassName="bg-primary rounded-full relative mb-3"
          iconClassName="w-14 h-14 absolute top-4 left-4 pl-0.5"
          width={90}
        />
      ) : (
        <div
          className="flex justify-center items-center bg-primary rounded-full mb-3"
          style={{ width: 90, height: 90 }}
        >
          <div className="text-secondary text-32px pt-1">CDF</div>
        </div>
      )}
      <div className="text-primary text-base">{isCmp ? 'Cmp. Def.' : 'Apple Inc.'}</div>
      <div className={isRed ? 'text-accent text-base' : 'text-secondary text-base'}>300,000$</div>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <div className="card px-2 py-4">
        {displayTitle && <div className="boldPrimaryText text-xl mb-4 pl-2">Similar Stocks</div>}
        <Carousel {...settings} ref={carouselRef} draggable>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <StockItem key={i} isCdf={i === 3} isCmp={i === 3} isRed={i === 2 || i === 3} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

SimilarSocks.propTypes = {
  displayTitle: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

SimilarSocks.defaultProps = {
  displayTitle: false,
  wrapperClassName: '',
};

export default SimilarSocks;
