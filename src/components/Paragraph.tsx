import React from 'react';

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 text-stone-800">{children}</div>
);

export default Paragraph;
