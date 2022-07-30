import React from 'react';

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-stone-600 font-semibold hover:underline hover:text-stone-800"
  >
    {children}
  </a>
);

export default Link;
