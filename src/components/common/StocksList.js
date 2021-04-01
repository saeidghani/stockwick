import React from 'react';
import PropTypes from 'prop-types';
import apple from '../../assets/icons/apple.svg';
import expandIcon from '../../assets/icons/expand.svg';
import LogoIcon from './LogoIcon';

function StocksList({ title, expand, children, wrapperClassName, height, onExpandClick, onClose }) {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={wrapperClassName}>
      <div className="card px-2 py-4">
        <div className="flex justify-between items-center mb-3">
          <div className="boldPrimaryText text-xl">{title}</div>
          {expand ? (
            <div onClick={onExpandClick}>
              <img src={expandIcon} className="w-5 cursor-pointer" alt="" />
            </div>
          ) : (
            <div onClick={onClose}>
              <img src={expandIcon} className="w-5 cursor-pointer transform -rotate-180" alt="" />
            </div>
          )}
        </div>
        {children && <div className="w-full mb-4">{children}</div>}
        <div className="flex flex-col child-borderBottom overflow-auto" style={{ height }}>
          {items.map((i) => (
            <div key={i} className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <LogoIcon
                  icon={apple}
                  wrapperClassName="bg-primary rounded-full relative"
                  iconClassName="w-6 h-6 absolute top-1 left-1.5"
                  width={35}
                />
                <div className="flex flex-col space-y-1">
                  <div className="text-primary text-lg font-medium">APPL</div>
                  <div className="text-primary text-sm font-medium">Apple, Inc.</div>
                </div>
              </div>
              <div className="text-darkGreen text-sm font-bold">770.31</div>
              <div className="flex flex-col space-y-2">
                <div className="text-accent text-sm font-medium">-1.12%</div>
                <div className="text-accent text-sm font-medium">-30.2%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

StocksList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  wrapperClassName: PropTypes.string,
  height: PropTypes.number,
  onExpandClick: PropTypes.func,
  onClose: PropTypes.func,
  expand: PropTypes.bool,
};

StocksList.defaultProps = {
  children: null,
  title: '',
  wrapperClassName: '',
  height: 450,
  onExpandClick: () => {},
  onClose: () => {},
  expand: true,
};

export default StocksList;
