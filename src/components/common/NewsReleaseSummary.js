import React from 'react';
// import PropTypes from 'prop-types';

function NewsReleaseSummary() {
  return (
    <div className="card p-4 overflow-auto">
      <div className="boldPrimaryText text-xl mb-5">news release</div>
      <div className="flex flex-col space-y-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="flex space-x-2">
            <div className="bg-primary w-2 h-2 rounded-full mt-2" />
            <div className="flex flex-col">
              <div className="text-primary text-base font-medium mb-1">
                A crisis playbook for founders
              </div>
              <div className="text-xs text-darkGray">Posted on 23 min ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

NewsReleaseSummary.propTypes = {
  //
};

export default NewsReleaseSummary;
