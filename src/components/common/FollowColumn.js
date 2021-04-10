import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../UI/Avatar';
import Button from '../UI/Button';

function FollowColumn({ items, followed, onSetFollowed, childBorder, btnClassName, height }) {
  return (
    <div
      className={`flex flex-col px-4 mx-2 overflow-auto ${childBorder ? 'child-borderBottom' : ''}`}
      style={{ height }}
    >
      {items.map((i) => (
        <div key={i} className="flex justify-between items-center space-x-2 py-4">
          <div className="flex items-center space-x-2 w-full">
            <Avatar avatarClassName="w-11 h-11" />
            <div className="text-primary text-base font-medium mb-1">Jason Smith</div>
          </div>
          <Button
            wrapperClassName={btnClassName || 'c-blue-outline-btn w-24'}
            text={followed.includes(i) ? 'Following' : '+Follow'}
            /* eslint-disable-next-line no-shadow */
            onClick={() => onSetFollowed(i)}
            block
          />
        </div>
      ))}
    </div>
  );
}

FollowColumn.propTypes = {
  childBorder: PropTypes.bool,
  btnClassName: PropTypes.string,
  height: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.number),
  followed: PropTypes.arrayOf(PropTypes.number),
  onSetFollowed: PropTypes.func,
};

FollowColumn.defaultProps = {
  childBorder: true,
  btnClassName: '',
  height: 400,
  items: [],
  followed: [],
  onSetFollowed: () => {},
};

export default FollowColumn;
