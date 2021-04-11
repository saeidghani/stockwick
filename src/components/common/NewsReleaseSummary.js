import React from 'react';
import PropTypes from 'prop-types';

function NewsReleaseSummary({ wrapperClassName, height }) {
  return (
    <div className={wrapperClassName}>
      <div className="card py-4 px-2">
        <div className="boldPrimaryText text-xl mb-5">News Release</div>
        <div className="flex flex-col space-y-5 px-2 overflow-auto" style={{ height }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex space-x-2">
              <div className="bg-primary w-2 h-2 rounded-full mt-2" />
              <div className="flex flex-col">
                <div className="boldPrimaryText text-base mb-1">A crisis playbook for founders</div>
                <div className="text-xs text-darkGray">Posted on 23 min ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

NewsReleaseSummary.propTypes = {
  wrapperClassName: PropTypes.string,
  height: PropTypes.number,
};

NewsReleaseSummary.defaultProps = {
  wrapperClassName: '',
  height: 450,
};

export default NewsReleaseSummary;
