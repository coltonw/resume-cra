import React from 'react';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h1 className="text-2xl mt-8 mb-4 font-bold uppercase font-serif">
    {children}
  </h1>
);

export default SectionHeading;
