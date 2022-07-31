import React from 'react';

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a href={href} className="text-stone-600 font-bold hover:underline">
    {children}
  </a>
);

export default Link;
