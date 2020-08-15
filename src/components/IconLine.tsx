import React from 'react';

const IconLine: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex flex-wrap flex-row items-center justify-center mb-12">
    <div className="flex-1 border-t-2 border-gray-200 hidden sm:block" />
    {children}
    <div className="flex-1 border-t-2 border-gray-200 hidden sm:block" />
  </div>
);

export default IconLine;
