import React from 'react';

const IconLine: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-wrap flex-row items-center justify-start">
    {children}
  </div>
);

export default IconLine;
