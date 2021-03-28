import React from 'react';
import PropTypes from 'prop-types';
import apple from '../../assets/icons/apple.svg';
import LogoIcon from './LogoIcon';

function StocksList({ title, children, wrapperClassName }) {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={wrapperClassName}>
      <div className="card px-2 py-4">
        <div className="boldPrimaryText text-xl mb-3">{title}</div>
        {children && <div className="w-full">{children}</div>}
        <div className="flex flex-col child-borderBottom">
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
};

StocksList.defaultProps = {
  children: null,
  title: '',
  wrapperClassName: '',
};

export default StocksList;
