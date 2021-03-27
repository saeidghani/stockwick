import React from 'react';
import PropTypes from 'prop-types';
import apple from '../../assets/icons/apple.svg';
import LogoIcon from './LogoIcon';

function StocksList({ children }) {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="card px-2 py-4">
      <div className="boldPrimaryText text-xl mb-3">Stocks</div>
      {children && <div className="">{children}</div>}
      <div className="flex flex-col child-borderBottom">
        {items.map((i) => (
          <div key={i} className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <LogoIcon
                icon={apple}
                wrapperClassName="w-12 h-12"
                iconClassName="w-3/4 pl-3 pt-2.5"
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
  );
}

StocksList.propTypes = {
  children: PropTypes.node,
};

StocksList.defaultProps = {
  children: null,
};

export default StocksList;
