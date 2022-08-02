import React from 'react';

const LineDate = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="mr-2 text-sm text-stone-800 font-semibold">{children}</div>
    <div className="w-2 border-t-2 border-stone-400" />
  </>
);

export default LineDate;
