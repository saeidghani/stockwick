import React from 'react';

// eslint-disable-next-line no-unused-vars,react/prop-types
function Tag({ children, text }) {
  return (
    <div className="flex h-8">
      {children}
      <div className="flex items-center px-4 bg-white text-primary text-xs">
        <span className="">{text}</span>
      </div>
    </div>
  );
}

export default Tag;
