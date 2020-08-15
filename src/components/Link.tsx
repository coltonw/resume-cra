import React from 'react';

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-gray-600 font-semibold hover:underline hover:text-gray-800"
  >
    {children}
  </a>
);

export default Link;
